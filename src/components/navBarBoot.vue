<template>
    <b-navbar toggleable="md" type="dark" variant="secondary ">

        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

        <b-navbar-brand href="#">NavBar</b-navbar-brand>

        <b-collapse is-nav id="nav_collapse">

            <b-navbar-nav class="mx-auto">
                <b-nav-item to="/home">Home</b-nav-item>
                <b-nav-item to="/Academics">Academics</b-nav-item>
                <b-nav-item to="/Institute">Institute</b-nav-item>
                <b-nav-item to="/Campus">Campus</b-nav-item>
                <b-nav-item to="/Admission">Admission</b-nav-item>
                <b-nav-item-dropdown text="Students" right>
                    <b-dropdown-item to="/" exact>Student Listing</b-dropdown-item>
                    <b-dropdown-item to="/addboot" exact>Add New Student</b-dropdown-item>
                    <b-dropdown-item to="/showStudents" exact>Modify student Info</b-dropdown-item>
                </b-nav-item-dropdown>
                <b-nav-item-dropdown text="Faculty" right>
                    <b-dropdown-item to="/Faculty">Faculty Listing</b-dropdown-item>
                    <b-dropdown-item href="#">Add New Faculty</b-dropdown-item>
                    <b-dropdown-item href="#">Modify Faculty Info</b-dropdown-item>
                </b-nav-item-dropdown>
                <b-nav-item-dropdown text="Department" right>
                    <b-dropdown-item to="/Department">Department Listing</b-dropdown-item>
                    <b-dropdown-item href="#">Add New Department</b-dropdown-item>
                    <b-dropdown-item href="#">Modify Department Info</b-dropdown-item>
                </b-nav-item-dropdown>
                <b-nav-item to="/Contact">Contact</b-nav-item>
            </b-navbar-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">

                <b-nav-form>
                    <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search" />
                    <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
                </b-nav-form>



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

</template>

<script>
  export default {

    data() {
      return {

      }
    },
    methods: {
    }

  }
</script>


