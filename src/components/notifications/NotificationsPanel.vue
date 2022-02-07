<template>

    <div class="notifications">

        <div class="panel_header">
            <span class="regular bold">Notifications</span>
        </div>

        <div class="notif_wrapper">

            <div class="notif"
                :class="notif.level"
                v-for="notif in notifications"
                :key="notif.id">

                <div class="icon_wrapper">
                    <i :class="notif.icon"></i>
                </div>

                <span class="title regular bold">{{notif.title}}</span>
                <span class="time">{{notif.time}}</span>
                <router-link :to="'messages'" class="link">See details</router-link>
            </div>

        </div>

        <div class="panel_bottom">
            <router-link class="button primary" :to="'messages'">
                <span>See All</span>
            </router-link>
        </div>

    </div>

</template>


<script>
import axios from 'axios'

export default {
    data() {
        return {
            notifications: []
        }
    },
    mounted() {
        this.loadNotifications()
    },

    methods: {
        loadNotifications() {
            axios
            .get('./data-examples/notifications.json')
            .then(response => {
                this.notifications = response.data
            })
        }
    }
}

</script>
