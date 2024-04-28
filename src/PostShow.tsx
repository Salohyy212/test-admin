import * as React from 'react';
import { Show, SimpleShowLayout, TextField, ReferenceField } from 'react-admin';

const PostShow: React.FC = (props) => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="title" />
            <TextField source="user" />
            <TextField source="name" />  
        </SimpleShowLayout>
    </Show>
);

export default PostShow;