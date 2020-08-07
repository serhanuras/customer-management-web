// in src/Menu.js
import * as React from 'react';
import { createElement } from 'react';
import { useSelector } from 'react-redux';
import { useMediaQuery } from '@material-ui/core';
import { MenuItemLink, getResources } from 'react-admin';
import { withRouter } from 'react-router-dom';
import AirplanemodeActiveIcon from '@material-ui/icons/AirplanemodeActive';
import DashboardIcon from '@material-ui/icons/Dashboard';
import HowToVoteIcon from '@material-ui/icons/HowToVote';
import MemoryIcon from '@material-ui/icons/Memory';
import MarkunreadMailboxIcon from '@material-ui/icons/MarkunreadMailbox';
import StorageIcon from '@material-ui/icons/Storage';
import ExitIcon from '@material-ui/icons/PowerSettingsNew';
import MenuItem from '@material-ui/core/MenuItem';
import { useLogout } from 'react-admin';
import PeopleIcon from '@material-ui/icons/People';

const Menu = ({ onMenuClick, logout }) => {
    const funcLogout = useLogout();
    const handleLogout = () => funcLogout();
    const isXSmall = useMediaQuery(theme => theme.breakpoints.down('xs'));
    const open = useSelector(state => state.admin.ui.sidebarOpen);
    const resources = useSelector(getResources);
    return (
        <div style={{paddingTop:"30px"}}>

            {resources.map(resource => (
                <MenuItemLink
                    key={resource.name}
                    to={`/${resource.name}`}
                    primaryText={resource.options && (resource.options.label || resource.name)}
                    leftIcon={createElement(resource.icon)}
                    onClick={onMenuClick}
                    sidebarIsOpen={open}
                />
            ))}



            {isXSmall && logout}
        </div>
    );
}

export default withRouter(Menu);