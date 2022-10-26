import requests from './request'

export const leftlist = () => requests({ url: 'http://localhost:3721/api/user/leftlist', method: 'GET' }) //中间路由