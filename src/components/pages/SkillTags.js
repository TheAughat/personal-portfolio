import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';


export default function SkillTags({skills = []}) {
    return (
        <Stack direction="row" spacing={1}>
            {skills.map((skill, i) => {
                return <Chip
                    key={`skill-${skill.name}-${i}`}
                    avatar={
                        <Avatar 
                            alt={skill.name} 
                            src={skill.imgPath}
                        />
                    }
                    label={skill.name}
                    variant='filled'
                />;
            })}
        </Stack>
    );
}
