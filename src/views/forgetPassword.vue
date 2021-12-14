<template>
  <v-app id="inspire">

      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="8">
            <v-card class="elevation-12">
              <v-window v-model="step">
                <v-window-item :value="1">
                  <v-row>
                    <v-col cols="12" md="8">
                      <v-card-text class="mt-12">
                        <h1
                          class="
                            text-center
                            display-2
                            blue--text
                            text--accent-3
                          "
                        >
                          ForgetPassword
                        </h1>

                        <h4 class="text-center mt-4">
                          Reset Your Password
                        </h4>
                        <v-form>
                          <v-text-field
                           :rules="emailRule"
                            prepend-icon="mdi-email"
                            name="email"
                            label="email"
                            type="text"
                            color="blue accent-3"
                          />

                          
                        </v-form>
                     
                      </v-card-text>
                      <div class="text-center mt-2">
                        <v-btn rounded color="blue accent-3" dark
                          >Reset Password</v-btn
                        >
                       
                      </div>
                      <div class="ml-3" >
                        <router-link   style="text-decoration:none" to="signin"><p>Already have an account? </p></router-link>
                      </div>
                    </v-col>
                    <v-col cols="12" md="4" class="blue accent-3"> </v-col>
                  </v-row>
                </v-window-item>
              
              </v-window>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
  
  </v-app>
</template>

<script>
import {
       
        emailRule,
        passwordRule,
      
       } from './validation/validation.js';
export default {
  data: () => ({
    step: 1,
     emailRule: emailRule,
        passwordRule:passwordRule,
  }),
  props: {
    source: String,
  },
};
</script>