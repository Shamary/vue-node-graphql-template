<template>
    <v-container grid-list-xs align-center justify-center pa-5>
        <v-layout row wrap>
            
            <v-flex>
                <v-tabs fixed-tabs color = "transparent">
                    <v-tab>Monday</v-tab>
                    <v-tab>Tuesday</v-tab>
                    <v-tab>Wednesday</v-tab>
                    <v-tab>Thursday</v-tab>
                    <v-tab>Firday</v-tab>
                </v-tabs>
                <v-card class = "mt-5">
                    <v-card-title primary-title> <h3 class = "blue--text">Order</h3></v-card-title>
                    <v-form title = 'Menu'>
                        <v-flex>
                            <v-select class = "mt-2" label = 'Protein' v-model="cur_protein" :items ="protein" style = "width: 50%; margin-left: 22%"></v-select>
                        </v-flex>
                        <v-flex>
                            <v-select class = "mt-2" label = 'Carb' v-model="cur_carb" :items ="carb" style = "width: 50%; margin-left: 22%"></v-select>
                        </v-flex>
                        <v-flex>
                            <v-select class = "mt-2 pb-5" label = 'Side' v-model="cur_side" :items ="sides" style = "width: 50%; margin-left: 22%"></v-select>
                        </v-flex>
                    </v-form>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
        
</template>

<script>
export default {
    /*eslint-disable indent, spaced-comment*/
    data () {
        return {
            cur_protein: 'None',
            cur_carb: 'None',
            cur_side: 'None',
            protein: ['None', 'Ox Tail', 'Fry Chicken'],
            carb: ['None', 'Rice and Peas', 'White Rice'],
            sides: ['None', 'Mixed Vegetables', 'Pasta']
        }
    },
    methods: {
        isEmpty: function () {
            if (this.cur_protein.length < 1) {
                this.cur_protein = ['None']
            }

            console.log('changed ' + this.cur_protein)
        }
    }
}
</script>
