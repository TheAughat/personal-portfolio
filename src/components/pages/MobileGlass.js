import { Dialog, DialogContent, Box, IconButton, Stack } from '@mui/material';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import React from 'react';
import MenuDrawer from './MenuDrawer';
import About from './About';
import Resume from './Resume';
import Contact from './Contact';
import Projects from './Projects';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PhoneIcon from '@mui/icons-material/Phone';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';


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
    
    
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };


    return (
        <Dialog
            open={true}
            // fullWidth
            // maxWidth='xl'
            hideBackdrop
            PaperProps={{
                sx: {
                    // background: 'rgba(255,255,255,0.5)',
                    background: 'rgba(175, 255, 255, 0.75)',
                    opacity: 0.75,
                    // boxShadow: 'none',
                    borderRadius: '15px',
                    height: '50em',
                    backdropFilter: 'blur(1em)',
                    // backdropFilter: 'blur(5px)',        
                    minHeight: '90%',
                    minWidth: '97%',
                    // maxHeight: '95vh',
                }
            }}
        >
            <Stack direction='row' justifyContent='flex-end' sx={{position: 'absolute', top: 5, right: 5}}>
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
                {/* <MenuDrawer 
                    selected={selected} 
                    setSelected={setSelected}
                    contentComponent={(
                        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                            {renderContentPane()}
                        </Box>
                    )}
                /> */}
                {renderContentPane()}
                <Drawer
                    sx={{
                        // width: 240,
                        height: 72,
                        flexShrink: 0,
                        '& .MuiDrawer-paper': {
                            height: 72,
                            // width: 240,
                            // boxSizing: 'border-box',
                        },
                    }}
                    variant="persistent"
                    anchor="bottom"
                    open={true}
                >
                    <Box>
                    <Tabs 
                        TabIndicatorProps={{
                            style: {display: 'none'}
                        }} 
                        value={value} 
                        onChange={handleChange}
                        sx={{
                            // background: 'red'
                        }}
                    >
                        <Tab icon={<PhoneIcon />} label="About" sx={{
                            width: '24.6%',
                            minWidth: '24.6%',
                            margin: 0
                        }} />
                        <Tab icon={<FavoriteIcon />} label="Resume" sx={{
                            width: '24.6%',
                            minWidth: '24.6%',
                            margin: 0
                        }}/>
                        <Tab icon={<PersonPinIcon />} label="Contact" sx={{
                            width: '24.6%',
                            minWidth: '24.6%',
                            margin: 0
                        }}/>
                        <Tab icon={<FavoriteIcon />} label="Projects" sx={{
                            width: '24.6%',
                            minWidth: '24.6%',
                            margin: 0
                        }}/>
                    </Tabs></Box>
                </Drawer>
            </DialogContent>
        </Dialog>
    );
}

export default Glass;
