import { createRouter,createWebHashHistory } from 'vue-router';
import leftlist from '../view/leftlist.vue' 
import NotFound from '../view/NotFound.vue'

const router = createRouter({
    history:createWebHashHistory(),
    routes:[
        {
            path:'/',
            component:leftlist
        },
        {
            path: '/404',
            name: '/404',
            component: NotFound
        },
    ]
});

export default router; //暴露router路由
