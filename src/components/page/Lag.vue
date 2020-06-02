<template>
  <div class="Lag">
    <div class="text">
      中英文切换 :
      <div class="right">
        <div class="china" :class="{active:lagActive==1}" @click="lagChange(1)">中文</div>
        <div class="english" :class="{active:lagActive==2}" @click="lagChange(2)">English</div>
      </div>
    </div>
    <el-button type="primary" :loading="btnLoading" @click="preservation">保存</el-button>
  </div>
</template>
<script>
export default {
  methods: {
    lagChange(index) {
      this.lagActive = index;
    },
    preservation() {
      this.btnLoading = true;
      setTimeout(() => {
        this.btnLoading = false;
        this.$message.success("保存成功")
      }, 1000);
    }
  },
  data() {
    return {
      lagActive: 1,
      btnLoading: false
    };
  }
};
</script>
<style lang="scss">
.Lag {
  .text {
    padding-left: 50px;
    padding-top: 30px;
  }
  /deep/.el-button--primary {
    margin-left: 140px;
    margin-top: 50px;
  }
}

.right {
  margin-left: 10px;
  margin-right: 20px;
  display: inline;
  .china {
    width: 60px;
    height: 30px;
    background: #526578;
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
    background: #526578;
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
    background: #af9664 !important;
  }
}
</style>