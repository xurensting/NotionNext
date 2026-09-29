import { siteConfig } from '@/lib/config'
import { useGlobal } from '@/lib/global'
import SmartLink from '@/components/SmartLink'
import CONFIG from '../config'
/**
 * 导航菜单列表（Bear 极简风格：文字链接）
 * @returns
 */
export const MenuList = props => {
  const { customNav, customMenu } = props
  const { locale } = useGlobal()

  let links = [
    {
      id: 1,
      icon: 'fas fa-home',
      name: locale.NAV.INDEX,
      href: '/',
      show: siteConfig('BEAR_MENU_INDEX', null, CONFIG)
    },
    {
      id: 2,
      icon: 'fas fa-archive',
      name: locale.NAV.ARCHIVE,
      href: '/archive',
      show: siteConfig('BEAR_MENU_ARCHIVE', null, CONFIG)
    },
    {
      id: 3,
      icon: 'fas fa-folder',
      name: locale.COMMON.CATEGORY,
      href: '/category',
      show: siteConfig('BEAR_MENU_CATEGORY', null, CONFIG)
    },
    {
      id: 4,
      icon: 'fas fa-tag',
      name: locale.COMMON.TAGS,
      href: '/tag',
      show: siteConfig('BEAR_MENU_TAG', null, CONFIG)
    },
    {
      id: 5,
      icon: 'fas fa-search',
      name: locale.NAV.SEARCH,
      href: '/search',
      show: siteConfig('BEAR_MENU_SEARCH', null, CONFIG)
    }
  ]

  // 自定义导航
  if (customNav) {
    links = links.concat(customNav)
  }
  // 开启自定义菜单时，使用用户自定义菜单
  if (siteConfig('CUSTOM_MENU')) {
    links = customMenu
  }

  if (!links || links.length === 0) {
    return null
  }

  return (
    <nav className='bear-nav'>
      {links.map((link, index) =>
        link?.show === false ? null : (
          <SmartLink key={index} href={link.href} className='bear-nav-link'>
            {link.name}
          </SmartLink>
        )
      )}
    </nav>
  )
}
