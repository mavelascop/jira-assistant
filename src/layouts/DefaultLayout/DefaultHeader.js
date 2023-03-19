import React, { PureComponent, useCallback } from 'react';
import { NavLink } from 'react-router-dom';
import { UncontrolledDropdown, DropdownMenu, DropdownToggle, Nav, NavItem } from 'reactstrap';

import { AppVersionNo } from '../../constants/common';
//import { WebSiteUrl } from '../../constants/urls';

import { inject } from '../../services/injector-service';
import YoutubeVideo from '../../dialogs/YoutubeVideo';
import SkinPicker from './SkinPicker';
import SwitchAccountOption from './SwitchAccountMenu';
import { getHostFromUrl } from '../../common/utils';
import Notifications from './Notifications';
import JiraUpdates from './JiraUpdates';
import Dialog from '../../dialogs';
import UpdatesInfo from './UpdatesInfo';
import LaunchWeb from './LaunchWeb';
import BackupImporter from './BackupImporter';
import TimerControl from './header/TimerControl';
import { isAppBuild, isPluginBuild, isWebBuild } from '../../constants/build-info';
import config from '../../customize';
import ShareWithOthers from './header/ShareWithOthers';
import Link from '../../controls/Link';
import moment from 'moment';
import { Button } from '../../controls';
import { SettingsCategory } from '../../constants/settings';
import './DefaultHeader.scss';

const allowWebVersion = false; //config.features.common.allowWebVersion !== false;

const showShareOption = false; //config.features.header.shareWithOthers !== false;
const showYoutubeOption = false; //config.features.header.youtubeHelp !== false;
const showDonateButton = false; //!!config.modules.contribute;
const showContactUs = false; //config.modules.contactUs !== false;
const siteUrl = false; //showShareOption ? WebSiteUrl : undefined;

class DefaultHeader extends PureComponent {
  constructor(props) {
    super(props);
    inject(this, "AppBrowserService", "SessionService", "NotificationService", "AnalyticsService", "SettingsService");
    const cUser = this.$session.CurrentUser;
    this.disableNotification = true; //!config.features?.header?.devUpdates || cUser.disableDevNotification;
    this.disableJiraUpdates = config.features?.header?.jiraUpdates === false || cUser.disableJiraUpdates;
    this.userId = cUser.userId;
    this.currentJiraInstance = getHostFromUrl(cUser.jiraUrl);
    this.state = {};
    this.versionNumber = isWebBuild ? 'WEB' : `v ${AppVersionNo}`;
  }

  componentDidMount() {
    if (!this.disableNotification) {
      this.$noti.getNotifications().then(notifications => this.setState({ notifications }),
        (err) => { console.error("Error fetching notifications: ", err); });
    }

    if (this.$session.CurrentUser.hideDonateMenu) { // When this settings is changed, below class will be removed from body in settings page
      document.body.classList.add('no-donation');
    }

    this.validateTimezone();
  }

  async validateTimezone() {
    const ignoreTimezone = await this.$settings.getSetting(this.userId, SettingsCategory.General, 'ignoreTimezone');
    if (ignoreTimezone) {
      return;
    }

    const systemTimezone = moment.tz.guess(true);
    const jiraTimeZone = this.$session.CurrentUser.jiraUser.timeZone;

    const now = moment.utc();
    const systemOffset = moment.tz.zone(systemTimezone).offset(now);
    const jiraOffset = moment.tz.zone(jiraTimeZone).offset(now);

    const getOffsetForDisplay = (value) => {
      const isNegative = value > 0; // Should show negative if value is possitive
      value = Math.abs(value);
      if (!value) { return 'GMT'; }
      value = parseFloat((value / 60).toFixed(2));
      return `GMT ${isNegative ? '-' : '+'} ${value} hours`;
    };

    if (systemOffset !== jiraOffset) {
      const footer = (confirm, cancel) => <>
        <Button type="danger" icon="fa fa-times" label="Ok, Do not check again" onClick={confirm} waitFor={5} />
        <Button type="success" icon="fa fa-check" label="Ok, I will update Jira profile" onClick={cancel} />
      </>;

      Dialog.custom(
        <span>Your system timezone mismatches with Jira profile timezone.
          This would cause differences in date or time while worklog is being pulled.
          Ensure you update your Jira profile to match with your local timezone. <br /><br />
          <strong>
            Jira Profile Timezone: {jiraTimeZone} ({getOffsetForDisplay(jiraOffset)})<br />
            Your System Timezone: {systemTimezone} ({getOffsetForDisplay(systemOffset)})
          </strong><br /><br />
          Any worklogs you already added directly from within Jira would continue to remain
          same and new worklogs would start using new timezone.<br /><br />
        </span>
        , 'Timezone mismatch', footer, { maxWidth: '80vw', width: '700px' }, 'dlgTimezoneDiff')
        .then(() => this.$settings.saveSetting(this.userId, SettingsCategory.General, 'ignoreTimezone', true));
    }
  }

