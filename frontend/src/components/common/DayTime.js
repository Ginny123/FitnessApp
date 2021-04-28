import React from 'react';
import { Title1 } from '../themes/fonts';

const getDaytime = (hour) => {
    if (hour < 11) {
        return 'Morgen,';
    } else if (hour > 17) {
        return 'Abend,';
    } else {
        return 'Tag,';
    }
};

const Daytime = () => {
    const daytime = getDaytime(new Date().getHours());

    return (
        <div>
            <Title1>{daytime}</Title1>
        </div>
    );
};

export {Daytime};