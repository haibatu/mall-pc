<template>
    <div>
        <order-header></order-header>
        car
        <nav-footer></nav-footer>
    </div>
</template>
<script>
import OrderHeader from './../components/OrderHeader'
import NavFooter from './../components/NavFooter'
export default {
    name:'car',
    components:{
        OrderHeader:OrderHeader,
        NavFooter:NavFooter,
    }
}
</script>