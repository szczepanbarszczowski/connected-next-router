import { parse, format } from 'url'

const locationFromUrl = (_url) => {
  const url = typeof _url === 'object' ? format(_url) : _url
  const { hash, search, pathname } = parse(url)
  let query = {}

  const str = typeof search === 'string' ? search.substring(1) : ''

  str.replace(/([^=&]+)=([^&]*)/g, function(m, key, value) {
    query[decodeURIComponent(key)] = decodeURIComponent(value)
  })

  return {
    pathname,
    search: search ? search : '',
    hash: hash ? hash : '',
    query
  }
}

export default locationFromUrl
