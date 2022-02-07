import { createRouter, createWebHistory } from 'vue-router'

import Home             from '../views/Home.vue'
import Login            from '../views/Login.vue'
import Linear           from '../views/Linear.vue'
import Deposit          from '../views/Deposit.vue'
import PlanTable        from '../views/PlanTable.vue'
import Cartographic     from '../views/Cartographic.vue'
import ServiceList      from '../views/ServiceList.vue'
import Diagnostic       from '../views/Diagnostic.vue'
import Synoptic         from '../views/Synoptic.vue'
import Anomalies        from '../views/Anomalies.vue'
import Reports          from '../views/Reports.vue'
import Planification    from '../views/Planification.vue'
import Departures       from '../views/Departures.vue'
import Simulator        from '../views/Simulator.vue'


const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/linear',
        name: 'Linear View',
        component: Linear
    },
    {
        path: '/deposit',
        name: 'Deposit',
        component: Deposit
    },
    {
        path: '/plantable',
        name: 'Plan Table',
        component: PlanTable
    },
    {
        path: '/cartographic',
        name: 'Cartographic',
        component: Cartographic
    },
    {
        path: '/servicelist',
        name: 'Service List',
        component: ServiceList
    },
    {
        path: '/diagnostic',
        name: 'Diagnostic',
        component: Diagnostic
    },
    {
        path: '/synoptic',
        name: 'Synoptic View',
        component: Synoptic
    },
    {
        path: '/anomalies',
        name: 'Anomalies',
        component: Anomalies
    },
    {
        path: '/reports',
        name: 'Reports',
        component: Reports
    },
    {
        path: '/planification',
        name: 'Planification',
        component: Planification
    },
    {
        path: '/departures',
        name: 'Departures',
        component: Departures
    },
    {
        path: '/simulator',
        name: 'Simulator',
        component: Simulator
    }

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
