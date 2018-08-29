<template>
  <div class="main-html-device">
    <p>HTML5 设备访问</p>
    <div class="preview">
      <p>图片预览</p>
      <input type="file" id="imageFile" accept="image/*" @change="fileChange">
      <p>createObjectURL</p>
      <img :src='url' style="width:100px"> <br/>
      <p>FileReader</p>
      <img :src='url1' style="width:100px">
    </div>
    <div class="touch-event" @touchstart="touchstart">
      <h2>touch-event</h2>
      <div>{{touchMsg}}</div>
    </div>    
  </div>
</template>
<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        s: '',
        d: '',
        url: '',
        url1: '',
        touchMsg: ''
      }
    },

    mounted() {
    
    },

    methods: {
      fileChange(e) {
        const file = e.target.files[0]
        const url = window.URL.createObjectURL(file);
        const reader = new FileReader();
        reader.onload = (e) => {
            this.url1 = e.target.result;
        };
        reader.readAsDataURL(file);
        this.url = url;
        
      },

      touchstart(e){
        this.touchMsg = e.altKey
      }
    }
  }
</script>

<style scoped>
  .main-html-device {
    position: fixed;
    top: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
    font-size: 30px;
    font-weight: 700;
    color: #fff;
    background: #df8540;
  }
  .preview{
    padding: 2px;
    margin:10px;
    border: 1px inset #dbdbdb;
  }
  .touch-event{
    padding: 2px;
    margin:10px;
    height: 300px;
    border: 1px inset #dbdbdb;
  }

</style>