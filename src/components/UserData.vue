<template>
    <div class="content">
        <ul>
            <li><img :src="_list.img" alt=""></li>
            <li>{{_list.name}}</li>
            <li>$ {{toCurrency(_list.money)}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "UserData",
    props: ["api"],
    created(){
        console.log(this.api)
        this.list.push(this.api)
        console.log(this.list)
    },
    data(){
        return{
            list: [],
        }
    },
    methods: {
        toCurrency(num){
            let parts = num.toString();
            parts = parts.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
            // console.log(parts)
            return parts;
        }
    },
    computed: {
        _list(){
            return this.list[0]
        }
    }
}
</script>

<style lang="scss" scoped>
.content{
    padding-top: 20px;

    ul{
        display: flex;
        justify-content: space-between;
        li{
            list-style: none;
            width: 150px;
            font-weight: 800;
            display: flex;
            align-items: center;
        }
    }
}
</style>