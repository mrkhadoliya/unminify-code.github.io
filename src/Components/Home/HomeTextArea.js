import React from 'react'
import styled from 'styled-components';

import { Box, Container, Grid, Typography } from '@mui/material'

import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import LinkOutlinedIcon from '@mui/icons-material/LinkOutlined';
import BackupOutlinedIcon from '@mui/icons-material/BackupOutlined';
import FileCopyOutlinedIcon from '@mui/icons-material/FileCopyOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

const HomeText = styled.div`
    padding-top: 2rem; 
`
const Textarea = styled.textarea`
    width: -webkit-fill-available;
    padding: 1rem;
    border: 2px dashed #444;
    border-radius: 12px;
    font-size: 18px;
    background: transparent;
`
const Textareabg = styled.div`
    background: #216bff1a;
    padding: 1rem;
    border-radius: 12px; 
    position:relative;
    width: 100%;
`

const Unminify = styled.button`
    color: #fff;
    border: none;
    padding: 14px 20px;
    border-radius: 7px;
    background: #0059ff;
    font-size: 18px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 10px;
    transition: 0.5s;
    &:hover {
        background: #216bff1a;
        color: #0059ff;
    }
`


const HomeTextArea = () => {
    return (
        <div>
            <HomeText>
                <Container maxWidth='lg'>
                    <Grid container spacing={2}>
                        <Grid item md={12}>
                            <Box>
                                <Textareabg>
                                    <Textarea placeholder='Drop Your Code' rows={12}>
                                    </Textarea>
                                </Textareabg>
                                <Box paddingY='2rem' display='flex' alignItems='center' gap='15px'>
                                    <Unminify>
                                        Unminify
                                    </Unminify>
                                    <Unminify>
                                        <FileDownloadOutlinedIcon />Download
                                    </Unminify>
                                    <Unminify>
                                        <LinkOutlinedIcon /> Load URL
                                    </Unminify>
                                    <Unminify>
                                        <BackupOutlinedIcon />Browse
                                    </Unminify>
                                    <Unminify>
                                        <FileCopyOutlinedIcon />Copy
                                    </Unminify>
                                    <Unminify>
                                        <DeleteOutlineOutlinedIcon /> Clear
                                    </Unminify>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </HomeText>
        </div>
    )
}

export default HomeTextArea;