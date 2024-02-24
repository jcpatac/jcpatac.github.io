<template>
    <div class="p-st">
        <div class="container py-4" :class="{ 'bg-white': !darkMode, 'bg-dark': darkMode }">
            <div class="text-center" data-aos="fade" data-aos-once="true" data-aos-duration="1000">
                <span class="title text-center" :class="{ pgray: !darkMode, 'text-light': darkMode }"> Skills </span>
            </div>
            <hr width="50%" :class="{ pgray: !darkMode, 'text-light': darkMode }" />
            <br />
            <div class="row">
                <div class="col-xl-6 xol-bg-6 col-md-6 col-sm-12 text-center pb-5 px-4" v-for="(skill, index) in skills"
                    :key="index" data-aos="fade-up" data-aos-offset="10" data-aos-delay="30"
                    :style="{ 'transition-delay': index / 4.2 + 's' }" data-aos-duration="500" data-aos-easing="ease-in-out"
                    data-aos-mirror="true" data-aos-once="true">
                    <div class="bg-div">
                        <i :class="skill.icon"></i>
                    </div>
                    <div class="title2 pt-2">
                        {{ skill.title }}
                    </div>
                    <hr width="50%" :class="{ pgray: !darkMode, 'text-light': darkMode }" />
                    <span class="title3">{{ skill.info.join(", ") }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Skills',

    props: {
        darkMode: {
            type: Boolean,
            required: true
        }
    },

    data() {
        return {
            skills: [
                {
                    title: "Languanges",
                    info: [
                        "Python",
                        "Javascript",
                    ],
                    icon: "fa fa-code"
                },
                {
                    title: "Web Technologies",
                    info: [
                        "Django",
                        "Flask",
                        "Vue.js",
                        "React.js",
                        "Node.js",
                        "Electron.js"
                    ],
                    icon: "fas fa-laptop-code"
                },
                {
                    title: "Databases",
                    info: ["MySQL", "PostgreSQL",],
                    icon: "fa fa-database"
                },
                {
                    title: "OS & Tools",
                    info: [
                        "MacOS",
                        "Ubuntu",
                        "Firebase",
                        "AWS S3"
                    ],
                    icon: "fas fa-tools"
                },
            ]
        }
    },
    computed: {},
    mounted() { },
    methods: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title {
    font-size: 30px;
    font-weight: 500;
}

.title1 {
    font-size: 24px;
    font-weight: 400;
}

.title2 {
    font-size: 20px;
    font-weight: 500;
}

.title3 {
    font-size: 16px;
    font-weight: 400;
}

.fa {
    /* color: rgb(212, 149, 97); */
    color: rgb(150, 194, 219);
    /* color: #C5ADC5; */
    font-size: 40px;
    transition: all 0.5s;
}

.fas {
    /* color: rgb(212, 149, 97); */
    color: rgb(150, 194, 219);
    /* color: #C5ADC5; */
    font-size: 40px;
    /* font-weight: bold; */
    transition: all 0.5s;
}
</style>