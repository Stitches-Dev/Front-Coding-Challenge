import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { Button, Container, Typography, Grid, Stack, Paper } from '@mui/material';
import Box from '@mui/material/Box';
import { styled } from '@mui/material';
import Divider from '@mui/material/Divider';
import SignUp from '../Components/SignUp/SignUp';
import BackArrow from '../Assets/Images/arrow_back.svg'
import AgeCard from '../Components/AgeCard/AgeCard';
import GenderCard from '../Components/GenderCard/GenderCard';
const TestPage = () => {
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

    const [step, setStep] = React.useState(1); // State to track the current step
    const [userData, setUserData] = React.useState(null); // State to hold age data
    const [ageData, setAgeData] = React.useState(null); // State to hold age data

    const handleNextStep = () => {
        // Function to handle moving to the next step
        setStep(prevStep => prevStep + 1);
    };
    const handlePrevStep = () => {
        // Function to handle moving to the next step
        if (step > 1) {
            setStep(prevStep => prevStep - 1);
        }
        else {
            navigate('/')
        }
    };

    const handleResponse = (responseData) => {
        // Handle the response data received from SignUp component
        setUserData(responseData);
        // You can set it in state or perform any necessary actions here
    };

    const handleBirthday = (responseData) => {
        // Handle the response data received from SignUp component
        setAgeData(responseData);
        handleNextStep()
        // You can set it in state or perform any necessary actions here
    };
    const renderContentBasedOnStep = () => {
        // Function to render content based on the step
        switch (step) {
            case 1:
                return (
                    // Content for step 1
                    <SignUp onNextStep={handleNextStep} onResponse={handleResponse} />
                );
            case 2:
                return (
                    // Content for step 2
                    <AgeCard ageData={ageData} onResponse={handleBirthday} />
                );
            case 3:
                return (
                    // Content for step 2
                    <GenderCard onNextStep={handleNextStep} onResponse={handleResponse} />
                );
            // Add more cases for additional steps as needed

            default:
                return null;
        }
    };
    return (
        <Box >
            <Stack
                direction="row"
                divider={<CustomDivider orientation="vertical" flexItem />}
            >
                <Grid container spacing={2} sx={{ height: '100vh', p: 10 }}>
                    <Stack direction='row'
                        sx={{
                            justifyContent: 'center', // Center horizontally
                            alignItems: 'center', // Center vertically
                            cursor: 'pointer', // Set the cursor to pointer
                        }}
                        onClick={handlePrevStep}
                        disable={step <= 1}
                    >
                        <Box>
                            <img src={BackArrow} alt="logo" />
                        </Box>
                        <Typography
                            sx={{
                                ml: 1,
                                fontFamily: 'P_Bold',
                                fontSize: '31px',
                                lineHeight: '47px',
                                letterSpacing: '0px',
                                color: '#000000',
                                textAlign: 'left',
                                opacity: 1,
                            }}
                        >
                            Back
                        </Typography>
                    </Stack>
                    {renderContentBasedOnStep()} {/* Render content based on the step */}
                </Grid>
                <Paper elevation={0} style={{ backgroundColor: '#F7D854', width: '30%' }} />
            </Stack>
        </Box>
    );
};

export default TestPage;
