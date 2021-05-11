export const state = () => ({
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
    {
      id: 5,
      name: 'Event 5',
      start: '2021-05-23T10:00:00',
      end: '2021-05-23T12:00:00',
      color: 'blue',
      timed: true,
    },
  ],
  schedulegroups: [
    {
      id: 1,
      title: 'Revision',
      scheduleIds: [1, 2, 3],
    },
    {
      id: 2,
      title: 'Exercise',
      scheduleIds: [4],
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
})

export const getters = {
  getEvents: (state) => () => {
    return state.events
  },
  getEventById: (state) => (id) => {
    return state.events.find((e) => e.id === parseInt(id))
  },
  getSchedules: (state) => () => {
    return state.schedules
  },
  getScheduleById: (state) => (id) => {
    return state.schedules.find((schedule) => schedule.id === parseInt(id))
  },
  getScheduleGroups: (state) => () => {
    return state.schedulegroups
  },
  getScheduleGroupById: (state) => (id) => {
    return state.schedulegroups.find((group) => group.id === parseInt(id))
  },
}
