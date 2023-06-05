import React from 'react';
import { Box, Stack } from '@mui/material';
import { Type } from './About';
import './tilt-card.css';
import UtilityButton from '../buttons/UtilityButton';
import VanillaTilt from 'vanilla-tilt';


function Tilt({children, ...props}) {
    const { options, ...rest } = props;
    const tilt = React.useRef(null);

    React.useEffect(() => {
        VanillaTilt.init(tilt.current, options);
    }, [options]);

    return (
        <div ref={tilt} {...rest}>
            {children}
        </div>
    );
}


function TiltCard({title, icon, link, btnText = 'Visit', secondBtn}) {
    const tiltOptions = {
        // scale: 1.2,
        speed: 400,
        max: 25,
        glare: true,
        'max-glare': 1,
    };


    return (
        <Tilt options={tiltOptions} className='tilt-card'>
            <Box px={7} py={8}>
                <Stack direction='column' spacing={5} justifyContent='center' alignItems='center'>
                    <Type
                        sx={{
                            fontWeight: 'bold',
                            letterSpacing: '0.02em',
                            color: 'white',
                            fontSize: '2em',
                        }}
                    >
                        {title}
                    </Type>
                    <Stack direction='column' spacing={4} justifyContent='center' alignItems='center'>
                        <Box
                            component="img"
                            sx={{
                                width: '6em',
                            }}
                            alt={title + ' logo'}
                            src={icon}
                        />
                        <Stack direction='row' spacing={1}>
                            <UtilityButton styleType='classic' newTabLink={link}>{btnText}</UtilityButton>
                            {secondBtn}
                        </Stack>
                    </Stack>
                </Stack>
            </Box>
        </Tilt>
    );
}

export default TiltCard;
