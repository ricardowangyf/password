<template>
  <!-- 菜单列表 -->
  <div class="header-main">
    <div class="header scorall">
      <div class="center padding">
        <div class="all-item">
          <div class="item itemcenter">
            <router-link to="/list/items" style="border-radius: 5px">
              <li class="dispalay">
                <img src="../assets/imgs/items.svg" class="icon"  style="padding-top: 2px;"/>
                <h1 class="itemname fontsize" style="width: 75%">All items</h1>
                <span class="number" style="padding-right: 10px">{{state. allNum}}</span>
              </li>
            </router-link>
            <router-link to="/list/favorites" style="border-radius: 5px">
              <li class="dispalay">
                <img src="../assets/imgs/favourites.svg" class="icon" />
                <h1 class="itemname fontsize" style="width: 75%">favorites</h1>
                <span class="number" style="padding-right: 10px">{{ state.favoritesNum}}</span>
              </li>
            </router-link>
            <router-link to="/list/trash" style="border-radius: 5px">
              <li class="dispalay">
                <img src="../assets/imgs/trash.svg" class="icon" />
                <h1 class="itemname fontsize" style="width: 75%">Trash</h1>
                <span class="number" style="padding-right: 10px">{{state. trashNum}}</span>
              </li>
            </router-link>
          </div>
          <div class="itemtwo">
            <span class="type">Type</span>
            <div class="itemtype">
              <div class="typetop">
                  <router-link
                    to="/list/login"
                    class="flexstart trash"
                    style="border-radius: 5px"
                  >
                    <img src="../assets/imgs/login.svg" class="icon-login" />
                    <h1 class="itemstypename">Login</h1>
                  </router-link>
                  <router-link
                    to="/list/card"
                    class="flexstart trash"
                    style="border-radius: 5px"
                  >
                    <img src="../assets/imgs/card.svg" class="icon-login" />
                    <h1 class="itemstypename">Card</h1>
                  </router-link>
                  <router-link
                    to="/list/identity"
                    class="flexstart trash"
                    style="border-radius: 5px"
                  >
                    <img src="../assets/imgs/indetity.svg" class="icon-login" />
                    <h1 class="itemstypename">Identity</h1>
                  </router-link>
                  <router-link
                    to="/list/securenote"
                    class="flexstart trash"
                    style="border-radius: 5px"
                  >
                    <img
                      src="../assets/imgs/securenote.svg"
                      class="icon-login"
                    />
                    <h1 class="itemstypename">Secure Note</h1>
                  </router-link>
              </div>
            </div>
          </div>
          <div class="itemtwo">
            <span class="type">Folders</span>
            <div class="itemtype">
              <div class="typetop">
                  <router-link
                    to="/list/work"
                    class="flexstart trash"
                    style="border-radius: 5px"
                  >
                    <img src="../assets/imgs/work.svg" class="icon-login" />
                    <h1 class="itemstypename">Work</h1>
                  </router-link>
                  <router-link
                    to="/list/social"
                    class="flexstart trash"
                    style="border-radius: 5px"
                  >
                    <img src="../assets/imgs/work.svg" class="icon-login" />
                    <h1 class="itemstypename">Social</h1>
                  </router-link>
                  <router-link
                    to="/list/personal"
                    class="flexstart trash"
                    style="border-radius: 5px"
                  >
                    <img src="../assets/imgs/work.svg" class="icon-login" />
                    <h1 class="itemstypename">Personal</h1>
                  </router-link>
              </div>
            </div>
          </div>
        </div>
        <div class="footer">
          <li class="newfolder neirong">
            <img src="../assets/imgs/newfolder.svg" class="icon" />
            <span class="folder">NewFolder</span>
          </li>
        </div>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
import { reactive } from 'vue'
import { reqCategoryList } from "../API/index";

export default {
  name: "LeftList",
  setup () {
    const state = reactive({ 
      //数据
      allNum: 0,
      favoritesNum: 0,
      trashNum: 0,
    })
    return { 
      state
    }
  },
  mounted() {
    reqCategoryList().then((data) => {
      var allNum = data.data.length || 0;
      var favoritesNum = 0;
      var trashNum = 0;
      data.data &&
        data.data.length > 0 &&
        data.data.forEach((item) => {
          if (item.deleteAt) {
            trashNum = trashNum + 1;
          }
          if (item.favorties) {
            favoritesNum += 1;
          }
        });
      this.state.allNum = allNum;
      this.state.favoritesNum = favoritesNum;
      this.state.trashNum = trashNum;
      console.log("---data.data--->", data.data);
    });
  },
};
</script>

<style>
@import url(../assets/css/leftlist.css);
</style>