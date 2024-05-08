'use client';

import Image from 'next/image';
/* import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import PhoneIcon from '@mui/icons-material/Phone';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail'; */
import { ApplicationContextRoot } from '../context';
/* import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles'; */
import Link from 'next/link';

export default function Home() {
    //const theme = useTheme();

    return (
        <div></div>
        /*   <Box
            sx={{
                position: 'relative',
                zIndex: '0',
                inset: '0',
                height: '80vh',
                width: '100%',
                padding: '12em 0 0 0',
            }}
        >
            <Box
                component={Image}
                src={'/background_combined.png'}
                alt={`cover_page_background`}
                sx={{
                    top: '0',
                    objectFit: 'cover',
                    objectPosition: 'center right',
                    zIndex: '-9',
                }}
                fill
            />
            <Container
                maxWidth="sm"
                sx={{
                    color: ApplicationTheme.palette.text.main,
                    marginLeft: useMediaQuery(theme.breakpoints.down('sm')) ? '0' : '4em',
                    textAlign: 'center',
                    overflowWrap: 'break-word',
                }}
            >
                <Typography
                    variant="h1"
                    color={ApplicationTheme.palette.text.main}
                    sx={{
                        fontSize: '2rem',
                        fontWeight: 600,
                        overflowWrap: 'break-word',
                    }}
                >
                    {ApplicationContextRoot.contentRoot['home'].leafs['cover'].textContent['title']}
                </Typography>
                <Typography variant="subtitle1" fontWeight="200" sx={{ overflowWrap: 'break-word' }}>
                    {ApplicationContextRoot.contentRoot['home'].leafs['cover'].textContent['subTitle']}
                </Typography>
                <Stack spacing={2} direction="column" sx={{ padding: 2, justifyContent: 'left' }}>
                    <Link
                          className={style.link} 
                        href={ApplicationContextRoot.contentRoot['home'].leafs['cover'].assetUrls['phoneNumberHref']}
                        style={{}}
                    >
                        <Stack direction="row" alignItems="center">
                            <Button color="primary" variant="contained">
                                <PhoneIcon />
                            </Button>
                            <Typography variant="button" sx={{ overflowWrap: 'break-word', padding: '0.5em' }}>
                                {ApplicationContextRoot.contentRoot['home'].leafs['cover'].textContent['phoneNumber']}
                            </Typography>
                        </Stack>
                    </Link>
                    <Link
                         className={style.link} 
                        href={ApplicationContextRoot.contentRoot['home'].leafs['cover'].assetUrls['infoEmailHref']}
                    >
                        <Stack direction="row" alignItems="center">
                            <Button
                                color="primary"
                                variant="contained"
                                sx={{
                                    backgroundColor: ApplicationTheme?.palette?.interactiveSecondary?.main,
                                }}
                            >
                                {<AlternateEmailIcon />}
                            </Button>{' '}
                            <Typography
                                variant="button"
                                fontSize={'0.8em'}
                                sx={{ overflowWrap: 'break-word', padding: '0.5em' }}
                            >
                                {ApplicationContextRoot.contentRoot['home'].leafs['cover'].textContent['infoEmail']}
                            </Typography>
                        </Stack>
                    </Link>
                </Stack>
                <Typography variant="subtitle2" sx={{ textAlign: 'left', padding: '0 0 0 2em' }}>
                    {ApplicationContextRoot.contentRoot['home'].leafs['cover'].textContent['subTitle2']}
                </Typography>
            </Container>
            <Box sx={{ height: '500px' }} />
        </Box> */
    );
}
