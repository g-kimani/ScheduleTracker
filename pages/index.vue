<template>
  <div>
    <v-row>
      <v-col cols="4">
        <v-card>
          <v-card-title> Upcoming events </v-card-title>
          <event-card v-for="event in events" :key="event.id" :event="event" />
        </v-card>
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
        <goals-card v-for="goal in goals" :key="goal.id" :goal="goal" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Calendar from '~/components/Calendar.vue'
import EventCard from '~/components/Events/EventCard.vue'
import GoalsCard from '~/components/Goals/GoalsCard.vue'
import SchedulesTabs from '~/components/Schedules/SchedulesTabs.vue'
export default {
  components: { Calendar, EventCard, SchedulesTabs, GoalsCard },
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
