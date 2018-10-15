<template>
    <div>
        <b-navbar toggleable="md" type="dark" variant="secondary ">

            <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

            <b-navbar-brand href="#">NavBar</b-navbar-brand>

            <b-collapse is-nav id="nav_collapse">

                <b-navbar-nav>
                    <b-nav-item href="#">Link</b-nav-item>
                    <b-nav-item href="#" disabled>Disabled</b-nav-item>
                </b-navbar-nav>

                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">

                    <b-nav-form>
                        <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search" />
                        <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
                    </b-nav-form>

                    <b-nav-item-dropdown text="Lang" right>
                        <b-dropdown-item href="#">EN</b-dropdown-item>
                        <b-dropdown-item href="#">ES</b-dropdown-item>
                        <b-dropdown-item href="#">RU</b-dropdown-item>
                        <b-dropdown-item href="#">FA</b-dropdown-item>
                    </b-nav-item-dropdown>

                    <b-nav-item-dropdown right>
                        <!-- Using button-content slot -->
                        <template slot="button-content">
                            <em>User</em>
                        </template>
                        <b-dropdown-item href="#">Profile</b-dropdown-item>
                        <b-dropdown-item href="#">Signout</b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>

            </b-collapse>
        </b-navbar>
        <b-container>
            <b-row align-h="center" class="mt-5">
                <b-col md="12" class="text-left">
                    <b-card class="text-left">
                        <h3> Student Information</h3>
                        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                            <b-container>
                                <b-row align-h="center">
                                    <b-col md="4" class="text-left">
                                        <image-input v-model="avatar">
                                            <div slot="activator">
                                            <v-avatar size="150px" v-ripple v-if="!avatar" class="grey lighten-3 mb-3">
                                                <span>Click to add avatar</span>
                                            </v-avatar>
                                            <v-avatar size="150px" v-ripple v-else class="mb-3">
                                                <img :src="avatar.imageURL" alt="avatar">
                                            </v-avatar>
                                            </div>
                                        </image-input>
                                        <v-slide-x-transition>
                                            <div v-if="avatar && saved == false">
                                            <v-btn class="primary" @click="uploadImage" :loading="saving">Save Avatar</v-btn>
                                            </div>
                                        </v-slide-x-transition>
                                    </b-col>
                                </b-row>
                                <b-row align-h="center">
                                    <b-col md="6" class="text-left">
                                        <b-form-group id="FirstNameGrp"
                                                      label="First Name:"
                                                      label-for="FirstNameInput"
                                                      description="">
                                            <b-form-input id="FirstNameInput"
                                                          type="text"
                                                          v-model="student.FirstName"
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
                                                          v-model="student.LastName"
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
                                                           v-model="student.Gender">
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
                                                           v-model="student.Department_ID">
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
                                                          v-model="student.Student_Address"
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
                                                          v-model="student.Student_City"
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
                                                          v-model="student.Student_State"
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
                                                          v-model="student.Student_Country"
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
                                                          v-model="student.Student_Email"
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
                                                          v-model="student.Student_Phone"
                                                          required
                                                          placeholder="">
                                            </b-form-input>
                                        </b-form-group>
                                    </b-col>
                                </b-row>
                                <b-row class="d-flex justify-content-end">
                                    <b-col md="10"></b-col>
                                    <b-col md="1">
                                        <b-button v-on:click="saveStudent" type="submit" variant="secondary">Submit</b-button>
                                    </b-col>
                                    <b-col md="1">
                                        <b-button type="reset" variant="danger">Reset</b-button>
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
import ImageInput from './ImageInput.vue'
  export default {
    data() {
      return {
        form: {
          email: '',
          name: '',
          food: null,
          checked: [],
          gender: ''

        },
        student: {
          FirstName: "",
          LastName: "",
          Gender: "",
          Student_Address: "",
          Student_City: "",
          Student_State: "",
          Student_Country: "",
          Student_Email: "",
          Student_Phone: "",
          Department_ID: ""
        },
        gender: [
          { text: 'Select One', value: null },
          'Male', 'Female'
        ],
        departments: [],
        deps:[],
        show: true,
        avatar: null,
        saving: false,
        saved: false

      }
    },
    components: {
    ImageInput: ImageInput
    },
    watch:{
    avatar: {
      handler: function() {
        this.saved = false
      },
      deep: true
    }
  },
    computed: {
      departmentNames: function () {
        //var result = objArray.map(a => a.foo);
        // .map(function (a) { return a.foo; })

          var deps = this.departments.map(function (dep) {
            return dep.Department_Name
          });
         }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault();
        alert(JSON.stringify(this.student));
        console.log(JSON.stringify(this.student));
      },
      onReset(evt) {
        evt.preventDefault();
        /* Reset our form values */
        this.form.email = '';
        this.form.name = '';
        this.form.food = null;
        this.form.checked = [];
        /* Trick to reset/clear native browser form validation state */
        this.show = false;
        this.$nextTick(() => { this.show = true });
      },
      departmentName: function () {
        console.log("In dep name func" + this.departments);
        this.deps = this.departments.map(dep => ({ value: dep.ID, text: dep.Department_Name }));
        console.log(this.deps);
        //this.deps = this.departments.map(a => 'text:' + a.Department_Name + ' value:' + a.ID);
        //console.log(this.deps);
        // .map(function (a) { return a.foo; })
      },
      saveStudent: function () {
        this.$http.post('http://localhost:59681/api/students/post', this.student).then(function (data) {
          console.log(data);
          this.show = false;
        }, function (error) {
          console.log("Error", error.status);
        });
      },
      uploadImage() {
      this.saving = true
      setTimeout(() => this.savedAvatar(), 1000)
    },
        savedAvatar() {
         this.saving = false
        this.saved = true
        }
    },

    created() {
      this.$store.dispatch('fetchDepartments');
      this.departments = this.$store.state.departments;
      this.departmentName();
    }
      /*this.$http.get('http://localhost:59681/api/students/GetDepartments').then(function (data) {

        this.departments = data.body;
        console.log(this.departments);
        this.departmentName();
      });*/
    }




</script>
<style>
    @import url('http://fonts.googleapis.com/css?family=Lato:400,700');

    body {
        background: #EEF1F4;
        font-family: 'lato', sans-serif;
    }
</style>

