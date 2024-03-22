import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: '首页',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '首页', icon: 'dashboard' }
    }]
  },

  // {
  //   path: '/example',
  //   component: Layout,
  //   redirect: '/example/table',
  //   name: 'Example',
  //   meta: { title: 'Example', icon: 'el-icon-s-help' },
  //   children: [
  //     {
  //       path: 'table',
  //       name: 'Table',
  //       component: () => import('@/views/table/index'),
  //       meta: { title: 'Table', icon: 'table' }
  //     },
  //     {
  //       path: 'tree',
  //       name: 'Tree',
  //       component: () => import('@/views/tree/index'),
  //       meta: { title: 'Tree', icon: 'tree' }
  //     }
  //   ]
  // },

  // {
  //   path: '/form',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'index',
  //       name: 'Form',
  //       component: () => import('@/views/form/index'),
  //       meta: { title: 'Form', icon: 'form' }
  //     }
  //   ]
  // },
  // {
  //   path: '/nested',
  //   component: Layout,
  //   redirect: '/nested/menu1',
  //   name: 'Nested',
  //   meta: {
  //     title: 'Nested',
  //     icon: 'nested'
  //   },
  //   children: [
  //     {
  //       path: 'menu1',
  //       component: () => import('@/views/nested/menu1/index'), // Parent router-view
  //       name: 'Menu1',
  //       meta: { title: 'Menu1' },
  //       children: [
  //         {
  //           path: 'menu1-1',
  //           component: () => import('@/views/nested/menu1/menu1-1'),
  //           name: 'Menu1-1',
  //           meta: { title: 'Menu1-1' }
  //         },
  //         {
  //           path: 'menu1-2',
  //           component: () => import('@/views/nested/menu1/menu1-2'),
  //           name: 'Menu1-2',
  //           meta: { title: 'Menu1-2' },
  //           children: [
  //             {
  //               path: 'menu1-2-1',
  //               component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
  //               name: 'Menu1-2-1',
  //               meta: { title: 'Menu1-2-1' }
  //             },
  //             {
  //               path: 'menu1-2-2',
  //               component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
  //               name: 'Menu1-2-2',
  //               meta: { title: 'Menu1-2-2' }
  //             }
  //           ]
  //         },
  //         {
  //           path: 'menu1-3',
  //           component: () => import('@/views/nested/menu1/menu1-3'),
  //           name: 'Menu1-3',
  //           meta: { title: 'Menu1-3' }
  //         }
  //       ]
  //     },
  //     {
  //       path: 'menu2',
  //       component: () => import('@/views/nested/menu2/index'),
  //       name: 'Menu2',
  //       meta: { title: 'menu2' },
  //       children: [
  //         {
  //           path: 'index',
  //           component: () => import('@/views/nested/menu2/index'),
  //           name: '监管事项清单3',
  //           meta: { title: '监管事项清单22' }
  //         }
  //       ]
  //     }
  //   ]
  // },
  {
    path: '/funeralSupervision',
    component: Layout,
    redirect: '/funeralSupervision/itemsList',
    name: '殡葬监管',
    meta: {
      title: '殡葬监管',
      icon: 'nested'
    },
    children: [
      {
        path: 'itemsList',
        component: () => import('@/views/funeralSupervision/itemsList/index'),
        name: '监管事项清单',
        meta: { title: '监管事项清单' }
      },
      {
        path: 'manager',
        component: () => import('@/views/funeralSupervision/manager/index'),
        name: '部门经办人管理',
        meta: { title: '部门经办人管理' }
      },
      {
        path: 'illegal',
        component: () => import('@/views/funeralSupervision/illegal/list'),
        name: '违法处置',
        // redirect: '/funeralSupervision/illegal/index',
        meta: { title: '违法处置' },
        children: [
          {
            path: 'list',
            component: () => import('@/views/funeralSupervision/illegal/list'),
            name: '违法处置列表',
            meta: { title: '违法处置', activeMenu: '/funeralSupervision/illegal/list' },
            // hidden: true
          }
        ]
      },
      {
        path: 'edit/:id',
        component: () => import('@/views/funeralSupervision/edit'),
        name: '编辑违法处置信息',
        meta: { title: '编辑违法处置信息', noCache: false, },
        hidden: true
      },
      {
        path: 'create',
        component: () => import('@/views/funeralSupervision/create'),
        name: '新建违法处置信息',
        meta: { title: '新建违法处置信息', noCache: false, },
        hidden: true
      }
    ]
  },
  {
    path: '/departed',
    component: Layout,
    children: [
      {
        path: 'index',
        name: '逝者管理',
        component: () => import('@/views/departed/index'),
        meta: { title: '逝者管理', icon: 'form' }
      },
      {
        path: 'create',
        name: '查看逝者信息',
        component: () => import('@/views/departed/create'),
        meta: { title: '查看逝者信息' },
        hidden: true
      }
      ,
      {
        path: 'edit/:id',
        name: '编辑逝者信息',
        component: () => import('@/views/departed/edit'),
        meta: { title: '编辑逝者信息', icon: 'form' },
        hidden: true
      }
    ]

  },
  {
    path: '/funeral',
    component: Layout,
    name: '殡仪管理',
    meta: {
      title: '殡仪管理',
      icon: 'table'
    },
    children: [
      {
        path: 'index',
        name: '逝仪预约',
        component: () => import('@/views/funeral/index'),
        meta: { title: '逝仪预约' }
      }
      ,
      {
        path: 'create',
        name: '查看逝者信息',
        component: () => import('@/views/funeral/create'),
        meta: { title: '查看逝者信息' },
        hidden: true
      }
      ,
      {
        path: 'edit/:id',
        name: '编辑逝者信息',
        component: () => import('@/views/funeral/edit'),
        meta: { title: '编辑逝者信息' },
        hidden: true
      },
      {
        path: 'connect',
        name: '殡仪联办',
        component: () => import('@/views/funeral/connect'),
        meta: { title: '殡仪联办' },
        children: [
          {
            path: 'car',
            component: () => import('@/views/funeral/connect/car/index'),
            name: '车辆调度',
            meta: { title: '车辆调度' }
          }, {
            path: 'block',
            component: () => import('@/views/funeral/connect/block/index'),
            name: '冷藏柜管理',
            meta: { title: '冷藏柜管理' }
          }
        ]
      },
      {
        path: 'order',
        name: '添加工单',
        component: () => import('@/views/funeral/create'),
        meta: { title: '添加工单' }
      }

    ]
  },
  {
    path: '/civilized',
    component: Layout,
    name: '文明办丧',
    meta: {
      title: '文明办丧',
      icon: 'user'
    },
    children: [
      {
        path: 'rule',
        name: '殡葬政策法规',
        component: () => import('@/views/civilized/rule/index'),
        meta: { title: '殡葬政策法规' },
      }, {
        path: 'rule/edit/:id',
        name: '编辑法规',
        component: () => import('@/views/civilized/rule/edit/index'),
        meta: { title: '编辑法规' },
        hidden: true
      }, {
        path: 'rule/create',
        name: '新增法规',
        component: () => import('@/views/civilized/rule/create/index'),
        meta: { title: '新增法规' },
        hidden: true
      },
      {
        path: 'case',
        name: '违法违规案例',
        component: () => import('@/views/civilized/case/index'),
        meta: { title: '违法违规案例' },
      }, {
        path: 'case/edit/:id',
        name: '编辑案例',
        component: () => import('@/views/civilized/case/edit/index'),
        meta: { title: '编辑案例' },
        hidden: true
      }, {
        path: 'case/create',
        name: '新增案例',
        component: () => import('@/views/civilized/case/create/index'),
        meta: { title: '新增案例' },
        hidden: true
      },
    ]
  },
  {
    path: '/cemetery',
    component: Layout,
    name: '公墓管理',
    meta: { title: '公墓管理', icon: 'example' },
    children: [
      {
        path: 'index',
        name: '公墓管理',
        component: () => import('@/views/cemetery/index'),
        meta: { title: '公墓管理' },
      }, {
        path: 'create',
        name: '公墓使用情况',
        component: () => import('@/views/cemetery/create'),
        meta: { title: '公墓使用情况' },
        hidden: true
      }, {
        path: 'info/:id',
        name: '查看公墓',
        component: () => import('@/views/cemetery/info'),
        meta: { title: '查看公墓' },
        hidden: true
      },
    ]
  },

  // {
  //   path: 'external-link',
  //   component: Layout,
  //   children: [
  //     {
  //       path: '',
  //       meta: { title: 'External Link', icon: 'link' }
  //     }
  //   ]
  // },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  base: '/funeral/',
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
