import { parse, stringify } from './querystring'

let search = '?foo=bar&baz=qux&corge=garply'

const params = parse(search)

search = stringify(params)
