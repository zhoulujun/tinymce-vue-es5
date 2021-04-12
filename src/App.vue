<template>
  <div>
    <h3>编辑器</h3>
    <RichTextEditor v-model="html" />
    <h3>编辑器复制</h3>
    <RichTextEditor v-model="html" />
    <hr>
    <h3>结果展示</h3>
    <div v-html="html" />
  </div>
</template>

<script>
/**
 @author andyzhou
 @createDate 2021/4/12 17:25
 @updateTime 2021/4/12 17:25
 @description
 */
import RichTextEditor from './components/RichTextEditor/RichTextEditor'
export default {
    name: 'App',
    components: {
      RichTextEditor
    },
    data () {
        return {
          html: '<div><a href="https://www.zhoulujun.cn/">zhoulujun.cn</a></div>'
        }
    },
    methods: {}
}
</script>

<style lang="scss">

</style>
