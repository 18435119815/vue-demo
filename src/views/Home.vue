<template>
  <div>
    <!-- 头部区域 -->
    <div class="header">
      <div class="left">
        <div class="block">
          <i class="iconfont icon-ziyuan"></i>
        </div>
        <div class="canUse">可用船</div>
      </div>
      <div class="center">2020年05月31 13:42</div>
      <div class="right">
        <i class="iconfont icon-xiaoxitixing"></i>（2）
        <div class="china" :class="{active:lagActive==1}" @click="lagChange(1)">中文</div>
        <div class="english" :class="{active:lagActive==2}" @click="lagChange(2)">English</div>
      </div>
    </div>
    <!-- 主要内容区域 -->
    <div class="middle">
      <!-- 白色区域 -->
      <div class="white">
        <!-- 青色区域 -->
        <div class="blue">
          <div class="content">
            <!-- 左侧菜单栏 -->
            <div class="leftMenu">
              <el-menu
                default-active="1"
                class="el-menu-vertical-demo"
                background-color="#004d68"
                text-color="#fff"
                active-text-color="#fff"
              >
                <el-menu-item
                  v-for="item in menuList"
                  :key="item.index"
                  @click="push(item)"
                  :class="{'active':active==item.index}"
                  :index="item.index"
                >
                  <i :class="item.icon"></i>
                  <span slot="title">{{item.name}}</span>
                </el-menu-item>
              </el-menu>
            </div>
            <!-- 右侧内容栏 -->
            <div class="rightText">
              <router-view></router-view>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 底部按钮区域 -->
    <div class="footer">
      <ul>
        <li
          :class="{'active':footActive==item.index}"
          v-for="item in footMenuList"
          :key="item.index"
          @click="footChange(item)"
        >
          <i class="iconfont" :class="item.icon"></i>
          {{item.name}}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      menuList: [
        {
          index: "1",
          icon: "el-icon-menu",
          name: "语言设置",
          route: "Lag"
        },
        {
          index: "2",
          icon: "el-icon-menu",
          name: "屏幕亮度",
          route: "2"
        },
        {
          index: "3",
          icon: "el-icon-menu",
          name: "日期时间设置",
          route: "3"
        },
        {
          index: "4",
          icon: "el-icon-menu",
          name: "wifi设置",
          route: "4"
        },
        {
          index: "5",
          icon: "el-icon-menu",
          name: "串口设置",
          route: "5"
        },
        {
          index: "6",
          icon: "el-icon-menu",
          name: "网口设置",
          route: "6"
        }
      ],
      footMenuList: [
        {
          name: "首页",
          index: "1",
          icon: "icon-chuanmao"
        },
        {
          name: "储能系统",
          index: "2",
          icon: "icon-peidian"
        },
        {
          name: "推进系统",
          index: "3",
          icon: "icon-yaogan"
        },
        {
          name: "配电系统",
          index: "4",
          icon: "icon-peidian"
        },
        {
          name: "舱底水系统",
          index: "5",
          icon: "icon-chuanmao"
        },
        {
          name: "消防系统",
          index: "6",
          icon: "icon-zhinengxiaofangshuan"
        },
        {
          name: "报警系统",
          index: "7",
          icon: "icon-baojingguanli"
        },
        {
          name: "历史数据",
          index: "8",
          icon: "icon-lishishuju"
        },
        {
          name: "系统设置",
          index: "9",
          icon: "icon-shezhi"
        }
      ],
      active: 1,
      lagActive: 1,
      footActive: 9
    };
  },
  methods: {
    push(item) {
      this.active = item.index;
      this.$router.push({
        name: item.route
      });
    },
    lagChange(index) {
      this.lagActive = index;
      this.axios.post('/loginData').then(res=>{
        console.log(res)
      }).catch(err=>{console.log(1)})
    },
    footChange(item) {
      this.footActive = item.index;
    }
  },
  mounted() {
    this.$router.push({
      name: "Lag"
    });
  },
  created() {}
};
</script>
<style lang="scss" scoped>
.header {
  height: 10vh;
  background-color: #506377;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  .left {
    display: flex;
    align-items: center;
    position: relative;
    margin-left: 15px;
    .block {
      width: 50px;
      height: 50px;
      background: #fcde00;
      border-radius: 5px;
      position: absolute;
      z-index: 2;
      text-align: center;
      line-height: 50px;
      color: white;
      .iconfont{
        font-size:30px;
      }
    }
    .canUse {
      width: 95px;
      height: 30px;
      left: 46px;
      border: 2px solid white;
      border-left: none;
      color: #fcde00;
      border-radius: 5px;
      text-align: center;
      line-height: 30px;
      position: absolute;
      font-size: 20px;
    }
  }
  .center {
    font-size: 28px;
    color: #fff;
  }
  .right {
    margin-right: 20px;
    color: white;
    .iconfont{
      font-size: 20px;
      cursor: pointer;
    }
    .china {
      width: 60px;
      height: 30px;
      background: #d0d0d0;
      border-radius: 5px;
      text-align: center;
      line-height: 30px;
      color: #fff;
      display: inline-block;
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
      cursor: pointer;
    }
    .english {
      width: 60px;
      height: 30px;
      background: #d0d0d0;
      border-radius: 5px;
      text-align: center;
      line-height: 30px;
      color: #fff;
      display: inline-block;
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
      cursor: pointer;
    }
    .active {
      background: #ffd601 !important;
    }
  }
}
.middle {
  height: 75vh;
  background-color: #b1bbd7;
  position: relative;
  box-sizing: border-box;
  .white {
    background-color: #fff;
    width: 98%;
    height: 97%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    border-radius: 10px;
    .blue {
      background-color: #004d68;
      width: 98%;
      height: 96%;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      border-radius: 10px;
      .content {
        display: flex;
        align-items: start;
        width: 98%;
        height: 96%;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        .leftMenu {
          display: inline-block;
          width: 20%;
          border: 2px solid #09929f;
          border-right: none;
          .el-menu {
            border-right: none;
          }
          .el-menu-item {
            height: 40px;
            line-height: 40px;
            border: 1px solid #09929f;
            border-right: none;
          }
          .active {
            background: #347995 !important;
          }
        }
        .rightText {
          background: #347995;
          display: inline-block;
          width: 80%;
          height: 100%;
          border: 2px solid #09929f;
        }
      }
    }
  }
}
.footer {
  height: 15vh;
  background-color: #506377;
  ul {
    display: flex;
    height: 15vh;
    flex-wrap: nowrap;
    justify-content: space-around;
    align-items: center;
    li {
      display: block;
      height: 90px;
      text-align: center;
      width: 95px;
      border-radius: 10px;
      cursor: pointer;
      box-sizing: border-box;
      i {
        display: block;
        font-size: 40px;
        margin: 10px 0 10px 0;
      }
      p {
        display: block;
      }
    }
    .active {
      border: 2px solid #fce400;
      color: #fce400;
    }
  }
}
</style>
