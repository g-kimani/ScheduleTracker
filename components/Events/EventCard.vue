<template>
  <div>
    <v-card :color="colors[event.priority]" flat>
      <v-card-title>
        {{ event.title }}
      </v-card-title>
      <v-card-text>
        <v-row>
          <v-col>
            <v-subheader> Event Start </v-subheader>
            {{ parseEventDate(event.start) }}
          </v-col>
          <v-col>
            <v-subheader> Event end </v-subheader>
            {{ parseEventDate(event.end) }}
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    event: {
      type: Object,
      required: true,
    },
  },
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
