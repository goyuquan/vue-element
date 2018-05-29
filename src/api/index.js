import  http  from "./http";

const prefix = {
  dc: "api/staticdata/dic/",
  bcd: "bcd",
  test: "v2"
}

const api = {
  common: {
    firstLevelLst: param => http.get({url: prefix.dc + 'firstLevelLst', data: param}),
    bcd: param => http.get({url: prefix.bcd + 'bcd', data: params}),
    test: param => http.get({url: prefix.test + '/book/1220562', data: param}),
  }
}

export default api;
