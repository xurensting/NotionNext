/**
 * Bear 主题配置文件
 * 所有可个性化配置项集中于此，均可通过 blog.config.js 中的同名键覆盖。
 * 命名规范：BEAR_ 前缀，与 NotionNext 其它主题保持一致。
 */
const CONFIG = {
  // ─── 色彩（参考 linyue.bearblog.dev） ───
  BEAR_COLOR_BG: '#f5f7fa', // 浅色模式背景起点
  BEAR_COLOR_BG_END: '#e4eaf5', // 浅色模式背景终点
  BEAR_COLOR_BG_DARK: '#121212', // 深色模式背景起点
  BEAR_COLOR_BG_DARK_END: '#1a1a1a', // 深色模式背景终点
  BEAR_COLOR_HEADING: '#222', // 标题颜色
  BEAR_COLOR_TEXT: '#444', // 正文颜色
  BEAR_COLOR_LINK: '#3273dc', // 链接颜色
  BEAR_COLOR_VISITED: '#8b6fcb', // 已访问链接颜色
  BEAR_COLOR_CODE_BG: '#f2f2f2', // 代码背景色
  BEAR_COLOR_BLOCKQUOTE: '#222', // 引用文字颜色

  // ─── 布局 ───
  BEAR_MAX_WIDTH: '720px', // 主体内容最大宽度

  // ─── 导航菜单开关 ───
  BEAR_MENU_INDEX: true, // 首页
  BEAR_MENU_ARCHIVE: true, // 归档
  BEAR_MENU_CATEGORY: true, // 分类
  BEAR_MENU_TAG: true, // 标签
  BEAR_MENU_SEARCH: true, // 搜索

  // ─── 列表选项 ───
  BEAR_POST_LIST_COVER: false, // 列表是否显示封面图（Bear 极简风格默认关闭）
  BEAR_POST_LIST_SUMMARY: false, // 列表是否显示摘要（Bear 极简风格默认关闭）
  BEAR_SHOW_READ_TIME: true // 文章页是否显示阅读时长
}
export default CONFIG
