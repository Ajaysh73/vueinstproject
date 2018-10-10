<template>
    <div v-if="show">
        <b-container >
            <b-row align-h="center" class="mt-5" >
                <b-col md="12" class="text-left">
                    <b-card class="text-left" >
                        <h3> Student Information</h3>
                        <b-form @submit="onSubmit" @reset="onReset" >
                            <b-container>
                                <b-row align-h="center">
                                    <b-col md="6" class="text-left">
                                        <b-form-group id="FirstNameGrp"
                                                      label="First Name:"
                                                      label-for="FirstNameInput"
                                                      description="">
                                            <b-form-input id="FirstNameInput"
                                                          type="text"
                                                          v-model="student1.FirstName"
                                                          required
                                                          placeholder="Enter First Name">
                                            </b-form-input>
                                        </b-form-group>
                                    </b-col>
                                    <b-col md="6" class="text-left">
                                        <b-form-group id="LastNameGrp"
                                                      label="Last Name:"
                                                      label-for="LastNameInput"
                                                      description="">
                                            <b-form-input id="LastNameInput"
                                                          type="text"
                                                          v-model="student1.LastName"
                                                          required
                                                          placeholder="Enter Last Name">
                                            </b-form-input>
                                        </b-form-group>
                                    </b-col>
                                </b-row>
                                <b-row align-h="center">
                                    <b-col md="6" class="text-left">
                                        <b-form-group id="GenderGrp"
                                                      label="Gender:"
                                                      label-for="GenderInput">
                                            <b-form-select id="GenderInput"
                                                           :options="gender"
                                                           required
                                                           v-model="student1.Gender">
                                            </b-form-select>
                                        </b-form-group>
                                    </b-col>
                                    <b-col md="6" class="text-left">
                                        <b-form-group id="DepartmentGrp"
                                                      label="Department:"
                                                      label-for="DepartmentInput">
                                            <b-form-select id="DepartmentInput"
                                                           :options="deps"
                                                           required
                                                           v-model="student1.Department_Name">
                                            </b-form-select>
                                        </b-form-group>
                                    </b-col>
                                </b-row>
                                <b-row align-h="center">
                                    <b-col md="6" class="text-left">
                                        <b-form-group id="AddressGrp"
                                                      label="Address:"
                                                      label-for="AddressInput">
                                            <b-form-input id="AddressInput"
                                                          type="text"
                                                          v-model="student1.Student_Address"
                                                          required
                                                          placeholder="">
                                            </b-form-input>
                                        </b-form-group>
                                    </b-col>
                                    <b-col md="3" class="text-left">
                                        <b-form-group id="CityGrp"
                                                      label="City:"
                                                      label-for="CityInput">
                                            <b-form-input id="CityInput"
                                                          type="text"
                                                          v-model="student1.Student_City"
                                                          required
                                                          placeholder="">
                                            </b-form-input>
                                        </b-form-group>
                                    </b-col>
                                    <b-col md="3" class="text-left">
                                        <b-form-group id="StateGrp"
                                                      label="State:"
                                                      label-for="StateInput">
                                            <b-form-input id="StateInput"
                                                          type="text"
                                                          v-model="student1.Student_State"
                                                          required
                                                          placeholder="">
                                            </b-form-input>
                                        </b-form-group>
                                    </b-col>
                                </b-row>
                                <b-row align-h="center">
                                    <b-col md="6" class="text-left">
                                        <b-form-group id="CountryGrp"
                                                      label="Country:"
                                                      label-for="CountryInput">
                                            <b-form-input id="CountryInput"
                                                          type="text"
                                                          v-model="student1.Student_Country"
                                                          required
                                                          placeholder="">
                                            </b-form-input>
                                        </b-form-group>
                                    </b-col>
                                    <b-col md="3" class="text-left">
                                        <b-form-group id="EmailGrp"
                                                      label="Email address:"
                                                      label-for="EmailInput"
                                                      description="We'll never share your email with anyone else.">
                                            <b-form-input id="EmailInput"
                                                          type="email"
                                                          v-model="student1.Student_Email"
                                                          required
                                                          placeholder="Enter email">
                                            </b-form-input>
                                        </b-form-group>
                                    </b-col>
                                    <b-col md="3" class="text-left">
                                        <b-form-group id="TelephoneGrp"
                                                      label="Telephone:"
                                                      label-for="TelephoneInput"
                                                      description="">
                                            <b-form-input id="TelephoneInput"
                                                          type="tel"
                                                          v-model="student1.Student_Phone"
                                                          required
                                                          placeholder="">
                                            </b-form-input>
                                        </b-form-group>
                                    </b-col>
                                </b-row>
                                <b-row class="d-flex justify-content-end">
                                    <b-col md="8"></b-col>
                                    <b-col md="2">
                                        <b-button v-on:click="postChanges" type="submit" variant="secondary">Update</b-button>
                                    </b-col>
                                    <b-col md="2">
                                        <b-button type="reset" variant="danger">Cancel</b-button>
                                    </b-col>
                                </b-row>
                            </b-container>

                        </b-form>
                    </b-card>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    export default {
        props: ['student1'],
        data() {
            return {
                form: {
                    email: '',
                    name: '',
                    food: null,
                    checked: [],
                    gender: ''

                },
                gender: [
                    { text: 'Select One', value: null },
                    'Male', 'Female'
                ],
                departments: [],
                deps: [],
                show: true,
                statusObj:{status:"", statusMsg:""}

            }
        },
        computed: {

        },
        methods: {
            onSubmit(evt) {
                evt.preventDefault();
                //alert(JSON.stringify(this.student));
            },
            onReset(evt) {
                evt.preventDefault();
                this.statusObj.status='cancel';
                this.statusObj.statusMsg="";
                this.$emit("updateStatus", this.statusObj);
                /* Trick to reset/clear native browser form validation state */
                this.show = false;
                //this.$nextTick(() => { this.show = true });
            },
            departmentName: function () {
                console.log("In dep name func" + this.departments);
                //this.deps = this.departments.map(dep => ({ value: dep.ID, text: dep.Department_Name }));
                this.deps = this.departments.map(dep => (dep.Department_Name));
                //this.deps = this.departments.map(a => 'text:' + a.Department_Name + ' value:' + a.ID);
                // .map(function (a) { return a.foo; })
            },
            saveStudent: function () {
                this.$http.post('http://localhost:59681/api/students/post', this.student).then(function (data) {
                    this.show = false;
                }, function (error) {
                });
            },
            postChanges: function () {
                var student = Object.assign({}, this.student1);
                let obj = this.departments.find(x => x.Department_Name === student['Department_Name']);
                student["Department_ID"] = obj['ID'];
                this.$http.put('http://localhost:59681/api/students/put', student).then(function (response) {
                    this.submitted = true;
                    this.isEditing = true;
                    this.statusObj.status ='success';
                    this.statusObj.statusMsg="";
                    console.log("success triggering event");
                    this.$emit("updateStatus", this.statusObj);
                })
                .catch(function (error) {
                    this.statusObj.status ='fail';
                    this.statusObj.statusMsg=error;
                    this.$emit("updateStatus", this.statusObj);
                });
            }
        },

        created() {
            this.$store.dispatch('fetchDepartments');
            this.departments = this.$store.state.departments;
            this.departmentName();
        }
    }

</script>
<style>
    @import url('http://fonts.googleapis.com/css?family=Lato:400,700');

    body {
        background: #EEF1F4;
        font-family: 'lato', sans-serif;
    }
</style>

