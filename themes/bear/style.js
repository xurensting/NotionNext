/* eslint-disable react/no-unknown-property */
import CONFIG from './config'
import { siteConfig } from '@/lib/config'
import { themeConsoleStyle } from '@/lib/themeConsoleStyle'
/**
 * 此处样式只对当前主题生效
 * 不支持 tailwindCSS 的 @apply 语法
 * 参考样式：https://linyue.bearblog.dev
 * @returns
 */
const Style = () => {
  const maxWidth = siteConfig('BEAR_MAX_WIDTH', null, CONFIG)
  const bg = siteConfig('BEAR_COLOR_BG', null, CONFIG)
  const bgEnd = siteConfig('BEAR_COLOR_BG_END', null, CONFIG)
  const bgDark = siteConfig('BEAR_COLOR_BG_DARK', null, CONFIG)
  const bgDarkEnd = siteConfig('BEAR_COLOR_BG_DARK_END', null, CONFIG)
  const heading = siteConfig('BEAR_COLOR_HEADING', null, CONFIG)
  const text = siteConfig('BEAR_COLOR_TEXT', null, CONFIG)
  const link = siteConfig('BEAR_COLOR_LINK', null, CONFIG)
  const visited = siteConfig('BEAR_COLOR_VISITED', null, CONFIG)
  const codeBg = siteConfig('BEAR_COLOR_CODE_BG', null, CONFIG)
  const quote = siteConfig('BEAR_COLOR_BLOCKQUOTE', null, CONFIG)

  return (
    <style jsx global>{`
      /* ============ Bear 主题 ============ */
      #theme-bear{
        font-family: Verdana, -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Microsoft YaHei", sans-serif;
      }

      /* 背景：浅色渐变 / 深色渐变，固定在视口 */
      #theme-bear{
        background-color: #fff;
        background-image: linear-gradient(135deg, ${bg} 0%, ${bgEnd} 100%);
        background-attachment: fixed;
        min-height: 100vh;
        color: ${text};
      }
      @media (prefers-color-scheme: dark) {
        #theme-bear{
          background-image: linear-gradient(135deg, ${bgDark} 0%, ${bgDarkEnd} 100%);
        }
      }

      #theme-bear h1, #theme-bear h2, #theme-bear h3,
      #theme-bear h4, #theme-bear h5, #theme-bear h6{
        font-family: inherit;
        color: ${heading};
        line-height: 1.35;
        font-weight: 700;
      }

      #theme-bear a{
        color: ${link};
        cursor: pointer;
        text-decoration: none;
      }
      #theme-bear a:hover{
        text-decoration: underline;
      }
      #theme-bear a:visited{
        color: ${visited};
      }

      #theme-bear strong, #theme-bear b{ color: ${heading}; }

      #theme-bear code{
        font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
        padding: 2px 4px;
        background-color: ${codeBg};
        color: ${heading};
        border-radius: 3px;
        font-size: 0.9em;
      }
      #theme-bear blockquote{
        border-left: 3px solid #999;
        color: ${quote};
        padding-left: 20px;
        font-style: italic;
        margin: 1em 0;
      }
      #theme-bear table{ width: 100%; border-collapse: collapse; }
      #theme-bear hr{ border: 0; border-top: 1px dashed #999; }
      #theme-bear img{ max-width: 100%; }

      /* ── 吸顶毛玻璃导航 ── */
      #theme-bear .bear-header{
        position: sticky;
        top: 16px;
        z-index: 20;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 8px;
        margin: 0 0 24px 0;
        padding: 8px 16px;
        background: rgba(255, 255, 255, 0.15);
        backdrop-filter: blur(18px) saturate(180%);
        -webkit-backdrop-filter: blur(18px) saturate(180%);
        border: 1px solid rgba(255, 255, 255, 0.25);
        border-radius: 8px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.04);
      }
      @media (prefers-color-scheme: dark) {
        #theme-bear .bear-header{
          background: rgba(20, 20, 20, 0.25);
          border-color: rgba(255, 255, 255, 0.08);
        }
      }
      #theme-bear .bear-header .bear-title{
        text-decoration: none;
      }
      #theme-bear .bear-header .bear-title h1{
        font-size: 1.25em;
        margin: 0;
        line-height: 1.2;
        color: ${heading};
      }
      #theme-bear .bear-nav{
        display: flex;
        align-items: center;
        gap: 8px;
        flex-wrap: wrap;
      }
      #theme-bear .bear-nav .bear-nav-link{
        color: ${text};
        font-size: 0.95em;
      }
      #theme-bear .bear-nav .bear-nav-link:hover{
        color: ${link};
        text-decoration: none;
      }

      /* ── 主体：单栏居中 ── */
      #theme-bear .bear-main{
        max-width: ${maxWidth};
        margin: 0 auto;
        padding: 8px 20px 40px;
        line-height: 1.6;
        box-sizing: border-box;
      }

      /* ── 文章列表（日期 + 标题） ── */
      #theme-bear ul.bear-posts{
        list-style: none;
        padding: 0;
        margin: 8px 0;
      }
      #theme-bear ul.bear-posts li{
        display: flex;
        align-items: baseline;
        padding: 6px 0;
      }
      #theme-bear ul.bear-posts li .bear-post-date{
        flex: 0 0 128px;
        font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
        font-style: normal;
        font-size: 15px;
        color: ${text};
        opacity: 0.85;
      }
      #theme-bear ul.bear-posts li .bear-post-body{
        flex: 1;
        min-width: 0;
      }
      #theme-bear ul.bear-posts li .bear-post-title{
        color: ${link};
      }
      #theme-bear ul.bear-posts li .bear-post-summary{
        margin: 4px 0 0;
        font-size: 0.9em;
        color: ${text};
        opacity: 0.8;
        line-height: 1.5;
      }
      @media (max-width: 520px){
        #theme-bear ul.bear-posts li{
          flex-direction: column;
        }
        #theme-bear ul.bear-posts li .bear-post-date{
          flex-basis: auto;
          font-size: 13px;
        }
      }

      /* 列表页标题（分类/标签头） */
      #theme-bear .bear-list-heading{
        margin: 20px 0 12px;
        font-size: 1.1em;
      }

      /* ── 分页 ── */
      #theme-bear .bear-pagination{
        display: flex;
        justify-content: space-between;
        margin: 28px 0 12px;
        font-size: 0.9em;
      }
      #theme-bear .bear-pagination a{
        color: ${link};
      }
      #theme-bear .bear-pagination .bear-hidden{
        visibility: hidden;
      }

      /* ── 文章详情页 ── */
      #theme-bear article.bear-article h1{
        font-size: 1.6em;
        margin: 8px 0 4px;
      }
      #theme-bear .bear-post-meta{
        margin: 4px 0 20px;
        color: ${text};
        opacity: 0.85;
      }
      #theme-bear .bear-post-meta time{
        font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
        font-style: normal;
        font-size: 15px;
      }

      /* ── 归档 / 分类 / 标签 索引 ── */
      #theme-bear .bear-archive-title{
        margin: 8px 0 6px;
        font-size: 1.15em;
      }
      #theme-bear .bear-tag-item{
        display: inline-block;
        margin: 0 8px 8px 0;
        color: ${link};
      }
      #theme-bear .bear-category-item{
        display: block;
        margin: 4px 0;
        color: ${link};
      }

      /* ── 搜索框 ── */
      #theme-bear .bear-search{
        margin: 12px 0 16px;
      }
      #theme-bear .bear-search-row{
        display: flex;
        gap: 6px;
      }
      #theme-bear .bear-search input{
        flex: 1;
        min-width: 0;
        box-sizing: border-box;
        padding: 8px 12px;
        font-size: 1em;
        font-family: inherit;
        border: 1px solid rgba(0,0,0,0.15);
        border-radius: 6px;
        background: rgba(255,255,255,0.6);
        color: ${text};
        outline: none;
      }
      #theme-bear .bear-search input:focus{
        border-color: ${link};
      }
      #theme-bear .bear-search button{
        border: 1px solid rgba(0,0,0,0.15);
        border-radius: 6px;
        background: rgba(255,255,255,0.6);
        color: ${text};
        cursor: pointer;
        padding: 0 12px;
      }
      #theme-bear .bear-search button:hover{
        color: ${link};
      }
      @media (prefers-color-scheme: dark) {
        #theme-bear .bear-search input,
        #theme-bear .bear-search button{
          background: rgba(0,0,0,0.3);
          border-color: rgba(255,255,255,0.15);
        }
      }

      /* ── 文章锁 ── */
      #theme-bear .bear-lock{
        text-align: center;
        padding: 60px 0;
      }
      #theme-bear .bear-lock-title{
        margin-bottom: 16px;
        color: ${heading};
      }
      #theme-bear .bear-lock-row{
        display: inline-flex;
        gap: 6px;
      }
      #theme-bear .bear-lock input{
        padding: 8px 12px;
        border: 1px solid rgba(0,0,0,0.15);
        border-radius: 6px;
        background: rgba(255,255,255,0.6);
        color: ${text};
        outline: none;
        font-family: inherit;
      }
      #theme-bear .bear-lock button{
        border: 1px solid rgba(0,0,0,0.15);
        border-radius: 6px;
        background: rgba(255,255,255,0.6);
        color: ${text};
        cursor: pointer;
        padding: 0 12px;
        font-family: inherit;
      }
      #theme-bear .bear-lock button:hover{
        color: ${link};
      }
      #theme-bear .bear-lock-tips{
        margin-top: 12px;
        color: #e53935;
        font-size: 0.9em;
      }
      @media (prefers-color-scheme: dark) {
        #theme-bear .bear-lock input,
        #theme-bear .bear-lock button{
          background: rgba(0,0,0,0.3);
          border-color: rgba(255,255,255,0.15);
        }
      }

      /* ── 页脚 ── */
      #theme-bear .bear-footer{
        padding: 30px 20px 40px;
        text-align: center;
        font-size: 0.9em;
        color: ${text};
        opacity: 0.8;
      }
      #theme-bear .bear-footer a{ color: ${link}; }
      #theme-bear .bear-footer .bear-copyright{
        margin: 8px 0;
      }

      /* 404 */
      #theme-bear .bear-404{
        text-align: center;
        padding: 60px 0;
      }
      #theme-bear .bear-404 h2{
        font-size: 2em;
      }

      ${themeConsoleStyle('bear', CONFIG)}
    `}</style>
  )
}
export { Style }
