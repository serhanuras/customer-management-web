import * as React from "react";
import { Admin, Resource, ListGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import ListAltIcon from '@material-ui/icons/ListAlt';
import BusinessIcon from '@material-ui/icons/Business';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import Menu from "./components/Menu";
import CustomLayout from "./components/CustomLayout";
import { TitleList, TitleEdit, TitlePost } from "./pages/Titles";
import { createMuiTheme } from '@material-ui/core/styles';

import indigo from '@material-ui/core/colors/indigo';
import red from '@material-ui/core/colors/red';
import {CompanyEdit, CompanyList, CompanyPost} from "./pages/Company";
import {CustomerEdit, CustomerList, CustomerPost} from "./pages/Customer";


const myTheme = createMuiTheme({
    palette: {
        primary: indigo,
        secondary: {
            light: '#fff',
            main: '#fff',
            dark: '#fff',
            contrastText: '#000',
        },
        error: red,
        contrastThreshold: 3,
        tonalOffset: 0.2,
    },
    typography: {
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Arial',
            'sans-serif',
        ].join(','),
    },
    overrides: {
        MuiButton: { // override the styles of all instances of this component
            root: { // Name of the rule
                color: 'white', // Some CSS
            },
        },
    },
});

const dataProvider = jsonServerProvider('http://localhost:5001/api');


const App = () =>{

    return (
        <Admin  layout={CustomLayout}  theme={myTheme}  menu={Menu} dataProvider={dataProvider}>
            <Resource options={{ label: 'Titles' }}  name="titles" list={TitleList} edit={TitleEdit} create={TitlePost}   icon={ListAltIcon} />
            <Resource options={{ label: 'Companies' }} name="companys" list={CompanyList} edit={CompanyEdit} create={CompanyPost}   icon={BusinessIcon} />
            <Resource options={{ label: 'Customers' }} name="customers" list={CustomerList} edit={CustomerEdit} create={CustomerPost}   icon={AssignmentIndIcon} />
        </Admin>
    );
}

export default App;