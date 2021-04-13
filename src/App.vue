<template>
  <div>
    <h3>编辑器</h3>
    <RichTextEditor v-model="html" />
    <hr>
    <h4>编辑器结果展示</h4>
    <div v-html="html" />
    <hr>
    <hr>
    <h3>编辑器2</h3>
    <RichTextEditor v-model="html2" />
    <hr>
    <h4>编辑器结果展示2</h4>
    <div v-html="html2" />
  </div>
</template>

<script>
/**
 @author andyzhou
 @createDate 2021/4/12 17:25
 @updateTime 2021/4/12 17:25
 @description
 */
import RichTextEditor from './components/RichTextEditor/index'
export default {
    name: 'App',
    components: {
      RichTextEditor
    },
    data () {
        return {
          html: '<div><a href="https://www.zhoulujun.cn/">zhoulujun.cn</a></div>',
          html2: '<div><a href="https://www.zhoulujun.cn/">zhoulujun.cn</a></div>'
        }
    },
    methods: {}
}
</script>

<style lang="scss">

</style>
