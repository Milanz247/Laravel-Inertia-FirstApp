<template>
    <Layout>
        <h1 class="text-2xl font-bold" >
            Users
        </h1>
        <div style="margin-top: 400px;">
            <p>
                The current time is {{ time }}.
            </p>
            <Link href="/users" class="text-blue-500" preserve-scroll>
                refresh
            </Link>
        </div>
    </Layout>
</template>

<script setup>

import Layout from '../Shared/Layout.vue';
import { Link } from '@inertiajs/inertia-vue3';
 
    // export default{ 
    //     components:{ Layout, Link },
    //     props: {time: String}
    // };
    
    defineProps ({
        time: String
    });

</script>
