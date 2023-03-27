import React, { PureComponent } from 'react';
import { IssueReport as IssueReportGadget } from '../../../gadgets';

class IssueReport extends PureComponent {
    render() {
        return (
            <div>
                <IssueReportGadget className="widget-cntr" isGadget={false} />
            </div>
        );
    }
}

export default IssueReport;