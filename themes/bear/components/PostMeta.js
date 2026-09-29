import SmartLink from '@/components/SmartLink'
/**
 * 文章详情页元信息（Bear 极简风格：斜体日期，可选分类）
 * @returns
 */
export const PostMeta = props => {
  const { post } = props
  if (!post) return null
  const date = post?.publishDay || post?.date?.start_date || post?.createdTime || post?.lastEditedDay
  return (
    <p className='bear-post-meta'>
      <i>
        <time>{date}</time>
      </i>
      {post?.type !== 'Page' && post?.category && (
        <>
          {' · '}
          <SmartLink href={`/category/${post.category}`}>{post.category}</SmartLink>
        </>
      )}
    </p>
  )
}
