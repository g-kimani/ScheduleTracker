<template>
  <v-card>
    <v-card-title>
      Milestones <v-spacer></v-spacer>
      <v-tooltip bottom>
        <template #activator="{ on, attrs }">
          <v-btn v-bind="attrs" v-on="on" @click="showForm = !showForm"
            ><v-icon>{{ showForm ? 'mdi-minus' : 'mdi-plus' }}</v-icon></v-btn
          >
        </template>
        <span>{{
          showForm ? 'Close new milestone form' : 'Click to add new milestone'
        }}</span>
      </v-tooltip>
    </v-card-title>
    <v-expand-transition>
      <v-card v-show="showForm" flat>
        <v-form ref="form">
          <v-row>
            <v-col>
              <v-text-field v-model="title" label="Title"></v-text-field>
            </v-col>
            <v-col>
              <v-menu
                v-model="dateMenu"
                :close-on-content-click="false"
                :nudge-right="40"
                transition="scale-transition"
                offset-y
                min-width="auto"
              >
                <template #activator="{ on, attrs }">
                  <v-text-field
                    v-model="date"
                    label="Date"
                    prepend-icon="mdi-calendar"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker
                  v-model="date"
                  @input="dateMenu = false"
                ></v-date-picker>
              </v-menu>
            </v-col>
          </v-row>
          <v-textarea
            v-model="description"
            label="Three rows"
            clearable
            auto-grow
            outlined
            rows="3"
            row-height="25"
          ></v-textarea>
        </v-form>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn @click="addMilestone">Add </v-btn>
          <v-btn @click="$refs.form.reset()">Clear</v-btn>
        </v-card-actions>
      </v-card>
    </v-expand-transition>
    <v-timeline v-if="milestones.length > 0" dense>
      <v-slide-x-transition group>
        <v-timeline-item v-for="(milestone, i) in milestones" :key="i" small>
          <v-row class="pt-1">
            <v-col cols="3">
              {{ new Date(milestone.date).toISOString().substr(0, 10) }}
            </v-col>
            <v-col>
              <div class="py-4">
                <h2>
                  {{ milestone.title }}
                </h2>
                <div>
                  {{ milestone.description }}
                </div>
              </div>
            </v-col>
            <v-col>
              <v-btn @click="deleteMilestone(milestone.id)"
                ><v-icon>mdi-delete</v-icon></v-btn
              >
            </v-col>
          </v-row>
        </v-timeline-item>
      </v-slide-x-transition>
    </v-timeline>
    <div v-else style="height=100px" class="text-center">
      No milestones recorded. Try Adding one ^
    </div>
  </v-card>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      date: new Date().toISOString().substr(0, 10),
      dateMenu: false,
      title: '',
      description: '',
      showForm: false,
    }
  },
  computed: {
    milestones() {
      const milestones = this.$store.getters.getGoalMilestones(this.id)
      return milestones.sort(
        (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
      )
    },
  },
  methods: {
    addMilestone() {
      const milestone = {
        title: this.title,
        date: this.date,
        description: this.description,
        goalid: this.id,
      }
      this.$store.commit('ADD_MILESTONE', milestone)
    },
    deleteMilestone(id) {
      this.$store.commit('DEL_MILESTONE', id)
    },
  },
}
</script>

<style scoped></style>
