
import { Admin, Resource, ListGuesser, EditGuesser, ShowGuesser } from 'react-admin';
import { dataProvider } from './dataProvider';
import PostList from './PostList';
import PostCreate from './PostCreate';
import PostEdit from './PostEdit';
import PostShow from './PostShow';
import CommentList from './CommentList';
import CommentCreate from './CommentCreate';
import CommentEdit from './CommentEdit';
import jsonServerProvider from 'ra-data-json-server';


export const App = () => (
    <Admin
    dataProvider={jsonServerProvider('https://jsonplaceholder.typicode.com')}
	>
        <Resource
            name="posts"
            list={PostList}
            create={PostCreate}
            edit={PostEdit}
            show={PostShow}
        />
        <Resource
            name="comments"
            list={CommentList}
            create={CommentCreate}
            edit={CommentEdit}
        />
        
    </Admin>
);

    