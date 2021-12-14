<template>
  <div>
    <Navigation />
    <v-main>
      <v-app id="inspire">
        <v-content>
          <v-container class="fill-height" fluid>
            <v-row align="center" justify="center">
              <v-col cols="12" sm="8" md="8">
                <v-card class="elevation-12" style="margin-bottom: 7%">
                  <v-window v-model="step">
                    <v-window-item :value="2">
                      <v-row class="fill-height">
                        <v-col cols="12" md="1"> </v-col>

                        <v-col cols="12" md="8">
                          <v-card-text>
                            <h1
                              class="
                                text-center
                                display-2
                                blue--text
                                text--accent-3
                              "
                            >
                              Update Profile
                            </h1>

                            <v-form>
                              <v-text-field
                                :rules="UsernameRule"
                                prepend-icon="mdi-account"
                                name="username"
                                label="username"
                                type="text"
                                color="blue accent-3"
                              >
                              </v-text-field>
                              <v-text-field
                                :rules="emailRule"
                                prepend-icon="mdi-email"
                                name="email"
                                label="email"
                                type="text"
                                color="blue accent-3"
                              />

                              <v-text-field
                                :rules="numberRule"
                                id="age"
                                prepend-icon="mdi-calendar-today"
                                name="age"
                                label="age"
                                type="number"
                                color="blue accent-3"
                              />
                              <v-text-field
                                :rules="passwordRule"
                                id="Password"
                                prepend-icon="mdi-lock"
                                name="password"
                                label="password"
                                type="password"
                                color="blue accent-3"
                              />
                              <v-text-field
                                :rules="imageRule"
                                id="File input"
                                prepend-icon="mdi-camera"
                                label="File input"
                                color="blue accent-3"
                              />
                            </v-form>
                          </v-card-text>
                          <div class="text-center mt-n5 pb-2">
                            <v-btn rounded color="blue accent-3  mx-2" dark
                              >Register</v-btn
                            >
                          </div>
                        </v-col>
                      </v-row>
                    </v-window-item>
                  </v-window>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-content>
      </v-app>
    </v-main>
  </div>
</template>

<script>
import Navigation from "../components/navigation.vue";
import {
  UsernameRule,
  emailRule,
  passwordRule,
  numberRule,
  imageRule,
} from "./validation/validation.js";

export default {
  components: {
    Navigation,
  },
  data: () => ({
    step: 1,
    emailRule: emailRule,
    passwordRule: passwordRule,
    UsernameRule: UsernameRule,
    numberRule: numberRule,
    imageRule: imageRule,
  }),
  props: {
    source: String,
  },
};
</script>

