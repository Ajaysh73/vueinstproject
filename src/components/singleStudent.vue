<template>
    <div>
        <div v-if="!isEditing" id="single-student">
            <h1> Student Information</h1>
            <h4>
                {{ student.FirstName}} {{ student.LastName}}
            </h4>
            <article>
                <hr />
                <b>ID: Student Id: {{student.ID}} </b>
                <b>Gender: </b> {{student.Gender}}
            </article>

            <article>
                <b>Address:</b> {{student.Student_Address}}
                <b>City: </b> {{student.Student_City}}
            </article>
            <article>
                <b>Email:</b> {{student.Student_Email}}
            </article>
            <article>
                <b>Phone:</b> {{student.Student_Phone}}
                <b>Country:</b> {{student.Student_Country}}
            </article>
            <div style="display:inline-block; vertical-align: middle;">
                <button class="button" @click="isEditing = !isEditing">
                    {{ isEditing ? 'Save' : 'Edit' }}
                </button>
            </div>
            <hr />
        </div>

        <div v-if="isEditing" class="container">
            <form>
                <div class="row">
                    <div class="col-25">
                        <label for="fname">First Name</label>
                    </div>
                    <div class="col-75">
                        <input type="text" v-model.lazy="student.FirstName" required />
                    </div>
                </div>
                <div class="row">
                    <div class="col-25">
                        <label for="lname">Last Name</label>
                    </div>
                    <div class="col-75">
                        <input type="text" v-model.lazy="student.LastName" required />
                    </div>
                </div>
                <div class="row">
                    <div class="col-25">
                        <label for="lname">Address:</label>
                    </div>
                    <div class="col-75">
                        <input type="text" v-model.lazy="student.Student_Address" required />
                    </div>
                </div>

                <div class="row">
                    <div class="col-25">
                        <label for="lname">City:</label>
                    </div>
                    <div class="col-75">
                        <input type="text" v-model.lazy="student.Student_City" required />
                    </div>
                </div>
                <div class="row">
                    <div class="col-25">
                        <label for="lname">Email:</label>
                    </div>
                    <div class="col-75">
                        <input type="text" v-model.lazy="student.Student_Email" required />
                    </div>
                </div>
                <div class="row">
                    <div class="col-25">
                        <label for="lname">Phone:</label>
                    </div>
                    <div class="col-75">
                        <input type="text" v-model.lazy="student.Student_Phone" required />
                    </div>

                </div>

                <div class="row">
                    <div class="col-25">
                        <label for="country">Country</label>
                    </div>
                    <div class="col-75">
                        <input type="text" v-model.lazy="student.Student_Country" required />
                    </div>
                </div>
                <div class="row">
                    <div class="col-75">
                        <button type="button" ref="myButton" class="button" @click="submitted = !submitted" v-on:click="submit">
                            {{ submitted? 'Go Back' : 'Save' }}
                        </button>
                    </div>
                    <div v-if="submitted" class="col-25">
                        <h4> Changes saved!!</h4>
                    </div>
                </div>
            </form>
        </div>

    </div>
</template>

<script>
    // Imports


    export default {
        data() {
            return {
                id: this.$route.params.id,
                student: {},
                isEditing: false,
                submitted: false,
                counter: 0
            }
        },
        created() {
            this.$http.get('http://localhost:59681/api/students/GetStudents?id=' + this.id).then(function (data) {
                this.student = data.body[0];
                console.log(this.student);
                this.counter = this.counter + 1;
                console.log(this.counter);


            });
        },
        methods: {
            postChanges: function () {
                this.$http.put('http://localhost:59681/api/students/put/' + this.id, this.student).then(function (data) {
                    console.log(data);
                    this.submitted = true;
                    this.isEditing = true;
                }, function (error) {
                    console.log("Error", error.status);
                });
            },
            submit: function () {
                // Submit the form manually here (add a ref to your form element)
                if (this.submitted == false) {
                    console.log(this.$refs);
                    this.$router.push('/');
                }
                else {
                    this.postChanges();
                }
            }

        }
    }
</script>

<style scoped>
    input[type=text], select, textarea {
        width: 100%;
        padding: 5px;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
        resize: vertical;
        font-family: 'Nunito SemiBold';
    }

    /* Style the label to display next to the inputs */
    label {
        padding: 5px 5px 5px 0;
        display: inline-block;
        font-family: 'Nunito SemiBold';
    }

    /* Style the submit button */
    input[type=submit] {
        background-color: #4CAF50;
        color: white;
        padding: 12px 20px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        float: right;
    }

    .button {
        box-sizing: border-box;
        height: 30px;
        width: 100px;
        display: inline-block;
        font-size: 12px;
        font-weight: bold;
        box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.55);
        transition: background .5s;
        cursor: pointer;
        float: right;
    }
    /* Style the container */
    .container {
        border-radius: 5px;
        background-color: #f2f2f2;
        padding: 20px;
        max-width: 960px;
        align-items: flex-start;
        margin: auto;
        position: relative;
        text-align: center;
        width: 100%;
        box-sizing: border-box;
        box-shadow: 5px 10px #888888;
        font-family: 'Nunito SemiBold';
    }

    /* Floating column for labels: 25% width */
    .col-25 {
        float: left;
        width: 10%;
        margin-top: 6px;
        align-self: flex-end;
    }

    /* Floating column for inputs: 75% width */
    .col-75 {
        float: left;
        width: 75%;
        margin-top: 6px;
    }

    /* Clear floats after the columns */
    .row:after {
        content: "";
        display: table;
        clear: both;
    }

    /* Responsive layout - when the screen is less than 600px wide, make the two columns stack on top of each other instead of next to each other */
    @media screen and (max-width: 600px) {
        .col-25, .col-75, input[type=submit] {
            width: 100%;
            margin-top: 0;
        }
    }
</style>
