<template>
  <div class="flexs">
    <mt-header fixed title="贷款计算器" class="header-top">
      <mt-button icon="back" slot="left"></mt-button>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <router-link to="/daikuan" name="Daikuan">
      <mt-button icon="back">贷款</mt-button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "car",
  data() {
    return {
      ho: "你好",
      msg: "点我"
    };
  }
};
</script>

<style scoped lang="scss">
* {
  margin: 0%;
}

.flexs {
  display: flex;
  justify-content: space-around;
  .car {
    width: 5rem;
    height: 2rem;
    border: 1px #00acfe solid;
    line-height: 2rem;
    border-radius: 2px;
    font-size: 0.9rem;
    box-sizing: border-box;
  }
  .header-top {
    background-color: #fff;
    font-size: 1rem;
    color: #323232;
    letter-spacing: 0;
    height: 2.8rem;
    text-align: center;
  }
}
</style>
