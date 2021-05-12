<template>
  <div>
    <v-card>
      <v-card-title>
        Active Schedules <v-spacer></v-spacer><edit-actions
      /></v-card-title>
      <schedule-card
        v-for="schedule in schedules"
        :key="schedule.id"
        :schedule="schedule"
      />
    </v-card>
  </div>
</template>

<script>
import ScheduleCard from './ScheduleCard.vue'
export default {
  components: { ScheduleCard },
  props: {
    schedules: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style scoped></style>
