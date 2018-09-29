import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        authors: [
            { name: 'The Net Ninja' },
            { name: 'The Angular Avenger' },
            { name: 'The Vue Vindicator' }
        ],
        categories: [
            { name: 'ninjas' },
            { name: 'wizards' },
            { name: 'mario' },
            { name: 'cheese' }
        ],
        departments: [],
        students: []
    },
    getters: {
        studentList: state => {
            return state.students
        }
    },
    mutations: {
        setDepartments(state, departmentdata) {
            console.log("In mutations setDepartments")
            // example of modifying before storing
            state.departments = departmentdata.body;
            console.log(state.departments)
        },
        setStudents(state, studentdata) {
            console.log("In mutations setStudents")
            // example of modifying before storing
            state.students = studentdata.body;
            console.log(store.state.departments)
        }
    },
    actions: {
        fetchDepartments(store) {
            console.log("in fetch");
            return Vue.http.get('http://localhost:59681/api/students/GetDepartments')
                .then(data => {
                    store.commit('setDepartments', data)
                    return store.state.departments;
                })
        },
        fetchStudents(store) {
            console.log("in fetchStudents");
            return Vue.http.get('http://localhost:59681/api/students/GetStudents')
                .then(function (data) {
                    store.commit('setStudents', data)
                    return store.state.students;
                })
        },

        fetchStudentsData(store) {
            console.log("in fetchStudentsdata");
            return Vue.http.get('http://localhost:59681/api/students/GetStudents').then((response) => {
                console.log(response.body);
                store.commit('setStudents', response);
            }).catch((error) => {
                commit('unAuthorisedUser', {
                    error: error.response.data
                })
            })
        }
    }
})

