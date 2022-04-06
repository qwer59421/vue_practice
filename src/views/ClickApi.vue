<template>
    <main>
        <h1>點擊更動Data實作</h1>
        <div class="container">
            <div class="btn">
                <button @click="add_user">增加Data</button>
                <button @click="money_double">金額Double</button>
                <button @click="more100w">篩選金額超過100萬</button>
                <button @click="sortBigToSmall">金額由大到小排序</button>
                <button @click="sortSmallToBig">金額由小到大排序</button>
                <button @click="showTotal">秀出金額加總</button>
            </div>
            <div class="data_list">
                <div class="title">
                    <h3>大頭照</h3>
                    <h3>姓名</h3>
                    <h3>存款</h3>
                </div>
                <UserData v-for="item in this.$store.state.api" :key="item.id" :api="item"/>
                <div class="total" v-if="show_total">Total Money: <span>$ {{toCurrency(total)}}</span></div>
            </div>
        </div>

    </main>
</template>

<script>
import UserData from "../components/UserData.vue"
export default {
    name: "ClickApi",
    components: {
        UserData,
    },
    data(){
        return{
            // api_key: [],
            show_total: false,
        }
    },
    async created(){
        this.$store.state.api = []
        await this.get_api();
        await this.get_api();
        await this.get_api();
    },
    methods: {
        get_api(){
            const api = "https://randomuser.me/api"
            this.axios.get(api).then( res => {
                let result = res.data.results[0]
                // console.log(result.cell)
                let user = {
                        id: result.cell,
                        name: result.name.first + " " + result.name.last,
                        img: result.picture.thumbnail,
                        money: Math.floor(Math.random() * 1000000)
                    }
                // console.log(user)
                this.$store.state.api.push(user)
                // console.log(this.api)
            })
        },
        add_user(){
            this.get_api()
        },
        money_double(){
            // let list = this.$store.state.api
            // // for(let key in list){
            // //     list[key].money = list[key].money * 2
            // // }
            // list.map(item => {
            //     item.money = item.money * 2
            //     return item
            // })
            this.$store.commit('double')
        },
        more100w(){
            this.$store.commit('more')
        },
        sortBigToSmall(){
            this.$store.commit('plussortEvent')
        },
        sortSmallToBig(){
            this.$store.commit('reducesortEvent')
        },
        toCurrency(num){
            let parts = num.toString();
            parts = parts.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
            // console.log(parts)
            return parts;
        },
        showTotal(){
            this.show_total = !this.show_total;
        }
    },
    updated(){
        return this.$store.state.api
    },
    computed: {
        total(){
            return this.$store.state.api.reduce((accumulator, currentValue) => {
                console.log(accumulator)
                console.log(currentValue)
                return accumulator += currentValue.money;
            }, 0)
        }
    }
}
</script>

<style lang="scss" scoped>
main{

    h1{
        text-align: center;
    }

    .container{
        display: flex;
        margin-top: 20px;

        .btn{
            display: flex;
            flex-direction: column;
            padding-right: 20px;

            button{
                margin: 20px;
                border: 1px solid white;
                border-radius: 10px;
                padding: 5px;
                box-shadow: 5px 8px 5px 1px black;
                transition: .5s ease all;

                &:hover{
                    box-shadow: 7px 10px 5px 1px black;
                    transform: rotateZ(-1deg) scale(1.05);;
                }
            }


        }

        .data_list{
            width: 600px;
            margin-left: 20px;
            border-left: 1px solid white;
            padding-left: 20px;

            .title{
                display: flex;
                justify-content: space-between;
                border-bottom: 1px solid white;
                padding-bottom: 10px;
                
                h3{
                    width: 150px;
                }

            }
            
            .total{
                margin-top: 40px;
                border-radius: 5px;
                padding: 10px 10px 10px 10px;
                background-color: #8E8E8E;
                display: flex;
                align-items: center;
                justify-content: space-between;
            }
        }
    }
}
</style>