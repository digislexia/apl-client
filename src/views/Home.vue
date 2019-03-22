<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    {{ uiColorPalette }}
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import gql from 'graphql-tag'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  apollo: {
    uiColorPalette: gql`query {
      uiColorPalette @client
    }`
  }
}
</script>
