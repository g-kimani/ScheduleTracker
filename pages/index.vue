<template>
  <div>
    <v-row>
      <v-col cols="4">
        <v-card>
          <v-card-title> Upcoming events </v-card-title>
          <event-card v-for="card in 5" :key="card" />
        </v-card>
      </v-col>
      <v-col cols="8">
        <calendar :events="events" />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card>
          <v-card-title> Active Schedules </v-card-title>
          <v-tabs v-model="scheduletab">
            <v-tabs-slider color="yellow"></v-tabs-slider>
            <v-tab
              v-for="schedulegroup in schedulegroups"
              :key="schedulegroup.id"
            >
              {{ schedulegroup.title }}
            </v-tab>
          </v-tabs>
          <v-tabs-items v-model="scheduletab">
            <v-tab-item
              v-for="schedulegroup in schedulegroups"
              :key="schedulegroup.id"
            >
              <schedule-card
                v-for="scheduleindex in schedulegroup.schedules"
                :key="scheduleindex"
                :schedule="schedules[scheduleindex]"
              />
            </v-tab-item>
          </v-tabs-items>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Calendar from '~/components/Calendar.vue'
import ScheduleCard from '~/components/ScheduleCard.vue'
export default {
  components: { Calendar, ScheduleCard },
  data() {
    return {
      scheduletab: null,
      events: [
        {
          id: 1,
          name: 'Event 1',
          start: '2021-05-10T10:00:00',
          end: '2021-05-10T15:00:00',
          color: 'blue',
          timed: true,
        },
        {
          id: 2,
          name: 'Event 2',
          start: '2021-05-12T11:00:00',
          end: '2021-05-12T14:00:00',
          color: 'blue',
          timed: true,
        },
        {
          id: 3,
          name: 'Event 3',
          start: '2021-05-15T10:00:00',
          end: '2021-05-15T11:00:00',
          color: 'blue',
          timed: true,
        },
        {
          id: 4,
          name: 'Event 4',
          start: '2021-05-19T10:00:00',
          end: '2021-05-19T12:00:00',
          color: 'blue',
          timed: true,
        },
      ],
      schedulegroups: [
        {
          id: 1,
          title: 'Revision',
          schedules: [0, 1, 2],
        },
        {
          id: 2,
          title: 'Exercise',
          schedules: [3],
        },
      ],
      schedules: [
        {
          id: 1,
          title: 'Maths',
          sessionsPerWeek: 3,
          lengthOfSession: 2,
          start: '2021-05-10T10:00:00',
          end: '2021-05-10T17:00:00',
          minStartHour: 8,
          maxEndHour: 18,
          priority: 1,
          active: true,
        },
        {
          id: 2,
          title: 'English',
          sessionsPerWeek: 4,
          lengthOfSession: 2,
          start: '2021-05-11T13:00:00',
          end: '2021-05-10T17:00:00',
          minStartHour: 10,
          maxEndHour: 19,
          priority: 1,
          active: false,
        },
        {
          id: 3,
          title: 'Science',
          sessionsPerWeek: 3,
          lengthOfSession: 1,
          start: '2021-05-10T10:00:00',
          end: '2021-05-10T17:00:00',
          minStartHour: 8,
          maxEndHour: 18,
          priority: 1,
          active: true,
        },
        {
          id: 4,
          title: 'Running',
          sessionsPerWeek: 3,
          lengthOfSession: 1,
          start: '2021-05-10T10:00:00',
          end: '2021-05-10T17:00:00',
          minStartHour: 8,
          maxEndHour: 18,
          priority: 1,
          active: true,
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>
