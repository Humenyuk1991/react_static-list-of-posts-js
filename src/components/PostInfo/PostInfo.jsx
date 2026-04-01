import './PostInfo.scss';
import { CommentList } from '../CommentList/CommentList';
import { UserInfo } from '../UserInfo/UserInfo';

export const PostInfo = ({ post }) => {
  const { comments: postComments } = post;

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{post.title}</h3>

        <p>
          {' Posted by '}
          {post.user && <UserInfo user={post.user} />}
        </p>
      </div>
      <p className="PostInfo__body">{post.body}</p>
      <hr />
      {postComments.length === 0 ? (
        <b data-cy="NoCommentsMessage">No comments yet</b>
      ) : (
        <CommentList comments={postComments} />
      )}
    </div>
  );
};
