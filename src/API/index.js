import requests from './request'


export const reqCategoryList = () => requests({ url: 'http://localhost:3721/api/user/list', method: 'GET' }) //中间路由

export const details = (params) => requests({ url: 'http://localhost:3721/api/user/list/details', method: 'POST', data:{...params}}) //右侧详情页

export const save = (params) => requests({ url: '/api/user/list/save', method: 'POST',data:{...params }}) 
