<template>
    <div class="main" ref="main">
            <p>大家好大家好大家好</p>
            <p>大家好大家好大家好</p>
            <p>大家好大家好大家好</p>
            <p>大家好大家好大家好</p>
            <p>大家好大家好大家好</p>
            <input type="text" @focus="iFocus" @blur="iBlur">
     
            <p>最uii欧安聪傲</p>
      

        <div class="u-b" ref="b">
            but
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            iFocus() {
                // alert(0)
                const t = this.$refs.b
                t.style = 'position: relative'

                this.$refs.main.style.overflow = "hidden";
                

            },
            iBlur() {
                const t = this.$refs.b
                t.style = 'position: fixed'
            }
        }
    }
</script>

<style scoped type="text/css" lang="scss">
    .main{
        padding-bottom: 50px;
    }
    .content{
        position: fixed;
        top:0;
        bottom: 50px;
        width: 100%;
        overflow-y: scroll; 
        background-color: pink;
         -webkit-overflow-scrolling: touch;   /*这句是为了滑动更顺畅*/  
    }
    .u-b{
        position: fixed;  
        bottom: 0;  
        width: 100%;
        height: 50px;  
        background-color:red;
    }
</style>