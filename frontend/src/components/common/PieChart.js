import React from 'react';
import {PieChart} from 'react-minimal-pie-chart';

const Piechart = () => {
    return (
        <PieChart 
            data={[
                {title: 'Krafttraining', value: 15, color: '#7A8778'},
                {title: 'Cardio', value: 15, color: '#939C91'},
                {title: 'Koordination', value: 35, color: '#BBC8B9'},
                {title: 'Beweglichkeit', value: 35, color: '#D2DDD0'}
            ]}
            
            style={{height: '16rem'}}
        />
    );
};
export default Piechart;