  showYoutubeHelp = () => this.setState({ showYoutubeVideo: true });
  hideYoutube = () => this.setState({ showYoutubeVideo: false });

  showVersionInfo = (e) => {
    e.preventDefault();
    const updates = this.state.notifications?.updates_info;
    if (!updates) { return; }

    Dialog.alert(<UpdatesInfo updates={updates} />, "Updates info", { width: '90vw', maxWidth: '1000px' }).then();
  };

  render() {
    const {
      state: { showYoutubeVideo, notifications }
      //REVISIT: props: { children, ...attributes }
    } = this;

    const { version, isBeta } = notifications?.updatesAvailable || {};

    return (
      <>
        <AppSidebarToggler className="d-lg-none quick-view-hide" display="md" mobile><span className="fa fa-bars" /></AppSidebarToggler>
        <Link href={siteUrl} className="navbar-brand">
          {/*<img src={process.env.PUBLIC_URL + '/assets/icon_24.png'} width="24" height="24" alt="Jira Assistant" className="navbar-brand-minimized" />*/}
          <span className="navbar-brand-full">Jira Assistant <span className="v-info badge badge-success" onClick={this.showVersionInfo}>{this.versionNumber}</span></span>
        </Link>
        <AppSidebarToggler className="d-md-down-none quick-view-hide" display="lg"><span className="fa fa-bars" /></AppSidebarToggler>
        <button className="navbar-toggler quick-view-show"><Link href={isWebBuild ? "/" : "/index.html"} title="Open in new tab"><span className="fa fa-external-link" /></Link></button>
        {showDonateButton && <NavLink to={`/${this.userId}/contribute`} className="btn-donate"
          title="Would you like to contribute / compensate us for the effort we put in development of this tool? Click to know more">
          <img src="/assets/donate.png" width="145" className="margin-r-5" alt="Donate us" />
        </NavLink>}
        <TimerControl />
        <Nav className="ml-auto" navbar>
          {!isPluginBuild && <BackupImporter>
            {(importSettings) => <SwitchAccountOption instance={this.currentJiraInstance} onLogout={this.props.onLogout} onImport={importSettings} />}
          </BackupImporter>}
          {allowWebVersion && !isAppBuild && <LaunchWeb />}
          {!!version && <span className={`update-available badge badge-${isBeta ? "warning" : "success"}`}
            title={`Jira Assist ${isBeta ? 'BETA ' : ''}v${version} is now available. Click to know more.`}
            onClick={this.showVersionInfo}><i className="fa fa-download" /> Updates available</span>}
          {!this.disableJiraUpdates && <JiraUpdates />}
          {!this.disableNotification && notifications && <Notifications notifications={notifications} />}
          {showYoutubeOption && <NavItem className="d-md-down-none">
            <span className="nav-link" onClick={this.showYoutubeHelp}><i className="fa fa-youtube-play"></i></span>
          </NavItem>}
          <UncontrolledDropdown nav direction="down">
            <DropdownToggle nav>
              <i className="fa fa-adjust"></i>
            </DropdownToggle>
            <DropdownMenu end>
              <SkinPicker />
            </DropdownMenu>
          </UncontrolledDropdown>
          {showShareOption && <ShareWithOthers />}
          {showContactUs && <NavItem className="d-md-down-none">
            <NavLink to={`/${this.userId}/contactus`} className="nav-link"><i className="fa fa-phone" title="Contact us"></i></NavLink>
          </NavItem>}
        </Nav>
        {showYoutubeOption && showYoutubeVideo && <YoutubeVideo onHide={this.hideYoutube} />}
      </>
    );
  }
}

export default DefaultHeader;

function AppSidebarToggler({ className, display }) {
  const onClick = useCallback(() => {
    document.body.classList.toggle(`sidebar-${display}-show`);
  }, [display]);

  return (<span className={className} style={{ marginLeft: 17, marginRight: 17, paddingTop: 2, cursor: 'pointer' }} onClick={onClick}><span className="fa fa-bars" /></span>);
}