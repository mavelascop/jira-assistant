import React from 'react';
import { inject } from '../../services/injector-service';
import BaseGadget from '../BaseGadget';
import { getInitialSettings, withProvider } from './datastore';
import {
    fetchData, setStateValue, worklogAdded,
    hideWorklog, groupsChanged, getSettingsToStore
} from './actions';
import CustomActions from './settings/CustomActions';
import FlatGroupableWorklogBonifications from './FlatGroupableWorklogBonifications';

class IssueReport extends BaseGadget {
    constructor(props) {
        super(props, 'Issue Report', 'fa-table');
        inject(this, 'ConfigService');
        this.selSprints = props.selSprints;
    }

    UNSAFE_componentWillReceiveProps(changes) {
        const { isLoading } = changes;
        this.setState({ isLoading });
        super.UNSAFE_componentWillReceiveProps(changes);
    }

    showSettings = () => this.setState({ showSettings: true });
    settingsChanged = () => this.setState({ showSettings: false });
    showGroups = () => this.setState({ showGroupsPopup: true });
    hideGroups = (groups) => {
        this.props.groupsChanged(groups);
        this.setState({ showGroupsPopup: false });
        if (this.props.isGadget) {
            this.saveSettings();
        }
    };
    refreshData = () => {
        this.selSprints = this.props.selSprints;
        this.dateRange = this.props.dateRange;
        this.props.fetchData();
    };
    inputChanged = () => {
        if (this.selSprints !== this.props.selSprints || this.dateRange !== this.props.dateRange) {
            this.saveSettings();
            this.refreshData();
        }
    };

    saveSettings = async () => {
        const { isGadget } = this.props;

        const settings = this.props.getSettingsToStore({ incUserGroups: isGadget });

        if (isGadget) {
            this.settings = { ...this.settings, reportSettings: settings };
            super.saveSettings();
        } else {
            await this.$config.saveSettings('reports_IssueReport', settings);
        }
    };

    renderCustomActions() {
        return <>
            <CustomActions onInputChanged={this.inputChanged} showGroupsPopup={this.showGroups} />
        </>;
    }

    render() {
        const { showSettings, showGroupsPopup, isLoading } = this.state;

        console.log(showSettings);
        console.log(showGroupsPopup);

        return super.renderBase(
            <div className="worklog-report-container">
                <FlatGroupableWorklogBonifications isLoading={isLoading} onSettingsChanged={this.saveSettings} />
            </div>
        );
    }
}

export default withProvider(IssueReport,
    ({
        selSprints, dateRange, loadingData: isLoading, reportLoaded, showWorklogPopup, worklogItem, userGroups
    }) => ({ selSprints, dateRange, isLoading, reportLoaded, showWorklogPopup, worklogItem, userGroups }),
    { fetchData, setStateValue, worklogAdded, hideWorklog, getSettingsToStore, groupsChanged },
    null,
    ({ isGadget, settings }) => {
        let storedSettings = null;

        if (isGadget) {
            storedSettings = settings?.reportSettings;
        } else {
            const { $session } = inject('SessionService');
            storedSettings = $session.pageSettings.reports_IssueReport;
        }

        return getInitialSettings(storedSettings || {});
    });
