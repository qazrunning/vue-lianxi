import Vue from 'vue' //引入Vue
import Router from 'vue-router' //引入vue-router
// 引入路由页面
import Car from "@/components/car/car";
import Daikuan from "@/views/daikuan/daikuan";
Vue.use(Router) //Vue全局使用Router


export default new Router({
    routes: [ //配置路由，这里是个数组
        { //每一个链接都是一个对象
            path: '/', //链接路径
            name: 'Daikuan', //路由名称，
            component: Daikuan //对应的组件模板
        },
        { //每一个链接都是一个对象
            path: '/car', //链接路径
            name: 'Car', //路由名称，
            component: Car //对应的组件模板
        },
        { //每一个链接都是一个对象
            path: '/daikuan', //链接路径
            name: 'Daikuan', //路由名称，
            component: Daikuan //对应的组件模板
        }
    ]
})