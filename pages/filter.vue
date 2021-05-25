<template>
  <div>
    <filter-schedules :schedule-presets="[{ text: 'Maths', value: 1 }]" />
    <create-priority-color />
  </div>
</template>

<script>
import CreatePriorityColor from '~/components/CreatePriorityColor.vue'
import FilterSchedules from '~/components/Schedules/FilterSchedules.vue'
export default {
  components: { FilterSchedules, CreatePriorityColor },
}
</script>

<style scoped></style>
