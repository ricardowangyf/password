<template>
  <!--路由转跳-->
  <div class="middleheader">
    <div class="middleheader-center scorall">
      <div class="middlecenter">
        <div class="serch">
          <div class="inputandcion">
            <input
              v-model.trim="state.keyWord"
              class="inputstlye"
              :placeholder="state.SearchVault"
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
          <div v-if="state.items && state.items.length > 0">
            <li v-for="(item, i) in state.items" :key="item.name">
              <router-link :to="`/list/${type}/detail/${item.name}`">
                <RouterList
                  :title="item.name"
                  :des="item.email"
                  :eal="item.url"
                  :class="
                    state.name === item.name || (i === 0 && !state.name)
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
import { reactive } from "vue";
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
  setup() {
    const state = reactive({
      //数据
      items: [],
      name: " ",
      keyWord: " ",
      SearchVault: "SearchVault",
    });
    return {
      state,
    };
  },

  mounted() {
    reqCategoryList().then((data) => {
      this.tableData = data.data;
      const type = this.$route.params.type || "all";
      this.filterDatas(type, data.data);
      console.log("----this.tableData--->", data.data);
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
      if (this.state.keyWord) {
        for (var i = 0; i < this.tableData.length; i++) {
          if (this.tableData[i].name === this.state.keyWord) {
            dataLists.push(this.tableData[i]);
          }
        }
      } else {
        dataLists = this.tableData;
      }
      this.state.items = [...dataLists];
      console.log("---this.state.items--->", this.state.items);
      console.log("---dataLists--->", dataLists);
    },
    filterDatas(type, list) {
      if (type === "Trash") {
        this.state.items = list.filter((item) => item.deleteAt);
      } else if (type === "favorites") {
        this.state.items = list.filter((item) => item.favorties);
      } else {
        this.state.items = list;
      }
      console.log("---list--->", list);
      this.state.items &&
        this.state.items.length > 0 &&
        this.$router
          .push(`/list/${type}/detail/${this.state.items[0].name}`)
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
