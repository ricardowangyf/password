import { createRouter, createWebHashHistory } from 'vue-router';
import leftlist from '../view/leftlist.vue' //左侧菜单列表
import NotFound from '../view/NotFound.vue' //404页面
import middlelist from '../view/middlelist.vue' //列表页面
import DetailPage from '../view/DetailPage.vue' //详情页


const router = createRouter({
  history: createWebHashHistory(),
  mode: 'history',
  linkActiveClass: 'active-router',
  routes: [
    {
      path: '/',
      redirect: '/list/all',
      component: leftlist,
      children: [
        {
          path: 'list/:type',
          component: middlelist,
          props: true
        },
        {
          path: 'list/:type/detail/:name',
          component: middlelist,
          props: true
        },
        {
            path: 'DetailPage',
            component: DetailPage,
        },
      ]
    },
    {
      path: '/',
      name: '404',
      component: NotFound
    },
  ]
});

export default router;
