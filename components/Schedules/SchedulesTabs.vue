<template>
  <div>
    <v-card>
      <v-card-title> Active Schedules </v-card-title>
      <v-tabs v-model="scheduletab">
        <v-tabs-slider color="yellow"></v-tabs-slider>
        <v-tab v-for="schedulegroup in schedulegroups" :key="schedulegroup.id">
          {{ schedulegroup.title }}
        </v-tab>
      </v-tabs>
      <v-tabs-items v-model="scheduletab">
        <v-tab-item
          v-for="schedulegroup in schedulegroups"
          :key="schedulegroup.id"
        >
          <schedule-card
            v-for="scheduleid in schedulegroup.scheduleIds"
            :key="scheduleid"
            :schedule="$store.getters.getScheduleById(scheduleid)"
          />
        </v-tab-item>
      </v-tabs-items>
    </v-card>
  </div>
</template>

<script>
import ScheduleCard from './ScheduleCard.vue'
export default {
  components: { ScheduleCard },
  props: {
    schedulegroups: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      scheduletab: null,
    }
  },
}
</script>

<style scoped></style>
