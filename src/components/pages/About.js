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
        "I'm a Computer Science graduate who's greatly interested in the future of AI and software " +
        "and how they continue to develop and evolve with time.",
        "I graduated from Brunel University at the top of my class with a 98% GPA.",
        "I'm keen to learn new tools and technologies, and love working with anything at the heart of computer " + 
        "science. I'm looking forward to the technological singularity and hope to play a part in bringing it " +
        "about safely and responsibly.",
        "I currently work as a Software Engineer at Nomura International plc in London, and have considerable internship experience " +
        "under my belt.",
        "My hobbies include reading science-fiction novels, digital illustration, games development, and following the latest trends in " +
        "sci-tech spheres like AI & physics research, BCIs, fusion, gene editing, transhumanism, and space exploration.",
    ];

    const keySkills = [
        {prefix: 'Languages & Scripting: ', body: 'Java, JavaScript, Python, C++, HTML & CSS, Shell/Bash.'},
        {prefix: 'Libraries & Frameworks: ', body: 'React, Java Spring, NodeJS, Express.js, Jest, Material-UI, Sklearn, Pandas.'},
        {prefix: 'Software & Tools: ', body: 'SQL, Git, CI/CD (Jenkins, Kubernetes, GitLab CI), Containerization (Docker, Podman), Microservices, Micro-Frontends, Helm Charts, Jupyter Notebook & Google Colab.'},
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
