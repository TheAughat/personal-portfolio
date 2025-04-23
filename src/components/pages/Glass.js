import { Dialog, DialogContent, Box, IconButton, Stack } from '@mui/material';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import React from 'react';
import MenuDrawer from './MenuDrawer';
import About from './About';
import Resume from './Resume';
import Contact from './Contact';
import Projects from './Projects';


function Glass() {
    const [selected, setSelected] = React.useState('about');
    const [shutdown, setShutdown] = React.useState(false);


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


    const shutdownStyles = shutdown? {
        opacity: 0,
        pointerEvents: 'none',
    } : {};


    return (
        <Dialog
            open={true}
            fullWidth
            maxWidth='xl'
            hideBackdrop
            PaperProps={{
                sx: {
                    // background: 'rgba(255,255,255,0.5)',
                    background: 'rgba(175, 255, 255, 0.75)',
                    opacity: 0.75,
                    // boxShadow: 'none',
                    borderRadius: '10px',
                    height: '50em',
                    backdropFilter: 'blur(1em)',
                    // backdropFilter: 'blur(5px)',
                }
            }}
        >
            <Stack direction='row' justifyContent='flex-end' sx={{position: 'absolute', top: 20, right: 20}}>
                <IconButton
                    sx={{
                        color: 'cornflowerblue',
                        transition: '0.4s ease-in-out',
                        zIndex: 5000,
                        '&:hover': {
                            color: 'red',
                        },
                    }}
                    onClick={() => setShutdown(current => !current)}
                >
                    <PowerSettingsNewIcon/>
                </IconButton>
            </Stack>
            <DialogContent sx={{...shutdownStyles, transition: '0.7s ease-in-out'}}>
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
