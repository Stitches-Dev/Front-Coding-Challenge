import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { Button, Container, Typography, Grid, Stack, Paper } from '@mui/material';
import Box from '@mui/material/Box';
import { styled } from '@mui/material';
import Divider from '@mui/material/Divider';
import GroupAvatars from '../Components/ContentStackGroup/AvatarGroup';
import Middle from '../Components/ContentStackGroup/Middle'
import Last from '../Components/ContentStackGroup/Last';
import ReadyCard from '../Components/ReadyCard/ReadyCard';

const LandingPage = () => {
    const navigate = useNavigate(); // Initialize navigate

    const handleClick = () => {
        // Navigate to another page on button click
        navigate('/test');
    };
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    const CustomDivider = styled(Divider)(({ theme }) => ({
        /* UI Properties */
        border: '2px solid var(--unnamed-color-000000)',
        border: '2px solid #000000',
        opacity: 1,
    }));

    return (
        <Box >
            <Stack
                direction="row"
                divider={<CustomDivider orientation="vertical" flexItem />}
            >
                <Grid container spacing={2}>
                    <Grid item xs={12} sx={{ m: 4 }}>
                        <Typography
                            sx={{
                                ml: 15,
                                mt: 5,
                                mb: 5,
                                width: '986px',
                                height: '150px',
                                fontFamily: 'P_Bold',
                                fontWeight: 'bold',
                                fontSize: '54px',
                                lineHeight: '74px',
                                letterSpacing: '0px',
                                color: '#000000',
                                textAlign: 'left',
                                opacity: 1,
                            }}
                        >
                            Welcome To Stitches Studios <br />
                            Free Career Test
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Box > {/* Adjust the margin top to create space */}
                            <CustomDivider />
                            <Stack
                                direction="row"
                                divider={<CustomDivider orientation="vertical" flexItem />}
                                spacing={2}
                                sx={{
                                    justifyContent: 'center', // Center horizontally
                                    alignItems: 'center', // Center vertically
                                    minHeight: '200px', // Set a minimum height for vertical centering
                                }}
                            >
                                <GroupAvatars />
                                <Middle />
                                <Last />
                            </Stack>
                            <CustomDivider />
                        </Box>
                    </Grid>
                    <Grid item xs={12}
                        sx={{
                            justifyContent: 'center', // Center horizontally
                            alignItems: 'center', // Center vertically
                            minHeight: '200px',
                            ml:25,
                            mr:25,
                            mt:4,
                            mb:4,
                            p:5 // Set a minimum height for vertical centering
                        }}>
                        <ReadyCard />
                    </Grid>
                </Grid>
                <Paper elevation={0} style={{ backgroundColor: '#F7D854', width: '30%' }} />
            </Stack>
        </Box>
    );
};

export default LandingPage;
