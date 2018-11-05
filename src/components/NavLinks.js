import React from 'react';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Person from '@material-ui/icons/Person';
import Timeline from '@material-ui/icons/Timeline';
import Ballot from '@material-ui/icons/Ballot';
import Brush from '@material-ui/icons/Brush';
import LocalLibrary from '@material-ui/icons/LocalLibrary';
import ContactMail from '@material-ui/icons/ContactMail';
import InsertDriveFile from '@material-ui/icons/InsertDriveFile';
import Link from "react-router-dom/Link";


const NavLinks = () => {
        return (
            <div>
                <Divider/>
                <List component="nav">
                    <Link to="/about/">
                        <ListItem button>
                            <ListItemIcon>
                                <Person/>
                            </ListItemIcon>
                            <ListItemText primary="About"/>
                        </ListItem>
                    </Link>
                    <Link to="/experience/">
                        <ListItem button>
                            <ListItemIcon>
                                <Timeline/>
                            </ListItemIcon>
                            <ListItemText primary="Experience"/>
                        </ListItem>
                    </Link>
                    <Link to="/projects/">
                        <ListItem button>
                            <ListItemIcon>
                                <Ballot/>
                            </ListItemIcon>
                            <ListItemText primary="Projects"/>
                        </ListItem>
                    </Link>
                    <Link to="/skills/">
                        <ListItem button>
                            <ListItemIcon>
                                <Brush/>
                            </ListItemIcon>
                            <ListItemText primary="Skills"/>
                        </ListItem>
                    </Link>
                    <Link to="/education/">
                        <ListItem button>
                            <ListItemIcon>
                                <LocalLibrary/>
                            </ListItemIcon>
                            <ListItemText primary="Education"/>
                        </ListItem>
                    </Link>
                    <Link to="/contact/">
                        <ListItem button>
                            <ListItemIcon>
                                <ContactMail/>
                            </ListItemIcon>
                            <ListItemText primary="Contact"/>
                        </ListItem>
                    </Link>
                    <ListItem button>
                        <ListItemIcon>
                            <InsertDriveFile/>
                        </ListItemIcon>
                        <ListItemText primary="Resume"/>
                    </ListItem>
                </List>
            </div>
        );
}

export default NavLinks