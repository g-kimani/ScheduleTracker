<template>
  <v-speed-dial
    v-model="fab"
    :top="true"
    :right="true"
    :left="false"
    :bottom="false"
    direction="left"
    :open-on-hover="true"
    transition="slide-x-reverse-transition"
  >
    <template #activator>
      <v-btn v-model="fab" color="blue darken-2" dark fab>
        <v-icon v-if="fab"> mdi-close </v-icon>
        <v-icon v-else> mdi-pencil </v-icon>
      </v-btn>
    </template>
    <v-btn v-if="edit !== null" fab dark small color="green">
      <v-icon>mdi-pencil</v-icon>
    </v-btn>
    <v-btn v-if="remove" fab dark small color="red" @click="remove">
      <v-icon>mdi-delete</v-icon>
    </v-btn>
  </v-speed-dial>
</template>
<script>
export default {
  props: {
    edit: {
      type: Function,
      default() {
        return null
      },
    },
    create: {
      type: Function,
      default() {
        return null
      },
    },
    remove: {
      type: Function,
      default() {
        return null
      },
    },
  },
  data() {
    return {
      fab: false,
    }
  },
}
</script>
