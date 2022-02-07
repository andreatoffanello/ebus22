<script setup>
    import ButtonIcon from './ButtonIcon.vue'
</script>

<template>
    <router-link :to="menuItem.url">
        <div class="nav_card shadow_hover" :class="{'open' : active}">
            <div class="img_wrapper">
                <img :src="menuItem.imgUrl" alt="">
            </div>
            <div class="item_content">
                <p>{{menuItem.name}}</p>

                <div class="item_content_bottom">
                    <ButtonIcon :label="'View page'" :icon="'icon_expand_1'"/>
                </div>
            </div>    
        </div>
    </router-link>
</template>


<script>

    export default {
        props: ['menuItem', 'active']
    }

</script>
