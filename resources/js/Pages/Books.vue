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
        like_count: Object,
    },
    data(){
        return{
            params:{
                search: null,
            }
        }
    },
    watch: {
        params: {
            handler(){
                this.$inertia.get(this.route('books'), this.params, {replace: true, preserveState: true})
            },
            deep: true,
        }
    }
}

</script>


<template>
    <Head title="Books" />

    <BreezeAuthenticatedLayout>
        <div class="px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between my-4">
                <h3 class="font-bold">Books</h3>
            </div>
            <input type="search" v-model="params.search" aria-label="Search" placeholder="Search..." class="rounded focus:outline-none border-indigo-500">
            <div class="relative overflow-x-auto py-4">
                <table class="table-fixed w-full text-sm text-left overflow-hidden rounded">
                    <thead class="text-xs uppercase bg-indigo-500 text-white">
                        <tr>
                            <th class="px-6 py-4">Name</th>
                            <th class="px-6 py-4">Author</th>
                            <th class="px-6 py-4">Time To Read</th>
                            <th class="px-6 py-4">Read</th>
                            <th class="px-6 py-4">Like</th>
                        </tr>
                    </thead>
                    <tbody v-for="(book, index) in books.data" :key="book.id">
                        <tr class="bg-white border border-gray-100">
                            <td class="px-6 py-4 font-medium">
                                <div class="flex items-center space-x-4">
                                    <img :src="book.image_path" alt="book_image" class="h-6 w-6 rounded">
                                    <p class="truncate">{{ book.name }}</p>
                                </div>
                            </td>
                            <td class="px-6 py-4">
                                <p>{{ book.author }}</p>
                            </td>
                            <td class="px-6 py-4">
                                <p>{{book.time_to_read}}</p>
                            </td>
                            <td class="px-6 py-4">
                                <Link class="bg-indigo-500 py-2 px-3 inline-block rounded text-white" :href="route('book', { id: book.id })">Read</Link>
                            </td>
                            <td class="px-6 py-4">
                                <Link v-if="book.liked == 1" :href="route('books.unlike', { id: book.id })"><svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
                                </svg><p>{{like_count}}</p></Link>
                                <Link v-if="book.liked == 0" :href="route('books.like', { id: book.id })" ><svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg><p>{{like_count}}</p></Link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </BreezeAuthenticatedLayout>
</template>
