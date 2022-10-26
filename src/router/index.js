import { createRouter,createWebHashHistory } from 'vue-router';
import LeftList from '../view/leftlist.vue' 
import NotFound from '../view/NotFound.vue'

// #createRouter创建路由
const router = createRouter({
    history:createWebHashHistory(),
    //用哈希模式
    routes:[
        {
            path:'/', 
            component:LeftList //引入的components单体文件
        },
        {
            path: '/404',
            name: '/404',
            component: NotFound
        },
    ]
});

export default router; //暴露router路由
