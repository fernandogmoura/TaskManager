<template>
    <v-text-field
      :value="$store.state.search"
      @input="$store.commit('setSearch', $event)"
      class="pt-7 expanding-search"
      placeholder="Search"
      prepend-inner-icon="mdi-magnify"
      clearable
      dense
    ></v-text-field>
</template>

<script>
export default {

}
</script>

<style>
.expanding-search, .v-input__slot, ::before {
    border-color: transparent !important;
}

.expanding-search {
    max-width: 100px !important
}

</style>