import { createRouter,createWebHashHistory } from 'vue-router';
import leftlist from '../view/leftlist.vue' 
import NotFound from '../view/NotFound.vue'

const router = createRouter({
    history:createWebHashHistory(),
    routes:[
        {
            path:'/:leftlist(.*)',
            component:leftlist
        },
        {
            path:'/:pathMatch(.*)',
            name: '/404',
            component: NotFound
        },
    ]
});

export default router; //暴露router路由
