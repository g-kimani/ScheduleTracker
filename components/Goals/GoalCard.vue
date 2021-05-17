<template>
  <div>
    <v-card>
      <v-card-title>
        <nuxt-link :to="`/goals/${goal.id}`"> {{ goal.title }}</nuxt-link>
        <v-spacer></v-spacer>
        <edit-actions />
      </v-card-title>
      <v-card-text>
        Deadline: {{ new Date(goal.deadline).toUTCString() }} <br />
        Sessions Per Week:{{ goal.sessionsPerWeek }}
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn tile text @click="show = !show">
          Details<v-icon color="white">{{
            show ? 'mdi-chevron-up' : 'mdi-chevron-down'
          }}</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import EditActions from '../EditActions.vue'
export default {
  components: { EditActions },
  props: {
    goal: {
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

<style scoped></style>
