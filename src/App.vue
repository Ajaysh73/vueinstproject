<template>
    <div id="app">
        <app-header></app-header>
        <app-headerBoot></app-headerBoot>
        <router-view></router-view>

    </div>
</template>

<script>

    import header from './components/headerNav.vue'
    import headerBoot from './components/navBarBoot.vue'

    export default {
        name: 'app',
        components: {
            'app-header': header,
            'app-headerBoot': headerBoot
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
