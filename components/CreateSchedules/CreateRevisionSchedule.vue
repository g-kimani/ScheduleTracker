<template>
  <div>
    <v-card>
      <v-card-title> Create Revision Schedule </v-card-title>
      <v-form>
        <v-container>
          <v-text-field
            v-model="title"
            required
            clearable
            label="Title"
          ></v-text-field>
          <v-spacer></v-spacer>
          <v-subheader> Pick Date Range </v-subheader>
          <v-date-picker v-model="dates" range></v-date-picker>
          <v-spacer></v-spacer>
          <v-subheader>
            Number Of Sessions Per Week: {{ sessionsPerWeek }}
          </v-subheader>
          <v-slider
            v-model="sessionsPerWeek"
            class="align-center"
            :max="7"
            :min="1"
            hide-details
          >
            <template #thumb-label="props">
              {{ props.value }}
            </template>
          </v-slider>
          <v-spacer></v-spacer>
          <v-subheader>
            Length Of Sessions: {{ lengthOfSession }} Hours
          </v-subheader>
          <v-slider
            v-model="lengthOfSession"
            class="align-center"
            :max="23"
            :min="1"
            hide-details
          >
            <template #thumb-label="props">
              {{ props.value }}
            </template>
          </v-slider>
          <v-spacer></v-spacer>
          <v-subheader> Set Min hours - Max hours </v-subheader>
          <v-text-field v-model="minHours" type="number"></v-text-field>
          <v-text-field v-model="maxHours" type="number"></v-text-field>
        </v-container>
      </v-form>
      <v-card-actions>
        <v-btn @click="generateRevision">Generate Revision</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
/* eslint-disable no-console */
import { mapState } from 'vuex'
export default {
  data() {
    return {
      valid: false,
      title: '',
      dates: [],
      sessionsPerWeek: 0,
      lengthOfSession: 0,
      minHours: 0,
      maxHours: 0,
    }
  },
  computed: {
    ...mapState(['events']),
  },
  methods: {
    addRevisionEvents(revents) {
      revents.forEach((revent) => this.events.push(revent))
    },
    getRandomDays(num) {
      const days = [0, 1, 2, 3, 4, 5, 6]
      const out = []
      while (out.length < num) {
        const index = Math.floor(days.length * Math.random())
        if (!out.includes(days[index])) {
          out.push(days[index])
        }
      }
      return out
    },
    randomRange(min, max) {
      return Math.floor((max - min + 1) * Math.random() + min)
    },
    generateRevision() {
      const currentDay = new Date(this.dates[0])
      const revisionEnd = new Date(`${this.dates[1]}T23:59:59`)
      //   console.log(currentDay)

      const revisionEvents = []
      let days = this.getRandomDays(this.sessionsPerWeek)

      while (currentDay.getTime() <= revisionEnd.getTime()) {
        const startDay = new Date(currentDay)
        const endDay = new Date(currentDay)
        if (currentDay.getDay() === 0) {
          days = this.getRandomDays(this.sessionsPerWeek)
        }
        let placed = false

        while (!placed) {
          console.log(typeof this.minHours)
          const startTime = this.randomRange(
            parseInt(this.minHours),
            parseInt(this.maxHours)
          )
          console.log(startTime)
          const endTime = startTime + this.lengthOfSession

          startDay.setHours(startTime)
          endDay.setHours(endTime)
          // console.log(startDay)

          if (this.checkTimeFree(startDay, endDay)) {
            if (days.includes(currentDay.getDay())) {
              revisionEvents.push({
                name: this.title,
                start: startDay,
                end: endDay,
                color: 'blue',
                timed: true,
              })
            }
            placed = true
          }

          placed = true
        }
        currentDay.setDate(currentDay.getDate() + 1)
      }
      console.log(revisionEvents)
      this.$emit('scheduleCreated', revisionEvents)
    },
    checkTimeFree(start, end) {
      this.events.forEach((event) => {
        const checkStart = new Date(event.start)
        const checkEnd = new Date(event.end)
        if (
          checkStart.getTime() <= start.getTime() < checkEnd.getTime() ||
          checkStart.getTime() < end.getTime() < checkEnd.getTime()
        ) {
          return false
        }
      })
      return true
    },
  },
}
</script>

<style scoped></style>
