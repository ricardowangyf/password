import requests from './request'

export const reqCategoryList = () => requests({ url: 'http://localhost:3721/api/user/list', method: 'GET' }) 