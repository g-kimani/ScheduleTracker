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
      start: '2021-05-10T10:00:00',
      end: '2021-05-10T17:00:00',
      priority: 1,
      active: true,
      schedulegroupid: 1,
    },
    {
      id: 2,
      title: 'English',
      start: '2021-05-11T13:00:00',
      end: '2021-05-10T17:00:00',
      priority: 1,
      active: false,
      schedulegroupid: 1,
    },
    {
      id: 3,
      title: 'Science',
      start: '2021-05-10T10:00:00',
      end: '2021-05-10T17:00:00',
      priority: 1,
      active: true,
      schedulegroupid: 1,
    },
    {
      id: 4,
      title: 'Running',
      start: '2021-05-10T10:00:00',
      end: '2021-05-10T17:00:00',
      priority: 1,
      active: true,
    },
  ],
  repeatschedules: [
    {
      id: 1,
      sessionsPerWeek: 4,
      lenOfSessions: 2,
      minStartTime: 8,
      minEndTime: 19,
      scheduleid: 1,
    },
    {
      id: 2,
      sessionsPerWeek: 4,
      lenOfSessions: 2,
      minStartTime: 10,
      minEndTime: 17,
      scheduleid: 2,
    },
    {
      id: 3,
      sessionsPerWeek: 3,
      lenOfSessions: 1,
      minStartTime: 13,
      minEndTime: 19,
      scheduleid: 3,
    },
  ],
  exams: [
    {
      id: 1,
      title: 'Maths Exam',
      repeatscheduleid: 1,
      examdate: '2021-05-30T17:00:00',
    },
  ],
  goals: [
    {
      id: 1,
      title: 'Write A story',
      sessionsPerWeek: 3,
      scheduleid: 2,
      deadline: '2021-05-25T17:00:00',
    },
    {
      id: 2,
      title: 'Build A project',
      sessionsPerWeek: 3,
      scheduleid: 2,
      deadline: '2021-05-25T17:00:00',
    },
  ],
  attendace: [
    {
      id: 1,
      eventid: 1,
      did_attend: true,
    },
    {
      id: 2,
      eventid: 2,
      did_attend: true,
    },
    {
      id: 3,
      eventid: 3,
      did_attend: false,
    },
    {
      id: 4,
      eventid: 4,
      did_attend: true,
    },
    {
      id: 5,
      eventid: 5,
      did_attend: false,
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
