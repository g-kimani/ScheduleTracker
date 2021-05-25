<template>
  <div>
    <v-row>
      <v-col>
        <v-card>
          <v-card-title>
            Current Goals
            <v-icon> mdi-trophy-variant </v-icon>
          </v-card-title>
          <v-card-text>
            <goal-card v-for="goal in goals" :key="goal.id" :goal="goal" />
          </v-card-text>
        </v-card>
      </v-col>
      <v-col>
        <upcoming-events-card :events="goalEvents" />
      </v-col>
    </v-row>
    <v-row>
      <attendance-card :events="goalEvents" />
    </v-row>
    <v-btn to="/filter">Filter</v-btn>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import AttendanceCard from '~/components/AttendanceCard.vue'
import UpcomingEventsCard from '~/components/Events/UpcomingEventsCard.vue'
import GoalCard from '~/components/Goals/GoalCard.vue'
export default {
  components: { GoalCard, UpcomingEventsCard, AttendanceCard },
  computed: {
    ...mapState(['goals', 'events']),
    goalEvents() {
      const goalEvents = []
      this.goals.forEach((goal) => {
        this.events.forEach((event) => {
          if (
            goal.scheduleid === event.scheduleid &&
            !goalEvents.includes(event)
          ) {
            goalEvents.push(event)
          }
        })
      })
      return goalEvents
    },
  },
}
</script>

<style scoped></style>
