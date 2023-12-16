<template>
    <nav class="mt-6" >
        <ul class="list-disc">
            <li><Link href="/" class="text-blue-500" >Home</Link></li>
            <li><Link href="/users" class="text-blue-500"  >Users</Link></li>
            <li><Link href="/about" class="text-blue-500" >About</Link></li>
            <li><Link href="/logout" method="post" as="button" :data="{ foo: 'bar' }" class="text-blue-500" >Log out</Link></li> 
        </ul>
    </nav>
</template>


<script>
    import { Link } from '@inertiajs/inertia-vue3';
    export default{ 
        components:{Link},
    };
</script>