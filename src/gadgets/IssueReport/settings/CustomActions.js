import React, { useEffect, useRef } from 'react';
import { DatePicker } from '../../../controls';
import { connect } from '../datastore';
import { setValue } from './actions';

const CustomActions = connect(function ({
    onInputChanged
}) {
    return <>
        <DateRangeSelector onChange={onInputChanged} />
    </>;
});

export default CustomActions;

const DateRangeSelector = connect(function ({ dateRange, onChange, setValue }) {
    const renderRef = useRef(true);
    const { current: isFirstRender } = renderRef;

    useEffect(() => {
        renderRef.current = false;
        !isFirstRender && onChange?.();
    }, [dateRange]); // eslint-disable-line react-hooks/exhaustive-deps


    return (<DatePicker value={dateRange} range={true}
        onChange={(val) => setValue('dateRange', val)} style={{ marginRight: '35px' }} />);
}, ({ dateRange }) => ({ dateRange }), { setValue });