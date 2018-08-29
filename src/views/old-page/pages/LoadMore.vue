<template>
    <div>
        <Loadmore
            ref="loadmore"
            :top-method="loadTop" 
            :topDistance="20"
        >
            <ul>
                <li v-for="(item, index) in list" :key="index">{{ item }}</li>
            </ul>
        </Loadmore>        
    </div>
</template>

<script>
    import { Loadmore } from 'mint-ui'

    export default {
        components: {
            Loadmore
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
