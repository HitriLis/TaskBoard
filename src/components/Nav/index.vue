<template lang="pug">
  div
    b-navbar(type="dark" variant="dark")
      b-navbar-nav
        b-nav-item(
          :to="{name: 'boards-list'}"
        )
          | Доски
</template>
