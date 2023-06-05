import React from 'react';
import './floating-circle.css';


function FloatingCircle({top = undefined, bottom = undefined, left = undefined, right = undefined, diameter, index}) {
    return (
        <div
            className='floating-circle'
            style={{
                position: 'absolute',
                top: top,
                bottom: bottom,
                left: left,
                right: right,
                height: diameter,
                width: diameter,
                animationDelay: `calc(-1s * ${index})`,
                borderRadius: '50%',
                boxShadow: '0 25px 45px rgba(0,0,0,0.1)',
            }}
        />
    );
}

export default FloatingCircle;
