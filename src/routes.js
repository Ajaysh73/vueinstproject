import addStudent from './components/addStudent.vue';
import addStudentBoot from './components/addStudentBoot.vue';
import showStudents from './components/showStudents.vue';
import singleStudent from './components/singleStudent.vue';
import showStudentsBoot from './components/showStudentsBoot.vue';
import editStudentsBoot from './components/editStudentBoot.vue';
import homeBoot from './components/homeBoot.vue';

export default [
    { path: '/', component: showStudents },
    { path: '/addboot', component: addStudentBoot },
    { path: '/add', component: addStudent },
    { path: '/student/:id', component: singleStudent },
    { path: '/showStudents', component: showStudentsBoot },
    { path: '/editStudent', component: editStudentsBoot },
    { path: '/home', component: homeBoot }
]