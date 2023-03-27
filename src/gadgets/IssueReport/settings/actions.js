export function setValue(setState) {
    return function (field, value) {
        setState({ [field]: value });
    };
}

export function dateSelected(setState) {
    return function (dateRange) {
        setState({ dateRange });
    };
}
