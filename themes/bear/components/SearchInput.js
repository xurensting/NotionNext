import { useGlobal } from '@/lib/global'
import { useRouter } from 'next/router'
import { useRef, useState } from 'react'
/**
 * 搜索输入框（Bear 极简风格）
 * @param {*} param0
 * @returns
 */
const SearchInput = ({ keyword }) => {
  const { locale } = useGlobal()
  const router = useRouter()
  const inputRef = useRef(null)
  const [value, setValue] = useState(keyword || '')

  const goSearch = val => {
    const key = (val ?? '').trim()
    if (key) {
      router.push({ pathname: '/search/' + key })
    } else {
      router.push({ pathname: '/' })
    }
  }

  return (
    <div className='bear-search'>
      <div className='bear-search-row'>
        <input
          ref={inputRef}
          type='text'
          value={value}
          placeholder={locale.SEARCH.ARTICLES}
          onKeyUp={e => {
            if (e.key === 'Enter') goSearch(e.target.value)
            if (e.key === 'Escape') {
              setValue('')
              goSearch('')
            }
          }}
          onChange={e => setValue(e.target.value)}
        />
        <button onClick={() => goSearch(value)} aria-label={locale.NAV.SEARCH}>
          <i className='fas fa-search' />
        </button>
      </div>
    </div>
  )
}
export default SearchInput
