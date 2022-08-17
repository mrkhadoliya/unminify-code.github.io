import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react'
import styled from 'styled-components';
// import logo from '../../Assets/Logo/logo.svg'
import TelegramIcon from '@mui/icons-material/Telegram';
import HomeTextArea from './HomeTextArea';

const Homediv = styled.div`
     display:grid;
     align-items: center;
     height: 100%;
     margin: auto;
     padding: 4rem 0 ;
`


const HomeComponents = () => {
    return (
        <div>
            <Homediv>
                <Container maxWidth='lg'>
                    <Grid container spacing={2}>
                        <Grid item md={12}>
                            <Box textAlign='center'>
                                <TelegramIcon sx={{ color: '#216bff', width: '4rem', height: '4rem' }} />
                                <Typography variant='h3' fontWeight='400' gutterBottom component='h3'>
                                    Unminify Code Pro
                                </Typography>
                                <Typography variant='body' fontWeight='600'>
                                    ree tool to unminify (unpack, deobfuscate) JavaScript, CSS, HTML, XML and JSON code, making it readable and pretty.
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
                <Box>
                    <HomeTextArea />
                </Box>
            </Homediv>
        </div>
    )
}

export default HomeComponents;