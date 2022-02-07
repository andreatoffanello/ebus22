<script setup>
import Navbar from './components/Navbar.vue'
import Sidebar from './components/Sidebar.vue'
import Footer from './components/Footer.vue'
import Popup from './components/popups/Popup.vue'

</script>

<template>

    <div class="layout">

        <Navbar v-if="!noDis"/>

        <Sidebar v-if="!noDis" @toggleNoDis="toggleNoDis()"/>

        <router-view/>

        <Footer v-if="!noDis"/>

        <div class="close_nodis shadow"
            v-if="noDis"
            @click="toggleNoDis()">

            <i class="icon_close"></i>
        </div>

        <Popup/>

    </div>


</template>

<script>

    export default {
        data() {
            return {
                noDis: false
            }
        },
        mounted() {
            document.querySelector('[data-theme]').setAttribute('data-theme', this.$store.state.theme);
        },

        computed: {
            selectedTheme() {
                return this.$store.state.theme
            }
        },
        watch: {
            selectedTheme() {
                document.querySelector('[data-theme]').setAttribute('data-theme', this.$store.state.theme);
            }
        },
        methods: {
            toggleNoDis() {
                this.noDis = !this.noDis
                console.log(this.noDis)
            }
        }
    }

</script>

<style lang="scss">
@import './scss/style.scss'
</style>
