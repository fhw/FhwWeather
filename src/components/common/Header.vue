<template>
  <header id="index-header">
    <el-row>
      <el-menu mode="horizontal" theme="dark">
        <el-col :xs="24" :sm="4" :md="9" :lg="11">
          <el-menu-item index="1">天气图标</el-menu-item>
        </el-col>
        <el-col :xs="3" :sm="20" :md="15" :lg="13">
          <el-menu-item index="2">7-10天预报</el-menu-item>
          <el-menu-item index="3">实况天气</el-menu-item>
          <el-menu-item index="4">每小时天气</el-menu-item>
          <el-menu-item index="5">灾害预警</el-menu-item>
          <el-menu-item index="6">生活指数</el-menu-item>
          <el-menu-item index="7">空气质量</el-menu-item>
        </el-col>
        <el-button class="header-list-button">开关</el-button>
      </el-menu>
    </el-row>
  </header>
</template>
<script>

</script>
<style>
  .header-list-button {
    display: none;
  }

  @media screen and (max-width: 768px) {
    .el-col:not(:first-child) .el-menu-item {
      display: none;
    }

    .header-list-button {
      position: absolute;
      right: 10px;
      top: 10px;
      display: block;
    }
  }
</style>
