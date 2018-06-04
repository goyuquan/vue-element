import axios from 'axios'
import store from '../store'
import { Loading, Message } from 'element-ui'

function err(message) {
  Message({
    message,
    type: 'error',
    duration: 5000,
    showClose: true
  })
}
let loadingInstance
const options = {}
axios.defaults.headers.common['Content-Type'] = 'application/json'

axios.interceptors.request.use( config => {
  loadingInstance = Loading.service();
  console.log('request interceptor...')
  return config
}, error => {
  console.error('request interceptor error')
  return Promise.reject(error)
});

axios.interceptors.response.use( response => {
  loadingInstance.close();
  if (response.status === 200) {
    console.log('response interceptor...200', response);
    if (response.data.code !== '00') {
      err(response.message)
      return Promise.reject(response);
    }
  }
}, error => {
  console.error('response interceptor error', error)
  if (error.response.status === 401) {
    err(error.response.data.message || '登录超时')
    store.commit('logOut')
    // window.location = '/login'
  }
  return Promise.reject(error.response);
});

function request(options) {
  let token = localStorage.getItem('token')
  delete options.headers
  if (token) {
    options.headers = {}
    options.headers['access_token'] = token
  }
  return axios(options)
  .catch( error => {
    loadingInstance.close();
    if (error.response) {
      console.error(`The request was made and the server responded with a status code that falls out of the range of 2xx`)
      console.error('error.response.data', error.response.data)
      console.error('error.response.status', error.response.status)
      console.error('error.response.headers', error.response.headers)
      return Promise.reject(error.response)
    } else if (error.request) {
      console.error(`The request was made but no response was received "error.request" is an instance of XMLHttpRequest in the browser`)
      err(error.statusText)
      return Promise.reject(error.request)
    } else {
      console.error(`Something happened in setting up the request that triggered an Error`)
      console.error('Error', error)
      return Promise.reject('error ', error);
    }
    console.error('Error without response ', error.config)
    return Promise.reject('error without response ');
  })
}

function get(obj) {
  delete options.params
  if(obj.data) options.params = obj.data
  options.url = obj.url
  options.method = 'get'
  return request(options)
}

function post(obj) {
  options.data = obj.data
  options.url = obj.url
  options.method = 'post'
  return request(options)
}

function del(obj) {
  if ('data' in obj ) options.data = obj.data
  options.url = obj.url
  options.method = 'delete'
  return request(options)
}

function put(obj) {
  options.data = obj.data
  options.url = obj.url
  options.method = 'put'
  return request(options)
}

function patch(obj) {
  options.data = obj.data
  options.url = obj.url
  options.method = 'patch'
  return request(options)
}

export default { get, post }
