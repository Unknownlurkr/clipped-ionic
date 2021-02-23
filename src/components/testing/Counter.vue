<template>
    <h4>{{ count }} </h4>
    <button class="btn btn-primary" @click="increment">
        Increment (local)
    </button>
</template>

<script>
import { ref } from "vue";


export default {
    props: {
        by: {type: Number, default: 1}
    },
    setup(props) {
        const count = ref(0)
        const increment = () => (count.value += props.by)
        return { count, increment }
    }
}
</script>