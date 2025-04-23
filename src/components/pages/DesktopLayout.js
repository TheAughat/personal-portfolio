import React from 'react';
import Glass from './Glass';
import './background.css';
import FloatingCircle from '../FloatingCircle';


function DesktopLayout() {
    document.body.classList.add('main-bg-coloring');

    const circleParams = [
        {top: '35%', left: '5%', diameter: '220px', planetName: 'neptune'},
        {bottom: '25%', right: '6%', diameter: '80px', planetName: 'luna'},
        {bottom: '6%', right: '45%', diameter: '250px', planetName: 'mars'},
        {top: '3%', left: '33%', diameter: '160px', planetName: 'mercury'},
        {top: '5%', right: '12%', diameter: '400px', planetName: 'jupiter'}
    ];


    return (
        <>
            <Glass/>
            {circleParams.map((e, i) => {
                return <FloatingCircle key={`floating-circle-${i}`} {...e} index={i}/>;
            })}
        </>
    );
}

export default DesktopLayout;
