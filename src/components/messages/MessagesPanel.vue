<template>

    <div class="messages">

        <div class="panel_header">
            <span class="regular bold">Messages</span>
        </div>

        <div class="messages_wrapper">

            <div class="tab_button">

            </div>

            <div class="message"
                v-for="message in messagesReceived"
                :key="message.id">

                <span></span>
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
            messagesReceived: [],
            messagesSent: []
        }
    },
    mounted() {
        this.loadReceivedMessages()
        this.loadSentMessages()
    },
    methods: {
        loadReceivedMessages() {
            axios
            .get('./data-examples/messages-received.json')
            .then(response => {
                this.messagesReceived = response.data
            })
        },
        loadSentMessages() {
            axios
            .get('./data-examples/messages-sent.json')
            .then(response => {
                this.messagesSent = response.data
            })
        }
    }
}

</script>
