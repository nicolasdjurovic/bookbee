<script>
export default {
    data() {
        return {
            currentTime: 0,
            seekValue: 0,
        };
    },
    methods: {
        play() {
            this.$refs.audioPlayer.play();
        },
        pause() {
            this.$refs.audioPlayer.pause();
        },
        stop() {
            const {audioPlayer} = this.$refs;
            audioPlayer.pause();
            audioPlayer.currentTime = 0;
        },
        onPlaying() {
            const {audioPlayer} = this.$refs;
            if (!audioPlayer) {
                return;
            }
            this.currentTime = audioPlayer.currentTime;
            this.seekValue = (audioPlayer.currentTime / audioPlayer.duration) * 100;
        },
        onSeek() {
            const {audioPlayer} = this.$refs;
            const seekto = audioPlayer.duration * (this.seekValue / 100);
            audioPlayer.currentTime = seekto;
        },

    }
}
</script>

<script setup>
import BreezeAuthenticatedLayout from '@/Layouts/Authenticated.vue';
import { Head } from '@inertiajs/inertia-vue3';
import Button from "@/Components/Button";

defineProps({
    books: Object,
});


</script>


<template>
    <Head title="Books" />

    <BreezeAuthenticatedLayout>
        <div class="px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between my-4">
                <h3 class="font-bold">My Books</h3>
                <MoreButton class="flex justify-end items-center"/>
            </div>
            <div class="grid grid-rows-1 gap-4 my-4">
                <div class="h-40 w-full bg3 shadow-sm rounded-lg flex" v-for="info in books" :key="info">
                    <div class="h-full">
                        <img :src="info.image_path" alt="book1" class="object-cover w-full h-full rounded-lg w-40"/>
                    </div>
                    <div class="w-full">
                        <div class="flex flex-col items-start w-full mx-4 my-4">
                            <h2 class="font-bold">{{ info.name }}</h2>
                            <p>{{ info.author }}</p>
                        </div>
                        <div class="flex items-center justify-between px-4 py-4 space-x-4">
                            <input class="w-full"
                                type="range"
                                min="0"
                                max="100"
                                step="1"
                                v-model="seekValue"
                                @change="onSeek"
                            />
                            <audio
                                :src="info.audio_path"
                                ref="audioPlayer"
                                @timeupdate="onPlaying"
                            >
                                Your browser does not support the
                                <code>audio</code> element.
                            </audio>
                            <p>{{ currentTime }}</p>
                            <div class="flex items-center justify-center space-x-4">
                                <button @click="play"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></button>
                                <button @click="pause"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></button>
                                <button @click="stop"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z"></path></svg></button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </BreezeAuthenticatedLayout>
</template>
