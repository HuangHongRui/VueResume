<template>

  <div v-if="editorShow" id="resumeEditor">
    <nav>
      <ol>
        <li v-for="(item,index) in resume.config" :class="{active: item.field === selected}" @click="selected = item.field">
          <svg class="icon">
            <use :xlink:href="`#icon-${item.icon}`"></use>    
          </svg>
        </li>
      </ol>
    </nav>

    <ol class="panels">
      <li v-for="item in resume.config" v-show="item.field === selected">


        <div v-if="resume[item.field] instanceof Array">
          <!-- <div class="subitem" v-for="subitem in resume[item.field]"> -->
          <div class="subitem" v-for="(subitem, i) in resume[item.field]">
            <div class="resumeField" v-for="(value,key) in subitem">
              <label> {{key}} </label>
              <input type="text" :value="value" @input="changeResumeField(`${item.field}.${i}.${key}`, $event.target.value)">
            </div>
            <hr>
          </div>
        </div>
        <div v-else class="resumeField" v-for="(value,key) in resume[item.field]">

          <label> {{key}} </label>
          <!-- <input type="text" v-model="resume[item.field][key]"> -->
          <!-- <input type="text" v-bind:value="value" v-on:input="changeResumeField(item.field, key, $event.target.value)"> -->
          <input type="text" :value="value" @input="changeResumeField(`${item.field}.${key}`, $event.target.value)">
        </div>
      </li>
    </ol>
  </div>

</template>


<script>

  export default {
    name: 'ResumeEditor',
    computed: {
      selected: {
        get() {
          return this.$store.state.selected
        },
        set(value) {
          return this.$store.commit('switchTab', value)
        }
      },
      resume () {
        return this.$store.state.resume
      },
      editorShow(){
          return this.$store.state.editorShow
        }
    },
    methods: {
      changeResumeField(path, value){
         this.$store.commit('updateResume',{
           path,
           value
         })
       }
    }
  }

</script>



<style lang="scss" scoped>

  #resumeEditor{
    background:white;
    box-shadow:0 1px 3px 0 rgba(0,0,0,0.25);
    display: flex;
    flex-direction: row;
    overflow: auto;
    min-width: 35%;
    border-radius: 16px;
    > nav{
      width: 80px;
      background: powderblue;
      color: white;
      > ol {
        > li{
          height: 48px;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 16px;
          margin-bottom: 16px;
          &.active{
            background: white;
            color: black;
          }
          svg.icon{
            width: 24px; 
            height: 24px;
          }
        }
      }
    }

    > .panels{
      flex-grow: 1;

      > li {
        padding: 24px;

        .resumeField{
          > label{
            display: block;
          }
          input[type=text]{
            margin: 16px 0;
            border: 1px solid #ddd;
            box-shadow:inset 0 1px 3px 0 rgba(0,0,0,0.25);
            width: 100%;
            height: 40px;
            padding: 0 8px;
          }
        }
      }
    }
    hr{
      border: none;
      border-top: 1px solid #ddd;
      margin: 24px 0;
    }
  }
  ol{
    list-style: none;
  }

</style>
