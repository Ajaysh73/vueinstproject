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
                        <template slot="actions" slot-scope="row">
                            <b-button size="sm" @click.stop="showDeleteModal(row.item)" variant="danger">Delete</b-button>
                        </template>
                        <template slot="row-details" slot-scope="row">
                            <b-row class="mb-2">
                                <app-editStudentBoot v-bind:student1="row.item" @updateStatus="handleupdateStatus"></app-editStudentBoot>
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
                     @ok="">
                <p> Delete {{deleteModal.name}} ? </p>
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
            handleupdateStatus(event) {
                console.log('data after child handle: ', event) // get the data after child dealing
                alert("caught in handleupdateStatus in parent");
                row.toggleDetails;
                //this.$router.go(0);
            },
            showDeleteModal(studentInfo) {
                this.deleteModal.id = studentInfo.ID;
                this.deleteModal.name = `${studentInfo.FirstName}${studentInfo.LastName}`
                this.$refs.delModal.show();
            },
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
