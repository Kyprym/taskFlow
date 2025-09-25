import CommentStyle from './comment.module.scss'

export type CommentProps = {
    postId?:number;
    id:number;
    name:string;
    email:string;
    body:string;
}



export const Comment = ({ id, name, email, body }: CommentProps) => {
  return (
    <article className={CommentStyle.comment}>
      <header className={CommentStyle.commentHeader}>
        <h3  className={CommentStyle.commentAuthor}>
          {name}
        </h3>
        <address className={CommentStyle.commentEmail}>{email}</address>
      </header>
      <p className={CommentStyle.commentBody}>{body}</p>
    </article>
  );
};