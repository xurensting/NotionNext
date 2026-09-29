import { useGlobal } from '@/lib/global'
import { useEffect, useRef } from 'react'
/**
 * 文章锁：通过此组件校验密码访问文章
 * @param {validPassword} props 回调函数，校验正确回调入参为 true
 * @returns
 */
export const PostLock = props => {
  const { validPassword } = props
  const { locale } = useGlobal()
  const inputRef = useRef(null)
  const tipsRef = useRef(null)

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  const submit = () => {
    const p = inputRef.current?.value
    if (!validPassword?.(p)) {
      if (tipsRef.current) {
        tipsRef.current.textContent = locale.COMMON.PASSWORD_ERROR
      }
    }
  }

  return (
    <div className='bear-lock'>
      <div className='bear-lock-title'>{locale.COMMON.ARTICLE_LOCK_TIPS}</div>
      <div className='bear-lock-row'>
        <input
          ref={inputRef}
          type='password'
          onKeyDown={e => {
            if (e.key === 'Enter') submit()
          }}
        />
        <button onClick={submit}>
          <i className='fas fa-key' />
          <span>{locale.COMMON.SUBMIT}</span>
        </button>
      </div>
      <div ref={tipsRef} className='bear-lock-tips' />
    </div>
  )
}
