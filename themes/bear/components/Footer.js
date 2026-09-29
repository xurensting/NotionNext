import BeiAnSite from '@/components/BeiAnSite'
import BeiAnGongAn from '@/components/BeiAnGongAn'
import CopyRightDate from '@/components/CopyRightDate'
import PoweredBy from '@/components/PoweredBy'
/**
 * 页脚：居中极简
 * @returns
 */
export const Footer = props => {
  return (
    <footer className='bear-footer'>
      <div className='bear-copyright'>
        <CopyRightDate />
        <div className='bear-footer-links'>
          <BeiAnSite />
          <BeiAnGongAn />
        </div>
      </div>
      <PoweredBy />
    </footer>
  )
}
