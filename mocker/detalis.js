const delay = require('mocker-api/lib/delay');
const noProxy = process.env.NO_PROXY === 'true';
const { list }= require('./data')

const proxy = {
  'POST /api/user/list/details': (req, res) => {
    const  name  = req.body.name;
    console.log('---name-->',name)
    const items = name && list.filter(item => (item.name === name));
    console.log('----items--->', items)
    const data = items && items.length > 0 ? items[0] : {}
    console.log('---data---->',data)
    return res.json(data);
  },
}

module.exports = proxy, noProxy, delay;