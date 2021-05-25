<template>
  <div>
    <v-select
      v-model="selected"
      :items="scheduleList"
      label="Filter Schedules"
      multiple
      outlined
    >
      <template #prepend-item>
        <v-list-item ripple @click="toggle">
          <v-list-item-action>
            <v-icon :color="selected.length > 0 ? 'indigo darken-2' : ''">
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
  </div>
</template>

<script>
/* eslint-disable no-console */
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
  watch: {
    filteredEvents() {
      this.$emit('filtered', this.filteredEvents)
    },
  },
  mounted() {
    this.generatePreset()
  },
  methods: {
    generatePreset() {
      if (this.schedulePresets.length > 0) {
        this.schedulePresets.forEach((preset) =>
          this.selected.push(preset.value)
        )
      } else {
        const list = []
        this.schedules.forEach((schedule) => {
          list.push({
            text: schedule.title,
            value: schedule.id,
          })
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
  },
}
</script>

<style scoped></style>
