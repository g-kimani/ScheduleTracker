<template>
  <div>
    <v-row>
      <v-col>
        <goal-card :goal="goal" />
      </v-col>
      <v-col>
        <calendar :schedule-presets="[parseInt($route.params.id)]" />
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
    <milestone-timeline :id="parseInt($route.params.id)" />
  </div>
</template>

<script>
import AttendanceCard from '~/components/AttendanceCard.vue'
import Calendar from '~/components/Calendar.vue'
import UpcomingEventsCard from '~/components/Events/UpcomingEventsCard.vue'
import GoalCard from '~/components/Goals/GoalCard.vue'
import MilestoneTimeline from '~/components/Goals/MilestoneTimeline.vue'
export default {
  components: {
    GoalCard,
    Calendar,
    UpcomingEventsCard,
    AttendanceCard,
    MilestoneTimeline,
  },
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
