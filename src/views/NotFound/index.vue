<template lang="pug">
  b-container(
    class="d-flex justify-content-center mt-3"
  )
    b-jumbotron(
      header="Cтраница не найдена"
    )
      b-button(
        variant="outline-primary"
        :to="{name: 'boards-list'}"
      )
        | Доски
</template>
