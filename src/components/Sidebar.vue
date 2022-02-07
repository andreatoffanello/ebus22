<script setup>

import NotificationsPanel from './notifications/NotificationsPanel.vue'
import MessagesPanel from './messages/MessagesPanel.vue'

</script>

<template>

    <div class="sidebar">

        <div class="sidebar_menu">
            <div class="sidebar_icon" @click="sideOpen('notifications')">
                <i class="icon_bell"></i>
                <span class="counter">2</span>
            </div>

            <div class="sidebar_icon" @click="sideOpen('messages')">
                <i class="icon_message"></i>
                <span class="counter">2</span>
            </div>
        </div>


        <div class="sidebar_bottom">

            <div class="sidebar_icon" @click="toggleDark()">
                <i class="icon_contrast"></i>
            </div>

            <div class="sidebar_icon" @click="$emit('toggleNoDis')">
                <i class="icon_expand"></i>
            </div>


        </div>
    </div>


    <div class="sidebar_panel shadow"
        :class="{'open': openSide, 'w32': notifications, 'w64': messages}">

        <NotificationsPanel v-if="notifications"/>

        <MessagesPanel v-if="messages"/>

        <div v-if="openSide" class="close_panel" @click="sideClose()">
            <i class="icon_close"></i>
        </div>

    </div>

</template>


<script>

export default {
    emits: ['toggleNoDis', 'toggleDark'],
    data() {
        return {
            openSide: false,
            notifications: false,
            messages: false,

            theme: this.$store.state.theme
        }
    },
    methods: {
        toggleDistractionMode() {
            this.$noDis = !this.$noDis
        },
        sideClose() {
            this.openSide = false
            this.notification = false
            this.messages = false
        },
        sideOpen(value) {
            this.openSide = true
            if (value === 'notifications') {
                this.notifications = true
                this.messages = false
            }
            if (value === 'messages') {
                this.messages = true
                this.notifications = false
            }
        },
        toggleDark() {
            if (this.theme === 'dark') {
                this.theme = 'light'
            } else {
                this.theme = 'dark'
            }

            this.$store.commit('toggleTheme', this.theme)
            // console.log(this.theme)
        }
    }
}

</script>
