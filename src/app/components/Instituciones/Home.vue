<template>
<div>

    <b-container fluid>
        <b-table striped hover :items="items"></b-table>
    </b-container>
    

</div>
</template>

<script>
export default {
    data(){
        return{
            items: [],

        }
    }, 
    methods:{
        loadData(){
            let uri = 'http://localhost:4000/institucion';
            this.axios.get(uri).then((response) => {
                this.items = response.data;
                debugger;
            });
        }

    }, 

    computed: {

    },
    watch: {

    }, 

    created() {
        this.loadData();
        
    },
    
}
</script>

<style>
    body{
        background-image:none;
    }


</style>
