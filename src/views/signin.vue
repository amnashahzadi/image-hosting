<template>
  <v-app id="inspire">
   
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="8">
            <v-card class="elevation-12">
            
                  <v-row>
                    <v-col cols="12" md="8">
                      <v-card-text class="mt-2">
                        <h1
                          class="
                            text-center
                            display-2
                            blue--text
                            text--accent-3
                          "
                        >
                          Sign in
                        </h1>

                        <h4 class="text-center mt-4">
                          Ensure your email for registration
                        </h4>
                        <v-form>
                          <v-text-field
                            :rules="emailRule"
                            v-model="user.email"
                            prepend-icon="mdi-email"
                            name="email"
                            label="email"
                            type="text"
                            color="blue accent-3"
                          />
                          <v-text-field
                            :rules="passwordRule"
                            v-model="user.password"
                            prepend-icon="mdi-lock"
                            name="password"
                            label="password"
                            type="password"
                            color="blue accent-3"
                          />
                        </v-form>

                        <router-link
                          style="text-decoration: none"
                          to="/forgetPassword"
                        >
                          <h3 class="mt-2">
                            Forgot your password ?
                          </h3></router-link
                        >
                      </v-card-text>

                      <div class="text-center mt-2 pb-2">
                        <v-btn  @click="signIn" rounded color="blue accent-3 mx-2 " dark
                          >SIGN IN</v-btn
                        >

                        <router-link style="text-decoration: none" to="/"
                          ><v-btn
                            rounded
                            outlined
                            color="blue accent-3 mx-2 "
                           
                            >SIGN UP</v-btn
                          ></router-link
                        >
                      </div>
                    </v-col>
                    <v-col cols="12" md="4" class="blue accent-3"> </v-col>
                  </v-row>
             
            </v-card>
          </v-col>
        </v-row>
      </v-container>
   
  </v-app>
</template>

<script>
import { emailRule, passwordRule } from "./validation/validation.js";
export default {
  data: () => ({
  
    emailRule: emailRule,
    passwordRule: passwordRule,
   
 user:{
  
    email: "",
    password: "",
  
 }
  }),

  methods: {
    
   signIn() {
    this.$store.dispatch("loginUser", this.user);
    console.log(this.user);
  },
  },
 
};
</script>