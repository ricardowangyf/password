<template>
  <!--路由转跳-->
  <div class="middleheader">
    <div class="header-width scorall">
      <div class="middlecenter">
        <div class="serch">
          <div class="inputandcion">
            <input
              v-model.trim="keyWord"
              class="inputcss"
              placeholder="SearchVault"
            />
            <button class="sousuo" @click="serch">
              <img class="hualigs" src="../assets/imgs/search.svg" alt />
              <div class="claer" />
            </button>
          </div>
          <div class="plus">
            <img src="../assets/imgs/plus.svg" class="icon-img" />
          </div>
        </div>
        <div class="button">
          <div v-if="items && items.length > 0">
            <li v-for="(item, i) in items" :key="item.name">
              <router-link :to="`/list/${type}/detail/${item.name}`">
                <RouterList
                  :title="item.name"
                  :des="item.email"
                  :eal="item.url"
                  :class="
                    name === item.name || (i === 0 && !name)
                      ? 'is-active'
                      : undefined
                  "
                />
              </router-link>
            </li>
          </div>
        </div>
      </div>
    </div>
    <DetailPage />
  </div>
</template>

<script>
import { reqCategoryList } from "../API/index";
import RouterList from "../components/RouterList.vue";
import DetailPage from "./DetailPage";
// 在此处引用button组件

export default {
  props: ["type"],
  name: "reqCategoryList",
  components: {
    RouterList,
    DetailPage,
  },
  data() {
    return {
      items: [],
      name: " ",
      keyWord: " ",
    };
  },
  mounted() {
    reqCategoryList().then((data) => {
      this.tableData = data.data;
      const type = this.$route.params.type || "all";
      this.filterDatas(type, data.data);
      console.log("-data.data->", data.data);
    });
  },
  watch: {
    $route: {
      handler(newVal, olaVal) {
        const newType = newVal.params.type;
        const oldType = olaVal.params.type;
        this.name = newVal.params.name;
        if (newType && newType !== oldType) {
          this.filterDatas(newType, this.tableData);
        }
        console.log("---tableData--->", this.tableData);
      },
    },
  },
  methods: {
    serch() {
      var dataLists = [];
      if (this.keyWord) {
        for (var i = 0; i < this.tableData.length; i++) {
          if (this.tableData[i].name === this.keyWord) {
            dataLists.push(this.tableData[i]);
            console.log("------>", this.tableData);
          }
        }
      } else {
        dataLists = this.tableData;
      }
      this.items = [...dataLists];
      console.log("------->", this.items);
      console.log("------->", dataLists);
    },
    filterDatas(type, list) {
      if (type === "Trash") {
        this.items = list.filter((item) => item.deleteAt);
      } else if (type === "favorites") {
        this.items = list.filter((item) => item.favorties);
      } else {
        this.items = list;
      }
      console.log("----this--->", list);

      this.items &&
        this.items.length > 0 &&
        this.$router
          .push(`/list/${type}/detail/${this.items[0].name}`)
          .catch((err) => {
            console.log(err);
          });
    },
  },
};
</script>

<style>
li {
  list-style: none;
}

ul {
  margin: 0;
}

input {
  outline: none;
}

div {
  height: auto;
}

img {
  width: 40px;
  height: 40px;
}

.is-active {
    border-radius: 5px;
    background: #005fe4;
}

a {
  text-decoration: none;
}

.claer {
  clear: both;
}

.scorall::-webkit-scrollbar {
  width: 10px;
  height: 1px;
}

.scorall::-webkit-scrollbar-thumb {
  border-radius: 10px;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  background: #535353;
}

.scorall::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  background: rgb(30 30 30);
}

.button {
  margin: 0 auto;
  max-width: 300px;
}

.header-width {
  width: 325px;
  background-color: rgb(30 30 30);
}

.middlecenter {
  margin: 0 auto;
  max-width: 295px;
}

.middleheader {
  height: 100%;
  width: calc(100% - 240px);
}
.middleheader {
  display: flex;
}

.icon-user {
  width: 20px;
  height: 20px;
}

.input-text {
  color: rgb(24 24 24 / 80%);
  background: transparent;
  padding: 0px 20px;
  outline: none;
  width: 183px;
  height: 21px;
  background-image: url(https://tva1.sinaimg.cn/large/0074R88yly8h4parmj1u0j300k00k0d2.jpg);
  border-radius: 10px;
}

.address {
  color: red;
}

.serch {
  display: flex;
  justify-content: space-around;
}

.serch {
  padding: 20px 0 25px 0;
}

.plus {
  border-radius: 7px;
  background-color: #005fe4;
}

.plus {
  width: 30px;
  height: 30px;
}

.inputcss {
  background-color: #404040;
  border-radius: 4px;
  border: none;
  box-sizing: border-box;
  color: #686868;
  height: 30px;
  line-height: 40px;
  outline: 0;
  padding: 0 15px;
  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  width: 100%;
}

.inputandcion {
  height: 30px;
}

.icon-img {
  width: 20px;
  height: 20px;
}

.icon-img {
  position: relative;
  left: 5px;
  top: 5px;
}

.sousuo {
  position: relative;
  bottom: 30px;
  right: 5px;
}

.sousuo {
  width: 30px;
  height: 30px;
}

.sousuo {
  background: #404040;
  float: right;
  border: none;
}

.hualigs {
  width: 17px;
  height: 17px;
}

.hualigs {
  display: flex;
  align-items: center;
}

.password-left {
  border-radius: 5px;
}

.bottonleft {
  width: 45px;
  height: 45px;

  border-radius: 5px;
}

.imbg {
  width: 55px;
  height: 55px;
  position: relative;
  right: 4px;
}

.password-leftb {
  background-color: rgb(211, 97, 18);
  /* width: 30px; */
  width: 45px;
  height: 45px;
  border-radius: 10px;
}

.password-leftc {
  background-color: rgb(58, 74, 140);
  width: 45px;
  height: 45px;
  border-radius: 10px;
}

.password-lefte {
  background-color: #efb700;
  width: 45px;
  height: 45px;
  border-radius: 6px;
}

.imcg {
  position: relative;
  top: 9px;
  left: 9px;
}

.imdg {
  width: 31px;
  position: relative;
  top: 7px;
  left: 3px;
}

.password-jkl {
  padding-left: 12px;
  text-decoration: none;
}

.header-right {
  padding: 25px 0 45px 0;
}
</style>
