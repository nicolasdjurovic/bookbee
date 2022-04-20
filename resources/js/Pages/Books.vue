<script setup>
import BreezeAuthenticatedLayout from '@/Layouts/Authenticated.vue';
import { Head } from '@inertiajs/inertia-vue3';
import { Link } from '@inertiajs/inertia-vue3'


defineProps({
   books: Object
});

</script>


<template>
    <Head title="Books" />

    <BreezeAuthenticatedLayout>
        <div class="px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between my-4">
                <h3 class="font-bold">Books</h3>
            </div>
            <div class="relative overflow-x-auto rounded">
                <table class="w-full text-sm text-left overflow-hidden">
                    <thead class="text-xs uppercase bg-indigo-500 text-white">
                        <tr>
                            <th class="px-6 py-4"></th>
                            <th class="px-6 py-4">Name</th>
                            <th class="px-6 py-4">Author</th>
                            <th class="px-6 py-4">Read</th>
                        </tr>
                    </thead>
                    <tbody v-for="(book, index) in books" :key="book.id">
                        <tr class="bg-white border border-gray-100">
                            <td class="px-6 py-4 font-bold">
                                <p>{{book.id}}</p>
                            </td>
                            <td class="px-6 py-4 font-medium">
                                <div class="flex items-center space-x-4">
                                    <img :src="book.image_path" alt="book_image" class="h-6 w-6 rounded">
                                    <p>{{ book.name }}</p>
                                </div>
                            </td>
                            <td class="px-6 py-4">
                                <p>{{ book.author }}</p>
                            </td>
                            <td class="px-6 py-4">
                                <Link :href="route('book', { id: book.id })">Read</Link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </BreezeAuthenticatedLayout>
</template>
