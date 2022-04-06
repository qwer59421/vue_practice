<template>
    <nav class="container">
        <div class="nav_container">
            <!-- v-show 會是display none的狀態並且v-show 沒有v-else可用 -->
            <!-- v-if 則是不會出現 -->
            <div class="title_container">
                <router-link class="title" :to="{name: 'Home'}">練習用</router-link>
            </div>
            <div class="nav-links">
                <ul v-show="!mobile">
                    <li class="onelink">
                        <router-link class="link" :to="{name: 'Home'}">首頁</router-link>
                    </li>
                    <li class="links">API練習
                        <ul class="links_title">
                            <li class="link_container">
                                <router-link class="link" :to="{name: 'SearchApi'}">輸入搜尋</router-link>
                            </li>
                            <li class="link_container">
                                <router-link class="link" :to="{name: 'ClickApi'}">點擊更動</router-link>
                            </li>
                        </ul>
                    </li>
                    <!-- <li class="onelink">
                        <router-link class="link" :to="{name: 'Home'}">其它</router-link>
                    </li>
                    <li class="onelink">
                        <router-link class="link" :to="{name: 'Home'}">其它</router-link>
                    </li> -->
                </ul>
            </div>
            <div v-show="mobile" class="burger"></div>
        </div>
    </nav>
</template>

<script>
export default {
    name: "Nav",
    data(){
        return{
            windowWidth: null,
            mobile: false,
        }
    },
    mounted(){
        window.addEventListener("resize", this.checkscreen);
        this.checkscreen;
    },
    methods: {
        checkscreen(){
            this.windowWidth = window.innerWidth;
            if(this.windowWidth <= 750){
                return this.mobile = true;
            }else{
                return this.mobile = false;
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.container{
    // box-shadow: 0 4px 6px -1px rgb(0 0 0 / 10%), 0 2px 4px -1px rgb(0 0 0 / 6%);
    background-color: black;

    .nav_container{
        height: 80px;
        max-width: 1440px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        

        .title_container{
            display: flex;

            .title{
                text-decoration: none;
                color: white;
                font-size: 24px;
            }
        }

        .nav-links{
            height: 100%;
            display: flex;
            align-items: center;

            ul{
                display: flex;
                justify-content: space-between;
                height: 100%;
                align-items: center;

                .onelink{
                    list-style: none;
                    width: 100px;
                    display: flex;
                    justify-content: center;

                    .link{
                        text-decoration: none;
                        color: white;
                        padding: 0 20px;
                        font-size: 16px;
                        position: relative;
                        &:hover::after{
                            right: 0%;
                            left: 0%;
                        }
                    }

                    .link::after{
                        content: "";
                        position: absolute;
                        right: 50%;
                        left: 50%;
                        bottom: -7px;
                        border-bottom: 2px solid yellow;
                        transition: .3s;
                    }
                }

                .links{
                    height: 100%;
                    line-height: 80px;
                    list-style: none;
                    width: 120px;
                    text-align: center;
                    position: relative;

                    &:hover .links_title{
                        display: flex;
                    }

                    .links_title{
                        line-height: 20px;
                        width: 120px;
                        display: none;
                        justify-content: center;
                        align-items: center;
                        position: absolute;;
                        top: 80px;
                        flex-direction: column;
                        list-style: none;
                        cursor: pointer;

                        .link_container{
                            // position: relative;
                            padding: 15px 0;
                            background-color: black;
                            z-index: 999;
                            // box-shadow: 0 4px 6px -1px rgb(0 0 0 / 10%), 0 2px 4px -1px rgb(0 0 0 / 6%);

                            .link{
                                text-decoration: none;
                                height: 40px;
                                color: white;
                                position: relative;
                                font-size: 16px;
                                // display: flex;
                                padding: 0 10px;
                                margin: 0 10px;

                                &:hover::after{
                                    right: 5%;
                                    left: 5%;
                                }
                            }

                            .link::after{
                                content: "";
                                position: absolute;
                                right: 50%;
                                left: 50%;
                                bottom: -7px;
                                border-bottom: 2px solid yellow;
                                transition: .3s;
                            }
                        }

                    }
                    
                }
            }
        }
        
        .burger, .burger:before, .burger:after{
            cursor: pointer;
            height: 4px;
            width: 30px;
            background-color: black;
            content: "";
            position: absolute;
            top: 5%
        }

        .burger:before{
            top: -8px;

        }
        .burger:after{
            top: 8px;
        }
    }
}

</style>