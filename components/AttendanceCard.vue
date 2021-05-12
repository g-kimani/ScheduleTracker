<template>
  <v-card>
    <v-card-title> Recent Attendance </v-card-title>
    <div class="d-flex flex-row">
      <event-attendance-card
        v-for="event in events"
        :key="event.id"
        :event="event"
      />
    </div>
  </v-card>
</template>

<script>
import EventAttendanceCard from './Events/EventAttendanceCard.vue'
export default {
  components: { EventAttendanceCard },
  props: {
    events: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style scoped></style>
