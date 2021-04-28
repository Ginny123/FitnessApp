import React from 'react';
import { Title1 } from '../themes/fonts';

const Getname = (p) => {
    return (
        <div>
            <Title1>{p.name}</Title1>
        </div>
    );
};

export {Getname};