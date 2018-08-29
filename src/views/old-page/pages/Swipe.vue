<template>
    <div>
        <mt-swipe :auto="0" style="background-color:red;height:100px">
            <mt-swipe-item>1</mt-swipe-item>
            <mt-swipe-item>2</mt-swipe-item>
            <mt-swipe-item>3</mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>
    import { Swipe, SwipeItem } from 'mint-ui'

    export default {
        components: {
            'mt-swipe': Swipe,
            'mt-swipe-item': SwipeItem
        },

        data() {
            return {
                list: ['a', 'b', 'c']
            }
        },

        methods: {
            loadTop() {
                this.list.push(Math.random() * 10)

                this.$refs.loadmore.onTopLoaded();
            }
        }
    }
</script>

<style>

</style>
