<template>
    <div>
        <h2>geolocation</h2>
        <p v-text="geolocation"></p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                geolocation: ''
            }
        },

        mounted() {
            if (navigator.geolocation){
                navigator.geolocation.getCurrentPosition((position) => {
                    this.geolocation = `latitude:${position.coords.latitude},longitude:${position.coords.longitude}`
                }, (err) => {
                    console.log(err);
                }, {
                        enableHighAccuracy: true, 
                        maximumAge        : 30000,  // buffer memory timre
                        timeout           : 27000   // waiting time 
                })
            } else {
                alert('geolocation not supported!')
            }
        }
    }
</script>

<style scoped>
</style>