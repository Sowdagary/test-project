import { getQueryParams } from "."

const getUrlWithQueryParams = (url: string, params: object) =>
  `${url}?${getQueryParams(params)}`

export default getUrlWithQueryParams
