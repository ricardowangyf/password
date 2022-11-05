<template>
  <!-- 详情页 -->
  <div class="wrap-right">
    <div class="max-width">
      <div class="header-right">
        <div class="btnall">
          <button v-if="!isSave" class="edit" @click="onClickEditBtn">
            <img src="../assets/imgs/edit.svg" class="icon" />
            <span class="name">Edit</span>
          </button>
          <button v-else class="edit" @click="save">
            <img src="../assets/imgs/save.svg" class="icon" />
            <span class="name">Save</span>
          </button>
          <button v-if="isNone" @click="cancel()">
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
              <input :disabled="!isSave" v-model="details.name" class="name" />
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
              :disabled="!isSave"
            />
          </div>
          <div class="web">
            <input class="email" v-model="details.email" :disabled="!isSave" />
          </div>

          <div class="username">
            <div class="color">
              <div class="word">
                <h1 class="password">Password</h1>
              </div>
              <div class="clear" />
              <form>
                <input
                  :disabled="!isSave"
                  v-model="details.password"
                  :type="pwdFlag ? 'password' : 'text'"
                  size="10"
                  id="input"
                  class="margintop"
                  autoComplete="“false”"
                />
              </form>
              <img
                :src="pwdFlag ? textIcon : pwdIcon"
                @click="changePwd"
                class="shouandhide"
              />
              <img
                src="../assets/imgs/copy.svg"
                @click="copyToClip"
                class="copybtn"
              />
            </div>
          </div>
          <div class="bottom-horizontalline">
            <div class="detaliwebsite">
              <span>Website</span>
            </div>
            <input
              :value="details.website"
              class="detaliweb"
              :disabled="!isSave"
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
  </div>
</template>
<script>
import { details, save } from "../API/index";

export default {
  data() {
    return {
      details: {},
      isSave: false,
      isNone: false,
      password: "",
      pwdFlag: true, //密码标示 true表示当前是密码形式
      textIcon: "https://www.hualigs.cn/image/6363de49186e1.jpg", //展示图标
      pwdIcon: "https://www.hualigs.cn/image/6363de00504c4.jpg", //隐藏图标
    };
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
          this.details = data.data;
          console.log("--this.details-->", this.details);
        });
    },

    //显示隐藏
    changePwd() {
      this.pwdFlag = !this.pwdFlag;
    },
    //编辑
    onClickEditBtn() {
      if (!this.isSave) {
        this.isSave = true;
      }
      if (!this.isNone) {
        this.isNone = true;
      }
      // console.log('-------->', this.tableData)
    },
    //一键复制
    copyToClip() {
      var passwordaaa = this.details.password;
      var input = document.getElementById("input");
      input.value = passwordaaa; // 要复制的文本框的内容（此处是后端返回的内容）
      input.select(); // 选中文本
    },
    //保存
    save() {
      save({ ...this.detali }).then((data) => {
        if (data.data && data.data.code === 1) {
          (this.isSave = false), (this.isNone = false);
          alert("保存成功");
        }
        console.log("----->", data);
      });
    },
    //取消
    cancel() {
      if (this.isSave) {
        this.isSave = false;
      }
      if (this.isNone) {
        this.isNone = false;
        alert("取消编辑");
      }
    },
    //删除
    // delete(){}
    Delete() {},
  },
};
</script>

<style>
img {
  width: 45px;
  height: 45px;
}

.wrap-right {
  background-color: rgb(15, 15, 15);
  width: calc(100% - 325px);
}

.clear {
  clear: both;
}

.wrap-right {
  overflow-y: auto;
  height: 100vh;
}

.btnall {
  display: flex;
  justify-content: flex-end;
}

.wrap-right .btnall .edit {
  background-color: rgb(47 44 44);
  width: 85px;
  height: 30px;
  border-radius: 5px;
}

.wrap-right .btnall .edit .icon {
  position: relative;
  bottom: 0px;
  right: 13px;
}

.wrap-right .btnall .edit .icon {
  width: 20px;
  height: 20px;
}

.wrap-right .btnall .delete {
  background-color: rgb(47 44 44);
  width: 90px;
  height: 30px;
  border-radius: 5px;
}

.wrap-right .btnall .delete .icon {
  position: relative;
  top: 4px;
  right: 1px;
  width: 20px;
  height: 20px;
}

