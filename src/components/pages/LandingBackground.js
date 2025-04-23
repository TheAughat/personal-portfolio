import React from 'react';
import DesktopLayout from './DesktopLayout';
import './space-bg.css';

function LandingBackground() {
    return (
        <>
            <DesktopLayout/>
            <div className='space-bg' style={{zIndex: -1}}/>
        </>
    );
}

export default LandingBackground;
