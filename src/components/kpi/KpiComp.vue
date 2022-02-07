<template>

    <div class="kpi">

        <div class="component_content">

            <div class="kpi_grid" :class="{'enlarge' : enlarge}">

                <div class="kpi_block early">

                    <div class="kpi_label">
                        <span>Early</span>
                        <span class="number">{{early}}</span>
                        <span class="percentage">{{earlyPerc}}%</span>
                    </div>

                    <div class="block_circle">
                        <svg viewBox="0 0 42 42" class="circle_wrap">
                            <circle class="base" cx="21" cy="21" r="15.91549430918952"/>
                            <circle class="circle" cx="21" cy="21" r="15.91549430918952" :stroke-dasharray="earlyPerc + ' ' + [ 100 - earlyPerc ]" stroke-dashoffset="0" />
                        </svg>
                        <div class="circle_data">
                            <span class="number">{{early}}</span>
                            <div class="divider"></div>
                            <span class="percentage">{{earlyPerc}}%</span>
                        </div>
                    </div>
                </div>


                <div class="kpi_block ontime">

                    <div class="kpi_label">
                        <span>On time</span>
                        <span class="number">{{ontime}}</span>
                        <span class="percentage">{{ontimePerc}}%</span>
                    </div>

                    <div class="block_circle">
                        <svg viewBox="0 0 42 42" class="circle_wrap">
                            <circle class="base" cx="21" cy="21" r="15.91549430918952"/>
                            <circle class="circle" cx="21" cy="21" r="15.91549430918952" :stroke-dasharray="ontimePerc + ' ' + [ 100 - ontimePerc ]" stroke-dashoffset="0" />
                        </svg>
                        <div class="circle_data">
                            <span class="number">{{ontime}}</span>
                            <div class="divider"></div>
                            <span class="percentage">{{ontimePerc}}%</span>
                        </div>
                    </div>
                </div>


                <div class="kpi_block late">

                    <div class="kpi_label">
                        <span>Late</span>
                        <span class="number">{{late}}</span>
                        <span class="percentage">{{latePerc}}%</span>
                    </div>

                    <div class="block_circle">
                        <svg viewBox="0 0 42 42" class="circle_wrap">
                            <circle class="base" cx="21" cy="21" r="15.91549430918952"/>
                            <circle class="circle" cx="21" cy="21" r="15.91549430918952" :stroke-dasharray="latePerc + ' ' + [ 100 - latePerc ]" stroke-dashoffset="0" />
                        </svg>
                        <div class="circle_data">
                            <span class="number">{{late}}</span>
                            <div class="divider"></div>
                            <span class="percentage">{{latePerc}}%</span>
                        </div>
                    </div>
                </div>


                <div class="kpi_block primary">

                    <div class="kpi_label">
                        <span>Vehicles</span>
                        <span class="number nobkg">{{all}}</span>
                    </div>

                    <div class="block_circle">
                        <svg viewBox="0 0 42 42" class="circle_wrap">
                            <circle class="circle transparent" cx="21" cy="21" r="15.91549430918952" stroke-dasharray="50 50" stroke-dashoffset="0" />
                        </svg>
                        <div class="circle_data">
                            <span class="number">{{all}}</span>
                            <div class="divider"></div>
                            <span class="percentage">Total</span>
                        </div>
                    </div>
                </div>


                <div class="kpi_block primary">
                    <div class="kpi_label">
                        <span>Cadence</span>
                        <span class="number nobkg">{{cadence}}</span>
                        <span class="percentage">min</span>
                    </div>

                    <div class="block_circle">
                        <svg viewBox="0 0 42 42" class="circle_wrap">
                            <circle class="circle transparent" cx="21" cy="21" r="15.91549430918952" stroke-dasharray="50 50" stroke-dashoffset="0" />
                        </svg>
                        <div class="circle_data">
                            <span class="number">{{cadence}}</span>
                            <div class="divider"></div>
                            <span class="percentage">Minutes</span>
                        </div>
                    </div>
                </div>


                <div class="kpi_block primary">
                    <div class="kpi_label">
                        <span>Regularity</span>
                        <span class="number">{{regularity}}%</span>
                    </div>

                    <div class="block_circle">
                        <svg viewBox="0 0 42 42" class="circle_wrap">
                            <circle class="base" cx="21" cy="21" r="15.91549430918952"/>
                            <circle class="circle primary" cx="21" cy="21" r="15.91549430918952" :stroke-dasharray="regularity + ' ' + [ 100 - regularity ]" stroke-dashoffset="0" />
                        </svg>
                        <div class="circle_data">
                            <span class="number">{{regularity}}%</span>
                            <div class="divider"></div>
                            <span class="percentage"></span>
                        </div>
                    </div>
                </div>

            </div>


            <div class="expander_button" @click="toggleEnlarge()">

                <div class="expander_icons" :class="{'enlarge' : enlarge}">

                    <i class="icon_arrow_up"></i>
                    <i class="icon_arrow_down"></i>

                </div>

            </div>

        </div>



        <div class="component_footer">

        </div>


    </div>

</template>


<script>

import axios from 'axios'
// import * as d3 from 'd3'

export default {
    data() {
        return {
            enlarge: false,
            hide: true,

            early: '',
            earlyPerc: '',

            ontime: '',
            ontimePerc: '',

            late: '',
            latePerc: '',

            all: '',

            regularity: '',
            cadence: ''
        }
    },
    mounted() {
        this.loadKpi()
        this.simulateData()
    },
    methods: {
        loadKpi() {
            let data

            axios
            .get('./data-examples/kpi.json')
            .then(response => {
                data = response.data[0]
                this.regularity = data.regularity
                this.cadence = data.cadence
                this.early = data.early
                this.ontime = data.ontime
                this.late = data.late

                this.updateValues(data)
            })
        },

        updateValues(data) {
            this.all = this.early + this.ontime + this.late

            let earlyP = this.early / this.all * 100
            this.earlyPerc = earlyP.toFixed(1)

            let ontimeP = this.ontime / this.all * 100
            this.ontimePerc = ontimeP.toFixed(1)

            let lateP = this.late / this.all * 100
            this.latePerc = lateP.toFixed(1)
        },

        // Simulo i dati che variano
        simulateData() {
            setInterval(()=>{
                let newEarly = this.early + (Math.random() < 0.7 ? -1 : 1);
                this.early = newEarly >= 2 ? newEarly : 2;

                let newLate = this.late + (Math.random() < 0.7 ? -1 : 1);
                this.late = newLate >= 3 ? newLate : 3;

                let newOntime = this.ontime + (Math.random() < 0.7 ? -1 : 1);
                this.ontime = newOntime >= 4 ? newOntime : 4;

                this.updateValues(this.data)
            }, 4000)
        },
        toggleEnlarge() {
            this.enlarge = !this.enlarge

            // setTimeout(()=>{
            //     this.hide = !this.hide
            // }, 500);
        }
    }
}

</script>
