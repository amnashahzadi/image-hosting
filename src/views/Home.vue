<template>
  <div>
    <navigation />
    <!-- <v-container> -->

  

    <vue-dropzone :options="dropzoneOptions" :useCustomSlot="true">
      <div class="dropzone-custom-content" id="dropzone">
        <h3 class="dropzone-custom-title">Upload and Share Your Images!</h3>
        <div class="subtitle">
  
        </div>
     
      </div>
      
    </vue-dropzone>
    <!-- </v-container> -->
  
  

  </div>
  
</template>
<script>
import vue2Dropzone from 'vue2-dropzone'
import 'vue2-dropzone/dist/vue2Dropzone.min.css'

import Navigation from '../components/navigation.vue'



export default
 {  name: 'app', 
  components: {  
     vueDropzone: vue2Dropzone,   
    Navigation,
  
  
   
     }, 
       data: function () {    
         return {      dropzoneOptions: 
         {          url: 'https://httpbin.org/post',      
             thumbnailWidth: 150,       
                maxFilesize: 0.5,             
                     addRemoveLinks: true,
          headers: { "My-Awesome-Header": "header value" }     
           }  
             }
               }
               }</script>
<style>
#dropzone{
  margin-top:4%
}
</style>