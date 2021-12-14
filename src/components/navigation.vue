<template>
  <div class="app">
    <v-app-bar style="background-color: blue; color: white">
      <v-app-bar-nav-icon
        @click="drawer = true"
        style="color: white"
      ></v-app-bar-nav-icon>


      <v-toolbar-title style="margin-left: 20px">Ocean Gold</v-toolbar-title>
      <v-spacer></v-spacer>
          <v-spacer></v-spacer>     
               <div class="d-flex align-end justify-center"> 
                            <v-col cols="12"> 
                               <v-text-field style="color:white"
                                placeholder="Search images" 
                                append-icon="mdi-magnify"
                                               dense  
                                               hide-details  
                               ></v-text-field>
                            </v-col>
                               </div>
       

      <v-btn style="color: white" to="/gallery" text
        >gallery
        <v-icon small left>mdi-image</v-icon>
      </v-btn>
      <v-btn style="color: white" text>
        Logout
        <v-icon small left @click="logout()">mdi-logout</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <router-link
              style="text-decoration: none; color: #2f99f7"
              to="/Home"
            >
              <v-list-item-title style="color: #2f99f7"
                >Home</v-list-item-title
              ></router-link
            >
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <router-link
              style="text-decoration: none; color: #2f99f7"
              to="/updateprofile"
            >
              Account</router-link
            >
          </v-list-item>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-lock</v-icon>
            </v-list-item-icon>
            <router-link
              style="text-decoration: none; color: #2f99f7"
              to="/updatePassword"
            >
              Update Password</router-link
            >
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>
<script>
export default {
  data: () => ({
    drawer: false,
    group: null,
  }),
};
</script>
<style scoped>
#search{
  color:white;
}
</style>