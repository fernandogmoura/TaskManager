<template>
  <div
      class="text-h5 no-tasks"
    >
      <v-icon
        color="teal accent-2"
        size=150>mdi-check-all</v-icon
      >

      <div class="teal--text">
        All Tasks are done!
      </div>

    </div>
</template>

<script>
export default {

}
</script>

<style>
.no-tasks {
  position: absolute;
  left: 52%;
  top: 35%;
  transform: translate(-50%, -50%);
}
</style>