<template>
  <div>
    <v-row class="fill-height">
      <v-col>
        <v-sheet height="64">
          <v-toolbar flat>
            <v-btn
              outlined
              class="mr-4"
              color="grey darken-2"
              @click="setToday"
            >
              Today
            </v-btn>
            <v-btn fab text small color="grey darken-2" @click="prev">
              <v-icon small>mdi-chevron-left </v-icon>
            </v-btn>
            <v-btn fab text small color="grey darken-2" @click="next">
              <v-icon small> mdi-chevron-right </v-icon>
            </v-btn>
            <v-toolbar-title v-if="$refs.calendar">
              {{ $refs.calendar.title }}
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-select
              v-model="selected"
              :items="scheduleList"
              label="Filter Schedules"
              multiple
              dense
              style="max-width: 200px"
            >
              <template #prepend-item>
                <v-list-item ripple @click="toggle">
                  <v-list-item-action>
                    <v-icon
                      :color="selected.length > 0 ? 'indigo darken-2' : ''"
                    >
                      {{ icon }}
                    </v-icon>
                  </v-list-item-action>
                  <v-list-item-content>
                    <v-list-item-title> Select All </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-divider class="mt-2"></v-divider>
              </template>
              <template #selection="{ item, index }">
                <v-chip v-if="index === 0">
                  <span>{{ item.text }}</span>
                </v-chip>
                <span v-if="index === 1" class="grey--text caption">
                  (+{{ selected.length - 1 }} others)
                </span>
              </template>
            </v-select>
          </v-toolbar>
        </v-sheet>
        <v-sheet height="600">
          <v-calendar
            ref="calendar"
            v-model="focus"
            color="primary"
            :events="filteredEvents"
            :event-color="getEventColor"
            :type="type"
            @click:event="showEvent"
            @click:more="viewDay"
            @click:date="viewDay"
            @change="updateRange"
          ></v-calendar>
        </v-sheet>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  props: {
    schedulePresets: {
      type: Array,
      default() {
        return []
      },
    },
  },
  data() {
    return {
      selected: [],
      focus: '',
      type: 'month',
      typeToLabel: {
        month: 'Month',
        week: 'Week',
        day: 'Day',
        '4day': '4 Days',
      },
      selectedEvent: {},
      selectedElement: null,
      selectedOpen: false,
    }
  },
  computed: {
    ...mapState(['schedules', 'events']),
    filteredEvents() {
      return this.events.filter(
        (event) =>
          this.selected.findIndex(
            (selection) => selection === event.scheduleid
          ) !== -1
      )
    },
    scheduleList() {
      const list = []
      this.schedules.forEach((schedule) => {
        list.push({
          text: schedule.title,
          value: schedule.id,
        })
      })
      return list
    },
    icon() {
      if (this.selected.length === this.scheduleList.length)
        return 'mdi-close-box'
      if (this.selected.length > 0) return 'mdi-minus-box'
      return 'mdi-checkbox-blank-outline'
    },
  },
  mounted() {
    this.generatePreset()
  },
  methods: {
    generatePreset() {
      if (this.schedulePresets.length > 0) {
        this.schedulePresets.forEach((preset) => this.selected.push(preset))
      } else {
        const list = []
        this.schedules.forEach((schedule) => {
          list.push(schedule.id)
        })
        this.selected = list
      }
    },
    toggle() {
      this.$nextTick(() => {
        if (this.selected.length === this.scheduleList.length) {
          this.selected = []
        } else {
          this.selected = this.scheduleList.map((schedule) => schedule.value)
        }
      })
    },
    viewDay({ date }) {
      this.focus = date
      this.type = 'day'
    },
    getEventColor(event) {
      return event.color
    },
    setToday() {
      this.focus = ''
    },
    prev() {
      this.$refs.calendar.prev()
    },
    next() {
      this.$refs.calendar.next()
    },
    showEvent({ nativeEvent, event }) {
      const open = () => {
        this.selectedEvent = event
        this.selectedElement = nativeEvent.target
        setTimeout(() => {
          this.selectedOpen = true
        }, 10)
      }

      if (this.selectedOpen) {
        this.selectedOpen = false
        setTimeout(open, 10)
      } else {
        open()
      }

      nativeEvent.stopPropagation()
    },
    updateRange({ start, end }) {},
    randomRange(a, b) {
      return Math.floor((b - a + 1) * Math.random() + a)
    },
  },
}
</script>

<style lang="scss" scoped></style>
