<template>
  <div>
    <v-row>
      <v-col cols="4">
        <day-schedule />
      </v-col>
      <v-col cols="8">
        <calendar :events="events" />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <schedules-tabs :schedulegroups="schedulegroups" />
      </v-col>
      <v-col>
        <goal-card v-for="goal in goals" :key="goal.id" :goal="goal" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Calendar from '~/components/Calendar.vue'
import GoalCard from '~/components/Goals/GoalCard.vue'
import DaySchedule from '~/components/Schedules/DaySchedule.vue'
import SchedulesTabs from '~/components/Schedules/SchedulesTabs.vue'
export default {
  components: {
    Calendar,
    SchedulesTabs,
    GoalCard,
    DaySchedule,
  },
  data() {
    return {
      scheduletab: null,
    }
  },
  computed: {
    ...mapState(['events', 'schedulegroups', 'schedules', 'goals']),
  },
}
</script>

<style lang="scss" scoped></style>
