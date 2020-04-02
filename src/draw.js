import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';

import IconButton from "@material-ui/core/IconButton";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
    paper: {
        background: '#bf0413',
        color: 'white'
    }
});

export default function MenuButton(props) {
    const classes = useStyles();
    const [state, setState] = React.useState({

        left: false,

    });

    const toggleDrawer = (side, open) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [side]: open });
    };

    const sideList = side => (
        <div
            className={classes.list}
            role="presentation"
            onClick={toggleDrawer(side, false)}
            onKeyDown={toggleDrawer(side, false)}
        >
            <List>
                {['INÍCIO', 'CONHEÇA-NOS', 'NOSSAS POLPAS', 'CONTATO'].map((text, index) => (
                    <ListItem button onClick={() => props.select(index)} key={text}>
                        <ListItemText primary={text} />
                    </ListItem>

                ))}

            </List>
        </div>
    );

    return (
        <div>
            <IconButton color="inherit" onClick={toggleDrawer('left', true)} > <MenuIcon style={{ fontSize: 30 }} /> </IconButton>
            <Drawer open={state.left} onClose={toggleDrawer('left', false)} classes={{ paper: classes.paper }}>
                {sideList('left')}
            </Drawer>
        </div>
    )
}
