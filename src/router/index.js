import { createRouter, createWebHashHistory } from 'vue-router';
import leftlist from '../view/leftlist.vue' //菜单列表
import NotFound from '../view/NotFound.vue' //404页面
import middlelist from '../view/middlelist.vue' //列表页面
import DetailPage from '../view/DetailPage.vue' //详情页
import RouterList from '../components/RouterList.vue' //路由内容


const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'isactive',
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/list/all',
      component: leftlist,
      children: [
        {
          path: '/list/:type',
          component: middlelist,
          props: true 
        },
        {
          path: '/list/:type/detail/:name',
          component: middlelist,
          props: true
        },
        {
          path: '/DetailPage',
          name: '/DetailPage',
          component: DetailPage,
        },
        {
          path: '/RouterList',
          name: '/RouterList',
          component: RouterList,
        },
      ]
    },
    {
      path: '/:pathMatch(.*)',
      name: '/404',
      component: NotFound
    },
  ]
});

export default router;
