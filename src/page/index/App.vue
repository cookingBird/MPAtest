<template>
  <div id="test">
    <h1 class="w-full h-16 bg-green-600 flex justify-center items-center">
      <span class="leading-10 text-amber-600 text-2xl">this is index page</span>
    </h1>
    <p class="text-center mt-5">hello world!</p>
  </div>
</template>

<script>
export default {
  name: 'APP',
  //声明一个组可用于组件实例的指令
  directives: {},
  /**模板依赖*/
  components: {},
  /**组合 (合并 property 至选项内)*/
  extends: {},
  mixins: {},
  provide: {},
  inject: {},
  /**属性接口*/
  props: {},
  emits: {},
  expose: {},
  /**本地状态*/
  data() {
    return {};
  },
  computed: {},
  /**事件 (通过响应式事件触发的回调)*/
  watch: {},
  /**LifeCyle Hooks*/
  //生命周期 - 创建之前,可以访问this，但未初始完毕，不能访问组件中的methods等
  beforeCreate() {},
  //生命周期 - 创建完成（可以访问当前this实例，及其方法）
  //一般这里可以做一些对方法的防抖与节流操作
  created() {},
  //生命周期 - 挂载之前
  beforeMount() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  //生命周期 - 更新之前
  beforeUpdate() {},
  //生命周期 - 更新之后
  updated() {},
  //生命周期 - 销毁之前
  beforeDestroy() {},
  //生命周期 - 销毁完成
  destroyed() {},
  //如果页面有keep-alive缓存功能，这个钩子会触发
  activated() {},
  /**非响应式的 property(不依赖响应性系统的实例 property)*/
  methods: {},
};
</script>
<style lang="css"></style>
