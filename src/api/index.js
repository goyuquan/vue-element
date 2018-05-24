import  http  from "./http";

const prefix = {
  sample: 'https://api.douban.com/v2/book/1220562',
  abc: "abc",
  bcd: "bcd",
  test: "v2"
}

const api = {
  home: {
    pre: "v2",
    one: param => http.get({url: prefix.abc + this.pre + 'abc', data: param}),
    bcd: param => http.get({url: prefix.bcd + 'bcd', data: params}),
    test: param => http.get({url: prefix.test + '/book/1220562', data: param}),
  }
}

export default api;
