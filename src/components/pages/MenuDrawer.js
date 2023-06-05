import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Box, List, CssBaseline, Typography, IconButton, ListItem, ListItemButton, ListItemIcon,
    ListItemText } from '@mui/material';
import MuiDrawer from '@mui/material/Drawer';
import {linkedinDpUrl} from '../../utils/Misc';
import { ChevronLeft, ChevronRight, Code, Info, AccountCircle, Description } from '@mui/icons-material';
import { defaultTheme } from '../../utils/Theme';


const drawerWidth = 420;
const openCloseDuration = 1000;

const openedMixin = (theme) => ({
    width: drawerWidth,
    borderTopRightRadius: '10px',
    borderBottomRightRadius: '10px',
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: openCloseDuration,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: openCloseDuration,
    }),
    overflowX: 'hidden',
    borderTopRightRadius: '10px',
    borderBottomRightRadius: '10px',
    width: `calc(${theme.spacing(7)} + 30px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 30px)`,
    },
});

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);


function MenuDrawer({selected, setSelected, contentComponent}) {
    const [open, setOpen] = React.useState(true);
    const [listItemTextOpacity, setListItemTextOpacity] = React.useState(1);
    const [listItemIconMarginRight, setListItemIconMarginRight] = React.useState(3);

    React.useEffect(() => {
        if (open) {
            setListItemTextOpacity(1);
            setListItemIconMarginRight(3);
        }
        else {
            setTimeout(() => {
                setListItemTextOpacity(0);
            }, openCloseDuration);
            setTimeout(() => {
                setListItemIconMarginRight('auto');
            }, openCloseDuration - 300);
        }
    }, [open]);

    const btnSx = {
        minHeight: 48,
        justifyContent: open ? 'initial' : 'center',
        px: 2.5,
        '&:hover': {
            background: 'none'
        },
        '&:active': {
            background: defaultTheme.palette.secondary.main,
        },
        // pl: '3em',
        color: defaultTheme.palette.primary.light,
        my: '2em',
        // mr: 0
    };

    const btnSelectedSx = {
        color: defaultTheme.palette.primary.main,
        '&:hover': {
            background: defaultTheme.palette.secondary.main,
        },
        boxShadow: `0 0 5px ${defaultTheme.palette.secondary.main}, 0 0 25px ${defaultTheme.palette.secondary.main}, 0 0 50px ${defaultTheme.palette.secondary.main}, 0 0 50px ${defaultTheme.palette.secondary.main}`
    };

    const labelSx = {fontWeight: 'bold', fontSize: '1.5em', ml: 3, transition: '0.6s'};

    const iconSx = {color: defaultTheme.palette.primary.main, fontSize: '3em'};

    function buildIconProps(buttonFor) {
        return {sx: selected === buttonFor? iconSx : {...iconSx, color: defaultTheme.palette.primary.light, '&:hover': {color: defaultTheme.palette.primary.main, textShadow: '0 0 10px rgb(0, 102, 255), 0 0 20px rgb(0, 102, 255)'}}};
    }


    function showLabelHover(buttonFor) {
        if (buttonFor === selected) return {};
        return {'&:hover': {color: defaultTheme.palette.primary.main, textShadow: '0 0 10px rgb(0, 102, 255), 0 0 20px rgb(0, 102, 255)'}};
    }


    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };


    const buttons = [
        {
            label: 'About',
            value: 'about',
            icon: <Info {...buildIconProps('about')}/>
        },
        {
            label: 'Resume',
            value: 'resume',
            icon: <Description {...buildIconProps('resume')}/>
        },
        {
            label: 'Contact',
            value: 'contact',
            icon: <AccountCircle {...buildIconProps('contact')}/>
        },
        {
            label: 'Projects',
            value: 'projects',
            icon: <Code {...buildIconProps('projects')}/>
        },
    ];


    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <Drawer
                anchor='left'
                variant="permanent"
                open={open}
                transitionDuration={2000}
                PaperProps={{
                    style: {
                        position: "absolute",
                        background: 'rgba(255,255,255,0.6)',
                        opacity: 0.95,
                    }
                }}
            >
                <Box display='flex' justifyContent='flex-end' p={1}>
                    <IconButton onClick={open? handleDrawerClose : handleDrawerOpen}>
                        {!open ? <ChevronRight/> : <ChevronLeft/>}
                    </IconButton>
                </Box>
                
                <Box display='flex' justifyContent='center' alignItems='center' flexDirection='column' mb={4}>
                    <Box
                        mb={2}
                        mt={1}
                        component="img"
                        sx={{
                            height: '8em',
                            borderRadius: '50%',
                            transition: '0.8s ease-in-out',
                            opacity: open? 1 : 0,
                        }}
                        alt="Display Photograph."
                        src={linkedinDpUrl}
                    />
                    <Typography color='primary.dark' sx={{
                        transition: '0.8s ease-in-out',
                        opacity: open? 1 : 0,
                    }}>
                        <b>
                            <big>
                                Daniel C. Rodrigues
                            </big>
                        </b>
                    </Typography>
                    <Typography color='primary.dark' sx={{
                        transition: '0.8s ease-in-out',
                        opacity: open? 1 : 0,
                    }}>
                        <small>
                            CompSci Student | Software Engineer Intern
                        </small>
                    </Typography>
                </Box>

                <List>
                    {buttons.map((e, i) => (
                        <ListItem key={`${e.value}-${i}`} disablePadding sx={{ display: 'block' }}>
                            <ListItemButton
                                sx={selected === e.value? {...btnSx, ...btnSelectedSx, background: theme => theme.palette.secondary.main} : btnSx}
                                value={e.value}
                                onClick={() => setSelected(e.value)}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: listItemIconMarginRight,
                                        ml: open? 5 : 'none',
                                        justifyContent: 'center',
                                        transition: '0.9s ease-in-out',
                                    }}
                                >
                                    {e.icon}
                                </ListItemIcon>
                                <ListItemText 
                                    disableTypography 
                                    primary={
                                        <Typography
                                            sx={{
                                                ...labelSx,
                                                ...showLabelHover(e.value),
                                                letterSpacing: '0.02rem',
                                            }}
                                        >
                                            {e.label}
                                        </Typography>
                                    } 
                                    sx={{...listItemTextOpacity, transition: '0.9s ease-in-out'}}
                                />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>

            {contentComponent}
        </Box>
    );
}

export default MenuDrawer;
