const delay = require('mocker-api/lib/delay');
const noProxy = process.env.NO_PROXY === 'true';

const proxy = {
    'GET /api/user/leftlist': [
        {
            "name": "All Items",
            "image": "/imgs/items.svg",
        },
        {
            "name": "Favoites",
            "image": "/imgs/favourites.svg",
        },
        {
            "name": "Trash",
            "image": " /imgs/trash.svg",
        },
        {
            "name": "Login",
            "image": " /imgs/login.svg",
        },
        {
            "name": "Card",
            "image": " /imgs/card.svg",
        },
        {
            "name": "Identity",
            "image": "/imgs/indetity.svg",
        },
        {
            "name": "Secure Note",
            "image": "/imgs/securenote.svg"
        },
        {
            "name": "Work",
            "image": "/imgs/work.svg"
        },
        {
            "name": "Social ",
            "image": "/imgs/social.svg"
        },
        {
            "name": "Personal",
            "image": "/imgs/personal.svg"
        }
    ],
}
module.exports = (noProxy ? {} : delay(proxy, 10));