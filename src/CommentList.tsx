import * as React from 'react';
import { List, Datagrid, TextField, EditButton } from 'react-admin';

const CommentList: React.FC = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="email" />
            <EditButton />
        </Datagrid>
    </List>
);

export default CommentList;