.wrap-right .btnall .save .name {
  color: #fff;
  font-size: 15px;
  position: relative;
  right: 0px;
  bottom: 4px;
}

.edit .name {
  position: relative;
  bottom: 4px;
  color: #fff;
}

.quxiao {
  color: #fff;
}

.wrap-right .btnall .save .icon {
  position: relative;
  bottom: 0px;
  right: 13px;
  width: 20px;
  height: 20px;
}

.wrap-right .btnall .save {
  background-color: rgb(47 44 44);
  width: 85px;
  height: 30px;
  border-radius: 5px;
}

.wrap-right .btnall .delete .name {
  color: #fff;
  font-size: 15px;
  position: relative;
  padding-left: 9px;
}

.namelogin .logicn {
  color: rgb(131, 131, 131);
  font-size: 13px;
}

.title-name .name {
  background-color: rgb(15, 15, 15);
  border-radius: 4px;
  border: none;
  color: #fff;
  height: 25px;
  width: 100%;
  margin: 0;
  font-size: 24px;
}

.main-max {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.main {
  padding: 20px 0 20px 0;
}

.detaliwebsite {
  font-size: 12px;
  color: #686868;
}

.bottom-horizontalline {
  padding-bottom: 20px;
  border-bottom: 2px solid #3a3132db;
}

.duanluo {
  padding-top: 20px;
}

.username {
  padding-bottom: 10px;
}

.special {
  color: #fff;
}

.private p {
  color: #fff;
}

.private span {
  color: #fff;
}

.max-width {
  width: 380px;
  margin: 0 auto;
}

.main-center {
  padding-top: 25px;
}

.max-width button {
  padding: 0;
  margin: 0;
  border: none;
  margin-left: 15px;
  border-radius: 5px;
  background-color: rgb(47 44 44);
}

.imag {
  width: 30px;
  height: 30px;
}

.imag {
  position: relative;
  top: 8px;
  left: 9px;
}

.xxx {
  background-color: rgb(15, 15, 15);
  border-radius: 4px;
  border: none;
  color: #686868;
  height: 25px;
  width: 100%;
  font-size: 15px;
}

.detaliweb {
  background-color: rgb(15, 15, 15);
  border-radius: 4px;
  border: none;
  color: #fff;
  height: 25px;
  width: 100%;
  font-size: 17px;
}

.bottom .duanluo .great p {
  color: #fff;
  font-size: 14px;
}

.png {
  width: 20px;
  height: 20px;
}

.dataliweb {
  background-color: #404040;
  border-radius: 4px;
  border: none;
  box-sizing: border-box;
  color: #fff;
  height: 32px;
  outline: 0;
  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  width: 20%;
  padding-left: 15px;
}

.word {
  float: left;
  font-size: 23px;
}

.word {
  position: relative;
  width: 81px;
  top: 28px;
}

.margintop {
  padding-left: 11px;
  padding-top: 20px;
}

.margintop {
  background-color: #404040;
  border-radius: 4px;
  border: none;
  box-sizing: border-box;
  color: #fff;
  height: 60px;
  outline: 0;
  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  width: 100%;
}

.password {
  margin: 0;
  font-size: 13px;
  padding-left: 10px;
  color: #686868;
}

.position {
  position: relative;
  top: 5px;
}

.username {
  width: 100%;
  height: 80px;
}

.color {
  width: 100%;
  height: 80px;
}

.email {
  background-color: rgb(15, 15, 15);
  border-radius: 4px;
  font-size: 15px;
  border: none;
  color: #fff;
  font-size: 15px;
}

.email {
  height: 25px;
  width: 100%;
}

.shouandhide {
  width: 15px;
  height: 15px;
}

.shouandhide {
  position: relative;
  bottom: 40px;
  left: 320px;
}

.copybtn {
  position: relative;
  bottom: 40px;
  left: 330px;
}

.copybtn {
  width: 15px;
  height: 15px;
}

.cancela .name {
  color: #fff;
  font-size: 13px;
}

.cancela .name {
  position: relative;
  top: 2px;
}

.cancel {
  width: 20px;
  height: 18px;
}

.cancel {
  position: relative;
  top: 6px;
}

.cancela {
  background-color: rgb(47 44 44);
  border-radius: 5px;
}

.cancela {
  width: 78px;
  height: 30px;
}
</style>