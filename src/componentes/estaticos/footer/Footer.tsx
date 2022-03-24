import React from 'react';

import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Typography, Box, Grid, Button } from '@material-ui/core';

import './Footer.css';

function Footer() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={12}>
                    <Box className='rodape'>
                        <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                            <Typography variant="h5" align="center" gutterBottom>Siga-nos nas redes sociais </Typography>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <a className='icons' href="https://www.facebook.com/generationbrasil" target="_blank">
                                <FacebookIcon className='icons-size'/>
                            </a>
                            <a className='icons' href="https://www.instagram.com/generationbrasil/" target="_blank">
                                <InstagramIcon className='icons-size'/>
                            </a>
                            <a className='icons' href="https://www.linkedin.com/school/generationbrasil/" target="_blank">
                                <LinkedInIcon className='icons-size'/>
                            </a>
                        </Box>
                    </Box>
                    <Box className='rodape-copy'>
                        <Box paddingTop={1}>
                            <Typography variant="subtitle2" align="center" gutterBottom style={{ color: "white" }} >© 2020 Copyright:</Typography>
                        </Box>
                        <Box>
                            <a target="_blank" href="https://brasil.generation.org">
                                <Typography variant="subtitle2" gutterBottom style={{ color: "white" }} align="center">brasil.generation.org</Typography>
                            </a>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    )

}

export default Footer;