<template>
  <div>
    <v-tooltip bottom>
      <template #activator="{ on, attrs }">
        <v-card
          :color="didAttend ? 'green' : 'red'"
          v-bind="attrs"
          v-on="on"
          @click="setEventAttended({ id: event.id, data: !didAttend })"
        >
          <v-card-title>
            {{ event.title }}
            {{ didAttend ? 'EVENT ATTENDED' : 'EVENT MISSED' }}
          </v-card-title>
          <v-card-text> {{ event.start }} - {{ event.end }} </v-card-text>
        </v-card>
      </template>
      <span>Click To Change Attendance</span>
    </v-tooltip>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: {
    event: {
      type: Object,
      required: true,
    },
  },
  computed: {
    didAttend() {
      return this.$store.getters.getEventAttendance(this.event.id)
    },
  },
  methods: {
    changeAttendance(payload) {
      this.$store.state.actions.setEventAttended(payload)
    },
    ...mapActions(['setEventAttended']),
  },
}
</script>

<style scoped></style>
