import React from 'react';
import DesktopLayout from './DesktopLayout';
import './space-bg.css';
import { message } from '../misc/forTheFuture';

function LandingBackground() {
    return (
        <>
            <DesktopLayout/>
            <div className='space-bg' style={{zIndex: -1}}/>
            {message()}
        </>
    );
}

export default LandingBackground;
