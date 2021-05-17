<template>
  <div class="text-center">
    <v-menu offset-y>
      <template #activator="{ on, attrs }">
        <v-btn color="primary" dark v-bind="attrs" v-on="on"> Dropdown </v-btn>
      </template>
      <v-checkbox
        v-for="schedule in schedules"
        :key="schedule.id"
        v-model="picked"
        :label="schedule.title"
        :value="schedule.id"
      ></v-checkbox>
    </v-menu>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      picked: [],
    }
  },
  computed: {
    ...mapState(['schedules', 'events']),
    filteredEvents() {
      const filtered = []
      if (this.picked.length > 0) {
        this.events.forEach((event) => {
          this.picked.forEach((pick) => {
            if (parseInt(pick) === event.scheduleid) {
              filtered.push(event)
            }
          })
        })
      }
      return filtered
    },
  },
}
</script>

<style scoped></style>
