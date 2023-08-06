<template>
<div id="app">
<LayoutVue>
  <template v-slot:content>
    <Main :jobs="jobs" @handleCreateEdit="handleCreateEdit" />
  </template>
  <template v-slot:sidebar>
    <Sidebar
      v-if="showDetails"
      :job="editableJobData"
      @handleDeleteJob="handleDeleteJob"
      @handleSaveJob="handleSaveJob"
      @handleDeleteShift="handleDeleteShift"
    />
  </template>
</LayoutVue>
</div>
</template>

<script>
import LayoutVue from './components/Layout.vue'
import Main from './components/Main.vue'
import Sidebar from './components/Sidebar.vue'

export default {
  name: 'App',
  components: {LayoutVue, Main, Sidebar},
  computed: {
    jobs() {
        return this.$store.state.jobs;
    },
    editableJobData() {
      return this.jobs.find(job => job.id === this.editJobId); 
    }
  },
  data: () => {
    return {
      showDetails: false,
      editJobId: null,
    }
  },

  methods: {
    handleCreateEdit(id) {
      this.editJobId = id ? id : null;
      this.showDetails = !this.showDetails;
    },

    handleDeleteJob() {
      this.showDetails = false;
      this.$store.dispatch('deleteJob', this.editJobId);
    },

    handleSaveJob(data) {
      this.showDetails = false;
      this.$store.dispatch('saveJob', data);
    },

    handleDeleteShift(id) {
      this.showDetails = false;
      this.$store.dispatch('deleteShift', {jobId: this.editJobId, shiftId: id});
    }
  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
