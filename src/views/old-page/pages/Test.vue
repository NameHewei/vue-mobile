<template>
    <div>
        <div class="m-box">
            <mt-loadmore :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
                <ul>
                    <li 
                        v-for="(item, index) in list"
                        :key= "index"
                    >{{ item }}</li>
                </ul>
            </mt-loadmore>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                allLoaded: false,
                list: [333,1,2,22,2,777,8888]
            }
        },

        methods: {
            add() {
                this.arr.push(Math.random())
            },
            loadBottom() {
               this.list.push(Math.random())
            }
        }
    }
</script>

<style scoped>
    .m-box{
        position: fixed;
        top:0;
        bottom: 0;
        width: 100%;
        overflow: scroll;
    }
    li{
        height: 200px;
    }
</style>