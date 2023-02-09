const querystring = require("querystring");

const getQueryParams = (obj: object) => querystring.stringify(obj);

export default getQueryParams;
