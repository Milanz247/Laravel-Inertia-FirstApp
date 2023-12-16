<template>
    <h1>Users</h1>
    <Nav></Nav>


    <div style="margin-top: 400px;">
        <p>
            The current time is {{ time }}.
        </p>
    </div>
</template>
<script>

import Nav from '../Shared/Nav.vue'  

    export default{ 
        components:{ Nav },
        props: {time: String}
    };

</script>
