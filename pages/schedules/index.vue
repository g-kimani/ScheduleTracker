<template>
  <div>
    <v-btn to="/schedules/create">
      Create Schedule <v-icon>mdi-plus</v-icon>
    </v-btn>
    <schedule-card
      v-for="schedule in schedules"
      :key="schedule.id"
      :schedule="schedule"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ScheduleCard from '~/components/Schedules/ScheduleCard.vue'
export default {
  components: { ScheduleCard },
  computed: {
    ...mapState(['schedules']),
  },
}
</script>

<style scoped></style>
