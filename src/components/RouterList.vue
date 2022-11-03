<template>
    <!-- 路由内容 -->
    <div class="password-all">
      <div class="bottonleft">
        <img :src="eal" style="border-radius: 5px" />
      </div>
      <div class="password-right">
        <div class="password-jkl">
          <h1 class="name">{{ title }}</h1>
          <h2 class="email">{{ des }}</h2>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      title: {
        type: String,
        default: "",
      },
      des: {
        type: String,
        default: "",
      },
      eal: {
        type: String,
        default: "",
      },
    },
    data() {
      return {};
    },
  };
  </script>
  
  <style>
  .name {
    margin: 0;
    color: #fff;
    font-size: 15px;
  }
  
  .email {
    margin: 0;
    font-size: 12px;
    color: #575d64;
  }
  
  .password {
    padding: 0;
    width: 275px;
    background: #1e1e1e;
    height: 65px;
    margin: 5px 0 0 45px;
    border: none;
  }
  
  .password-all {
    display: flex;
    justify-content: flex-start;
  }
  
  .password-all {
    padding: 11px;
  }
  .el-input__suffix {
    right: 5px;
    height: 27px;
    transition: all 0.3s;
    pointer-events: none;
    top: 15px;
  }
  .el-input__suffix {
    position: absolute;
    /*top: 0;*/
    /*-webkit-transition: all .3s;*/
    height: 100%;
    color: #c0c4cc;
    text-align: center;
  }
  .imeg {
    position: relative;
    left: 4px;
    top: 5px;
    width: 38px;
    height: 36px;
  }
  
  .password-righta {
    padding-left: 5px;
  }
  
  .password-jklb {
    padding-left: 20px;
  }
  
  .password-name {
    padding: 10px 0 10px 0;
  }
  
  .job {
    color: #8f8f8f;
  }
  
  .img-position {
    position: relative;
    top: 9px;
    left: 9px;
  }
  
  .all-button button {
    padding: 0;
    border: none;
    background-color: rgb(30 30 30);
  }
  </style>