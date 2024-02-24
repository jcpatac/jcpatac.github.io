<template>
    <div class="py-4 p-st" :class="{
        'bg-light': !darkMode,
        'bg-dark2': darkMode,
        'text-light': darkMode,
    }">
        <div class="container">
            <div class="text-center" data-aos="fade" data-aos-once="true" data-aos-duration="1000">
                <span class="title text-center" :class="{ pgray: !darkMode, 'text-light': darkMode }">Leave a
                    message</span>
            </div>
            <hr width="50%" :class="{ pgray: !darkMode, 'bg-secondary': darkMode }" />
            <br />
            <div class="text-center">
                <div class="mb-3" data-aos="fade-up" data-aos-once="true" data-aos-duration="1000">

                    <input type="text" name="user_name" v-model="name" placeholder="name" class="pinput" :class="{
                        pgray: !darkMode,
                        'pgray-dark': darkMode,
                        'text-light': darkMode,
                    }" style="transition-delay: 0.2s" />
                </div>

                <div class="my-3" data-aos="fade-up" data-aos-once="true" data-aos-duration="1000">
                    <input type="email" name="user_email" v-model="email" placeholder="email" class="pinput" :class="{
                        pgray: !darkMode,
                        'pgray-dark': darkMode,
                        'text-light': darkMode,
                    }" style="transition-delay: 0.4s" />
                </div>

                <div class="my-3" data-aos="fade-up" data-aos-once="true" data-aos-duration="1000">
                    <textarea name="message" v-model="text" placeholder="message" class="pinput" rows="4" :class="{
                        pgray: !darkMode,
                        'pgray-dark': darkMode,
                        'text-light': darkMode,
                    }" style="transition-delay: 0.6s"></textarea>
                </div>

                <button @click.prevent="sendEmail" class="mt-1 btn mb-3" data-aos="fade" data-aos-once="true"
                    data-aos-duration="1000" data-aos-offset="50">
                    Send
                </button>
            </div>

            <Snackbar :showSnackbar="showSnackbar" @close="closeSnackbar" :snackbarMessage="snackbarMessage"
                :snackbarColor="snackbarColor" />
        </div>
    </div>
</template>

<script>
export default {
    name: 'Contact',
    data() {
        return {}
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
    font-weight: 400;
}

.title3 {
    font-size: 16px;
    font-weight: 400;
}

.pinput {
    font-size: 18px;
    outline: none;
    border: none;
    border-radius: 7px;
    padding: 10px;
    width: 50%;
    transition: all 1s;
}

.btn {
    border-color: #669db3ff;
    color: #669db3ff;
    width: 50%;
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

.pgray-dark {
    background-color: #3c4148 !important;
}

@media screen and (max-width: 1000px) {
    .pinput {
        width: 90%;
    }

    .pinput {
        width: 90%;
    }

    .btn {
        width: 90%;
    }
}
</style>