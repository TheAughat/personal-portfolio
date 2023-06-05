import React from 'react';
import { Button } from '@mui/material';


function UtilityButton({children, ...props}) {
    const {onClick, newTabLink, styleType} = props;

    const newTabProps = newTabLink === undefined? {} : {
        href: newTabLink,
        target: '_blank',
    };

    const styling = function() {
        switch (styleType) {
            case 'classic': case 'traditional':
                return {
                    textTransform: 'none',
                    borderRadius: '20px',
                    background: 'white',
                    color: 'gray',
                    '&:hover': {color: 'black', background: 'white'},
                };
            case 'new': case 'mui':
                return {
                    textTransform: 'none',
                };
            default:
                return {};
        }
    }();


    return (
        <Button
            {...newTabProps}
            sx={styling}
            variant='contained'
            onClick={onClick}
        >
            {children}
        </Button>
    );
}

export default UtilityButton;
