'use client'
import Comment from '@/components/Comment'
import replaceSearchResult from '@/components/Mark'
import NotionPage from '@/components/NotionPage'
import ShareBar from '@/components/ShareBar'
import SmartLink from '@/components/SmartLink'
import { siteConfig } from '@/lib/config'
import { useGlobal } from '@/lib/global'
import { isBrowser } from '@/lib/utils'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { BlogList } from './components/BlogList'
import BlogItem from './components/BlogItem'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { PostLock } from './components/PostLock'
import { PostMeta } from './components/PostMeta'
import SearchInput from './components/SearchInput'
import CONFIG from './config'
import { Style } from './style'

/**
 * 基础布局框架（Bear 极简单栏）
 * 其它页面都嵌入在 LayoutBase 中，居中 720px 单栏
 * @returns {JSX.Element}
 * @constructor
 */
const LayoutBase = props => {
  const { children } = props
  return (
    <div id='theme-bear'>
      <Style />
      {/* 吸顶毛玻璃导航 */}
      <Header {...props} />
      {/* 主体 */}
      <main className='bear-main'>
        {props.slotTop}
        {children}
      </main>
      {/* 页脚 */}
      <Footer {...props} />
    </div>
  )
}

/**
 * 首页（即文章列表）
 * @param {*} props
 * @returns
 */
const LayoutIndex = props => {
  return <LayoutPostList {...props} />
}

/**
 * 文章列表
 * @param {*} props
 * @returns
 */
const LayoutPostList = props => {
  const { category, tag } = props
  return (
    <>
      {/* 分类头 */}
      {category && (
        <h3 className='bear-list-heading'>
          <i className='mr-1 fas fa-folder-open' />
          {category}
        </h3>
      )}
      {/* 标签头 */}
      {tag && <h3 className='bear-list-heading'>#{tag}</h3>}
      <BlogList {...props} />
    </>
  )
}

/**
 * 文章详情页
 * @param {*} props
 * @returns
 */
const LayoutSlug = props => {
  const { post, lock, validPassword } = props
  const router = useRouter()
  const waiting404 = siteConfig('POST_WAITING_TIME_FOR_404') * 1000
  useEffect(() => {
    if (!post) {
      setTimeout(() => {
        if (isBrowser) {
          const article = document.querySelector('#article-wrapper #notion-article')
          if (!article) {
            router.push('/404').then(() => {
              console.warn('找不到页面', router.asPath)
            })
          }
        }
      }, waiting404)
    }
  }, [post])
  return (
    <>
      {lock ? (
        <PostLock validPassword={validPassword} />
      ) : post && (
        <article className='bear-article'>
          <h1 className='font-bold text-2xl'>{post.title}</h1>
          <PostMeta post={post} />
          <div id='article-wrapper'>
            <NotionPage post={post} />
            <ShareBar post={post} />
          </div>
          <Comment frontMatter={post} />
        </article>
      )}
    </>
  )
}

/**
 * 404 页
 * @param {*} props
 * @returns
 */
const Layout404 = props => {
  const router = useRouter()
  useEffect(() => {
    setTimeout(() => {
      const article = isBrowser && document.getElementById('article-wrapper')
      if (!article) {
        router.push('/').then(() => {
          // 返回首页
        })
      }
    }, 3000)
  }, [])
  return (
    <div className='bear-404'>
      <h2>404</h2>
      <p>{'页面无法加载，即将返回首页'}</p>
    </div>
  )
}

/**
 * 搜索页
 * @param {*} props
 * @returns
 */
const LayoutSearch = props => {
  const { keyword } = props
  const router = useRouter()
  useEffect(() => {
    if (isBrowser) {
      const container = document.getElementById('posts-wrapper')
      if (keyword && container) {
        replaceSearchResult({
          doms: container,
          search: keyword,
          target: {
            element: 'span',
            className: 'text-red-500 border-b border-dashed'
          }
        })
      }
    }
  }, [router])
  return (
    <>
      <div className='bear-search-wrap'>
        <SearchInput keyword={keyword} {...props} />
      </div>
      <BlogList {...props} />
    </>
  )
}

/**
 * 归档列表：按日期将文章分组排序
 * @param {*} props
 * @returns
 */
const LayoutArchive = props => {
  const { archivePosts } = props
  return (
    <div>
      {Object.keys(archivePosts).map(archiveTitle => (
        <section key={archiveTitle}>
          <h3 className='bear-archive-title'>{archiveTitle}</h3>
          <ul className='bear-posts'>
            {archivePosts[archiveTitle].map(post => (
              <BlogItem key={post.id} post={post} />
            ))}
          </ul>
        </section>
      ))}
    </div>
  )
}

/**
 * 分类列表
 * @param {*} props
 * @returns
 */
const LayoutCategoryIndex = props => {
  const { categoryOptions } = props
  return (
    <div>
      {categoryOptions?.map(category => (
        <SmartLink
          key={category.name}
          href={`/category/${category.name}`}
          passHref
          legacyBehavior>
          <div className='bear-category-item'>
            <i className='mr-1 fas fa-folder' />
            {category.name}({category.count})
          </div>
        </SmartLink>
      ))}
    </div>
  )
}

/**
 * 标签列表
 * @param {*} props
 * @returns
 */
const LayoutTagIndex = props => {
  const { tagOptions } = props
  return (
    <div>
      {tagOptions.map(tag => (
        <div key={tag.name} className='bear-tag-item'>
          <SmartLink
            href={`/tag/${encodeURIComponent(tag.name)}`}
            passHref
            className='bear-tag-item'>
            <i className='mr-1 fas fa-tag' />
            {tag.name + (tag.count ? `(${tag.count})` : '')}
          </SmartLink>
        </div>
      ))}
    </div>
  )
}

export {
  Layout404,
  LayoutArchive,
  LayoutBase,
  LayoutCategoryIndex,
  LayoutIndex,
  LayoutPostList,
  LayoutSearch,
  LayoutSlug,
  LayoutTagIndex,
  CONFIG as THEME_CONFIG
}
