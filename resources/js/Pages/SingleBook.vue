<script setup>
import BreezeAuthenticatedLayout from '@/Layouts/Authenticated.vue';
import { Head } from '@inertiajs/inertia-vue3';

defineProps({
    books: Object
});

</script>


<template>
    <Head title="Books" />

    <BreezeAuthenticatedLayout>
        <div v-for="book in books" :key="book" class="grid grid-cols-2 px-4 py-4 sm:px-6 lg:px-8 gap-4">
            <div>
                <img :src="book.image_path" alt="book_image" class="object-cover w-full h-100 rounded">
            </div>
            <div class="flex flex-col justify-start">
                <h1 class="text-2xl font-bold">{{book.name}}</h1>
                <h2 class="text-lg">Author: {{book.author}}</h2>
                <h3 class="text-md py-4">{{book.description}}</h3>
            </div>
        </div>
    </BreezeAuthenticatedLayout>
</template>
