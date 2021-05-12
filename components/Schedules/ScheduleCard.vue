<template>
  <div>
    <v-card>
      <v-card-title>
        <nuxt-link :to="`/schedules/${schedule.id}`">
          {{ schedule.title }}</nuxt-link
        >
        <v-spacer></v-spacer>
        <edit-actions />
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
        <v-btn tile text @click="show = !show">
          Details<v-icon color="white">{{
            show ? 'mdi-chevron-up' : 'mdi-chevron-down'
          }}</v-icon>
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
import EditActions from '../EditActions.vue'
export default {
  components: { EditActions },
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
