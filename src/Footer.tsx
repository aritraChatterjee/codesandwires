import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faMediumM } from '@fortawesome/free-brands-svg-icons/faMediumM';
import { faReact } from '@fortawesome/free-brands-svg-icons/faReact';

import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
    footer: {
        top: 'auto',
        bottom: 0,
        margin: '20px auto',
    },
    socialMediaBar: {
        display: 'block',
        margin: '0 auto',
        textAlign: 'center',
        color: theme.palette.primary.main,
        paddingBottom: 20,
    },
    socialMediaIcon: {
        marginLeft: 15,
        marginRight: 15,
        fontSize: 28,
    },
    buildText: {
        fontSize: 12,
        fontWeight: 700,
    },
    reactIcon: {
        fontSize: 30,
        color: '#0AAB8B',
    },
}));

const Footer = () => {
    const classes = useStyles();
    return (
        <AppBar
            position="fixed"
            color="default"
            elevation={0}
            className={classes.footer}
        >
            <Container fixed>
                <div className={classes.socialMediaBar}>
                    <Link href="#" underline="none">
                        <FontAwesomeIcon
                            className={classes.socialMediaIcon}
                            icon={faGithub}
                        />
                    </Link>
                    <Link href="#" underline="none">
                        <FontAwesomeIcon
                            className={classes.socialMediaIcon}
                            icon={faTwitter}
                        />
                    </Link>

                    <Link href="#" underline="none">
                        <FontAwesomeIcon
                            className={classes.socialMediaIcon}
                            icon={faLinkedinIn}
                        />
                    </Link>

                    <Link href="#" underline="none">
                        <FontAwesomeIcon
                            className={classes.socialMediaIcon}
                            icon={faMediumM}
                        />
                    </Link>
                </div>
                <Typography
                    variant="subtitle1"
                    align="center"
                    gutterBottom={true}
                >
                    codes & wires
                </Typography>
                <Typography
                    align="center"
                    className={classes.buildText}
                    gutterBottom={true}
                >
                    This website is built with{' '}
                    <Link
                        href="https://reactjs.org/"
                        target="_blank"
                        underline="none"
                    >
                        <FontAwesomeIcon
                            className={classes.reactIcon}
                            icon={faReact}
                        />
                    </Link>
                </Typography>
            </Container>
        </AppBar>
    );
};

export default Footer;