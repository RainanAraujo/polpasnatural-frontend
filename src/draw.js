import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import { Button, Grid } from '@material-ui/core';
import IconButton from "@material-ui/core/IconButton";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from "@material-ui/icons/Menu";
import { InstagramOutlined, WhatsAppOutlined, FacebookOutlined } from '@ant-design/icons';

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

    var scrollInicio = function () {
        window.scrollTo(0, 0);
    };

    var scrollContato = function () {
        window.scrollTo(0, 2000);
    };

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


    return (
        <div>
            <IconButton color="inherit" onClick={toggleDrawer('left', true)} > <MenuIcon style={{ fontSize: 30 }} /> </IconButton>
            <Drawer open={state.left} onClose={toggleDrawer('left', false)} classes={{ paper: classes.paper }}>
                <Button style={{ margin: 10 }} onClick={scrollInicio} ><text style={{ color: "#fff", fontSize: "1.6rem" }}>INÍCIO</text></Button>
                <Button style={{ margin: 10 }}  ><text style={{ color: "#fff", fontSize: "1.6rem" }}>CONHEÇA-NOS</text></Button>
                <Button style={{ margin: 10 }} onClick={scrollContato} ><text style={{ color: "#fff", fontSize: "1.6rem" }}>CONTATO</text></Button>
                <Grid style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                    <IconButton href="https://www.instagram.com/polpafrutanatural/" style={{ backgroundColor: "#F2B705", marginRight: 20, marginLeft: 20 }} >
                        <InstagramOutlined style={{ fontSize: 20, color: "#bf0413" }} />
                    </IconButton>
                    <IconButton href="" style={{ backgroundColor: "#F2B705", marginRight: 20 }}>
                        <WhatsAppOutlined style={{ fontSize: 20, color: "#bf0413" }} />
                    </IconButton>
                    <IconButton href="" style={{ backgroundColor: "#F2B705", marginRight: 20 }}>
                        <FacebookOutlined style={{ fontSize: 20, color: "#bf0413" }} />
                    </IconButton>
                </Grid>
            </Drawer>
        </div>
    )
}
