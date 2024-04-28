import * as React from 'react';
import { Create, SimpleForm, TextInput, ReferenceInput, SelectInput } from 'react-admin';

const PostCreate: React.FC = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="title" />
            <ReferenceInput source="user" reference="users">
                <SelectInput optionText="name" />
            </ReferenceInput>
        </SimpleForm>
    </Create>
);

export default PostCreate;