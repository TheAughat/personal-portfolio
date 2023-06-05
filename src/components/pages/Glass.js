import { Dialog, DialogContent, Box } from '@mui/material';
import React from 'react';
import MenuDrawer from './MenuDrawer';
import About from './About';
import Resume from './Resume';
import Contact from './Contact';
import Projects from './Projects';


function Glass() {
    const [selected, setSelected] = React.useState('about');

    function renderContentPane() {
        switch (selected) {
            case 'about':
                return <About/>;
            case 'resume':
                return <Resume/>;
            case 'contact':
                return <Contact/>;
            case 'projects':
                return <Projects/>;
            default:
                return <></>;
        }
    }


    return (
        <Dialog
            open={true}
            fullWidth
            maxWidth='xl'
            hideBackdrop
            PaperProps={{
                sx: {
                    background: 'rgba(255,255,255,0.6)',
                    opacity: 0.75,
                    // boxShadow: 'none',
                    borderRadius: '10px',
                    height: '50em',
                    backdropFilter: 'blur(7em)',
                }
            }}
        >
            <DialogContent>
                <MenuDrawer 
                    selected={selected} 
                    setSelected={setSelected}
                    contentComponent={(
                        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                            {renderContentPane()}
                        </Box>
                    )}
                />
            </DialogContent>
        </Dialog>
    );
}

export default Glass;
