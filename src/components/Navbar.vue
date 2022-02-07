<script setup>
import NavCard from '../components/NavCard.vue'
import axios from 'axios'
</script>

<template>

    <div class="nav">

        <div class="nav_left">

            <div class="menu_button" @click="openMenu()">
                <div class="menu_icon" :class="{'open' : menuOpen}">
                    <div class="square"></div>
                    <div class="square"></div>
                    <div class="square"></div>
                    <div class="square"></div>
                    <div class="square"></div>
                    <div class="square"></div>
                    <div class="square"></div>
                    <div class="square"></div>
                    <div class="square"></div>
                </div>

                <!-- <i v-if="!menuOpen" class="icon_status"></i>
                <i v-if="menuOpen" class="icon_close"></i> -->
            </div>

        </div>

        <div class="nav_center">
            <span class="small bold upper">eBus</span>
            <span class="small bold upper text_separator">//</span>
            <span class="small bold upper" v-if="menuOpen">Menu</span>
            <span class="small bold upper" v-if="!menuOpen">{{ $route.name }}</span>
        </div>

        <div class="nav_right">
            <span class="time small bold upper">{{ time }}</span>
            <span class="date small bold upper">{{ date }}</span>

            <div class="button button_nav">
                <span>Login</span>
                <i class="icon_login"></i>
            </div>
        </div>

    </div>

    <div class="fullscreen_menu" :class="{'open' : menuOpen}">
        <div class="menu_grid">
            <NavCard
                v-for="menuItem in menuItems"
                :key="menuItem.name"
                :menu-item="menuItem"
                :active="menuOpen"
                @click="openMenu()"
            />
        </div>
    </div>

</template>


<script>

export default {
    name: 'Navbar',

    data() {
        return {
            menuItems: [],
            menuOpen: false,

            time: '',
            date: ''
        }
    },

    mounted() {
        this.loadMenuItems();
        this.timeUpdate();
    },

    methods: {
        loadMenuItems() {
            axios
            .get('../configs/main_menu.json')
            .then(response => (this.menuItems = response.data))
        },

        openMenu() {
            if (this.menuOpen) {
                this.menuOpen = false
            } else {
                this.menuOpen = true
            }
        },
        checkTime(i) {
            if (i < 10) {
                i = '0' + i
            }
            return i;
        },
        timeUpdate() {

            setInterval(()=>{
                let dateString = new Date();
                let hh = dateString.getHours();
                let mm = dateString.getMinutes();
                let ss = dateString.getSeconds();
                let GG = dateString.getDate();
                let MM = dateString.getMonth() + 1;
                let YYYY = dateString.getFullYear();

                hh = this.checkTime(hh);
                mm = this.checkTime(mm);
                ss = this.checkTime(ss);
                GG = this.checkTime(GG);
                MM = this.checkTime(MM);

                let formattedTime = hh + ':' + mm + ':' + ss;
                let formattedDate = GG + '/' + MM + '/' + YYYY;

                this.time = formattedTime
                this.date = formattedDate
            }, 1000)

        }
    }
}
</script>
