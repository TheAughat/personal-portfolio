import React from 'react';
import TiltCard from './TiltCard';
import linkedinLogo from '../../utils/images/linkedin_logo.png';
import githubLogo from '../../utils/images/github_logo.png';
import emailLogo from '../../utils/images/email_logo.png';
import discordLogo from '../../utils/images/discord_logo.png';
import { Box, Grid, Stack, Typography } from '@mui/material';
import { Type } from './About';
import { defaultTheme } from '../../utils/Theme';
import UtilityButton from '../buttons/UtilityButton';


function Contact() {
    const [secondBtnText, setSecondBtnText] = React.useState('Copy');

    const commonSx = {
        fontWeight: 'bold',
        letterSpacing: '0.02em',
        color: defaultTheme.palette.primary.dark
    };


    const secondBtn = (
        <UtilityButton
            styleType='classic'
            onClick={() => {
                window.navigator.clipboard.writeText('rcdan22@gmail.com');
                if (secondBtnText === 'Copied!') return;
                setSecondBtnText('Copied!');
                setTimeout(() => setSecondBtnText('Copy'), 2000);
            }}
        >
            {secondBtnText}
        </UtilityButton>
    );


    return (
        <Box>
            <Stack direction='column' spacing={3} display='flex' alignItems='flex-start' justifyContent='flex-start'>
                <Typography sx={{...commonSx, color: defaultTheme.palette.primary.light}} variant='h4'>Contact Me</Typography>
                <Type>You can reach me via LinkedIn, Email, GitHub, or Discord.</Type>

                <Grid container>
                    <Grid item><TiltCard title='LinkedIn' icon={linkedinLogo} link='https://www.linkedin.com/in/r-c-dan'/></Grid>
                    <Grid item><TiltCard title='Email' icon={emailLogo} link='mailto:rcdan22@gmail.com' btnText='Send' secondBtn={secondBtn}/></Grid>
                    <Grid item><TiltCard title='GitHub' icon={githubLogo} link='https://github.com/TheAughat'/></Grid>
                    <Grid item><TiltCard title='Discord' icon={discordLogo} link='https://discordapp.com/users/490430359683596289' btnText='Add Me'/></Grid>
                </Grid>
            </Stack>
        </Box>
    );
}

export default Contact;
