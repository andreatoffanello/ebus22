<template>
    <div class="button">
        <span>{{label}}</span>
        <i :class="icon"></i>
    </div>
</template>

<script>

    export default {
        props: ['label', 'icon']
        // data() {
        //     return {
        //         label: this.label,
        //         icon: this.icon
        //     }
        // }
    }

</script>
