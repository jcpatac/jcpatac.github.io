<template>
    <div class="py-4 p-st" :class="{
        'bg-light': !darkMode,
        'bg-dark2': darkMode,
        'text-light': darkMode
    }">
        <div class="container">
            <div class="text-center" data-aos="fade" data-aos-once="true" data-aos-duration="1000">
                <span class="title text-center" :class="{ pgray: !darkMode, 'text-light': darkMode }"> About Me </span>
            </div>
            <hr width="50%" :class="{ pgray: !darkMode, 'text-light': darkMode }" />
            <div class="row">
                <div class="col-xl-6 col-bg-6 col-md-6 col-sm-12">
                    <Timeline :data="experience" :dark-mode="darkMode" />
                </div>
                <div class="col-xl-6 col-bg-6 col-md-6 col-sm-12">
                    <Timeline :data="education" :dark-mode="darkMode" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import Timeline from './utils/Timeline.vue';

export default {
    name: "About",

    components: {
        Timeline
    },

    props: {
        darkMode: {
            type: Boolean,
            required: true
        }
    },

    data() {
        return {
            education: {
                title: 'Education',
                data: [
                    {
                        name: 'University of the Philippines',
                        place: "Cebu",
                        date: "2015 - 2019",
                        degree: "BS Computer Science",
                        description: `
                            - Developed certain logical skills<br>
                            - Improved social and communication skills<br>
                            - Learned core concepts of software development<br>`,
                        skills: [
                            "Database",
                            "Data structures",
                            "Object-Oriented Programming",
                            "Project Management",
                            "Problem Solving"
                        ]
                    },
                    {
                        name: "Firecheck",
                        place: "Cebu, Philippines",
                        date: "June 2018 - August 2018",
                        position: "Intern",
                        description: `
                            - Developed a mobile application to help achieve the vision of the project<br>
                            - Applied project management skills to help plan out the steps of the research in a fast-paced environment`,
                        skills: [
                            "Java",
                            "Android"
                        ]
                    }
                ]
            },
            experience: {
                title: 'Experience',
                data: [
                    {
                        name: "Growsari",
                        place: "Philippines",
                        date: "April 2022 - Present",
                        position: "Full Stack Developer",
                        description: `
                            - Coded software changes and alterations based on specific design specifications<br>
                            - Implemented and updated application modules under the direction of Senior Software Developers<br>
                            - Worked to solve business-related problems using Python and Flask`,
                        skills: [
                            "Python",
                            "Flask",
                            "SQL-ALchemy",
                            "MySQL",
                            "React JS"
                        ]
                    },
                    {
                        name: "BPOSeats",
                        place: "Cebu, Philippines",
                        date: "August 2019 - March 2022",
                        position: "Full Stack Developer",
                        description: `
                            - Lead and manage the desktop team to create a working user-friendly desktop application<br>
                            - Worked independently and with a team to research and develop unique features for the web and desktop application<br>
                            - Work for both frontend and backend in developing websites for the company`,
                        skills: [
                            "Python",
                            "Django",
                            "PostgreSQL",
                            "Electron JS",
                            "VueJS"
                        ]
                    },
                ]
            }
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
</style>