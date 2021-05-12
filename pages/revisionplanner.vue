<template>
  <div>
    <v-row>
      <v-col>
        <active-schedules-card :schedules="activeSchedules" />
      </v-col>
      <v-col>
        <calendar :events="revisionEvents" />
      </v-col>
    </v-row>
    <v-row>
      <v-col> </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Calendar from '~/components/Calendar.vue'
import ActiveSchedulesCard from '~/components/Schedules/ActiveSchedulesCard.vue'
export default {
  components: { Calendar, ActiveSchedulesCard },
  computed: {
    ...mapState(['revisionschedules', 'events']),
    activeSchedules() {
      return this.$store.getters.getActiveRevisionSchedules()
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
