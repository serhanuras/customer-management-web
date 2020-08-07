import * as React from "react";
import {
    List,
    Datagrid,
    TextField,
    SimpleForm,
    Create,
    Edit,
    TextInput,
    required,
    minLength,
    maxLength
} from 'react-admin';
import PostRowStyle from "../components/postRowStyle";


const validateName = [required(), minLength(2), maxLength(50)];

export const CompanyList = props => (
    <List {...props} title="List of companies">
        <Datagrid rowClick="edit"  rowStyle={PostRowStyle}>
            <TextField source="id" />
            <TextField source="name" validate={validateName}/>
            <TextField source="address" />

        </Datagrid>
    </List>
);

export const CompanyEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="name"  validate={validateName}/>
            <TextInput source="address" />

        </SimpleForm>
    </Edit>
);

export const CompanyPost = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="address" />

        </SimpleForm>
    </Create>
);