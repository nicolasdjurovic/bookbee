<script>
import BreezeAuthenticatedLayout from '@/Layouts/Authenticated.vue';
import { Head } from '@inertiajs/inertia-vue3';
import { Link } from '@inertiajs/inertia-vue3'


export default {
    components: {
        BreezeAuthenticatedLayout,
        Head,
        Link,
    },
    props: {
        books: Object,
    },
}

</script>


<template>
    <Head title="Books" />

    <BreezeAuthenticatedLayout>
        <div class="grid grid-cols-2 px-4 py-4 sm:px-6 lg:px-8 gap-4" v-for="(book, index) in books" :key="book.id">
            <div>
                <img :src="book.image_path" alt="book_image" class="object-cover w-full h-60 rounded">
            </div>
            <div class="flex flex-col justify-start">
                <h1 class="text-2xl font-bold">{{book.name}}</h1>
                <h2 class="text-lg">Author: {{book.author}}</h2>
                <h3 class="text-md py-4">{{book.description}}</h3>
            </div>
        </div>
    </BreezeAuthenticatedLayout>
</template>
