import './App.scss';

import { PostList } from './components/PostList/PostList';
import  postsFromServer  from './api/posts.json';
import  commentsFromServer  from './api/comments.json';
import usersFromServer from './api/users.json';

function getUserById(userId) {
  return usersFromServer.find(user => user.id === userId) || null;
}

export const processedPosts = postsFromServer.slice(0, 2).map(post => ({
  ...post,
  user: getUserById(post.userId),
}));

export const processedComments = commentsFromServer.map(comment => ({
  ...comment,
  user: getUserById(comment.userId),
}));

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={processedPosts} comments={processedComments} />
  </section>
);
