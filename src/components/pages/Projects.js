import React from 'react';
import { Box, FormControlLabel, FormGroup, Stack, Switch, Typography } from '@mui/material';
import { Type } from './About';
import { defaultTheme } from '../../utils/Theme';
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ProjectCard from './ProjectCard';
import bs from '../../utils/images/battleship_ubisoft.jpg';
import cw from '../../utils/images/codewalker_image.jpg';
import pf from '../../utils/images/portfolio_image.JPG';
import gg from '../../utils/images/gridgames_image.JPG';
import UtilityButton from '../buttons/UtilityButton';


function Projects() {
    const [autoPlay, setAutoPlay] = React.useState(true);
    const [autoPlayLabel, setAutoPlayLabel] = React.useState('autoplaying...');
    
    const commonSx = {
        fontWeight: 'bold',
        letterSpacing: '0.02em',
        color: defaultTheme.palette.primary.dark
    };

    var items = [
        {
            descriptionText: [
                'Created a website with React and SpringBoot to run code and perform multiple checks and tests '
                + 'on it to help classmates struggling to pass their coding assignments.',
                'Website was used by dozens of classmates to prepare for tests and assignments through the year.',
                'Backend is available as a JAR file, and can be run as an executable on a PC with a JRE.'
            ],
            rest: {
                title: 'CodeWalker', link: 'https://codewalker-cs2004.netlify.app/', firstBtnLabel: 'Visit Frontend',
                image: cw, secondBtn: (
                    <UtilityButton
                        styleType='classic'
                        newTabLink='https://drive.google.com/file/d/18SOIHFZQiaNM9REx4Gid4UIARSyGqLoY/view'
                    >
                        Download Backend
                    </UtilityButton>
                ),
            }
        },
        {
            descriptionText: [
                'A React app that lets you select an image from a collection.',
                'The image is then broken into square tiles and scrambled, and you must rotate them back into their '
                + 'original positions to form the original image.',
                'The game is timed, and a new game can be started by refreshing the page.'
            ],
            rest: {
                title: 'Grid Games / Tile Rotation Game', link: 'https://grid-games-rotation.netlify.app/', secondBtn: (
                    <UtilityButton
                        styleType='classic'
                        newTabLink='https://github.com/TheAughat/grid-games-react'
                    >
                        View on GitHub
                    </UtilityButton>
                ), image: gg, firstBtnLabel: 'Visit Frontend'
            }
        },
        {
            descriptionText: [
                'The board game Battleship created in Java, using Java Swing for the UI.',
            ],
            rest: {
                title: 'Battleship', link: 'https://github.com/TheAughat/Battleship', image: bs
            }
        },
        {
            descriptionText: [
                'A personal portfolio to introduce myself, my experience, and showcase my projects.',
            ],
            rest: {
                title: 'Personal Portfolio', link: 'https://github.com/TheAughat/Personal-Portfolio', image: pf
            }
        },
    ];


    const handleAutoPlayChange = event => {
        const current = event.target.checked;
        setAutoPlay(current);
        setAutoPlayLabel(current? 'autoplaying...' : 'enable autoplay');
    };


    return (
        <Box>
            <Stack direction='column' spacing={3} display='flex' alignItems='flex-start' justifyContent='flex-start'>
                <Typography sx={{...commonSx, color: defaultTheme.palette.primary.light}} variant='h4'>My Projects</Typography>
                <Type>Personal projects I've worked on in my spare time.</Type>
                <Box width='stretch'>
                    <Carousel
                        NextIcon={<ChevronRightIcon/>}
                        PrevIcon={<ChevronLeftIcon/>}
                        sx={{borderRadius: '20px'}}
                        navButtonsAlwaysVisible
                        autoPlay={autoPlay}
                        interval={4000}
                        navButtonsProps={{
                            className: 'carousel-btns',
                            style: {
                                background: 'rgba(0,0,0,0.2)',
                                height: '120%',
                                borderRadius: '0',
                                padding: '0.5em',
                                margin: '0',
                            },
                        }}
                        animation='slide'
                        navButtonsWrapperProps={{
                            style: {
                                background: 'transparent',
                                top: '-50%',
                            }
                        }}
                        indicatorIconButtonProps={{
                            style: {
                                padding: '0 0.1em',
                                color: 'white',
                            }
                        }}
                        activeIndicatorIconButtonProps={{
                            style: {
                                color: 'dodgerblue',
                            }
                        }}
                        indicatorContainerProps={{
                            style: {
                                position: 'relative',
                                background: 'rgba(100,150,238,0.4)',
                                marginTop: '0',
                                paddingTop: '0.2em',
                                paddingBottom: '0.2em',
                                top: '-1px'
                            }
                        }}
                    >
                        {
                            items.map((item, i) => (
                                <Item key={`projects-${i}`} item={
                                    <ProjectCard
                                        description={
                                            <Stack spacing={2}>
                                                {item.descriptionText.map(sentence => (
                                                    <Typography sx={{color: 'white'}}>{sentence}</Typography>
                                                ))}
                                            </Stack>
                                        }
                                        {...item.rest}
                                    />
                                }/>
                            ))
                        }
                    </Carousel>
                </Box>
                <Box width='stretch' display='flex' justifyContent='flex-end' pr={1}>
                    <FormGroup>
                        <FormControlLabel control={
                            <Switch
                                checked={autoPlay}
                                onChange={handleAutoPlayChange}
                                size='small'
                            />
                        } label={autoPlayLabel} labelPlacement='start' sx={{fontSize: '0.2em'}}/>
                    </FormGroup>
                </Box>
            </Stack>
        </Box>
    );
}


function Item(props) {
    return (
        <Paper sx={{background: 'rgba(100,150,238,0.4)', boxShadow: 'none'}}>
            {props.item}
        </Paper>
    );
}


export default Projects;
