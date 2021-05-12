<template>
  <div>
    <v-card :color="didAttend ? 'green' : 'red'">
      <v-card-title>
        {{ event.title }}
        {{ didAttend ? 'EVENT ATTENDED' : 'EVENT MISSED' }}
      </v-card-title>
      <v-card-text> {{ event.start }} - {{ event.end }} </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    event: {
      type: Object,
      required: true,
    },
  },
  computed: {
    didAttend() {
      return this.$store.getters.getEventAttendance(this.event.id)
    },
  },
}
</script>

<style scoped></style>
