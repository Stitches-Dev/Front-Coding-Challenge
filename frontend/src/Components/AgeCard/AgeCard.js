import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import { object, string } from 'yup';
import { Formik, Form } from 'formik';
import CustomButton from '../Button/Button';
import axios from 'axios';
import CustomDate from '../DatePicker/DateInput'

const AgeCard = ({  onResponse }) => {
    const navigate = useNavigate();
    
    const [birthdate,setBirthdate] = React.useState('')
    const handleSubmit = async (values, { setSubmitting }) => {
        onResponse(values.birthdate)
    };

    return (
        <Card
            sx={{
                border: '4px solid #000000',
                borderRadius: '18px',
                background: '#FFFFFF',
                opacity: 1,
                height: '60%',
                minHeight: '200px',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <CardContent>
                <Typography
                    variant="h4"
                    sx={{
                        ml: 4,
                        mt: 2,
                        mb: 1,
                        fontFamily: 'P_Bold',
                        fontSize: '36px',
                        lineHeight: '48px',
                        letterSpacing: '0px',
                        color: '#000000',
                        textAlign: 'left',
                        opacity: 1,
                    }}
                >
                    Tell Us About Yourself
                </Typography>
                <Typography
                    sx={{
                        ml: 4,
                        mb: 1,
                        fontFamily: 'P_Medium',
                        fontSize: '18px',
                        lineHeight: '27px',
                        letterSpacing: '0px',
                        color: '#000000',
                        textAlign: 'left',
                        opacity: 1,
                    }}
                >
                    Your Details Personalize Your Journey And Enhance <br />Accuracy, Securely Stored And Private
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', mt: 2, mx: 4 }}>
                    <Formik
                        initialValues={{
                            birthdate: Date()
                        }}
                        onSubmit={handleSubmit}
                    >
                        {({ values, errors, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
                            <Form onSubmit={handleSubmit}>
                                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                    <Typography
                                        sx={{
                                            mb: 1,
                                            fontFamily: 'P_SemiBold',
                                            fontSize: '18px',
                                            lineHeight: '27px',
                                            letterSpacing: '0px',
                                            color: '#000000',
                                            textAlign: 'left',
                                            opacity: 1,
                                        }}
                                    >
                                        Date of Birth
                                    </Typography>
                                    <CustomDate 
                                    selectedDate={birthdate}
                                    setSelectedDate={(date) => setBirthdate(date)}
                                    />
                                    <Box sx={{ display: 'flex',mt:4, width: "100%" }}>
                                        <CustomButton
                                            text="Next question"
                                            color="#A4E3DC"
                                            onClick={handleSubmit}
                                            disabled={isSubmitting || Object.keys(errors).length > 0}
                                            width="100%"
                                            sx={{ mt: 2 }}
                                        />
                                    </Box>
                                </Box>
                            </Form>
                        )}
                    </Formik>
                </Box>
            </CardContent>
        </Card>
    );
};

export default AgeCard;
