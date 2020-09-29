import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/home'
import Index from './pages/index'
import Product from './pages/product'
import Detail from './pages/detail'
import Car from './pages/car'
import Order from './pages/order'
import OrderConfirm from './pages/orderConfirm'
import OrderList from './pages/orderList'
import OrderPay from './pages/orderPay'
import AliPay from './pages/aliPay'

Vue.use(Router);

export default new Router({
    routes:[
        {
            path:'/',
            name:'home',
            component:Home,
            redirect:'/index',
            children:[
                {
                    path:'/index',
                    name:'index',
                    component:Index,
                },
                {
                    path:'/product/:id',
                    name:'product',
                    component:Product,
                },
                {
                    path:'/detail/:id',
                    name:'detail',
                    component:Detail,
                }
            ]
        },
        {
            path:'/car',
            name:'car',
            component:Car
        },
        {
            path:'/order',
            name:'order',
            component:Order,
            children:[
                {
                    path:'orderList',
                    name:'orderList',
                    component:OrderList,
                },
                {
                    path:'orderPay',
                    name:'orderPay',
                    component:OrderPay,
                },
                {
                    path:'orderConfirm',
                    name:'orderConfirm',
                    component:OrderConfirm,
                },
                {
                    path:'aliPay',
                    name:'aliPay',
                    component:AliPay,
                }
            ]
        }
    ]
});
