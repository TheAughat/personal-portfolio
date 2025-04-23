import { Box, Stack, Typography } from "@mui/material";
import { defaultTheme } from "../../utils/Theme";
import { langScriptImgs, libFrameImgs, softToolImgs, aiImgs } from "./skillsImages";
import SkillTags from "./SkillTags";


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

    // const keySkills = [
    //     {prefix: 'Languages & Scripting: ', body: 'Java, JavaScript, Python, C++, HTML & CSS, Shell/Bash.'},
    //     {prefix: 'Libraries & Frameworks: ', body: 'React, Java Spring, NodeJS, Express.js, Jest, Material-UI, Sklearn, Pandas.'},
    //     {prefix: 'Software & Tools: ', body: 'SQL, Git, CI/CD (Jenkins, Kubernetes, GitLab CI), Containerization (Docker, Podman), Microservices, Micro-Frontends, Helm Charts, Jupyter Notebook & Google Colab.'},
    //     {prefix: 'Soft skills: ', body: 'Problem solving, Teamwork, Leadership, Attention to detail, Time management & task prioritization.'},
    // ];

    const langScripts = [
        {name: 'Java', imgPath: langScriptImgs.javaImg},
        {name: 'JavaScript', imgPath: langScriptImgs.jsImg},
        {name: 'Python', imgPath: langScriptImgs.pythonImg},
        {name: 'C++', imgPath: langScriptImgs.cppImg},
        {name: 'HTML', imgPath: langScriptImgs.htmlImg},
        {name: 'CSS', imgPath: langScriptImgs.cssImg},
        {name: 'Shell/Bash', imgPath: langScriptImgs.terminalImg}
    ];

    const libFrames = [
        {name: 'React', imgPath: libFrameImgs.reactImg},
        {name: 'SpringBoot', imgPath: libFrameImgs.springImg},
        {name: 'NodeJS', imgPath: libFrameImgs.nodejsImg},
        {name: 'ExpressJS', imgPath: libFrameImgs.expImg},
        {name: 'Material-UI', imgPath: libFrameImgs.muiImg},
        {name: 'Scikit-Learn', imgPath: libFrameImgs.sklearnImg},
        {name: 'Pandas', imgPath: libFrameImgs.pandasImg},
    ];

    const softTools = [
        {name: 'SQL', imgPath: softToolImgs.sqlImg},
        {name: 'MySQL', imgPath: softToolImgs.mysqlImg},
        {name: 'git', imgPath: softToolImgs.gitImg},
        {name: 'GitHub', imgPath: softToolImgs.githubImg},
        {name: 'CI/CD', imgPath: softToolImgs.cicdImg},
        {name: 'Jenkins', imgPath: softToolImgs.jenkinsImg},
        {name: 'Docker', imgPath: softToolImgs.dockerImg},
        {name: 'Microservices', imgPath: softToolImgs.msvcImg},
        {name: 'Microfrontends', imgPath: softToolImgs.mfesImg}
    ];

    const aiSkills = [
        {name: 'Jupyter NB', imgPath: aiImgs.jupyterImg},
        {name: 'Google Colab', imgPath: aiImgs.colabImg},
        {name: 'LLMs', imgPath: aiImgs.openaiImg},
        {name: 'LangChain', imgPath: aiImgs.langchainImg},
        {name: 'LangGraph', imgPath: aiImgs.langgraphImg},
        {name: 'RAG', imgPath: aiImgs.ragImg},
        {name: 'ChromaDB', imgPath: aiImgs.chromadbImg}
    ];


    return (
        <Box>
            <Stack direction='column' spacing={3} display='flex' alignItems='flex-start' justifyContent='flex-start'>
                <Typography sx={{...commonSx, color: defaultTheme.palette.primary.light}} variant='h4'>About Me</Typography>

                {sentences.map((sentence, idx) => <Type key={`about-sentence-${idx}`}>{sentence}</Type>)}

                <Type>Key skills:</Type>
                {/* <Stack>
                    <Type>Key skills:</Type>
                    {keySkills.map((skill, idx) => {
                        return (<Type2 prefix={skill.prefix} key={`about-skills-${idx}`}>{skill.body}</Type2>);
                    })}
                </Stack> */}
                {<SkillTags skills={langScripts}/>}
                {<SkillTags skills={libFrames}/>}
                {<SkillTags skills={softTools}/>}
                {<SkillTags skills={aiSkills}/>}
            </Stack>
        </Box>
    );
}

export default About;
