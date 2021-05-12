<template>
  <div>
    <v-card>
      <v-card-title> Upcoming Events </v-card-title>
      <event-card v-for="event in events" :key="event.id" :event="event" />
    </v-card>
  </div>
</template>

<script>
import EventCard from './EventCard.vue'
export default {
  components: { EventCard },
  props: {
    events: {
      type: Array,
      default() {
        return []
      },
    },
  },
}
</script>

<style scoped></style>
