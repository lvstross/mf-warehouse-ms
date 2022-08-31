import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { Theme, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

export default function SideBar() {
    const navigate = useNavigate();
    const theme: Theme = useTheme();
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleDrawer = (open: boolean) => (
        event: React.KeyboardEvent | React.MouseEvent,
    ) => {
        if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
            (event as React.KeyboardEvent).key === 'Shift')
        ) {
        return;
        }

        setIsOpen(open);
    };

    const links = [
        { title: 'Dashboard', url: '/' },
        { title: 'Customers', url: '/customers' },
        { title: 'Departments', url: '/departments' },
        { title: 'Inventory', url: '/inventory' },
        { title: 'Invoices', url: '/invoices' },
        { title: 'Products', url: '/products' },
        { title: 'Purchase Orders', url: '/purchaseorders' },
        { title: 'Purchases', url: '/purchases' },
        { title: 'Routers', url: '/routers' },
        { title: 'Vendors', url: '/vendors' }
    ];

    return (
        <React.Fragment>
            <IconButton
                style={{ marginRight: theme.spacing(2) }}
                onClick={toggleDrawer(true)}
                edge="start"
                color="inherit"
                aria-label="menu"
            >
                <MenuIcon />
            </IconButton>
            <Drawer anchor="left" open={isOpen} onClose={toggleDrawer(false)}>
            <div
                style={{ width: '250px' }}
                role="presentation"
                onClick={toggleDrawer(false)}
                onKeyDown={toggleDrawer(false)}
            >
                <List>
                    {links.map((l) => (
                    <ListItem button key={l.title} onClick={() => navigate(l.url)}>
                        <ListItemText primary={l.title} />
                    </ListItem>
                    ))}
                </List>
                </div>
            </Drawer>
        </React.Fragment>
    );
}
