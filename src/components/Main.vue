<template>
    <div>
        <div>
            <h2>Filter</h2>
        </div>
        <div class="flex">
            <label>Filter on price</label>
            <input type='range' min="70" max="500" value="70" step="50">
        </div>
    </div>
    <div>
        <div class="flex justify-space">
            <h2>Shifts</h2>
            <button class="btn btn-primary" @click="() => handleClick(null)">Add Shift</button>
        </div>
    </div>
    <div>
       <div class="container" v-for="job in getJobs" v-bind:key='job.title'>
           <div class="flex justify-space">
               <div>
           <h3>{{job.title}}</h3>
           <p>{{job.description}}</p>
           </div>
           <button class="btn btn-icon" @click="() => handleClick(job.id)"><pencil /></button>
           </div>
           <div>
               <h3>Dates</h3>
               <ul class='row-wrapper'>
               <li class="row" v-for="shift in job.shifts" v-bind:key='shift.date'>
                   <div class="row-data">{{shift.date}}</div>
                   <div class="row-data">{{shift.startTime}}</div>
                   <div class="row-data">{{shift.endTime}}</div>
                   <div class="row-data">{{shift.type}}</div>
                   <div class="row-data text-left">{{shift.price}}</div>
               </li>
               </ul>
           </div>
        </div> 
    </div>
</template>

<script>
import Pencil from 'vue-material-design-icons/Pencil.vue';

export default {
    name: 'main-vue',
    components: {Pencil},

    computed: {
        getJobs() {
            return this.jobs;
        }
    },

    props: {
        jobs: {type: Object, default: () => {}},
    },

    // emits: ["handleCreateEdit"],

    methods: {
        handleClick(id) {
            this.$emit('handleCreateEdit', id);
        }
    }
}
</script>

<style scoped>
.flex {
    display: flex;
}

.container {
    border-radius: 6px;
    border: 1px solid #20203A14;
    padding: 32px;
    background-color: white;
    box-shadow: 1px 1px 15px 0px #20203A14;
    margin-bottom: 32px;
}

.row-wrapper{
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 0;
}
.row {
    background-color: grey;
    border-radius: 6px;
    padding: 8px 24px;
    list-style: none;
    color: #f3efef;
    display: flex;
}

.row-data {
    width: 20%;
}

.justify-space {
    justify-content: space-between;
    align-items: center;
}

.btn {
    border: none;
    padding: 8px 16px;
    height: fit-content;
    text-transform: uppercase;
    border-radius: 6px;
    cursor: pointer;
}

.btn-primary {
    color: #f3efef;
    background-color: grey;
}

.btn-icon {
    padding: 0;
    color: grey;
    background: transparent;
}

.text-left {
    text-align: end;
}
</style>