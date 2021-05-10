<template>
  <div>
    <v-card>
      <v-card-title>
        {{ schedule.title }}
      </v-card-title>
      <v-card-subtitle>
        {{ schedule.active ? 'Schedule active' : 'Schedule inactive' }}
      </v-card-subtitle>
      <v-card-text>
        <v-row>
          <v-col>
            <v-subheader> Start </v-subheader>
            {{ schedule.start }}
          </v-col>
          <v-col>
            <v-subheader> End </v-subheader>
            {{ schedule.end }}
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn icon @click="show = !show">
          Details
          <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
        </v-btn>
      </v-card-actions>
      <v-expand-transition>
        <div v-show="show">
          <v-divider></v-divider>
          <v-card-text>
            <v-row>
              <v-col> Sessions Per Week: {{ schedule.sessionsPerWeek }} </v-col>
              <v-col>
                Length of Sessions: {{ schedule.lengthOfSession }}
              </v-col>
            </v-row>
            <v-row>
              <v-col> Minimum Start Hour: {{ schedule.minStartHour }} </v-col>
              <v-col> Maximum End Hour: {{ schedule.maxEndHour }} </v-col>
            </v-row>
            Priority: {{ schedule.priority }}
          </v-card-text>
        </div>
      </v-expand-transition>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    schedule: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      show: false,
    }
  },
}
</script>

<style lang="scss" scoped></style>
