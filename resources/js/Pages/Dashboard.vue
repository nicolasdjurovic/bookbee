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
    <Head title="Dashboard" />

    <BreezeAuthenticatedLayout>

        <div class="px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between my-4">
                <h3 class="font-bold">Dashboard</h3>
            </div>
            <div class=" my-4 bg-white rounded flex justify-start w-fit py-4 px-4 w-40">
                <div class="flex-col items-start space-y-4">
                    <p>Books available</p>
                    <Link class="bg-indigo-500 py-2 px-3 inline-block rounded text-white" :href="route('books')">Read books</Link>
                </div>
            </div>
        </div>
    </BreezeAuthenticatedLayout>
</template>
