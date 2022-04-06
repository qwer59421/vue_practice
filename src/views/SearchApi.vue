<template>
    <main>
        <input type="text" placeholder="篩選資料" class="search" v-model="searchID">
        <ul class="api_container">
            <li v-for="item in search_data" :key="item.id">{{item.name}}</li>
        </ul>
    </main>
</template>

<script>
export default {
    name: "SearchApi",
    async mounted(){
        const api = "https://mocki.io/v1/7fc9318e-5bff-4631-90c5-61d353a38898";
        await this.axios.get(api).then( (res) => {
            this.api_data = res.data
        })
    },
    data(){
        return{
            api_data: "",
            searchID: "",
        }
    },
    computed: {
        search_data(){
            if(this.searchID){
                // let reg = new RegExp(this.searchID, 'ig');
                return this.api_data.filter(item => {
                    // console.log(item.name.indexOf(this.searchID) > -1)
                    return item.name.indexOf(this.searchID) > -1
                })
            }else{
                return this.api_data
            }
        }
    },
    watch: {
        searchID: {
            handler(newValue){
                this.searchID = newValue.toUpperCase();
            },
            deep: true,
        }
    }
}
</script>

<style lang="scss" scoped>
main{
    .search{
        border: 1px solid white;
        padding: 10px;
        color: white;
    }

    ::placeholder { /* CSS 3 標準 */
        color: white;
    }

    .api_container{
        display: flex;
        flex-wrap: wrap;
        margin-top: 20px;
        padding-top: 10px;
        border-top: 1px solid white;

        li{
            list-style: none;
            border: 1px solid white;
            margin: 10px;
            padding: 10px;
        }

    }
}
</style>