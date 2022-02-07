<script setup>

import * as d3 from 'd3'

import LinearComp from '../components/simulator/SimulatorComp.vue'

</script>

<template>

    <div class="page simulator">

        <div class="page_menu">

            <div class="menu_block">

                <input type="date" name="date" value="">

            </div>

            <div class="menu_block">

                <div class="">
                    <span>Umlauf</span>
                </div>

                <div class="">
                    <span>Service Agent</span>
                </div>

            </div>

            <div class="menu_block">

                <select class="" name="">

                    <option value="">1001</option>
                    <option value="">1002</option>

                </select>

            </div>

        </div>


        <div class="main">

            <svg class="line-chart">

            </svg>

        </div>

    </div>

</template>

<script>

export default {
    data() {
        return {

        }
    },

    mounted() {

    },

    created: {

    },

    methods: {

    }
}

</script>
