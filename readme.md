常见的富文本编辑器的选择上，推荐查看
+ tinyMCE 官方：https://www.tiny.cloud/blog/under-pressure-powerpaste/
+ https://panjiachen.github.io/vue-element-admin-site/zh/feature/component/rich-editor.html#%E5%B8%B8%E8%A7%81%E5%AF%8C%E6%96%87%E6%9C%AC
### vue本地化引入 tinyMCE
富文本编辑器，es5 vue 版本。

具体参看：https://www.tiny.cloud/docs/advanced/usage-with-module-loaders/
# 用法：
<RichEditor v-model="html" :options='options'/>

import RichEditor from 'tinyMCE-vue-es5';
### 图片上传
上传图片，转为base64 保存，不上传到服务器，具体参看：
 复制粘贴截图并转化base64格式保存至数据库(url:https://www.cnblogs.com/yan0720/p/10997402.html——Ckeditor 4)

