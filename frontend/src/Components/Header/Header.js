import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Logo from '../../Assets/Images/logo.svg'
import SvgIcon from '@mui/material/SvgIcon';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import { Box } from '@mui/material';
import { styled } from '@mui/material';
import Divider from '@mui/material/Divider';

const theme = createTheme({
    components: {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    boxShadow: 'none',
                },
            },
            defaultProps: {
                elevation: 0,
            },
        },
    },
    palette: {
        primary: {
            main: '#fff', // Change this to the desired color
        },
    },
});

const CustomDivider = styled(Divider)(({ theme }) => ({
    top: '124px',
    height: '0px',
    /* UI Properties */
    border: '2px solid var(--unnamed-color-000000)',
    border: '2px solid #000000',
    opacity: 1,
}));

const Header = () => {
    return (
        <ThemeProvider theme={theme}>
            <AppBar position="static">
                <Toolbar>
                    <Box sx={{ p: 2 }}>
                        <img src={Logo} alt="logo" />
                    </Box>
                </Toolbar>
                <CustomDivider />
            </AppBar>
        </ThemeProvider>
    );
};

export default Header;
