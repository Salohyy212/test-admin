import * as React from 'react';
import { Create, SimpleForm, TextInput } from 'react-admin';

const CommentCreate: React.FC = (props) => (
    <Create {...props}>
        <SimpleForm>
        <TextInput source="id" />
            <TextInput source="name" />
            <TextInput source="email" />
        </SimpleForm>
    </Create>
);

export default CommentCreate;