const delay = require('mocker-api/lib/delay');
const noProxy = process.env.NO_PROXY === 'true';

const proxy = {
    'GET /api/user/leftlist': [
        {
            "name": "All Items",
            "url": "/imgs/adobe.svg",
        },
        {
            "name": "Favoites",
            "url": "/imgs/BSApple.svg",
        },
        {
            "name": "Trash",
            "url": "/imgs/Dribbble.svg",
        },
        {
            "name": "Login",
            "url": "/imgs/etsy.svg",
        },
        {
            "name": "Card",
            "url": "/imgs/Facebook.svg",
        },
        {
            "name": "Identity",
            "url": "/imgs/Google.svg",
        },
        {
            "name": "Secure Note",
            "url": "/imgs/IMDB.svg"
        },
        {
            "name": "Work",
            "url": "/imgs/Invisionapp.svg"
        },
        {
            "name": "Social ",
            "url": "/imgs/Invisionapp.svg"
        },
        {
            "name": "Personal",
            "url": "/imgs/Telegram.svg"
        }
    ],
}
module.exports = (noProxy ? {} : delay(proxy, 10));