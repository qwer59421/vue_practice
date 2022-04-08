<template>
    <main>
        <h1>分組用</h1>
        <textarea name="" id="" cols="30" rows="10" v-model="team_member"></textarea>
        <button @click="changelist">分隊</button>
        <div class="team_container">
            <div class="team">
                <div>A組：</div>
                <div v-show="already">{{Ateam}}</div>
            </div>
            <div class="team">
                <div>B組：</div>
                <div v-show="already">{{Bteam}}</div>
            </div>
        </div>
    </main>
</template>

<script>
export default {
    name: "Group",
    data(){
        return{
            already: false,
            team_member: "",
            textarea_arr: [],
            team: [],
            Ateam: [],
            Bteam: []
        }
    },
    methods: {
        changelist(){
            this.textarea_arr = this.textarea_txt.split(',')
            // console.log(this.textarea_arr)
            this.textarea_arr.sort(() => {
                return Math.random() > 0.5 ? -1 : 1;
            })
            // console.log(this.textarea_arr)
            let num = 2;
            this.team = [];
            for(let i = 0; i < num; i++){
                this.team.push([])
            }
            let z = 0;
            while(this.textarea_arr.length !== 0){
                for(let i = 0; i < num; i++){
                    this.team[i][z] = this.textarea_arr.pop();
                }
                ++z;
            }
            console.log(this.team)
            this.already = true
            this.Ateam = this.team[0].join(', ')
            this.Bteam = this.team[1].join(', ')
        }
    },
    computed: {
        textarea_txt(){
            return this.team_member.replace(/\r/ig, '').replace(/\n/ig, ',')
        }
    }
}
</script>

<style lang="scss" scoped>
main{
    display: flex;
    flex-direction: column;

    h1{
        text-align: center;
        margin-bottom: 20px;
    }

    textarea{
        background-color: black;
        color: white;
        padding: 10px;
        border-radius: 10px;
        border: 1px solid white;
    }

    button{
        background-color: black;
        color: white;
        width: 150px;
        align-self: center;
        margin: 20px 0 20px 0;
        padding: 10px;
        border-radius: 10px;
    }

    .team_container{
        display: flex;
        justify-content: space-around;

        .team{
            width: 350px;
            text-align: center;
            border: 1px solid white;
            padding: 10px;
        }
    }
}
</style>