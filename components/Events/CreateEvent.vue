<template>
  <div>
    <v-card>
      <v-card-title> Create Event </v-card-title>
      <v-form ref="form">
        <v-container>
          <v-text-field v-model="name" label="Title"></v-text-field>
          <v-row>
            <v-col>
              <v-menu
                v-model="startDateMenu"
                :close-on-content-click="false"
                :nudge-right="40"
                transition="scale-transition"
                offset-y
                min-width="auto"
              >
                <template #activator="{ on, attrs }">
                  <v-text-field
                    v-model="startDate"
                    label="Start Date"
                    prepend-icon="mdi-calendar"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker
                  v-model="startDate"
                  @input="startDateMenu = false"
                ></v-date-picker>
              </v-menu>
            </v-col>
            <v-col>
              <v-menu
                v-model="endDateMenu"
                :close-on-content-click="false"
                :nudge-right="40"
                transition="scale-transition"
                offset-y
                min-width="auto"
              >
                <template #activator="{ on, attrs }">
                  <v-text-field
                    v-model="endDate"
                    label="End Date"
                    prepend-icon="mdi-calendar"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker
                  v-model="endDate"
                  @input="endDateMenu = false"
                ></v-date-picker>
              </v-menu>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-menu
                ref="startTimeRef"
                v-model="startTimeMenu"
                :close-on-content-click="false"
                :nudge-right="40"
                :return-value.sync="startTime"
                transition="scale-transition"
                offset-y
                max-width="290px"
                min-width="290px"
              >
                <template #activator="{ on, attrs }">
                  <v-text-field
                    v-model="startTime"
                    label="Start Time"
                    prepend-icon="mdi-clock-time-four-outline"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-time-picker
                  v-if="startTimeMenu"
                  v-model="startTime"
                  full-width
                  :max="endTime"
                  @click:minute="$refs.startTimeRef.save(startTime)"
                ></v-time-picker>
              </v-menu>
            </v-col>
            <v-col>
              <v-menu
                ref="endTimeRef"
                v-model="endTimeMenu"
                :close-on-content-click="false"
                :nudge-right="40"
                :return-value.sync="endTime"
                transition="scale-transition"
                offset-y
                max-width="290px"
                min-width="290px"
              >
                <template #activator="{ on, attrs }">
                  <v-text-field
                    v-model="endTime"
                    label="End Time"
                    prepend-icon="mdi-clock-time-four-outline"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-time-picker
                  v-if="endTimeMenu"
                  v-model="endTime"
                  full-width
                  :min="startTime"
                  @click:minute="$refs.endTimeRef.save(endTime)"
                ></v-time-picker>
              </v-menu>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
      <v-card-actions>
        <v-btn @click="addEvent">Add</v-btn>
        <v-btn @click="$refs.form.reset()">Clear</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      startDate: new Date().toISOString().substr(0, 10),
      startDateMenu: false,
      endDate: new Date().toISOString().substr(0, 10),
      endDateMenu: false,
      startTime: null,
      endTime: null,
      startTimeMenu: false,
      endTimeMenu: false,
      event: {},
    }
  },
  methods: {
    addEvent() {
      const startHour = this.startTime.split(':')[0]
      const startMinutes = this.startTime.split(':')[1]
      const endHour = this.endTime.split(':')[0]
      const endMinutes = this.endTime.split(':')[1]
      const event = {
        name: this.name,
        start: new Date(this.startDate).setHours(startHour, startMinutes),
        end: new Date(this.endDate).setHours(endHour, endMinutes),
        priority: 1,
      }
      this.event = event
      this.$emit('eventCreated', event)
    },
    clear() {
      this.name = ''
      this.startDate = null
      this.endDate = null
      this.event = {}
    },
  },
}
</script>

<style scoped></style>
