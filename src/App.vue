<template>
    <div id="app" :class="{
        'text-dark': !darkMode,
        'text-light': darkMode,
        'bg-dark': darkMode,
    }">
        <Navbar @scroll="scrollTo" @darkMode="switchMode" :dark-mode="darkMode" />
        <div class="parent">
            <Home :darkMode="darkMode"></Home>
            <About id="about" :darkMode="darkMode"></About>
            <Skills id="skills" :darkMode="darkMode"></Skills>
            <!-- <Portfolio id="portfolio"></Portfolio> -->
            <!-- <Contact id="contact"></Contact> -->
            <Footer></Footer>
        </div>
    </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Home from "./components/Home.vue";
import About from "./components/About";
import Skills from "./components/Skills";
// import Portfolio from "./components/Portfolio.vue";
// import Contact from "./components/Contact.vue";
import Footer from "./components/Footer.vue";

export default {
    name: 'App',
    components: {
        Navbar,
        Home,
        About,
        Skills,
        // Portfolio,
        // Contact,
        Footer
    },

    data() {
        return {
            darkMode: false,
            config: {
                use_cookies: true
            }
        }
    },

    created() {
        if (this.config.use_cookies) {
            this.darkMode = this.$cookie.get("darkMode") === "true" ? true : false;
        }
    },

    mounted() {
        ['about', 'contact', 'skills'].forEach((l) => {
            if (window.location.href.includes(l)) {
                let elementPosition = document.getElementById(l).offsetTop;
                window.scrollTo({ top: elementPosition - 35, behavior: 'smooth' });
            }
        });
    },

    methods: {
        scrollTo(el) {
            if (el == 'home') {
                this.$router.push('/');
                window.scrollTo({
                    top: -80,
                    behavior: 'smooth'
                });
            } else {
                let elementPosition = document.getElementById(el).offsetTop;
                window.scrollTo({
                    top: elementPosition - 35,
                    behavior: 'smooth'
                });
                if (this.$router.history.current.path != `/${el}`) {
                    this.$router.push(`/${el}`);
                }
            }
        },

        switchMode(mode) {
            if (this.config.use_cookies) {
                this.$cookie.set("darkMode", mode);
            }
            this.darkMode = mode;
        }
    }
}
</script>

<style>
#app {
    /* font-family: Avenir, Helvetica, Arial, sans-serif; */
    font-family: 'Montserrat', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    width: 100%;
}

@media screen and (max-width: 580px) {
    #app {
        width: fit-content;
    }
}

.parent {
    margin-top: 38px;
    padding-top: 40px;
    position: relative;
}

.pgray {
    color: #535a5e;
}

.pblue {
    color: #669db3ff;
}

.bg-dark2 {
    background-color: #262c30 !important;
}

.text-light {
    color: #d3d2d2 !important;
}

.p-st {
    transition: all 0.5s !important;
}

/* To set scrollbar width */
::-webkit-scrollbar {
    width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 9px;
    border: 2px solid white;
    /* Use your background color instead of White */
    background-clip: content-box;
}

/* Handle */
::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 9px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
    background: #555;
}

.tooltip {
    display: block !important;
    z-index: 10000;
}

.tooltip .tooltip-inner {
    background: #DDD0C8;
    color: black;
    border-radius: 8px;
    font-size: 10px;
}

.tooltip .tooltip-arrow {
    width: 0;
    height: 0;
    border-style: solid;
    position: absolute;
    margin: 5px;
    border-color: #DDD0C8;
    z-index: 1;
}

.tooltip[x-placement^="top"] {
    margin-bottom: 5px;
}

.tooltip[x-placement^="top"] .tooltip-arrow {
    border-width: 5px 5px 0 5px;
    border-left-color: transparent !important;
    border-right-color: transparent !important;
    border-bottom-color: transparent !important;
    bottom: -5px;
    left: calc(50% - 5px);
    margin-top: 0;
    margin-bottom: 0;
}

.tooltip[x-placement^="bottom"] {
    margin-top: 10px;
}

.tooltip[x-placement^="bottom"] .tooltip-arrow {
    border-width: 0 5px 5px 5px;
    border-left-color: transparent !important;
    border-right-color: transparent !important;
    border-top-color: transparent !important;
    top: -5px;
    left: calc(50% - 5px);
    margin-top: 0;
    margin-bottom: 0;
}

.tooltip[x-placement^="right"] {
    margin-left: 5px;
}

.tooltip[x-placement^="right"] .tooltip-arrow {
    border-width: 5px 5px 5px 0;
    border-left-color: transparent !important;
    border-top-color: transparent !important;
    border-bottom-color: transparent !important;
    left: -5px;
    top: calc(50% - 5px);
    margin-left: 0;
    margin-right: 0;
}

.tooltip[x-placement^="left"] {
    margin-right: 5px;
}

.tooltip[x-placement^="left"] .tooltip-arrow {
    border-width: 5px 0 5px 5px;
    border-top-color: transparent !important;
    border-right-color: transparent !important;
    border-bottom-color: transparent !important;
    right: -5px;
    top: calc(50% - 5px);
    margin-left: 0;
    margin-right: 0;
}

.tooltip.popover .popover-inner {
    background: #f9f9f9;
    color: black;
    padding: 24px;
    border-radius: 5px;
    box-shadow: 0 5px 30px rgba(black, 0.1);
}

.tooltip.popover .popover-arrow {
    border-color: #f9f9f9;
}

.tooltip[aria-hidden="true"] {
    visibility: hidden;
    opacity: 0;
    transition: opacity 0.5s, visibility 0.5s;
}

.tooltip[aria-hidden="false"] {
    visibility: visible;
    opacity: 1;
    transition: opacity 0.5s;
}
</style>
