<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light fixed-top p-st" :class="{
            'bg-light': !darkMode,
            'navbar-blur': navbarSetting,
            'bg-dark2': darkMode,
        }">
            <div class="container">
                <a class="navbar-brand" href="/" @click.prevent="$emit('scroll', 'home')">
                    <Logo :dark-mode="darkMode" />
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span style="color: gray; font-size: 23px;">
                        <i class="fas fa-bars"></i>
                    </span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item mx-2">
                            <a class="nav-link" :class="{
                                'text-light': darkMode
                            }" href="/about" @click.prevent="$emit('scroll', 'about')">
                                About
                            </a>
                        </li>
                        <li class="nav-item mx-2">
                            <a class="nav-link" :class="{
                                'text-light': darkMode
                            }" href="/skills" @click.prevent="$emit('scroll', 'skills')">
                                Skills
                            </a>
                        </li>
                        <!-- <li class="nav-item mx-2">
                            <a class="nav-link" href="/skills" @click.prevent="$emit('scroll', 'contact')">
                                Contact
                            </a>
                        </li> -->
                        <li class="nav-item mx-2">
                            <a class="nav-link" :class="{
                                'text-light': darkMode
                            }" href="#" @click.prevent="switchMode">
                                <i :class="{
                                    'fas fa-moon': darkMode,
                                    'far fa-moon': !darkMode
                                }" v-tooltip.bottom="darkMode ? 'Light Mode' : 'Dark Mode'"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>

import Logo from './utils/Logo.vue';

export default {
    name: 'Navbar',
    components: {
        Logo
    },

    props: {
        darkMode: {
            type: Boolean,
            required: true
        }
    },

    data() {
        return {
            navbarSetting: false,
            localDarkMode: this.darkMode
        }
    },
    computed: {},
    mounted() { },
    methods: {
        switchMode() {
            this.localDarkMode = !this.localDarkMode;
            this.$emit('darkMode', this.localDarkMode);
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav-link {
    font-weight: 500;
}

button {
    border: none;
    outline: none;
}

button:hover {
    border: none;
    outline: none;
}

nav {
    border-bottom: 1px solid rgba(160, 159, 159, 0.336);
    position: fixed !important;
}

.navbar-blur {
    background-color: #ffffff7e;
    backdrop-filter: blur(12px);
}
</style>