<template>
  <div>
    <v-card :color="colors[events[0].priority]">
      <v-card-title>
        {{ events[0].title }}
      </v-card-title>
      <v-card-text>
        <v-row>
          <v-col>
            <v-subheader> Event Start </v-subheader>
            {{ parseEventDate(events[0].start) }}
          </v-col>
          <v-col>
            <v-subheader> Event end </v-subheader>
            {{ parseEventDate(events[0].end) }}
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      colors: [
        'blue',
        'indigo',
        'deep-purple',
        'cyan',
        'green',
        'orange',
        'grey darken-1',
      ],
      events: [
        {
          title: 'Event1',
          start: '2021-05-10T10:00:00',
          end: '2021-05-10T13:00:00',
          priority: 1,
        },
      ],
    }
  },
  methods: {
    parseEventDate(dateString) {
      const date = new Date(dateString)
      return date.toUTCString()
    },
  },
}
</script>

<style scoped></style>
