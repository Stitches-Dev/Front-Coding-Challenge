import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import AvatarBlue from '../../Assets/Images/avatarBlue.svg'
import AvatarGreen from '../../Assets/Images/avatarGreen.svg'
import AvatarPink from '../../Assets/Images/avatarPink.svg'
import AvatarYellow from '../../Assets/Images/avatarYellow.svg'
import { Stack } from '@mui/material';
import { Typography } from '@mui/material';

export default function Last() {
    return (
        <Stack sx={{
            justifyContent: 'center', // Center horizontally
            alignItems: 'center', // Center vertically
            pl: 12,
            pr:12,
            pt:6,
            pb:6
        }}
            spacing={2}
        >
            <Typography
                sx={{
                    fontFamily: 'P_SemiBold',
                    fontSize: '34px',
                    lineHeight: '27px',
                    letterSpacing: '0px',
                    color: '#000000',
                    textAlign: 'left',
                    opacity: 1,
                }}
            >
                + 60
            </Typography>
            <Typography
                sx={{
                    fontFamily: 'P_Medium',
                    fontSize: '18px',
                    letterSpacing: '0px',
                    color: '#000000',
                    textAlign: 'left',
                    opacity: 1,
                }}
            >
                Majors
            </Typography>
        </Stack>

    );
}
