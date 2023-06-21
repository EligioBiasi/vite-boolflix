<template>
    <div>
        <input type="text" placeholder="Search here" v-model="querySearch">
        <button @click="$emit('addMessage', querySearch)">Search</button>
    </div>
    
</template>

<script>

export default {
    data(){
        return {
            querySearch : "",
        }
    },

    methods:{
    
    }
}
</script>

<style lang="scss" scoped>
   
    input{
        margin: .5rem;
        border-radius: 5px;
        border: solid 1px magenta;
        width: 200px;
        padding: .5rem;
    }

    button{
        border-radius: 5px;
        border: solid 1px magenta;
        background-color: lime;
        padding: .5rem;
    }
</style>