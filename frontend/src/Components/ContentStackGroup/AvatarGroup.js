import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import AvatarBlue from '../../Assets/Images/avatarBlue.svg'
import AvatarGreen from '../../Assets/Images/avatarGreen.svg'
import AvatarPink from '../../Assets/Images/avatarPink.svg'
import AvatarYellow from '../../Assets/Images/avatarYellow.svg'
import { Stack } from '@mui/material';
import { Typography } from '@mui/material';

export default function GroupAvatars() {
    return (
        <Stack direction='row' sx={{
            justifyContent: 'center', // Center horizontally
            alignItems: 'center', // Center vertically
            pl: 4,
            pr:15,
            pt:6,
            pb:6
        }}
            spacing={2}
        >
            <AvatarGroup max={4}  >
                <Avatar alt="AvatarGreen" src={AvatarGreen} sx={{ width: 75, height: 75 }} />
                <Avatar alt="AvatarYellow" src={AvatarYellow} sx={{ width: 75, height: 75 }} />
                <Avatar alt="AvatarPink" src={AvatarPink} sx={{ width: 75, height: 75 }} />
                <Avatar alt="AvatarBlue" src={AvatarBlue} sx={{ width: 75, height: 75 }} />
            </AvatarGroup>
            <Stack>
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
                    +2,000
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
                    Students Worldwide
                </Typography>
            </Stack>
        </Stack>

    );
}
