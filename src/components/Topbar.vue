  <template>

  <div id="topbar" v-if="editorShow">
    <div class="wrapper">
      <span class="logo">Resumer</span>

      <div class="actions">
        <div v-if="logined" class="userActions">
           <span class="welcome">你好，{{user.username}}</span>
           <a class="button" href="#" @click.prevent="signOut">登出</a>
         </div>
         <div v-else class="userActions">
           <a class="button primary" href="#" @click.prevent="signUpDialogVisible = true">注册</a>
           <a class="button" href="#" @click.prevent="signInDialogVisible= true">登录</a>
         </div>

        <button class="button yulan" @click="preview">预览</button>

      </div>
    </div>

    <MyDialog class="modal" title="注册" :visible="signUpDialogVisible" 
      @close="signUpDialogVisible = false">
      <SignUpForm @success="signIn($event)"/>
    </MyDialog>
    <MyDialog class="modal" title="登录" :visible="signInDialogVisible"
      @close="signInDialogVisible = false">
      <SignInForm @success="signIn($event)"/>
    </MyDialog>

  </div>

</template>






<script>
import MyDialog from './MyDialog'
import SignUpForm from './SignUpForm'
import SignInForm from './SignInForm'
import AV from '../lib/leancloud'
  export default {
    name: 'Topbar',
    data(){
      return {
        signUpDialogVisible: false,
        signInDialogVisible: false,
      }
    },
    computed: {
     user(){
       return this.$store.state.user
     },
     logined() {
      return this.user.id
     },
     editorShow(){
          return this.$store.state.editorShow
        }
   },
    components: {
       MyDialog, 
       SignUpForm,
       SignInForm
    },
   methods: {
      signOut() {
        AV.User.logOut()
        this.$store.commit('removeUser')
      },
     signIn(user) {
       this.signUpDialogVisible = false
       this.signInDialogVisible = false
       this.$store.commit('setUser', user)
     },
     preview(){
        this.$store.commit('PreviewResumerHide')
      }
    }
  }
</script>





<style lang="scss">

  #topbar{
    background:powderblue;
    box-shadow:0 1px 3px 0 rgba(0,0,0,0.25);

    >.wrapper{
      min-width: 1024px;
      max-width: 1440px;
      margin: 0 auto;
      height:64px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 16px;
    }

    .logo{
      font-size:24px;
      color:#000000;
    }

    .button{ 
      width:72px;
      height:32px;
      border: none;
      cursor: pointer;
      font-size: 18px; 
      background:white;
      color: #222;
      text-decoration: none;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      vertical-align: middle;
      border-radius: 5px;
      &:hover{
        box-shadow: 0 1px 5px hsla(0, 0, 0, 0.50);
      }
      &.primary{
        background:mediumaquamarine;
        color: white;
      }
    }
    .yulan {
      background: lemonchiffon;
    }
     .actions{
     display: flex;
     .userActions{
       margin-right: 3em;
       .welcome {
        margin-right: .5em;
       }
     }
   }
   .dialog {
    border-radius: 10px;
        header{
          background:powderblue;
          border-radius: 10px 10px 0 0;
        }
        main {
          border-top: solid #ddd;
          .row {
            padding: 10px;
          }
          label {
            display: inline-block;
            width: 60px;
            font-weight: 700;
          }
          input[type] {
            border-radius: 5px;
          }
        .actions {
            margin-top: 5px;
          text-align: center;
          input[type=submit]{
            display: block;
            padding: 2px 5px;
            border-radius: 5px;
            cursor: pointer;
            color:#000;
            background:mediumaquamarine;
            margin: auto;
            &:hover {
              box-shadow: 0 1px 5px hsla(0, 0, 0, 0.50);
            }
          }
          .errorMessage,
           span{
            text-shadow: 0 1px 5px hsla(255, 0, 0, 0.5);
            padding:5px 10px 0 0 ;
          }
        }
      }
   }
  }

 
</style>
