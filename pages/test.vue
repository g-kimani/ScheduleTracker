<template>
  <div>
    <v-card>
      <v-card-title> Test </v-card-title>
      <v-text-field v-model="topic"></v-text-field>
      <v-btn @click="addTopic">Add Topic</v-btn>
      <v-list>
        <v-list-item v-for="item in topics" :key="item.id">
          <v-list-item-content class="d-flex flex-row"
            >{{ item.name }} Sessions Per Week:
            {{ item.sessions }}
            <v-list-item-action class="d-flex flex-row">
              <v-btn @click="item.sessions += 1"
                ><v-icon small> mdi-plus</v-icon></v-btn
              >
              <v-btn
                @click="
                  if (item.sessions > 0) {
                    item.sessions -= 1
                  }
                "
                ><v-icon small>mdi-minus</v-icon></v-btn
              >
            </v-list-item-action>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      topic: '',
      topicid: 1,
      topics: [],
    }
  },
  methods: {
    addTopic() {
      this.topics.push({
        id: this.topicid,
        name: this.topic,
        sessions: 0,
      })
      this.topic = ''
      this.topicid += 1
    },
  },
}
</script>

<style scoped></style>
