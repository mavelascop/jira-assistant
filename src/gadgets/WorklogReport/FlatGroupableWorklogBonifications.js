import React, { useRef, useState } from 'react';
import GroupableGrid from '../../components/GroupableGrid/GroupableGrid';
import { connect } from "./datastore";
import { getColumnSettingsBonifications, flatGridSettingsChanged } from './actions';
import Link from '../../controls/Link';
import { useEffect } from 'react';

const estimateFieldsToBeHidden = ["-originalestimate", "-totalLogged", "-remainingestimate", "-estVariance"];
const formatResume = (text, ticketNo, url) => <span>{ticketNo}  / <Link href={url} className="link">{text}</Link></span>;

function FlatGroupableWorklogBonifications({
    exportSheetName,
    getColumnSettingsBonifications,
    flatGridSettingsChanged,
    flatWorklogsGroupedByTicketNo,
    hideEstimate,
    flatTableSettings,
    flatTableSettings: {
        groupBy, groupFoldable, displayColumns, sortField, isDesc
    } = { displayColumns: hideEstimate ? estimateFieldsToBeHidden : null },
    onSettingsChanged
}) {
    const [columns] = useState(() => getColumnSettingsBonifications(formatResume));
    const ref = useRef();

    useEffect(() => {
        if (flatTableSettings && ref.current) {
            onSettingsChanged();
        }
        ref.current = true;

    }, [flatTableSettings]); // eslint-disable-line react-hooks/exhaustive-deps

    if (!columns || !flatWorklogsGroupedByTicketNo) { return null; }

    return (<GroupableGrid className="flat-data-grid" dataset={flatWorklogsGroupedByTicketNo} exportSheetName={exportSheetName}
        columns={columns} allowSorting={true} onChange={flatGridSettingsChanged}
        displayColumns={displayColumns} groupBy={groupBy} groupFoldable={groupFoldable} sortField={sortField} isDesc={isDesc}
        noRowsMessage="No worklog details available"
    />);
}

export default connect(FlatGroupableWorklogBonifications,
    (state, { boardId }) => {
        const {
            [boardId ? `flatWorklogsGroupedByTicketNo_${boardId}` : 'flatWorklogsGroupedByTicketNo']: flatWorklogsGroupedByTicketNo,
            fields: { hideEstimate }, flatTableSettings } = state;

        return ({ flatWorklogsGroupedByTicketNo, hideEstimate, flatTableSettings });
    },
    { getColumnSettingsBonifications, flatGridSettingsChanged });
