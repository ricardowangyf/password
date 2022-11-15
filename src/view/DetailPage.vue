<template>
  <!-- 详情页 -->
  <div class="details-head">
    <div class="max-width">
      <div class="header-right">
        <div class="btnall">
          <button v-if="!state.savenow" class="edit" @click="edit">
            <img src="../assets/imgs/edit.svg" class="icon" style="position: relative; right: 9px; top: 1px;"/>
            <span class="name" >Edit</span>
          </button>
          <button v-else class="edit" @click="save">
            <img src="../assets/imgs/save.svg" class="icon" />
            <span class="name">Save</span>
          </button>
          <button v-if="this.state.nonenow" @click="cancel()">
            <div class="cancela">
              <img src="../assets/imgs/cancel.svg" class="cancel" />
              <span class="name cancel-name"> Cancel</span>
            </div>
          </button>
          <button @click="Delete()">
            <div class="delete">
              <img src="../assets/imgs/delete.svg" class="icon" />
              <span class="name" style="bottom: 0px;">Delete</span>
            </div>
          </button>
        </div>
        <div class="main-center">
          <div class="main-max">
            <div class="password-left position">
              <img
                :src="state.details.imgrul"
                class="img"
                style="border-radius: 5px"
              />
            </div>
            <div class="title-name">
              <input :disabled="!state.details.savenow" v-model="state.details.name" class="name" />
              <div class="namelogin">
                <span class="logicn">login</span>
              </div>
            </div>
            <div class="collection">
              <!-- <img
                  v-if="detali.favorties" 
                  @click="changeImg = true"
                  :src="getSrc()"
                  style="width: 27px; height: 27px"
                /> -->
              <img
                v-if="state.details.favorties"
                @click="changeImg = true"
                src="../assets/imgs/收藏.svg"
                style="width: 27px; height: 27px"
              />
              <img
                v-if="!state.details.favorties"
                @click="changeImg = true"
                src="../assets/imgs/未收藏.svg"
                style="width: 27px; height: 27px"
              />
            </div>
          </div>
        </div>
        <div class="main">
          <div class="third">
            <input
              class="website xxx"
              :value="state.details.username"
              :disabled="!state.details.savenow"
            />
          </div>
          <div class="web">
            <input class="email" v-model="state.details.email" :disabled="!state.details.savenow" />
          </div>

          <div class="username">
            <div class="color">
              <div class="word">
                <h1 class="password">Password</h1>
              </div>
              <div class="clear" />
              <form>
                <input
                  :disabled="!state.details.savenow"
                  v-model="state.details.password"
                  :type="state.pwdFlag ? 'password' : 'text'"
                  size="10"
                  class="margintop"
                  autoComplete="false"
                />
              </form>
              <img
                :src="state.pwdFlag ? state.textIcon : state.eyesicon"
                @click="changePwd"
                class="shouandhide"
              />
              <img
                src="../assets/imgs/copy.svg"
                @click="copy"
                class="copybtn"
              />
            </div>
          </div>
          <div class="detaliwebsite">
              <span>Website</span>
              </div>
            <input
              :value="state.details.website"
              class="detaliweb"
              :disabled="!state.details.savenow"
            />
          </div>
          <div class="asdasdergrg">
            <div class="bottom">
              <div class="duanluo">
                <div class="xxx">
                  <span class="aaaaa">Notes</span>
                </div>
                <div class="great">
                  <p id="demo">
                    {{ state.details.paragraph }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
import { details, save } from "../API/index";
import { reactive } from 'vue'
export default {
  setup () {
    const state = reactive({ //数据
      details: {},
      savenow: false,
      nonenow: false,
      password: "",
      pwdFlag: true, //密码标示 true表示当前是密码形式
      textIcon: "https://www.hualigs.cn/image/6363de49186e1.jpg", //展示图标
      eyesicon: "https://www.hualigs.cn/image/6363de00504c4.jpg", //隐藏图标
    })
    return { 
      state
    }
  },
  watch: {
    $route: {
      handler(newVal) {
        console.log("----newVal---->", newVal);
        newVal && this.getdetail();
      },
    },
  },
  mounted() {
    this.getdetail();
  },
  methods: {
    getdetail() {
      const name = this.$route.params && this.$route.params.name;
      name &&
        details({ name }).then((data) => {
          this.state.details = data.data;
          console.log("--this.details-->", this.state.details);
        });
    },
    //显示隐藏
    changePwd() {
      this.state.pwdFlag = !this.state.pwdFlag;
    },
    //编辑
    edit() {
      if (!this.state.savenow) {
        this.state.savenow = true;
      }
      if (!this.state.nonenow) {
        this.state.nonenow = true;
      }
    },
    //一键复制
    copy() {
      var password = this.state.details.password;
      var input = document.getElementById("input");
      input.value = password; // 要复制的文本框的内容（此处是后端返回的内容）
      input.select(); // 选中文本
      console.log("-------->", input);
    },
    //保存
    save() {
      save({ ...this.state.detali }).then((data) => {
        if (data.data && data.data.code === 1) {
          (this.state.savenow = false), (this.state.nonenow = false);
          alert("保存成功");
        }
        console.log("----->", data);
      });
    },
    //取消
    cancel() {
      if (this.state.savenow) {
        this.state.savenow = false;
      }
      if (this.state.nonenow) {
        this.state.nonenow = false;
        alert("取消编辑");
      }
    },
    //删除
    Delete() {},
  },
};
</script>

<style>
@import url(../assets/css/DetailPage.css);
</style>