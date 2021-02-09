<template lang="pug">
  div(
    id="app"
  )
    Nav
    b-container(fluid)
      router-view(:key="$route.fullPath")
</template>

<script>
import Nav from '@/components/Nav'
export default {
  components: {
    Nav
  },
  methods: {
    hideModal () {
      console.log('this.board')
    }
  }
}
</script>
<style lang="stylus">
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
</style>
