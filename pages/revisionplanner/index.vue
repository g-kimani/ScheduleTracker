<template>
  <div>
    <v-row>
      <v-col>
        <active-schedules-card :schedules="activeSchedules" />
      </v-col>
      <v-col>
        <calendar :schedule-presets="activeSchedules.map((a) => a.id)" />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <upcoming-events-card :events="events" />
      </v-col>
      <v-col>
        <attendance-card :events="revisionEvents" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Calendar from '~/components/Calendar.vue'
import UpcomingEventsCard from '~/components/Events/UpcomingEventsCard.vue'
import ActiveSchedulesCard from '~/components/Schedules/ActiveSchedulesCard.vue'
export default {
  components: { Calendar, ActiveSchedulesCard, UpcomingEventsCard },
  computed: {
    ...mapState(['revisionschedules', 'events']),
    activeSchedules() {
      const activeSchedules = []
      const revisionschedules = this.$store.getters.getActiveRevisionSchedules()
      revisionschedules.forEach((rschedule) => {
        const schedule = this.$store.getters.getScheduleById(
          rschedule.scheduleid
        )
        activeSchedules.push(schedule)
      })
      return activeSchedules
    },
    revisionEvents() {
      const allEvents = []
      this.activeSchedules.forEach((schedule) => {
        this.events.forEach((e) => {
          if (e.scheduleid === schedule.id) {
            allEvents.push(e)
          }
        })
      })
      return allEvents
    },
  },
}
</script>

<style scoped></style>
