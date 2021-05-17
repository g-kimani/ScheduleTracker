<template>
  <v-stepper v-model="e1">
    <v-stepper-header>
      <v-stepper-step :complete="e1 > 1" step="1" editable>
        Details
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 2" step="2" editable>
        Add Events
        <small>Optional</small>
      </v-stepper-step>

      <v-divider></v-divider>
      <v-stepper-step :complete="e1 > 3" step="3" editable>
        Add Topics
        <small>Optional</small>
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 4" step="4" editable>
        Settings
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step step="5"> Generate </v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
        <v-card class="mb-12">
          <v-text-field
            v-model="title"
            required
            clearable
            label="Title"
          ></v-text-field>
          <v-spacer></v-spacer>
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
          <v-subheader
            >Plan your event(s) min start time and min end time:
          </v-subheader>

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
          <v-spacer></v-spacer>
          <v-row justify="space-around" align="center" class="my-6">
            <v-col cols="12">
              <h2 class="text-center">
                Pick Days Of Week <v-icon>mdi-help-circle-outline</v-icon>
              </h2>
            </v-col>
            <v-btn-toggle v-model="daysOfWeek" multiple>
              <v-btn> Sunday</v-btn>
              <v-btn> Monday</v-btn>
              <v-btn> Tuesday</v-btn>
              <v-btn> Wednesday</v-btn>
              <v-btn> Thursday</v-btn>
              <v-btn> Friday</v-btn>
              <v-btn> Saturday</v-btn>
            </v-btn-toggle>
          </v-row>
        </v-card>
        <v-btn color="primary" @click="e1 = 2"> Continue </v-btn>
        <v-btn text> Cancel </v-btn>
      </v-stepper-content>

      <v-stepper-content step="2">
        <v-card class="mb-12">
          <create-event @eventCreated="userEvents.push($event)" />
          <v-list>
            <v-list-item v-for="(event, index) in userEvents" :key="index">
              <v-list-item-content>
                <event-card :event="event" />
              </v-list-item-content>
              <v-list-item-action>
                <v-btn @click="userEvents.splice(index, 1)"
                  ><v-icon>mdi-delete</v-icon></v-btn
                >
              </v-list-item-action>
            </v-list-item>
          </v-list>
        </v-card>

        <v-btn color="primary" @click="e1 = 3"> Continue </v-btn>
        <v-btn color="primary" @click="e1 = 1"> Back </v-btn>

        <v-btn text> Cancel </v-btn>
      </v-stepper-content>
      <v-stepper-content step="3">
        <v-card class="mb-12">
          <v-card-title
            >Add Topics <v-icon>mdi-help-circle-outline</v-icon></v-card-title
          >
          <v-container>
            <v-text-field v-model="topic" label="Topic"></v-text-field>
            <v-btn @click="addTopic">Add Topic</v-btn>
            <v-list>
              <v-list-item v-for="(item, index) in topics" :key="index">
                <v-list-item-title> {{ item.name }} </v-list-item-title>
                <v-list-item-content>
                  Sessions Per Week: {{ item.sessions }}
                  <v-btn @click="item.sessions += 1">
                    <v-icon small>mdi-plus</v-icon>
                  </v-btn>
                  <v-btn
                    @click="
                      if (item.sessions > 0) {
                        item.sessions -= 1
                      }
                    "
                  >
                    <v-icon small>mdi-minus</v-icon>
                  </v-btn>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-container>
        </v-card>

        <v-btn color="primary" @click="e1 = 4"> Continue </v-btn>
        <v-btn color="primary" @click="e1 = 2"> Back </v-btn>

        <v-btn text> Cancel </v-btn>
      </v-stepper-content>
      <v-stepper-content step="4">
        <v-card class="mb-12">
          <v-row>
            <v-col>
              <v-menu offset-y>
                <template #activator="{ on, attrs }">
                  <v-btn color="primary" dark v-bind="attrs" v-on="on">
                    Repeat Frequency
                  </v-btn>
                </template>
                <v-btn-toggle v-model="repeatFrequency" mandatory>
                  <v-btn> Weekly </v-btn>
                  <v-btn> Bi-Weekly </v-btn>
                  <v-btn> Monthly </v-btn>
                  <v-btn> Yearly </v-btn>
                  <v-btn> Custom </v-btn>
                </v-btn-toggle>
              </v-menu>
            </v-col>
            <v-col>
              <v-menu offset-y>
                <template #activator="{ on, attrs }">
                  <v-btn color="primary" dark v-bind="attrs" v-on="on">
                    Schedule Color
                  </v-btn>
                </template>
                <v-btn-toggle v-model="scheduleColor" mandatory>
                  <v-list>
                    <v-list-item
                      v-for="(color, index) in $store.state.colors"
                      :key="index"
                    >
                      <v-btn> {{ color }} </v-btn>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-title> Custome </v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-btn-toggle>
              </v-menu>
            </v-col>
          </v-row>
          <v-slider
            v-model="lengthOfSession"
            class="align-center my-5"
            :max="
              parseInt(endTime.split(':')[0]) - parseInt(startTime.split(':'))
            "
            :min="1"
            hide-details
            :label="`Length Of Sessions: ${lengthOfSession} Hours`"
          >
            <template #thumb-label="props">
              {{ props.value }}
            </template>
          </v-slider>
          <v-spacer></v-spacer>
          <v-slider
            v-model="sessionsPerWeek"
            class="align-center my-5"
            :max="20"
            :min="1"
            :disabled="topics.length > 0 ? true : false"
            hide-details
            :label="`Num of Sessions Per Week: ${sessionsPerWeek} `"
          >
            <template #thumb-label="props">
              {{ props.value }}
            </template>
          </v-slider>
          <v-spacer></v-spacer>
        </v-card>

        <v-btn color="primary" @click="e1 = 5"> Continue </v-btn>
        <v-btn color="primary" @click="e1 = 3"> Back </v-btn>

        <v-btn text> Cancel </v-btn>
      </v-stepper-content>
      <v-stepper-content step="5">
        <v-card class="mb-12">
          <v-btn @click="generateRevision">Generate Revision</v-btn>
        </v-card>

        <v-btn color="primary" @click="e1 = 4"> Back </v-btn>

        <v-btn text> Cancel </v-btn>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>

<script>
import CreateEvent from '../Events/CreateEvent.vue'
import EventCard from '../Events/EventCard.vue'
export default {
  components: { CreateEvent, EventCard },
  data() {
    return {
      e1: 1,
      title: '',
      startDate: new Date().toISOString().substr(0, 10),
      startDateMenu: false,
      endDate: new Date().toISOString().substr(0, 10),
      endDateMenu: false,
      sessionsPerWeek: 0,
      lengthOfSession: 0,
      startTime: new Date().toTimeString().substr(0, 5),
      endTime: new Date(new Date().setHours(new Date().getHours() + 1))
        .toTimeString()
        .substr(0, 5),
      startTimeMenu: false,
      endTimeMenu: false,
      topic: '',
      topics: [],
      daysOfWeek: [],
      userEvents: [],
      repeatFrequency: 0,
      scheduleColor: null,
    }
  },
  methods: {
    generateRevision() {},
    addTopic() {
      this.topics.push({
        name: this.topic,
        sessions: 0,
      })
      this.topic = ''
    },
    log(i, e) {
      // eslint-disable-next-line no-console
      console.log(i, e)
    },
  },
}
</script>

<style scoped></style>
