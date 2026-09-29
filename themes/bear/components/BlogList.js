import { siteConfig } from '@/lib/config'
import { useGlobal } from '@/lib/global'
import SmartLink from '@/components/SmartLink'
import { useRouter } from 'next/router'
import CONFIG from '../config'
import BlogItem from './BlogItem'
/**
 * 使用分页的博客列表（Bear 极简风格）
 * @param {*} props
 * @returns
 */
export const BlogList = props => {
  const { page = 1, posts, postCount } = props
  const { locale, NOTION_CONFIG } = useGlobal()
  const router = useRouter()

  const totalPage = Math.ceil(
    postCount / siteConfig('POSTS_PER_PAGE', null, NOTION_CONFIG)
  )
  const currentPage = +page
  const showPrev = currentPage > 1
  const showNext = page < totalPage
  const pagePrefix = router.asPath
    .split('?')[0]
    .replace(/\/page\/[1-9]\d*/, '')
    .replace(/\/$/, '')
    .replace('.html', '')

  return (
    <div className='bear-blog'>
      <ul className='bear-posts' id='posts-wrapper'>
        {posts?.map(post => (
          <BlogItem key={post.id} post={post} />
        ))}
      </ul>
      <div className='bear-pagination'>
        <SmartLink
          href={{
            pathname:
              currentPage - 1 === 1
                ? `${pagePrefix}/`
                : `${pagePrefix}/page/${currentPage - 1}`,
            query: router.query.s ? { s: router.query.s } : {}
          }}
          className={showPrev ? '' : 'bear-hidden'}>
          {locale.PAGINATION.PREV}
        </SmartLink>
        <SmartLink
          href={{
            pathname: `${pagePrefix}/page/${currentPage + 1}`,
            query: router.query.s ? { s: router.query.s } : {}
          }}
          className={showNext ? '' : 'bear-hidden'}>
          {locale.PAGINATION.NEXT}
        </SmartLink>
      </div>
    </div>
  )
}
