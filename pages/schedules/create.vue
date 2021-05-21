<template>
  <div>
    <create-schedule-stepper @scheduleCreated="events = $event" />
    <calendar :events="events" />
  </div>
</template>

<script>
import CreateScheduleStepper from '~/components/CreateSchedules/CreateScheduleStepper.vue'
export default {
  components: { CreateScheduleStepper },
  data() {
    return {
      events: [],
    }
  },
}
</script>

<style scoped></style>
