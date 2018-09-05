<template>
    <div class="main-login">
        <div class="mask"></div>
        <div class="login-container">
            <div>
                <input type="text">
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .main-login{
        width: 100%;
        height: 100%;
        background: no-repeat center/cover url("https://images.unsplash.com/photo-1508474722893-c3ccb8918d39?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=37e9272050015f9b1937daea5c2e4ff9&auto=format&fit=crop&w=500&q=60")
    }
    .mask{
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 1;
        background-color: #999;
        filter: blur(160px)
    }
    .login-container{
        display: flex;
        position: relative;
        width: 100%;
        height: 100%;
        z-index: 2;
    }
</style>
