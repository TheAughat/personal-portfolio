import React from 'react';
import './floating-circle.css';


function FloatingCircle({top, bottom, left, right, diameter, planetName = 'mercury', index}) {
    return (
        <div>
            <img 
                src={require(`../utils/images/planets/${planetName}.png`)} 
                alt={`${planetName}`}
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
                    backdropFilter: 'blur(50px)'
                }}
            />
        </div>
    );
}

export default FloatingCircle;
