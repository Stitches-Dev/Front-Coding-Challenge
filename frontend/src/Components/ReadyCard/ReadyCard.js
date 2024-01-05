import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CustomButton from '../Button/Button';
import { useNavigate } from 'react-router-dom';


export default function ReadyCard() {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        // Handle button click logic here
        navigate('/test')
    };
    return (
        <Card
            sx={{

                border: '4px solid #000000',
                boxShadow: '12px 12px 0px 0px #000000', // Adding a shadow to the right and bottom
                borderRadius: '22px',
                background: '#FFFFFF',
                opacity: 1,
                minheight: '200px'
            }}
        >
            <CardContent>
                <Typography
                    sx={{
                        ml: 4,
                        mt: 2,
                        mb: 2,
                        fontFamily: 'P_Bold',
                        fontSize: '54px',
                        lineHeight: '74px',
                        letterSpacing: '0px',
                        color: '#000000',
                        textAlign: 'left',
                        opacity: 1,
                    }}
                >
                    Are You Ready?
                </Typography>
            </CardContent>
            <CardActions
                sx={{
                    justifyContent: 'center', // Center horizontally
                    alignItems: 'center',
                    p: 3
                }}>
                <CustomButton
                    text="Start the Test" // Adjust text as needed
                    color="#A4E3DC" // Adjust color as needed
                    onClick={handleButtonClick} // Pass your click handler function
                    width='100%'
                />
            </CardActions>
        </Card>
    );
}
