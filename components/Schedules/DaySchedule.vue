<template>
  <div>
    <v-card>
      <v-card-title>
        Today's Schedule <v-spacer></v-spacer>
        <v-dialog
          v-model="addEventDialog"
          transition="dialog-bottom-transition"
        >
          <template #activator="{ on, attrs }">
            <v-btn fab dark small color="indigo" v-bind="attrs" v-on="on"
              ><v-icon>mdi-plus</v-icon></v-btn
            ></template
          >
          <create-event @eventCreated="addEvent($event)" />
        </v-dialog>
      </v-card-title>

      <div v-if="daySchedule.length > 0">
        <v-timeline dense>
          <v-timeline-item
            v-for="(event, i) in daySchedule"
            :key="i"
            :color="event.color"
          >
            <event-card :event="event" />
          </v-timeline-item>
        </v-timeline>
      </div>
      <div v-else class="text-center">No Events Lined Up for today</div>
    </v-card>
  </div>
</template>

<script>
/* eslint-disable no-console */
import { mapState } from 'vuex'
import CreateEvent from '../Events/CreateEvent.vue'
import EventCard from '../Events/EventCard.vue'
export default {
  components: { EventCard, CreateEvent },
  data() {
    return {
      addEventDialog: false,
    }
  },
  computed: {
    ...mapState(['events']),
    daySchedule() {
      const schedule = []
      this.events.forEach((event) => {
        if (this.dateIsToday(event.start)) {
          schedule.push(event)
        }
      })
      return schedule.sort(
        (a, b) => new Date(a.start).getTime() - new Date(b.start).getTime()
      )
    },
  },
  methods: {
    dateIsToday(date) {
      const today = new Date()
      const checkDate = new Date(date)
      return (
        today.getFullYear() === checkDate.getFullYear() &&
        today.getMonth() === checkDate.getMonth() &&
        today.getDate() === checkDate.getDate()
      )
    },
    addEvent(event) {
      this.addEventDialog = false
      this.$store.commit('ADD_EVENT', event)
      console.log(event)
    },
  },
}
</script>

<style scoped></style>
