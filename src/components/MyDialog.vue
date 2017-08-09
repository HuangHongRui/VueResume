<template>
  <div class="dialogWrapper" v-show="visible">

    <div class="dialog">
      <header><span class="info">{{title}}</span>
        <span class="close" @click="close">关闭</span>
      </header>
      <main>
        <slot></slot>
      </main>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'MyDialog',
    props: ['title', 'visible'],
    methods: {
      close(){
        this.$emit('close')
      }
    }
  }
</script>

<style scoped lang="scss">
  .dialogWrapper{
    position: fixed;
    background: hsla(0, 0%,0%,0.25);
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .dialog{
    background: white;
    min-height: 4em;
    min-width: 10em;
    border-radius: 5px;
    > header{
      padding: 16px;
      display: flex;
      justify-content: space-between;
      .info {
      line-height: 30px;
      vertical-align: center;
      }
    }
    > main{
      padding: 16px;
    }
    
    .close {
        cursor: pointer;
        line-height: 25px;
        opacity: 0.7;
        &:hover {
          text-shadow: 0 1px 5px hsla(255, 0, 0, 0.50);
        }
      }
  }
</style>
