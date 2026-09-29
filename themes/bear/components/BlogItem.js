import NotionIcon from '@/components/NotionIcon'
import { siteConfig } from '@/lib/config'
import SmartLink from '@/components/SmartLink'
import CONFIG from '../config'
/**
 * 博客列表的单个条目（Bear 极简风格：日期 + 标题）
 * @param {*} param0
 * @returns
 */
const BlogItem = ({ post }) => {
  const showSummary = siteConfig('BEAR_POST_LIST_SUMMARY', null, CONFIG)
  const date = post?.publishDay || post?.date?.start_date || post?.createdTime || post?.lastEditedDay
  return (
    <li>
      <span className='bear-post-date'>{date}</span>
      <div className='bear-post-body'>
        <SmartLink href={post?.href} className='bear-post-title'>
          {siteConfig('POST_TITLE_ICON') && <NotionIcon icon={post.pageIcon} />}
          {post?.title}
        </SmartLink>
        {showSummary && post?.summary && (
          <p className='bear-post-summary'>{post.summary}</p>
        )}
      </div>
    </li>
  )
}
export default BlogItem
