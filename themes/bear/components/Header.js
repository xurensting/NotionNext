import { siteConfig } from '@/lib/config'
import SmartLink from '@/components/SmartLink'
import DarkModeButton from '@/components/DarkModeButton'
import { MenuList } from './MenuList'
/**
 * 网站顶部：吸顶毛玻璃导航
 * 左侧站点标题，右侧导航菜单
 * @returns
 */
export const Header = props => {
  return (
    <header className='bear-header'>
      <SmartLink href='/' className='bear-title'>
        <h1>{siteConfig('TITLE')}</h1>
      </SmartLink>
      <MenuList {...props} />
      <DarkModeButton />
    </header>
  )
}
