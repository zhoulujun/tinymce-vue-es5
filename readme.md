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

如果需要ajax 上传到图片复位器，请查看[https://www.tiny.cloud/docs/configure/file-image-upload/#images_upload_url](https://www.tiny.cloud/docs/configure/file-image-upload/#images_upload_url)

图片服务器你，个人觉得这个还挺好的：[https://github.com/Chevereto/Chevereto-Free](https://github.com/Chevereto/Chevereto-Free)

[demo地址：http://demo.zhoulujun.cn/tinymce-vue-es5/](http://demo.zhoulujun.cn/tinymce-vue-es5/)

其实也没有啥技术含量， 具体参看官网：[https://www.tiny.cloud/docs/advanced/usage-with-module-loaders/](https://www.tiny.cloud/docs/advanced/usage-with-module-loaders/)
###
开箱即用，**不需要其他的引入与配置**，且可以合并自定义配置。

看了下npm的其它包，会依赖远程资源，或者需要其他的安装包等。此包直接使用就可

组件参考 element-ui UMD 打包导出
```javascript
export default {
  install,
  RichTextEditor
}
```
## 用法：
vue 中导入组件并使用
### JavaScript
```javascript
import { RichTextEditor } from 'tinymce-vue-es5'
export default {
 components: {
   RichTextEditor
 },
 data () {
  return {
   richTextHtmlContent: '<div><a href="https://www.zhoulujun.cn/">zhoulujun.cn</a></div>', 
   // your config will merge into RichTextEditor
   options:{
     // 语言配置
     language: 'zh_CN',
     // 语言地址
     language_url: `https://cdn.zhoulujun.cn/src/js/tinymce/zh_CN.js`,
     // 编辑器样式
     content_css: `https://cdn.zhoulujun.cn/src/js/tinymce/tinymce-vue.css`,
     file_picker_callback: function(callback, value, meta) {
       // Provide file and text for the link dialog
       if (meta.filetype == 'file') {
         callback('mypage.html', {text: 'My text'});
       }

       // Provide image and alt text for the image dialog
       if (meta.filetype == 'image') {
         callback('myimage.jpg', {alt: 'My alt text'});
       }

       // Provide alternative source and posted for the media dialog
       if (meta.filetype == 'media') {
         callback('movie.mp4', {source2: 'alt.ogg', poster: 'image.jpg'});
       }
     }
   }
  }
 },
 methods: {
  changefullscreenState(status){
    console.log(status)
  },
  change(text){
    console.log(text)
  }
 }
}
```
### vue模板
```vue
<RichTextEditor
   v-model="richTextHtmlContent" 
   :options='options'
   @FullscreenStateChanged="changefullscreenState"
   @change="change"
/>
```
具体参案例：

[demo地址：http://demo.zhoulujun.cn/tinymce-vue-es5/](http://demo.zhoulujun.cn/tinymce-vue-es5/)

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

### z

