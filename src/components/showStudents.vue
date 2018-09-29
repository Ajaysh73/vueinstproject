<template>
    <div id="show-students">
        <h1>All Students</h1>
        <div v-for="student in listStudents" class="single-student">
            <router-link v-bind:to="'/student/' + student.ID"><h4><b>{{student.FirstName}} {{student.LastName}}</b></h4></router-link>
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
        </div>
    </div>
</template>

<script>

    export default {
        data() {
            return {
                listStudents: [],
                search: '',

            }
        },
        components: {

        },
        computed: {
            nextId: function () {
                return this.blogs.length;
            }
        },

        created() {
            this.$http.get('http://localhost:59681/api/students/GetStudents').then(function (data) {

                this.listStudents = data.body;
            });
        }



    }
</script>

<style scoped>
    #show-students {
        max-width: 800px;
        margin: 0px auto;
    }

    .single-student {
        padding: 20px;
        margin: 20px 0;
        box-sizing: border-box;
        background: #eee;
        border: 1px dotted #aaa;
    }

    #show-blogs a {
        color: #444;
        text-decoration: none;
    }

    input[type="text"] {
        padding: 8px;
        width: 100%;
        box-sizing: border-box;
    }
</style>
