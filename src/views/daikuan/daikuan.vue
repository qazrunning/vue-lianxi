<template>
  <div id="daikuan">
    <mt-header title="贷款计算器" class="top-titlt">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="content-box">
      <div class="car-box">
        <div class="carimg-box">
          <img :src="cardata.carUrl" alt />
        </div>
        <p class="car-title">{{cardata.carTitle}}</p>
        <p class="car-price">
          官方指导价：
          <span>{{cardata.carPrice}}</span>
        </p>
      </div>
      <div class="change-car" @click="popFun">
        车型选择
        <span class="car-index">{{carIndex}}</span>
      </div>
      <div class="jinrong-box">
        <h2>金融机构</h2>
        <div class="jr-box">
          <button :class="jg.ftjr?'buttom-active':''" @click="jgclick1">丰田金融</button>
          <button :class="jg.gqhl?'buttom-active':''" @click="jgclick2">广汽汇理</button>
        </div>
        <div class="zc-box">
          <div class="box1"></div>
          <div class="box1"></div>
          <div class="box1"></div>
          <div class="box1"></div>
        </div>
      </div>
    </div>
    <mt-popup v-model="popupVisible" position="bottom"></mt-popup>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      cardata: {
        carUrl: require("../../static/images/004036.png"),
        carTitle: "全新换代雷凌",
        carPrice: "12.98万元起"
      },
      carIndex: "请选择",
      popupVisible: false,
      jg: {
        ftjr: true,
        gqhl: false
      }
    };
  },
  mounted() {

    this.dd();
  },
  methods: {
    popFun() {
      if (this.popupVisible) {
        this.popupVisible = false;
      } else {
        this.popupVisible = true;
      }
    },
    jgclick1() {
      this.jg.ftjr = true;
      this.jg.gqhl = false;
    },
    jgclick2() {
      this.jg.ftjr = false;
      this.jg.gqhl = true;
    },
    dd() {
      let jq_t = $(".box1");
      $(".box1").click(function(){
          console.log($(this));
      })
    }
  }
};
</script>

<style scoped lang='scss'>
#daikuan {
  .top-titlt {
    color: #323232;
    height: 2.8rem;
    line-height: 2.8rem;
    background-color: #fff;
    font-size: 1rem;
  }
  .content-box {
    margin-top: 0.5rem;
    .car-box {
      height: 4.3rem;
      position: relative;
      .carimg-box {
        width: 7.5rem;
        height: 4.3rem;
        margin-left: 0.9rem;
        background-color: #f7f8f9;
        img {
          width: 6.3rem;
          height: 4rem;
          vertical-align: middle;
        }
      }
      .car-title {
        position: absolute;
        left: 9rem;
        top: 0.3rem;
        text-align: left;
        font-size: 1.1rem;
        line-height: 1rem;
      }
      .car-price {
        position: absolute;
        left: 9rem;
        top: 2rem;
        font-size: 0.8rem;
        color: #989898;
        span {
          color: #f33b3b;
          font-size: 1.1rem;
        }
      }
    }
    .change-car {
      border-top: 1px solid #c1c1c1;
      border-bottom: 1px solid #ccc;
      margin-top: 1rem;
      height: 3.1rem;
      padding: 0 4%;
      font-size: 0.9rem;
      line-height: 3.1rem;
      text-align: left;
      span {
        font-size: 0.9rem;
        color: #989898;
        display: inline-block;
        margin-left: 0.5rem;
      }
    }
    .jinrong-box {
      margin-top: 0.2rem;
      h2 {
        text-align: left;
        font-size: 0.9rem;
        line-height: 1.3rem;
        margin-left: 0.9rem;
        color: #323232;
        font-weight: normal;
      }
      .jr-box {
        margin-left: 0.9rem;
        margin-top: 1rem;
        height: 2.1rem;
        button {
          box-sizing: border-box;
          width: 5rem;
          height: 2rem;
          font-size: 0.9rem;
          line-height: 1.3rem;
          border: 1px solid #ebebeb;
          color: #656565;
          background-color: #fff;
          float: left;
          border-radius: 2px;
        }
        button:nth-child(2) {
          margin-left: 0.9rem;
        }
        .buttom-active {
          border-color: #00acfe;
          color: #0babfe;
          background-color: rgba(11, 171, 254, 0.06);
        }
      }
      .zc-box {
        display: flex;
        margin-top: 2rem;
        justify-content: space-between;
        padding: 0 0.9rem;
        .box1 {
          height: 5.9rem;
          width: 5rem;
          border: 1px solid #ebebeb;
          border-radius: 2px;
        }
      }
    }
  }
}
</style>
