<template>
    <div>

        <b-container>
            <b-row align-h="center" class="mt-5">
                <b-col md="9" class="my-1">
                </b-col>

                <b-col md="3" class="my-1">
                    <b-form-group horizontal label="Per page" class="mb-0">
                        <b-form-select :options="pageOptions" v-model="perPage" />
                    </b-form-group>
                </b-col>
            </b-row>
            <b-row align-h="center" class="mt-5">
                <b-col md="10" class="text-left">
                    <b-table striped hover :items="studentsList" :fields="fields" :current-page="currentPage" :per-page="perPage">
                        <template slot="show_details" slot-scope="row">
                            <b-form-checkbox @click.native.stop @change="row.toggleDetails" v-model="row.detailsShowing">
                                Select for details
                            </b-form-checkbox>
                            <b-button size="sm" @click.stop="showDeleteModal(row.item)" variant="danger">Delete</b-button>
                        </template>
                        <template slot="row-details" slot-scope="row">
                            <b-row class="mb-2">
                                <app-editStudentBoot v-bind:student1="row.item" @updateStatus="row.toggleDetails(); showUpdateMsgModal(row.item,$event);"></app-editStudentBoot>
                            </b-row>
                        </template>
                    </b-table>
                    <b-row>
                        <b-col md="6" class="my-1">
                            <b-pagination :total-rows="totalRows" :per-page="perPage" v-model="currentPage" class="my-0" />
                        </b-col>
                    </b-row>
                </b-col>
            </b-row>
            <b-modal id="delModal"
                     ref="delModal"
                     title="Delete Selected Student Information"
                     ok-title="Yes"
                     close-title="No"
                     @ok="handleDelete(deleteModal.id)">
                <p> Delete {{deleteModal.name}} ? </p>
            </b-modal>
            <b-modal id="updateModal"
                     ref="updateModal"
                     title= "Update Status"
                     ok-only
                     ok-title="Ok"
                     @ok="handleUpdate()">
                <p> Update on student <b>{{updateModal.name}} </b> was {{updateModal.status}}. </br>
                    Error Message: {{updateModal.failureMsg}}</p>
            </b-modal>
        </b-container>
    </div>
</template>
<script>
    import editStudentBoot from './editStudentBoot.vue';

    export default {
        data() {
            return {
                //studentsList: [],
                fields: ['FirstName', 'LastName', 'Gender', 'Department_Name', 'show_details'],
                currentPage: 1,
                perPage: 5,
                pageOptions: [5, 10, 15],
                currentComponent: null,
                componentsArray: ['foo', 'bar'],
                isEditMode: false,
                deleteModal: {
                    id: 0,
                    name: ''
                },
                 updateModal: {
                    id: 0,
                    name: '',
                    status:'',
                    failureMsg:''
                }
            }
        },
        methods: {
            details(item) {
                //alert(JSON.stringify(item));
                //this.$router.push('/editStudent');
            },
            swapComponent: function (component) {
                this.currentComponent = component;
            },
            
            showDeleteModal(studentInfo) {
                this.deleteModal.id = studentInfo.ID;
                this.deleteModal.name = `${studentInfo.FirstName} ${studentInfo.LastName}` 
                this.$refs.delModal.show();
            },
            showUpdateMsgModal(studentInfo,event) {
                this.updateModal.id = studentInfo.ID;
                this.updateModal.name = `${studentInfo.FirstName}${studentInfo.LastName}` 
                console.log("InshowUpdateMsgModal", event, event.status, event.statusMsg);
                if (event.status.valueOf() == "success".valueOf()){
                    this.updateModal.status = "successful"
                    this.updateModal.statusMsg =event.statusMsg.bodyText;
                    this.$refs.updateModal.show();
                }
                else{
                    this.updateModal.status = "unsuccessful"
                    this.updateModal.failureMsg =event.statusMsg.bodyText;
                    this.$refs.updateModal.show();
                }
         
            },
            handleDelete(studentId) {
                this.$store.dispatch('deleteStudentByID', studentId)
            },
            handleUpdate(){
                this.$refs.updateModal.hide();
            }
        },
        components: {
            'app-editStudentBoot': editStudentBoot
        },
        computed: {
            totalRows: function () {
                return this.studentsList.length;
            },
            studentsList() {
                return this.$store.getters.studentList
            }
        },
        beforeCreate() {

        },
        created() {
            /*alert("In created");*/
            this.$store.dispatch('fetchStudentsData');
            //this.studentsList = this.$store.state.students;
        }
    }
</script>
<style>
</style>
