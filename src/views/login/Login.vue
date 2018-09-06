<template>
    <div class="main-login">
        <div class="mask"></div>
        <div class="login-container">
            <div>
                <div class="logo">
                    <div>
                        <img src="@/assets/logo.png" alt="no">
                    </div>
                </div>
                <div
                    class="phone"
                    @click="handleGetFocus('phone')"
                >
                    <input ref="phone" type="number" placeholder="phone">
                    <span
                        @click.stop="handleGetCode"
                    >Get Code</span>
                </div>
                <div
                    class="code"
                    @click="handleGetFocus('code')"
                >
                    <input ref="code" type="number" placeholder="code">
                </div>

                <div
                    class="login-btn"
                    @click="handleGo"
                >Go</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        handleGetCode () {
            this.$ons.notification.toast('you click get code', { timeout: 1000, animation: 'fall' })
        },

        handleGetFocus (name) {
            this.$refs[name].focus()
        },

        handleGo () {
            this.$ons.notification.toast('you click go', { timeout: 1000, animation: 'fall' })
        }
    }
}
</script>

<style lang="scss" scoped>
    @import "@/style/login/login.scss";
</style>
