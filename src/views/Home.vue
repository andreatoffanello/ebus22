<script setup>

import Homepage from '../components/homepage/Homepage.vue'
import HomepageDark from '../components/homepage/HomepageDark.vue'

</script>

<template>

    <div class="page home">

        <Homepage v-if="!isDark"/>
        <HomepageDark v-if="isDark"/>

    </div>

</template>


<script>

    export default {
        data() {
            return {
                isDark: false
            }
        },
        mounted() {
            if (this.$store.state.theme === 'dark') {
                this.isDark = true
            } else {
                this.isDark = false
            }
        },

        computed: {
            selectedTheme() {
                return this.$store.state.theme
            }
        },

        watch: {
            selectedTheme() {
                if (this.$store.state.theme === 'dark') {
                    this.isDark = true
                } else {
                    this.isDark = false
                }
            }
        }
    }

</script>
