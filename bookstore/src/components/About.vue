<template>
  <v-carousel hide-controls>
    <v-carousel-item v-for="(item,i) in items" :src="item.src" :key="i"></v-carousel-item>
  </v-carousel>
</template>
<script>
  export default {
    data () {
      return {
        items: [
          {
            src: '/static/doc-images/carousel/imagen1.jpg'
          },
          {
            src: '/static/doc-images/carousel/imagen2.jpg'
          },
          {
            src: '/static/doc-images/carousel/imagen3.jpg'
          },
          {
            src: '/static/doc-images/carousel/imagen4.jpg'
          }
        ]
      }
    }
  }
</script>





