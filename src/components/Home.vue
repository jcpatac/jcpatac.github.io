<template>
    <div class="pt-5 p-st" :class="{
        'bg-white': !darkMode,
        'bg-dark': darkMode
    }">
        <div class="container" data-aos="fade" data-aos-once="true" data-aos-duration="1000">
            <div class="row align-items-center">
                <div class="col-xl-6 col-bg-6 col-md-6 col-sm-12 text-center">
                    <img :src="picture" />
                </div>
                <div class="col-xl-6 col-bg-6 col-md-6 col-sm-12 pt-5">
                    <span class="home-title" :class="{
                        pgray: !darkMode,
                        'text-light': darkMode
                    }">
                        Hello!
                    </span>
                    <div class="description">
                        <p v-html="description"></p>
                    </div>
                    <div class="text-center pb-4">
                        <button class="btn btn-outline-secondary mx-2" v-tooltip.bottom="'LinkedIn'">
                            <i class="fab fa-linkedin"></i>
                        </button>
                        <button class="btn btn-outline-secondary mx-2" v-tooltip.bottom="'GitHub'">
                            <i class="fab fa-github"></i>
                        </button>
                        <button class="btn btn-outline-secondary mx-2" v-tooltip.bottom="'Resume'">
                            <i class="fa fa-file"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Home',

    props: {
        darkMode: {
            type: Boolean,
            required: true
        }
    },

    data() {
        return {
            picture: require('../assets/me.jpeg'),
            description: `
                I am Caesar, a Full Stack Developer that brings superior frontend and backend design to promote quality software. Thorough comprehension of JavaScript and Python programming languages to generate custom software designs. Extensive collaboration with different teams to ascertain client expectations and oversee software creation from initial planning through roll-out and support. Detail-oriented approach to maintaining application responsiveness, effectiveness, and security.
            `
        }
    },
    computed: {},
    mounted() { },
    methods: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home-title {
    font-size: 28px;
    font-weight: 500;
}

.description {
    padding: 10px 0 10px;
}

img {
    max-width: 300px;
    /* margin-top: 60px; */
    /* transform: rotateY(180deg); */
}

@media only screen and (max-width: 580px) {
    img {
        object-fit: cover;
        border-radius: 50%;
        height: 200px;
        width: 200px;
        margin-top: 10px;
        margin-bottom: 10px;
        border: 2px solid rgb(205, 205, 205);
    }
}

.fa {
    font-size: 15px;
}

.btn {
    border-color: #669db3ff;
    color: #669db3ff;
}

.btn:hover {
    background-color: #669db3ff;
    border-color: #669db3ff;
    color: white;
}

.btn:focus {
    background-color: #669db3ff;
    border-color: #669db3ff;
    color: white;
}

.btn:focus {
    outline: none !important;
}

p {
    text-align: justify;
    font-weight: 400;
    line-height: 180%;
}
</style>