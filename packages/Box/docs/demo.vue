<template>
<div class="content">
  <div class="show-item bg-grey">
    <dx-border-box-1>
      <!-- 内容区自定义，默认内容使用时删除 -->
      <h3>Box-Style-1</h3>
    </dx-border-box-1>
  </div>
  <div class="show-item bg-grey">
    <dx-border-box-2>
      <!-- 内容区自定义，默认内容使用时删除 -->
      <h3>Box-Style-2</h3>
    </dx-border-box-2>
  </div>

</div>
</template>

<script lang="ts" setup>

</script>

<style lang="less" scoped>
.content {
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
}

.show-item {
  width: 400px;
  height: 300px;
  margin: 15px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  border: 1px solid #ccc;
  -webkit-box-shadow: 1px 1px 3px #ccc;
  box-shadow: 1px 1px 3px #ccc;
  border-radius: 10px;
  background-color: #fff;
  padding: 15px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
}

.bg-grey {
  background-color: #495060;
  color: rgba(255, 255, 255, 0.8);
}
</style>