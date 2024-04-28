import * as React from 'react';
import { Edit, SimpleForm, TextInput, TextField } from 'react-admin';

const PostEdit: React.FC = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="title" />
            <TextField source="user" />
            <TextField source="name" />  
        </SimpleForm>
    </Edit>
);

export default PostEdit;