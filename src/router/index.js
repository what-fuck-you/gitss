import Vue from 'vue'
import Router from 'vue-router'

import index from '@/components/index'
import indexa from '@/components/indexa'
import classify from '@/components/classify'
import shopping from '@/components/shopping'
import my from '@/components/my'

import classify1 from '@/components/pinjia/classify1'
import classify2 from '@/components/pinjia/classify2'
import classify3 from '@/components/pinjia/classify3'
import classify4 from '@/components/pinjia/classify4'
import classify5 from '@/components/pinjia/classify5'
import particulars from '@/components/particulars/particulars'
import particulars1 from '@/components/particulars/particulars1'
import particulars2 from '@/components/particulars/particulars2'
import haop from '@/components/maijiakoupei/haop'
import chaping from '@/components/maijiakoupei/chaping'
import quanbu from '@/components/maijiakoupei/quanbu'
import saidan from '@/components/maijiakoupei/saidan'

import register from '@/components/register'
import login from '@/components/login'




Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      children:[
        {
          path: '/',
          name: 'indexa',
          component: indexa,
        },
        {
          path: '/indexa',
          name: 'indexa',
          component: indexa,
        },
        {
          path: '/classify',
          name: 'classify',
          component: classify,
          children:[
            {
              path: '/classify2',
              name: 'classify2',
              component: classify2,
            },
            {
              path:'/classify1',  //  默认地址需要注意  添加是当前的这个地址
              component:classify1
            },
            {path: '/classify3',
              name: 'classify3',
              component: classify3,
            },
            {path: '/classify4',
              name: 'classify4',
              component: classify4,
            },
            {
              path: '/classify5',
              name: 'classify5',
              component: classify5,
            },
            {
              path:'/',  //  默认地址需要注意  添加是当前的这个地址
              component:classify1
            }
          ]
        },
        {
          path: '/shopping',
          name: 'shopping',
          component: shopping,
        },
        {
          path: '/my',
          name: 'my',
          component: my,
        }
      ]
    },
    // 商品详情
    {
      path:'/particulars',
      name:'particulars',
      component:particulars,
      children:[
        {path:'particulars1',
          name:'particulars1',
          component:particulars1,
        },
        {
          path:'particulars2',
          name:'particulars2',
          component:particulars2,
          children:[
            {
              path:'chaping',
              name:'chaping',
              component:chaping,
            },
            {
              path:'haop',
              name:'haop',
              component:haop,
            },
            {
              path:'quanbu',
              name:'quanbu',
              component:quanbu,
            },
            {
              path:'saidan',
              name:'saidan',
              component:saidan,
            },
            {
              path:'/particulars/particulars2',
              redirect:'/particulars/particulars2/quanbu'
            }
          ]
        },
        {
          path:'/particulars',
          redirect:'/particulars/particulars1'
        }
      ]
    }
    ,
    {
      path:'/register',
      name:'register',
      component: register,
    },
    {
      path:'/login',
      name:'login',
      component: login,
    }
  ]
})
