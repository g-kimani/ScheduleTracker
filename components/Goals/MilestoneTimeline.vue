<template>
  <v-timeline dense>
    <v-timeline-item v-for="(milestone, i) in milestones" :key="i" small>
      <v-row class="pt-1">
        <v-col cols="3">
          {{ new Date(milestone.date) }}
        </v-col>
        <v-col>
          <div class="py-4">
            <h2>
              {{ milestone.title }}
            </h2>
            <div>
              {{ milestone.description }}
            </div>
          </div>
        </v-col>
      </v-row>
    </v-timeline-item>
  </v-timeline>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['milestones']),
  },
}
</script>

<style scoped></style>
