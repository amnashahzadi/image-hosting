<template>
  <v-app id="inspire">
   
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="8">
              <template>
  <v-bottom-navigation
    :value="value"
    color="primary"
  >
    <v-btn>
      <span>Recents</span>

      <v-icon color="blue">mdi-history</v-icon>
    </v-btn>

    <v-btn>
      <span>Favorites</span>

      <v-icon color="blue">mdi-heart</v-icon>
    </v-btn>

    <v-btn>
      <span>Nearby</span>

      <v-icon color="blue">mdi-map-marker</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>
       
          </v-col>
        </v-row>
      </v-container>
   
  </v-app>
</template>

<script>

export default {

  
   
};
</script>