<template>
  <div class="header-main">
    <div class="header scorall">
      <div class="center padding">
        <div class="all-item">
          <div class="item itemcenter">
            <router-link to="/list/items" class="router-link-active">
              <li class="dispalay">
                <img src="../assets/imgs/items.svg" class="icon" />
                <h1 class="itemname fontsize" style="width: 75%">All items</h1>
                <span class="number" style="padding-right: 10px">{{allNum}}</span>
              </li>
            </router-link>
            <router-link to="/list/favorites" class="router-link-active">
              <li class="dispalay">
                <img src="../assets/imgs/favourites.svg" class="icon" />
                <h1 class="itemname fontsize" style="width: 75%">favorites</h1>
                <span class="number" style="padding-right: 10px">{{allNum}}</span>
              </li>
            </router-link>
            <router-link to="/list/trash" class="router-link-active">
              <li class="dispalay">
                <img src="../assets/imgs/trash.svg" class="icon" />
                <h1 class="itemname fontsize" style="width: 75%">Trash</h1>
                <span class="number" style="padding-right: 10px">{{allNum}}</span>
              </li>
            </router-link>
          </div>
          <div class="itemtwo">
            <span class="type">Type</span>
            <div class="itemtype">
              <div class="typetop">
                <li class="name">
                  <router-link
                    to="/list/Login"
                    class="router-link-active flexstart trahs"
                  >
                    <img src="../assets/imgs/login.svg" class="icon-login" />
                    <h1 class="itemstypename">Login</h1>
                  </router-link>
                </li>
                <li class="name">
                  <router-link
                    to="/list/card"
                    class="router-link-active flexstart trahs"
                  >
                    <img src="../assets/imgs/card.svg" class="icon-login" />
                    <h1 class="itemstypename">Card</h1>
                  </router-link>
                </li>
                <li class="name">
                  <router-link
                    to="/list/Login"
                    class="router-link-active flexstart trahs"
                  >
                    <img src="../assets/imgs/indetity.svg" class="icon-login" />
                    <h1 class="itemstypename">Identity</h1>
                  </router-link>
                </li>
                <li class="name">
                  <router-link
                    to="/list/Login"
                    class="router-link-active flexstart trahs"
                  >
                    <img
                      src="../assets/imgs/securenote.svg"
                      class="icon-login"
                    />
                    <h1 class="itemstypename">Secure Note</h1>
                  </router-link>
                </li>
              </div>
            </div>
          </div>
          <div class="itemtwo">
            <span class="type">Folders</span>
            <div class="itemtype">
              <div class="typetop">
                <li class="name">
                  <router-link
                    to="/list/work"
                    class="router-link-active flexstart trahs"
                  >
                    <img src="../assets/imgs/work.svg" class="icon-login" />
                    <h1 class="itemstypename">Work</h1>
                  </router-link>
                </li>
                <li class="name">
                  <router-link
                    to="/list/card"
                    class="router-link-active flexstart trahs"
                  >
                    <img src="../assets/imgs/work.svg" class="icon-login" />
                    <h1 class="itemstypename">Social</h1>
                  </router-link>
                </li>
                <li class="name">
                  <router-link
                    to="/list/Login"
                    class="router-link-active flexstart trahs"
                  >
                    <img src="../assets/imgs/work.svg" class="icon-login" />
                    <h1 class="itemstypename">Personal</h1>
                  </router-link>
                </li>
              </div>
            </div>
          </div>
        </div>
        <div class="footer">
          <ul class="padding-floder">
            <li class="newfolder neirong">
              <img src="../assets/imgs/newfolder.svg" class="icon" />
              <span class="folder">NewFolder</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { leftlist } from "../API/index";

export default {
  data() {
    return {
      tableData: [],
    };
  },
  name: "LeftList",
  mounted() {
    leftlist().then((data) => {
      this.tableData = data.data;
      var allNum = this.tableData.length || 0;
      var favoritesNum = 0;
      var trashNum = 0;
      this.tableData &&
        this.tableData.length > 0 &&
        this.tableData.forEach((item) => {
          if (item.deleteAt) {
            trashNum = trashNum + 1;
          }
          if (item.favorties) {
            favoritesNum += 1;
          }
        });
      this.allNum = allNum;
      this.favoritesNum = favoritesNum;
      this.trashNum = trashNum;
      console.log("------------->", this.tableData);
    });
  },
};
</script>

<style>
body {
  margin: 0;
}

li {
  list-style: none;
}

.scorall::-webkit-scrollbar {
  /*滚动条整体样式*/
  width: 10px;
  /*高宽分别对应横竖滚动条的尺寸*/
  height: 1px;
}

.scorall::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/
  border-radius: 10px;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  background: #535353;
}

.scorall::-webkit-scrollbar-track {
  /*滚动条里面轨道*/
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  background: rgb(30 30 30);
}
.header-main {
  display: flex;
  height: 100%;
}

.router-link-active {
  /*点击时去掉下划线*/
  text-decoration: none;
}

.header {
  width: 240px;
  background-color: #282828;
}

.center {
  margin: 0 auto;
  max-width: 210px;
}

.padding {
  padding: 55px 0 0 0;
}

.scorall {
  height: 100vh;
  overflow-y: auto;
}

.leftrightspacing {
  margin-left: 3%;
  margin-right: 3%;
}

.display {
  display: flex;
  justify-content: space-around;
}

.itemsname {
  color: #fff;
  width: 77%;
  margin: 0;
  margin-top: 1px;
  font-size: 15px;
  padding-left: 12px;
  border-radius: 5px;
  text-decoration: none;
}

.trahs {
  display: flex;
  justify-content: space-between;
  height: 25px;
  margin-top: 3px;
}
.item {
  display: flex;
  flex-direction: column;
  gap: 7px;
}

.itemcenter {
  margin-left: 3%;
  margin-right: 3%;
}
.dispalay {
  display: flex;
  justify-content: space-between;
  height: 25px;
  margin-top: 3px;
}

.icon {
  position: relative;
  top: 2px;
  padding-left: 6px;
  width: 15px;
  height: 15px;
}

.itemname {
  color: #fff;
  width: 77%;
  margin: 0;
  margin-top: 1px;
  font-size: 15px;
  padding-left: 12px;
  border-radius: 5px;
  text-decoration: none;
}

.number {
  color: #dcdfe633;
  font-size: 13px;
  padding: 2px 15px 0px 0px;
}

.neirong {
  margin-left: 3%;
  margin-right: 3%;
}

.itemtwo {
  padding-top: 21px;
}

.type {
  color: RGB(122, 122, 122);
  font-size: 8px;
}

.typetop {
  padding-top: 6px;
}

.name {
  padding: 3px;
}

.flexstart {
  display: flex;
  justify-content: flex-start;
}

.icon-login {
  position: relative;
  top: 4px;
  left: 7px;
  width: 15px;
  height: 15px;
}

.itemstypename {
  color: #fff;
  width: 77%;
  margin: 0;
  margin-top: 1px;
  font-size: 15px;
  padding-left: 25px;
  border-radius: 5px;
  text-decoration: none;
}

.padding-floder {
  padding: 0;
  margin: 0;
  padding-top: 143px;
}

.folder {
  color: #fff;
  padding-left: 11px;
}
</style>