<template>
  <div>
    <Navigation />
    
    <v-main>
      <v-app id="inspire">
        <v-content>
          <v-container class="fill-height" fluid>
            <v-row align="center" justify="center">
              <v-col cols="12" sm="8" md="8">
                <v-bottom-navigation
    :value="value"
    color="blue"
    grow
  >
    <v-btn>
      <span> ALL POST</span>

     
    </v-btn>

    <v-btn>
      <span>PRIVATE</span>

      <v-icon></v-icon>
    </v-btn>

    <v-btn>
      <span>PUBLIC</span>

      <v-icon></v-icon>
    </v-btn>
      <v-btn>
      <span>HIDDEN</span>

      <v-icon></v-icon>
    </v-btn>
  </v-bottom-navigation>
                <v-card class="mx-auto" max-width="900">
                  <v-container fluid>
                    <v-row dense>
                      <v-col
                        v-for="card in cards"
                        :key="card.title"
                        :cols="card.flex"
                      >
                        <v-card>
                          <v-img
                            :src="card.src"
                            class="white--text align-end"
                            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                            height="200px"
                          >
                            <v-card-title v-text="card.title"></v-card-title>
                          </v-img>

                          <v-card-actions>
                            <v-spacer></v-spacer>

                            <v-btn icon>
                              <v-icon>mdi-delete</v-icon>
                            </v-btn>

                            <v-btn icon>
                              <v-icon>mdi-update</v-icon>
                            </v-btn>

                            <v-btn icon>
                              <v-icon>mdi-share-variant</v-icon>
                            </v-btn>
                          </v-card-actions>
                        </v-card>
                      </v-col>
                    </v-row>
                  </v-container>
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


export default {
  components: {
    Navigation,
  
  },
  data: () => ({
    cards: [
      {
        title: "Favorite road trips",
        src: "https://cdn.vuetifyjs.com/images/cards/road.jpg",
        flex: 6,
      },
      {
        title: "Best airlines",
        src: "https://cdn.vuetifyjs.com/images/cards/plane.jpg",
        flex: 6,
      },
      {
        title: "Favorite road trips",
        src: "https://cdn.vuetifyjs.com/images/cards/road.jpg",
        flex: 6,
      },
      {
        title: "Favorite road trips",
        src: "https://cdn.vuetifyjs.com/images/cards/road.jpg",
        flex: 6,
      },
    ],
  }),
};
</script>