import React from 'react';

const EmailIcon = ({ row, accessor, CustomFunction }) => {
    const icon = CustomFunction({ email: row[accessor] });

    return <span>{ icon } { row[accessor] }</span>
};

export default EmailIcon;
