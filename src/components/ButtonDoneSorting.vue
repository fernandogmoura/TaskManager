<template>
  <v-btn
    @click="$store.commit('toggleSorting')"
    class="button-done-sorting"
    color="primary"
  >
      Done sorting!
  </v-btn>
</template>

<script>
export default {

}
</script>

<style scoped>
.button-done-sorting {
    position: fixed;
    left: 50%;
    bottom: 20px;
    transform: translateX(-50%)
}

</style>