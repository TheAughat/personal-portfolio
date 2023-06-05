import { Box, Typography, Stack, Button } from "@mui/material";
import React from "react";
import UtilityButton from "../buttons/UtilityButton";
import { defaultTheme } from "../../utils/Theme";
import myCV from '../../utils/documents/DanielCV.pdf';
import kesterRef from '../../utils/documents/DanielICISReference.pdf';
import { DataGrid } from '@mui/x-data-grid';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { Type } from "./About";


function Resume() {
    const [viewing, setViewing] = React.useState('resume');
    // const [viewing, setViewing] = React.useState('references-table');

    const refsTableCols = [
        {field: 'name', headerName: 'Name', flex: 1},
        {field: 'relation', headerName: 'Relationship', flex: 1},
        {field: 'position', headerName: 'Job Role', flex: 1},
        {field: 'company', headerName: 'Company', flex: 1},
        {field: 'doc', headerName: 'Document', flex: 1, renderCell: params => {
            return <UtilityButton styleType='classic' onClick={() => setViewing('reference-' + params.row.id)}>View</UtilityButton>;
        }},
    ];

    const refsTableRows = [
        {
            id: 'kester-icis',
            name: 'Kester Smith', 
            relation: 'Mentor', 
            position: 'Senior Data Scientist', 
            company: 'ICIS (LexisNexis RSG)',
        },
        // {
        //     id: 'lokendra-nom',
        //     name: 'Lokendra Tomar',
        //     relation: 'Mentor',
        //     position: 'Technical Lead',
        //     company: 'Nomura International Plc',
        // },
        // {
        //     id: 'wajida-nom',
        //     name: 'Wajida Khan',
        //     relation: 'Line Manager',
        //     position: 'Vice President | Manager',
        //     company: 'Nomura International Plc'
        // }
    ];

    const commonSx = {
        fontWeight: 'bold',
        letterSpacing: '0.02em',
        color: defaultTheme.palette.primary.dark
    };

    const embedSx = {
        height: '36em',
        border: 'none',
        borderRadius: '10px',
    };


    function renderBody() {
        switch (viewing) {
            case 'resume':
                return renderResume();
            case 'references-table':
                return renderReferencesTable();
            default:
                const refStr = 'reference-';
                if (viewing.startsWith(refStr)) {
                    return renderReference(viewing.substring(refStr.length));
                }
        }
    }


    const handleDownload = file => {
        let urlBreakdown = file.split('/');
        urlBreakdown = urlBreakdown[urlBreakdown.length - 1].split('.');
        const filename = urlBreakdown[0] + '.' + urlBreakdown[2];
        let link = document.createElement('a');
        link.href = file;
        link.download = filename;
        link.dispatchEvent(new MouseEvent('click'));
    };


    function renderResume() {
        return (
            <object data={myCV} type='application/pdf' style={embedSx}>
                <Type>
                    No online PDF viewer available. You may 
                    <Box component='span' mx={0.5}>
                        <UtilityButton 
                            styleType='classic' 
                            onClick={() => handleDownload(myCV)}
                        >
                            Download
                        </UtilityButton>
                    </Box>
                    the pdf instead.
                </Type>
            </object>
            // <iframe src={myCV} style={embedSx}/>
        );
    }


    function renderReferencesTable() {
        return (
            <>
                <Stack alignItems='flex-start'>
                    <Button 
                        sx={{color: defaultTheme.palette.primary.dark}}
                        startIcon={<ChevronLeftIcon/>}
                        onClick={() => setViewing('resume')}
                    >
                        Back to Resume
                    </Button>
                </Stack>
                <Box sx={embedSx}>
                    <DataGrid
                        rows={refsTableRows}
                        columns={refsTableCols}
                        disableRowSelectionOnClick
                        sx={{
                            '.MuiDataGrid-columnHeader': {
                                background: 'rgba(88, 151, 176, 0.6)',
                            },
                        }}
                    />
                </Box>
            </>
        );
    }


    function renderReference(refToRender) {
        let doc = undefined;

        switch (refToRender) {
            case 'kester-icis':
                doc = kesterRef;
                break;
            default:
                break;
        }
        return (
            <>
                <Stack alignItems='flex-start'>
                    <Button
                        sx={{color: defaultTheme.palette.primary.dark}}
                        startIcon={<ChevronLeftIcon/>}
                        onClick={() => setViewing('references-table')}
                    >
                        Back to list of references
                    </Button>
                </Stack>
                <object data={doc} type='application/pdf' style={embedSx}>
                    <Type>
                        No online PDF viewer available. You may 
                        <Box component='span' mx={0.5}>
                            <UtilityButton 
                                styleType='classic' 
                                onClick={() => handleDownload(doc)}
                            >
                                Download
                            </UtilityButton>
                        </Box>
                        the pdf instead.
                    </Type>
                </object>
            </>
        );
    }


    return (
        <Stack direction='column' spacing={3} display='flex' alignItems='stretch' justifyContent='flex-start'>
            <Typography sx={{...commonSx, color: defaultTheme.palette.primary.light}} variant='h4'>Resume</Typography>

            {renderBody()}

            {viewing === 'resume'? <Stack alignItems='center'>
                <UtilityButton styleType='classic' onClick={() => setViewing('references-table')}>References</UtilityButton>
            </Stack> : undefined}
        </Stack>
    );
}

export default Resume;
