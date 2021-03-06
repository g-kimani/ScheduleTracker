const state = () => ({
  events: [
    {
      id: 1,
      name: 'Event 1',
      start: '2021-05-10T10:00:00',
      end: '2021-05-10T15:00:00',
      color: 'blue',
      timed: true,
      scheduleid: 1,
    },
    {
      id: 2,
      name: 'Event 2',
      start: '2021-05-12T11:00:00',
      end: '2021-05-12T14:00:00',
      color: 'blue',
      timed: true,
      scheduleid: 2,
    },
    {
      id: 3,
      name: 'Event 3',
      start: '2021-05-15T10:00:00',
      end: '2021-05-15T11:00:00',
      color: 'blue',
      timed: true,
      scheduleid: 4,
    },
    {
      id: 4,
      name: 'Event 4',
      start: '2021-05-19T10:00:00',
      end: '2021-05-19T12:00:00',
      color: 'blue',
      timed: true,
      scheduleid: 3,
    },
    {
      id: 5,
      name: 'Event 5',
      start: '2021-05-23T10:00:00',
      end: '2021-05-23T12:00:00',
      color: 'blue',
      timed: true,
      scheduleid: 2,
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
  revisionschedules: [
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
      revisionscheduleid: 1,
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
  attendance: [
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
  colors: [
    'blue',
    'indigo',
    'deep-purple',
    'cyan',
    'green',
    'orange',
    'grey darken-1',
  ],
  milestones: [
    {
      id: 1,
      title: 'Close to finishsing project',
      date: '2021-05-21T18:01:00',
      description:
        'This is not a feature that is required. So why am I procrastinating and adding it when I could be doing more productive things',
      goalid: 1,
    },
    {
      id: 2,
      title: 'I need a better way of seeding data',
      date: '2021-05-22T18:01:00',
      description:
        'This is not a feature that is required. So why am I procrastinating and adding it when I could be doing more productive things',
      goalid: 1,
    },
    {
      id: 3,
      title: 'I have no accomplishments',
      date: '2021-05-23T18:01:00',
      description:
        'This is not a feature that is required. So why am I procrastinating and adding it when I could be doing more productive things',
      goalid: 1,
    },
    {
      id: 4,
      title: 'This is just seed data',
      date: '2021-05-24T18:01:00',
      description:
        'This is not a feature that is required. So why am I procrastinating and adding it when I could be doing more productive things',
      goalid: 1,
    },
    {
      id: 5,
      title: 'I wonder what goal this is tied to',
      date: '2021-05-25T18:01:00',
      description:
        'I think it may be Write a story. This is not a feature that is required. So why am I procrastinating and adding it when I could be doing more productive things',
      goalid: 1,
    },
  ],
})

const getters = {
  getGoalById: (state) => (id) => {
    return state.goals.find((goal) => goal.id === parseInt(id))
  },
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
  getScheduleEvents: (state) => (id) => {
    return state.events.filter((event) => event.scheduleid === parseInt(id))
  },
  getActiveRevisionScheduleEvents: (state) => () => {
    const allEvents = []
    state.revisionschedules.forEach((rschedule) => {
      const schedule = state.schedules.find(
        (schedule) => schedule.id === rschedule.scheduleid
      )
      if (schedule.active === true) {
        allEvents.push()
      }
    })
    return allEvents
  },
  getActiveRevisionSchedules: (state) => () => {
    const activeSchedules = []
    state.revisionschedules.forEach((rschedule) => {
      const schedule = state.schedules.find(
        (schedule) => schedule.id === rschedule.scheduleid
      )
      if (schedule) {
        if (schedule.active === true) {
          activeSchedules.push(rschedule)
        }
      }
    })
    return activeSchedules
  },
  getEventAttendance: (state) => (id) => {
    const event = state.attendance.find((item) => item.eventid === id)
    return event.did_attend
  },
  getColors: (state) => {
    return state.colors
  },
  getGoalMilestones: (state) => (id) => {
    return state.milestones.filter(
      (milestone) => milestone.goalid === parseInt(id)
    )
  },
}

const actions = {
  setEventAttended({ state, commit }, payload) {
    return new Promise((resolve, reject) => {
      commit('SET_ATTENDED', payload)
      resolve()
    })
  },
  addNewSchedule({ state, commit }, payload) {
    return new Promise((resolve, reject) => {
      commit('ADD_SCHEDULE', payload)
      resolve()
    })
  },
}

const mutations = {
  SET_ATTENDED(state, payload) {
    const event = state.attendance.find((event) => event.eventid === payload.id)
    event.did_attend = payload.data
  },
  ADD_SCHEDULE(state, payload) {
    const currentScheduleId = Math.max(
      ...state.schedules.map((schedule) => schedule.id)
    )
    let currentEventId = Math.max(...state.events.map((event) => event.id))
    const events = payload.events
    delete payload.events
    payload.schedule.id = currentScheduleId + 1
    state.schedules.push(payload.schedule)
    events.forEach((event) => {
      currentEventId += 1
      event.scheduleid = payload.schedule.id
      event.id = currentEventId
      state.events.push(event)
    })
  },
  ADD_MILESTONE(state, payload) {
    const currentMilestoneId = Math.max(
      ...state.milestones.map((milestone) => milestone.id)
    )
    payload.id = currentMilestoneId + 1
    state.milestones.push(payload)
  },
  DEL_MILESTONE(state, id) {
    const index = state.milestones.findIndex((milestone) => milestone.id === id)
    state.milestones.splice(index, 1)
  },
  ADD_EVENT(state, payload) {
    const currentEventId = Math.max(...state.events.map((event) => event.id))
    payload.id = currentEventId + 1
    state.events.push(payload)
  },
}

export default {
  state,
  getters,
  actions,
  mutations,
}
