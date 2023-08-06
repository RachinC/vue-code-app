<template>
    <div class="container">
          <div>
            <h2>Create/Edit</h2>
          </div>

            <div v-if="!editJobData">
                <div class='field-wrapper'>
                    <label>Title</label>
                    <input type="text" placeholder="title" v-model="title"/>
                </div>

                <div class='field-wrapper'>
                    <label>Description</label>
                    <textarea placeholder="description" v-model="description"/>
                </div>

                <div class='field-wrapper'>
                    <div class="row">
                        <label>Start Date</label>
                        <input type="date" placeholder="startdate" v-model="startDate"/>
                    </div>
                </div>
                <div>
                    <div class="flex justify-space">
                        <label>{{startDate}}</label>
                        <button class="btn btn-icon" @click='onDeleteShift(shift.id)'><close /></button>
                    </div>
                    <div class='item-wrapper'>
                        <div class="row">
                            <div class="row-data">
                                <label>StartTime</label>
                                <input class='row-field' type='text' placeholder='hh:mm' v-model='startTime'/>
                            </div>
                            <div class="row-data">
                                <label>EndTime</label>
                                <input class='row-field' type='text' placeholder='hh:mm' v-model='endTime'/>
                            </div>
                            <div class="row-data">
                                <label>Price</label>
                                <input class='row-field' type='text' v-model='price'/>
                            </div>
                        </div>
                        <div class="row">
                            <div class="row-data"><label>Type</label></div>
                            <select class="row-data row-field" v-model='type'>
                                <option>Consultation</option>
                                <option>Telephone</option>
                                <option>Ambulance</option>
                            </select>
                        </div>
                  </div>
               </div>
            </div>
            <div v-else>
                <div class='field-wrapper'>
           <label>Title</label>
           <input type="text" placeholder="title" :value="editJobData ? job.title : ''" @input="this.$emit(title)"/>
           </div>

           <div class='field-wrapper'>
           <label>Description</label>
           <textarea placeholder="description" :value="editJobData ? job.description: ''" @input="this.$emit(description)"/>
           </div>

           <div class='field-wrapper'>
           <div class="row">
               <label>Start Date</label>
               <input type="date" placeholder="startdate" :v-model="startDate"/>
            </div>
           <div class="row">
               <label>End Date</label>
               <input type="date" placeholder="end date" :v-model="endDate"/>
               </div>
           </div>

           <div v-for="shift in job.shifts" :key='shift.date'>
               <div class="flex justify-space">
                 <label>{{shift.date}}</label>
                 <button class="btn btn-icon" @click='onDeleteShift(shift.id)'><close /></button>
               </div>
               <div class='item-wrapper'>
                <div class="row">
                   <div class="row-data">
                       <label>StartTime</label>
                       <input class='row-field' type='text' :value='editJobData ? shift.startTime: ""'/>
                    </div>
                   <div class="row-data">
                       <label>EndTime</label>
                       <input class='row-field' type='text' :value='editJobData ? shift.endTime: ""'/>
                    </div>
                   <div class="row-data">
                       <label>Price</label>
                       <input class='row-field' type='text' :value='editJobData ? shift.price:""'/>
                    </div>
                </div>
                <div class="row">
                   <div class="row-data"><label>Type</label></div>
                   <select class="row-data row-field" :value='editJobData?shift.type:""'>
                       <option>Consultation</option>
                       <option>Telephone</option>
                       <option>Ambulance</option>
                   </select>
                </div>
               </div>
            </div>
            </div>

           <div class="btn-container"> 
              <button class="btn btn-secondary" @click='onDelete'>Delete</button>
              <button class="btn btn-primary" @click='onSave'>Save</button>
           </div>
        </div> 
</template>

<script>
import Close from 'vue-material-design-icons/Close.vue';

export default {
    name: 'side-bar',
    components: {Close},

    data: () => {
        return {
            showDatePicker: false,
            startDate: '',
            endDate: '',
            title: '',
            description: '',
            startTime: '',
            endTime: '',
            price: '',
            type: '',
        }
    },
    computed: {
        editJobData() {
            return this.job?.id !== undefined;
        },
        isShowDatePicker() {
            return this.showDatePicker || this.editJobData;
        },
    },

    props: {
        job: { type: Object, default:() => {}}
    },
    methods: {
        onDelete() {
            this.$emit('handleDeleteJob');
        },
        onSave() {
            const data = {title: this.title,
            description: this.description,
            startDate: this.startDate,
            endDate: this.endDate,
            startTime: this.startTime,
            endTime: this.endTime,
            price: this.endTime,
            type: this.type};
            this.$emit('handleSaveJob', data);
        },
        onDeleteShift(id) {
            this.$emit('handleDeleteShift', id);
        }
    }
}
</script>

<style scoped>
.flex {
    display: flex;
}

.container {
    display: flex;
    flex-direction: column;
    gap: 16px;
    border-radius: 6px;
    border: 1px solid #20203A14;
    padding: 32px;
    background-color: white;
    box-shadow: 1px 1px 15px 0px #20203A14;
}

.field-wrapper {
    display: flex;
    flex-direction: column;

}

.item-wrapper{
    background-color: grey;
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 0;
    margin-bottom: 16px;
}
.row {
    border-radius: 6px;
    padding: 8px 24px;
    list-style: none;
    display: flex;
    gap: 16px;
}

.row-field {
    width: 100%;
}

.justify-space {
    justify-content: space-between;
    align-items: center;
}

.btn-container {
margin-top: 48px;
display: flex;
justify-content: space-between;
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

.btn-secondary {
    color: grey;
    border: 1px solid grey;
    background-color: white;
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