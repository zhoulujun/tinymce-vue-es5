富文本编辑器，es5 vue 版本。
## 背景介绍
常见的富文本编辑器的选择上，推荐查看
+ [tinyMCE 官方：https://www.tiny.cloud/blog/under-pressure-powerpaste/](https://www.tiny.cloud/blog/under-pressure-powerpaste/)
+ [TinyMCE vs CKEditor: battle of titans! (of WYSIWYG editing):TinyMCE vs CKEditor: battle of titans! (of WYSIWYG editing)](https://www.turnkeylinux.org/blog/tinymce-vs-ckeditor)
+ [市面上其它的一些富文本分学习](https://panjiachen.github.io/vue-element-admin-site/zh/feature/component/rich-editor.html)

个人感觉tinyMCE功能最强，之前一直使用[UEditor](https://fex.baidu.com/ueditor/)，支持国产。但是百度最近对之前的开源项目很多都停摆了。
### vue本地化引入 tinyMCE
[tinyMCE: https://github.com/tinymce/tinymce](https://github.com/tinymce/tinymce)

官方提供的 [tinymce-vue:https://github.com/tinymce/tinymce-vue](https://github.com/tinymce/tinymce-vue)

存在远程加载资源 与本地多个编辑器问题，于是自己动手弄一个es5的。图片不直接转base64 插入文本
>上传图片，转为base64 保存，不上传到服务器 具体参看： [复制粘贴截图并转化base64格式保存至数据库](https://www.cnblogs.com/yan0720/p/10997402.html)


[demo地址：http://demo.zhoulujun.cn/tinymce-vue-es5/](http://demo.zhoulujun.cn/tinymce-vue-es5/)

其实也没有啥技术含量， 具体参看官网：[https://www.tiny.cloud/docs/advanced/usage-with-module-loaders/](https://www.tiny.cloud/docs/advanced/usage-with-module-loaders/)
## 用法：
导入组件
```javascript
import RichEditor from 'tinyMCE-vue-es5';
export default {
 components: {
  RichTextEditor
 },
 data () {
  return {
   RichTextHtmlContent: '<div><a href="https://www.zhoulujun.cn/">zhoulujun.cn</a></div>'
   options:{
     // your config will merge into RichTextEditor
   }
  }
 },
 methods: {
  changefullscreenState(status){
    console.log(status)
  }
 }
}
```
使用
```vue
<RichEditor 
   v-model="RichTextHtmlContent" 
   :options='options'
   @FullscreenStateChanged="changefullscreenState"
/>
```
具体参案例：


```html
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
import RichTextEditor from 'tinyMCE-vue-es5';
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

```

### 图片上传

