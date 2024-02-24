<template>
    <div class="logo-div">
        <span class="logo-title-name" :class="{ pgray: !darkMode, 'text-light': darkMode }">
            {{ name }}
        </span>
    </div>
</template>

<script>

export default {
    name: 'Logo',

    props: {
        darkMode: {
            type: Boolean,
            required: true
        }
    },

    data() {
        return {
            name: 'johncaesarpatac'
        }
    },
    computed: {},
    mounted() { },
    methods: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.logo-div:hover .logo-title-name {
    letter-spacing: 0px;
    transition: 0.7s all;
}

.logo-title-name {
    font-family: "Parisienne", cursive;
    font-size: 30px;
    font-weight: 500;
    letter-spacing: 2px;
    transition: 0.5s all;
}
</style>