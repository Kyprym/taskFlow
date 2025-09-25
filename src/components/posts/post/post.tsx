import type { PostProps } from "../../../store/reducers/postsReduser"
import PostStyle from './post.module.scss'

export const Post = ({ title, body }: PostProps) => {
  return (
    <article className={PostStyle.post}>
      <h2 className={PostStyle.postTitle}>{title}</h2>
      <p className={PostStyle.postBody}>{body}</p>
    </article>
  )
}