<template>

    <v-container grid-list-xs align-center>
        <v-layout row wrap>
            <v-flex>
                <v-card class = "mt-5" style ="width: 50%; margin-left: 20%">
                    <v-card-title primary titel><h1 class = "blue--text" style = "margin-left: 42%">Login</h1></v-card-title>
                    <v-form>
                        <v-select label = "User" class = "mb-5" v-model="cur_user" :items="users" style = "width: 50%; margin-left: 22%" 
                        color = "blue" v-validate = "'required'" :error-messages = "errors.collect('user')" data-vv-name = "user">
                        </v-select>

                        <v-btn class = "yellow darken-3 mb-5" style = "margin-left: 42%" @click="next">
                            Login
                        </v-btn>
                    </v-form>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
    
</template>

<script>
import router from '../router'

export default {
    data () {
        return {
            cur_user: '',
            test: '',
            users : ['Test User']
        }
    },
    methods: {
        next: function()
        {
            this.$validator.validateAll().then(is_valid => {
                if(is_valid) {
                    router.push('menu')
                }
            })
            //router.push('menu')
        }
    }
}
</script>
