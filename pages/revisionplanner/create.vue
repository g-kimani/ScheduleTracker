<template>
  <div>
    <v-row>
      <v-col cols="6">
        <create-revision-schedule @scheduleCreated="events = $event" />
      </v-col>
      <v-col cols="6">
        <calendar :events="events" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Calendar from '~/components/Calendar.vue'
import CreateRevisionSchedule from '~/components/CreateSchedules/CreateRevisionSchedule.vue'
export default {
  components: { CreateRevisionSchedule, Calendar },
  data() {
    return {
      events: [],
    }
  },
}
</script>

<style scoped></style>
