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
export const TitleList = props => (
    <List {...props} title="List of titles">
        <Datagrid rowClick="edit" rowStyle={PostRowStyle}>
            <TextField source="id" />
            <TextField source="value" />
            <TextField source="description" />

        </Datagrid>
    </List>
);

export const TitleEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput label="Id" disabled source="id" />
            <TextInput label="Value" source="value" validate={validateName} />
            <TextInput label="Description" source="description" />

        </SimpleForm>
    </Edit>
);

export const TitlePost = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput label="Value" source="value" validate={validateName} />
            <TextInput label="Description" source="description" />

        </SimpleForm>
    </Create>
);