<template lang="pug">
  div
    b-navbar(type="dark" variant="dark")
      b-navbar-nav
        b-nav-item(
          :to="{name: routeLink}"
        )
          | {{$route.name === 'boards-list' ? 'Home' : 'Доски'}}
</template>

<script>
export default {
  computed: {
    routeLink () {
      return this.$route.name === 'boards-list' ? 'home' : 'boards-list'
    }
  }
}
</script>
