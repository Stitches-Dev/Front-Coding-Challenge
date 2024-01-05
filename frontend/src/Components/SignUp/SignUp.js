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

const SignUp = ({ onNextStep, onResponse }) => {
    const navigate = useNavigate();

    const validationSchema = object({
        name: string().required(),
        email: string().email(),
    });

    const handleSubmit = async (values, { setSubmitting }) => {
        try {
            const payload = {
                email: values.email,
                name: values.name,
            };

            // Make the POST request using axios
            const response = await axios.post('http://192.168.18.111:8000/career-test/launch-test', payload);

            if (response.status === 200) {
                // Redirect to '/test' after successful submission
                onNextStep();
                onResponse(response.data);
            } else {
                // Handle other cases if needed
                console.error('Submission failed');
            }
        } catch (error) {
            // Handle errors
            console.error('Error submitting form:', error);
        } finally {
            // Reset submitting state
            setSubmitting(false);
        }
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
                            name: '',
                            email: '',
                        }}
                        validationSchema={validationSchema}
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
                                        Full Name
                                    </Typography>
                                    <TextField
                                        id="name"
                                        name="name"
                                        value={values.name}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        fullWidth
                                        sx={{
                                            mt: 1,
                                            borderRadius: '13px',
                                            minWidth: '150px',
                                            boxShadow: 'var(--shadow)',
                                            border: '3px solid black',
                                            transition: '0.3s ease',
                                            backgroundColor: 'var(--white)',
                                        }}
                                    />
                                    <Typography
                                        sx={{
                                            mt: 1,
                                            fontFamily: 'P_SemiBold',
                                            fontSize: '18px',
                                            lineHeight: '27px',
                                            letterSpacing: '0px',
                                            color: '#000000',
                                            textAlign: 'left',
                                            opacity: 1,
                                        }}
                                    >
                                        Email
                                    </Typography>
                                    <TextField
                                        id="email"
                                        name="email"
                                        value={values.email}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        fullWidth
                                        sx={{
                                            mt: 1,
                                            borderRadius: '13px',
                                            minWidth: '150px',
                                            boxShadow: 'var(--shadow)',
                                            border: '3px solid black',
                                            transition: '0.3s ease',
                                            backgroundColor: 'var(--white)',
                                        }}
                                    />
                                    <Box sx={{ display: 'flex',mt:4, width: "100%" }}>
                                        <CustomButton
                                            text="Next"
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

export default SignUp;
