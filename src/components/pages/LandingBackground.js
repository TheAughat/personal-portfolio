import React from 'react';
import DesktopLayout from './DesktopLayout';
import './space-bg.css';
import MobileLayout from './MobileLayout';

function LandingBackground() {
    return (
        <>
            {/* <DesktopLayout/> */}
            <MobileLayout/>
            <div className='space-bg' style={{zIndex: -1}}/>
        </>
    );
}

export default LandingBackground;
