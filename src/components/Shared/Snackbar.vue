<template>
  <v-snackbar
      v-model="$store.state.snackbar.show"
    >
      {{ $store.state.snackbar.text }}

      <template v-slot:action>
        <v-btn
          @click="$store.state.snackbar.show = false"
          color="red"
          text
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
</template>


<script>
  export default {

  }
</script>

<style>

</style>