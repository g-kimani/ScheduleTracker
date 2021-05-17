<template>
  <div>
    <v-row>
      <v-col>
        <goal-card :goal="goal" />
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
import GoalCard from '~/components/Goals/GoalCard.vue'
export default {
  components: { GoalCard, Calendar, UpcomingEventsCard, AttendanceCard },
  computed: {
    goal() {
      return this.$store.getters.getGoalById(this.$route.params.id)
    },
    events() {
      return this.$store.getters.getScheduleEvents(this.goal.scheduleid)
    },
  },
}
</script>

<style scoped></style>
