export const displayFormatDate = () => {
    const dateValue = new Date();

    const dateFormat = {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
    } as const;

    const displayDate = new Intl.DateTimeFormat('en-GB', dateFormat).format(dateValue);

    return displayDate;
};
