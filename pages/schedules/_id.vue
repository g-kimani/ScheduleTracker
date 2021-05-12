<template>
  <div>
    <v-row>
      <v-col>
        <schedule-card :schedule="schedule" />
      </v-col>
      <v-col>
        <calendar :events="events" />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <upcoming-events-card :events="events" />
      </v-col>
      <v-col>
        <attendance-card :events="events" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import AttendanceCard from '~/components/AttendanceCard.vue'
import Calendar from '~/components/Calendar.vue'
import UpcomingEventsCard from '~/components/Events/UpcomingEventsCard.vue'
import ScheduleCard from '~/components/Schedules/ScheduleCard.vue'
export default {
  components: { ScheduleCard, Calendar, UpcomingEventsCard, AttendanceCard },
  computed: {
    schedule() {
      return this.$store.getters.getScheduleById(this.$route.params.id)
    },
    events() {
      return this.$store.getters.getScheduleEvents(this.$route.params.id)
    },
  },
}
</script>

<style scoped></style>
