import { Box, Stack, Typography } from "@mui/material";
import { defaultTheme } from "../../utils/Theme";


export function Type({children, ...props}) {
    const commonSx = {
        fontWeight: 'bold',
        letterSpacing: '0.02em',
        color: defaultTheme.palette.primary.dark
    };

    return (<Typography sx={commonSx} {...props}>{children}</Typography>);
}

export function Type2({children, ...props}) {
    const {prefix, ...remainingProps} = props;

    const commonSx = {
        letterSpacing: '0.02em',
        color: defaultTheme.palette.primary.dark
    };

    return (<Typography sx={commonSx} {...remainingProps}><i>{prefix}</i><b>{children}</b></Typography>);
}


function About() {
    const commonSx = {
        fontWeight: 'bold',
        letterSpacing: '0.02em',
        color: defaultTheme.palette.primary.dark
    };


    const sentences = [
        "Hello there!",
        "I'm a third-year Computer Science student who's greatly interested in the future of software and AI " +
        "and how they continue to develop and evolve with time.",
        "I'm keen to learn new tools and technologies, and love working with anything at the heart of computer " + 
        "science. I'm looking forward to the technological singularity and hope to play a part in bringing it " +
        "about safely and responsibly.",
        "I attend Brunel University in London, and am currently working as a Software Developer placement intern " +
        "at Nomura International Plc. Additionally, I also have experience working as a Data Science intern at ICIS " +
        "(part of LexisNexis Risk Solutions Group).",
        "My hobbies include reading science-fiction novels, digital illustration, and following the latest trends in " +
        "sci-tech, AI research, futurism, and space exploration.",
    ];

    const keySkills = [
        {prefix: 'Languages & Scripting: ', body: 'JavaScript, Java, Python, HTML & CSS, Shell/Bash.'},
        {prefix: 'Libraries & Frameworks: ', body: 'React, Java Spring, NodeJS, Express.js, Cypress, Jest, Material-UI.'},
        {prefix: 'Software & Tools: ', body: 'Git, CI/CD (Jenkins), Containerization (Docker, Podman), MySQL, Microservices, Micro-Frontends, Jupyter Notebook & Google Colab.'},
        {prefix: 'Soft skills: ', body: 'Problem solving, Teamwork, Leadership, Attention to detail, Time management & task prioritization.'},
    ];


    return (
        <Box>
            <Stack direction='column' spacing={3} display='flex' alignItems='flex-start' justifyContent='flex-start'>
                <Typography sx={{...commonSx, color: defaultTheme.palette.primary.light}} variant='h4'>About Me</Typography>

                {sentences.map((sentence, idx) => <Type key={`about-sentence-${idx}`}>{sentence}</Type>)}

                <Stack>
                    <Type>Key skills:</Type>
                    {keySkills.map((skill, idx) => {
                        return (<Type2 prefix={skill.prefix} key={`about-skills-${idx}`}>{skill.body}</Type2>);
                    })}
                </Stack>
            </Stack>
        </Box>
    );
}

export default About;
