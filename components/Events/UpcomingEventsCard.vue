<template>
  <div>
    <v-card>
      <v-card-title> Upcoming Events </v-card-title>
      <v-carousel hide-delimiters height="100%" light show-arrows-on-hover>
        <v-carousel-item v-for="event in events" :key="event.id">
          <event-card :event="event" />
        </v-carousel-item>
      </v-carousel>
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
