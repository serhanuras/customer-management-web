import * as React from "react";
import { List, Datagrid, TextField, SimpleForm, Create, Edit, TextInput, ReferenceField, ReferenceInput, SelectInput } from 'react-admin';
import {
    required,
    minLength,
    maxLength,
    minValue,
    maxValue,
    number,
    regex,
    email,
    choices
} from 'react-admin';
import PostRowStyle from "../components/postRowStyle";

const validateSelect = [required()];
const validateName = [required(), minLength(2), maxLength(50)];


export const CustomerList = props => (
    <List {...props} title="List of companies">
        <Datagrid rowClick="edit"  rowStyle={PostRowStyle}>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="surname" />
            <TextField source="company_name" />
            <TextField source="title" />

        </Datagrid>
    </List>
);

export const CustomerEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="name" validate={validateName}/>
            <TextInput source="surname" validate={validateName}/>
            <ReferenceInput source="company_id" reference="companys">
                <SelectInput optionText="name"  validate={validateSelect}/>
            </ReferenceInput>
            <ReferenceInput source="title_id" reference="titles">
                <SelectInput optionText="value"  validate={validateSelect}/>
            </ReferenceInput>
        </SimpleForm>
    </Edit>
);

export const CustomerPost = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" validate={validateName}/>
            <TextInput source="surname" validate={validateName}/>
            <ReferenceInput source="company_id" reference="companys">
                <SelectInput optionText="name"  validate={validateSelect}/>
            </ReferenceInput>
            <ReferenceInput source="title_id" reference="titles">
                <SelectInput optionText="value" validate={validateSelect} />
            </ReferenceInput>

        </SimpleForm>
    </Create>
);