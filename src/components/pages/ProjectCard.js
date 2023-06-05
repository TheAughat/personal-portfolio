import React from 'react';
import { Box, Typography, Stack } from '@mui/material';
import UtilityButton from '../buttons/UtilityButton';


function ProjectCard({
    title = 'Title', 
    description, 
    image, 
    link, 
    firstBtnLabel = 'View on GitHub', 
    borderRadius, 
    secondBtn, 
    titleToContentSpacing = 15, 
    contentToButtonsSpacing = 5
}) {

    return (
        <Box
            sx={{
                background: 'rgba(0,0,0,0.8)',
                borderRadius: borderRadius,
                position: 'relative',
                overflow: 'hidden',
                zIndex: 0
            }}
        >
            <Box
                component="img"
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    zIndex: -100,
                    opacity: 0.3,
                    objectFit: 'fill',
                    // height: '20em'
                }}
                alt={title + ' logo'}
                objectFit='cover'
                src={image}
            />
            <Box p={4} sx={{
                zIndex: 10,
            }}>
                {/* <Stack direction='column' spacing={titleToContentSpacing} justifyContent='center' alignItems='center'>
                    <Typography sx={{color: 'white'}} variant='h5'>{title}</Typography>
                    <Stack direction='column' spacing={contentToButtonsSpacing} justifyContent='center' alignItems='center'>
                        {description}
                        <Stack direction='row' spacing={2}>
                            <UtilityButton styleType='classic' newTabLink={link}>{firstBtnLabel}</UtilityButton>
                            {secondBtn}
                        </Stack>
                    </Stack>
                </Stack> */}
                <Stack direction='column' spacing={2} justifyContent='center' alignItems='center'>
                    <Typography sx={{color: 'white'}} variant='h5'>{title}</Typography>
                    <Box
                        display='flex'
                        justifyContent='center'
                        alignItems='center'
                        height='15em'
                        px='2em'
                        // py='2em'
                    >
                        {description}
                    </Box>
                    <Stack direction='row' spacing={2}>
                        <UtilityButton styleType='classic' newTabLink={link}>{firstBtnLabel}</UtilityButton>
                        {secondBtn}
                    </Stack>
                </Stack>
            </Box>
        </Box>
    );
}

export default ProjectCard;
