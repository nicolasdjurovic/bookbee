<script setup>
import { Head, Link } from '@inertiajs/inertia-vue3';

defineProps({
    canLogin: Boolean,
    canRegister: Boolean,
})
</script>

<template>
    <Head title="Welcome" />
    <div class="flex justify-between items-center px-4 py-4 absolute w-full bg1">
        <div>
            <img src="/storage/bookbee-logo.png" alt="bookbee-logo" class="h-8"/>
        </div>
    </div>
    <div class="h-screen w-full flex flex-col px-4 absolute justify-center">
        <h1 class="flex justify-start text-[40px] md:text-[60px] lg:text-[80px] xl:text-[80px] text-white font-bold py-4">
        The future of <br>books.
        </h1>
        <div class="flex items-center space-x-4">
            <template v-if="canLogin">
                <Link :href="route('login')" class="button1">
                    Log in
                </Link>
                <Link :href="route('register')" class="button1">
                    Register
                </Link>
            </template>
                <Link v-else :href="route('dashboard')" class="button1">
                    Dashboard
                </Link>
        </div>
    </div>
    <div class="w-full h-screen bg2"></div>
</template>
