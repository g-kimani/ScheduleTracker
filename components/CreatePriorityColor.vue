<template>
  <div class="form__field">
    <div class="form__label">
      <strong>Please choose a color:</strong>
    </div>
    <div class="form__input">
      <v-swatches v-model="color" popover-x="left"></v-swatches>
    </div>
  </div>
</template>

<script>
import VSwatches from 'vue-swatches'
import 'vue-swatches/dist/vue-swatches.css'
export default {
  components: { VSwatches },
  data() {
    return {
      color: '#A463BF',
    }
  },
}
</script>

<style scoped></style>
