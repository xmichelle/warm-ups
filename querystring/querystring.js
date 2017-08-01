
export function parse(search) {
  const params = {}
  const removeQ = search.split('?')
  const query = removeQ[1].split('&')

  for (let i = 0; i < query.length; i++) {
    const splitQuery = query[i].split('=')
    params[splitQuery[0]] = splitQuery[1]
  }
  console.log(params)
  return params
}

export function stringify(params) {
  const newParams = Object.assign({}, params)

  const search = []

  for (const property in newParams) {
    search.push(property + '=' + newParams[property])
  }

  const questionMark = '?'
  const searchPlusQ = questionMark.concat(search[0])

  search.splice(0, 1, searchPlusQ)
  const joinedSearch = search.join('&')

  console.log(joinedSearch)
  return joinedSearch
}
