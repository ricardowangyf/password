<template>
  <!--路由转跳-->
  <div class="middleheader">
    <div class="middleheader-center scorall">
      <div class="middlecenter">
        <div class="serch">
          <div class="inputandcion">
            <input
              v-model.trim="keyWord"
              class="inputstlye"
              :placeholder="SearchVault"
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
                      ? 'isactive'
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
import DetailPage from "./DetailPage";
import { reqCategoryList } from "../API/index";
import RouterList from "../components/RouterList.vue";
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
      name: "",
      keyWord: " ",
      SearchVault: "SearchVault",
    };
  },
  mounted() {
    reqCategoryList().then((data) => {
      this.tableData = data.data;
      const type = this.$route.params.type || "all";
      this.filterDatas(type, data.data);
      console.log("this.tableData", data.data);
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
        console.log("tableData", this.tableData);
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
            console.log("this.tableData", this.tableData);
          }
        }
      } else {
        dataLists = this.tableData;
      }
      this.items = [...dataLists];
      console.log("this.items", this.items);
      console.log("dataLists", dataLists);
    },
    filterDatas(type, list) {
      if (type === "trash") {
        this.items = list.filter((item) => item.deleteAt);
      } 
      else if (type === "favorites") {
        this.items = list.filter((item) => item.favorties);
      } 
      else {
        this.items = list;
      }
      console.log(" this.items",  this.items);
      console.log('-------->' ,type)
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
@import url(../assets/css/middlelist.css);
</style>
