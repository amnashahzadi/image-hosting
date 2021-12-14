<template>
  <v-app id="inspire">
  
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="8">
            <v-card class="elevation-12">
                  <v-row class="fill-height">
                    <v-col cols="12" md="4" class="blue"> </v-col>

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
                          Create Account
                        </h1>

                        <h4 class="text-center mt-4">
                          Ensure your email for registration
                        </h4>
                        <v-form @submit.prevent="submitForm" ref="form">
                          <v-text-field
                            v-model="user.name"
                            :rules="UsernameRule"
                            prepend-icon="mdi-account"
                            name="name"
                            label="username"
                            type="text"
                            color="blue accent-3"
                          >
                          </v-text-field>
                          <v-text-field
                            v-model="user.email"
                            :rules="emailRule"
                            prepend-icon="mdi-email"
                            name="email"
                            label="email"
                            type="text"
                            color="blue accent-3"
                          />

                          <v-text-field
                            v-model="user.age"
                            :rules="numberRule"
                            prepend-icon="mdi-calendar-today"
                            name="age"
                            label="age"
                            type="number"
                            color="blue accent-3"
                          />
                          <v-text-field
                            v-model="user.password"
                            :rules="passwordRule"
                            prepend-icon="mdi-lock"
                            name="password"
                            label="password"
                            type="password"
                            color="blue accent-3"
                          />
                          <v-file-input
                            v-model="user.image"
                            :rules="imageRule"
                            accept="image/png, image/jpeg, image/bmp"
                            placeholder="Pick an picture"
                            prepend-icon="mdi-camera"
                            label="image "
                            name="image"
                            color="blue accent-3"
                            required
                            v-on:change="storeImg"
                          ></v-file-input>
                        </v-form>
                      </v-card-text>
                      <div class="text-center mt-n5 pb-2">
                        <v-btn
                          @click="signUp"
                          rounded
                          color="blue accent-3  mx-2"
                          dark
                          >SIGN UP</v-btn
                        >
                        <router-link style="text-decoration: none" to="/signin"
                          ><v-btn rounded outlined color="blue accent-3  mx-2"
                            >Sign in</v-btn
                          ></router-link
                        >
                      </div>
                    </v-col>
                  </v-row>
             
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    
  </v-app>
</template>

<script>

import {
  UsernameRule,
  emailRule,
  passwordRule,
  numberRule,
  imageRule,
} from "./validation/validation.js";
export default {
  data: () => ({
  
    emailRule: emailRule,
    passwordRule: passwordRule,
    UsernameRule: UsernameRule,
    numberRule: numberRule,
    imageRule: imageRule,
 user:{
    name: "",
    email: "",
    age: "",
    password: "",
    image: "",
 }
  }),

  methods: {
     storeImg(event) {
      let vm = this;
      const reader = new FileReader();
      reader.addEventListener(
        "load",
        function () {
          vm.user.image = reader.result;
        },
        false
      );
      reader.readAsDataURL(event);
    },
  //   submitForm() {
  //     if (this.$refs.form.validate()) {
  //       this.loading = true;
  //     }
  //   },
   signUp() {
    this.$store.dispatch("loadUser", this.user);
    console.log(this.user);
  },
  },
 
};
</script>