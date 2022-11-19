<template>
  <!-- 详情页 -->
  <div class="details-head">
    <div class="max-width">
      <div class="header-right">
        <div class="btnall">
          <button v-if="!savenow" class="edit" @click="edit">
            <img src="../assets/imgs/edit.svg" class="icon" />
            <span class="name">Edit</span>
          </button>
          <button v-else class="edit" @click="save">
            <img src="../assets/imgs/save.svg" class="icon" />
            <span class="name">Save</span>
          </button>
          <button v-if="nonenow" @click="cancel()">
            <div class="cancela">
              <img src="../assets/imgs/cancel.svg" class="cancel" />
              <span class="name cancel-name"> Cancel</span>
            </div>
          </button>
          <button @click="Delete()">
            <div class="delete">
              <img src="../assets/imgs/delete.svg" class="icon" />
              <span class="name">Delete</span>
            </div>
          </button>
        </div>
        <div class="main-center">
          <div class="main-max">
            <div class="password-left position">
              <img
                :src="details.imgrul"
                class="img"
                style="border-radius: 5px"
              />
            </div>
            <div class="title-name">
              <input :disabled="!savenow" v-model="details.name" class="name" />
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
                v-if="details.favorties"
                @click="changeImg = true"
                src="../assets/imgs/收藏.svg"
                style="width: 27px; height: 27px"
              />
              <img
                v-if="!details.favorties"
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
              :value="details.username"
              :disabled="!savenow"
            />
          </div>
          <div class="web">
            <input class="email" v-model="details.email" :disabled="!savenow" />
          </div>

          <div class="username">
            <div class="color">
              <div class="word">
                <h1 class="password">Password</h1>
              </div>
              <div class="clear" />
              <form>
                <input
                  :disabled="!savenow"
                  v-model="details.password"
                  :type="pwdFlag ? 'password' : 'text'"
                  size="10"
                  id="input"
                  class="margintop"
                  autoComplete="“false”"
                />
              </form>
              <img
                :src="pwdFlag ? textIcon : eyesicon"
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
          <div class="detaliwebsite bottom-horizontalline">
              <span>Website</span>
              </div>
            <input
              :value="details.website"
              class="detaliweb"
              :disabled="!savenow"
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
                    {{ details.paragraph }}
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

export default {
  data() {
    return {
      details: {},
      savenow: false,
      nonenow: false,
      password: "",
      pwdFlag: true, //密码标示 true表示当前是密码形式
      textIcon: "https://www.hualigs.cn/image/6363de49186e1.jpg", //展示图标
      eyesicon: "https://www.hualigs.cn/image/6363de00504c4.jpg", //隐藏图标
    };
  },
  watch: {
    $route: {
      handler(newVal) {
        console.log("newVal", newVal);
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
          this.details = data.data;
          console.log("this.details", this.details);
        });
    },
    //显示隐藏
    changePwd() {
      this.pwdFlag = !this.pwdFlag;
    },
    //编辑
    edit() {
      if (!this.savenow) {
        this.savenow = true;
      }
      if (!this.nonenow) {
        this.nonenow = true;
      }
    },
    //一键复制
    copy() {
      var password = this.details.password;
      var input = document.getElementById("input");
      input.value = password; // 要复制的文本框的内容（此处是后端返回的内容）
      input.select(); // 选中文本
      console.log("input", input);
    },
    //保存
    save() {
      save({ ...this.detali }).then((data) => {
        if (data.data && data.data.code === 1) {
          (this.savenow = false), (this.nonenow = false);
          alert("保存成功");
        }
        console.log("data", data);
      });
    },
    //取消
    cancel() {
      if (this.savenow) {
        this.savenow = false;
      }
      if (this.nonenow) {
        this.nonenow = false;
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