import * as React from 'react';
import { List, Datagrid, TextField, Button, EditButton, useRecordContext} from 'react-admin';
import { Link } from 'react-router-dom';

const CommentsButton = () => {
    const record = useRecordContext();
    return (
        <Button
            component={Link}
            to={`/posts/${record.id}/comments`}
            color="primary"
        >
            <span>Comments</span> 
        </Button>
    );
};

const PostList: React.FC = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="title" />
            <TextField source="user" />
            <TextField source="name" />  
            <EditButton />
        </Datagrid>
    </List>
);

export default PostList;
