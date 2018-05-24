import axios from 'axios'
import store from '../store'
import { Loading } from 'element-ui'

const options = {}
const token = localStorage.getItem('token')
if (token) {
  axios.defaults.headers.common['Authorization'] = 'token'
}


axios.interceptors.request.use( config => {
  Loading.service(options);
  console.log('request interceptor...')
  return config
}, function (error) {
  if (error.status === 401) {
    window.location.href = "#/login"
  }
  console.log('request interceptor error')
  return Promise.reject(error)
});

axios.interceptors.response.use( response => {
  Loading.service().close();
  if (response.status === 200) {
    console.log('response interceptor...200', response);
  }
  return response
}, function (error) {
  console.log('response interceptor error')
  return Promise.reject(error)
});

function request(options) {
  return axios(options)
  .catch( error => {
    if (error.response) {
      console.log(`The request was made and the server responded with a status code that falls out of the range of 2xx`)
      console.log('error.response.data', error.response.data)
      console.log('error.response.status', error.response.status)
      console.log('error.response.headers', error.response.headers)
    } else if (error.request) {
      console.log(`The request was made but no response was received "error.request" is an instance of XMLHttpRequest in the browser`)
      console.log(error.request)
      if (error.status === 401) store.dispatch('logOut')
    } else {
      console.log(`Something happened in setting up the request that triggered an Error`)
      console.log('Error', error)
    }
    console.log(error.config)
  });
}

function get(obj) {
  if("data" in obj ) options.params = obj.data
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

export default { get, post }
