<template>
  <div>
    <v-row>
      <v-col cols="6">
        <v-row>
          <schedule-card style="width=100%" :schedule="schedule" />
        </v-row>
        <v-row>
          <upcoming-events-card :events="events" />
        </v-row>
      </v-col>
      <v-col cols="6">
        <calendar :schedule-presets="[parseInt($route.params.id)]" />
      </v-col>
    </v-row>
    <v-row>
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
