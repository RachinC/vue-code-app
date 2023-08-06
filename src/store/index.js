import Vuex from 'vuex';
import moment from 'moment';

export default new Vuex.Store({
    state: {
        jobs: [
            {
            id: 12345,
            title: 'Title 1',
            description: 'description 1', 
                shifts: [
                    {id: 1234, date: moment().format('DD MMM YYYY'), startTime: moment().format('HH:MM'), endTime: moment().format('HH:MM'), type: 'Consultation', price: '70'},
                    {id: 1224,date: moment().format('DD MMM YYYY'), startTime: moment().format('HH:MM'), endTime: moment().format('HH:MM'), type: 'Telephone', price: '50'},
                    {id: 1214, date: moment().format('DD MMM YYYY'), startTime: moment().format('HH:MM'), endTime: moment().format('HH:MM'), type: 'Ambulance', price: '100'},
                    {id: 1253, date: moment().format('DD MMM YYYY'), startTime: moment().format('HH:MM'), endTime: moment().format('HH:MM'), type: 'Telephone', price: '50'},
                ],
            },
            {
                id: 112354,
                title: 'Title 2',
                description: 'description 2', 
                shifts: [
                    {id: 1226, date: moment().format('DD MMM YYYY'), startTime: moment().format('HH:MM'), endTime: moment().format('HH:MM'), type: 'Telephone', price: '50'},
                    {id: 1274, date: moment().format('DD MMM YYYY'), startTime: moment().format('HH:MM'), endTime: moment().format('HH:MM'), type: 'Telephone', price: '50'},
                ],
            },
        ],
	},
    mutations: {
        DELETE_JOB(state, id) {
            state.jobs = state.jobs.filter(job => job.id !== id);
        },
        SAVE_JOB(state, data) {
            const newJob = {
                id: Math.floor(Math.random()*1000),
                title: data.title,
                description: data.description,
                shifts:[{
                    id: Math.floor(Math.random()*1000),
                    date: data.startDate,
                    startTime: data.startTime,
                    endTime: data.endTime,
                    type: data.type,
                    price: data.price,
                }],
            };
            
        state.jobs.push(newJob);
        },
        DELETE_SHIFT(state, {jobId, shiftId}) {
            const unchnagedState = state.jobs.filter(job => job.id !== jobId)
            const job = state.jobs.find(job => job.id === jobId);
            const shifts = job.shifts.filter(shift => shift.id !== shiftId);
            if(shifts.length === 0) {
                state.jobs = [...unchnagedState];
            }
            else {
                state.jobs = [...unchnagedState, {...job, shifts}];
            }
        }
    },
    actions: {
        deleteJob({commit}, id) {
            commit('DELETE_JOB', id);
        },
        saveJob({commit}, data) {
            commit('SAVE_JOB', data);
        },
        deleteShift({commit}, {jobId, shiftId}) {
            commit('DELETE_SHIFT', {jobId, shiftId});

        }
    },
    getters: {
        getJobs: (state) => state.jobs,
    },
});