<template>
  <div>
    <v-card>
      <v-card-title> Today's Schedule</v-card-title>
      <div v-if="daySchedule.length > 0">
        <v-timeline dense>
          <v-timeline-item
            v-for="(event, i) in daySchedule"
            :key="i"
            :color="event.color"
          >
            <event-card :event="event" />
          </v-timeline-item>
        </v-timeline>
      </div>
      <div v-else class="text-center">No Events Lined Up for today</div>
    </v-card>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import EventCard from '../Events/EventCard.vue'
export default {
  components: { EventCard },
  computed: {
    ...mapState(['events']),
    daySchedule() {
      const schedule = []
      this.events.forEach((event) => {
        if (this.dateIsToday(event.start)) {
          schedule.push(event)
        }
      })
      return schedule
    },
  },
  methods: {
    dateIsToday(date) {
      const today = new Date()
      const checkDate = new Date(date)
      return (
        today.getFullYear() === checkDate.getFullYear() &&
        today.getMonth() === checkDate.getMonth() &&
        today.getDate() === checkDate.getDate()
      )
    },
  },
}
</script>

<style scoped></style>
