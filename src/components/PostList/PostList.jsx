import { PostInfo } from '../PostInfo/PostInfo';

export const PostList = ({ posts, comments }) => {
  return (
    <div className="PostList">
      {posts.map(post => (
        <PostInfo key={post.id} post={post} comments={comments} />
      ))}
    </div>
  );
};
