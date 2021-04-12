/**
 * @description
 * @author andyChou
 * @create andyChou
 * @update 2021/4/12 by andyChou
 */
import RichTextEditor from './components/RichTextEditor/RichTextEditor'
const components = [
  RichTextEditor
]
const install = function (Vue) {
  if (install.installed) return
  components.map(component => Vue.component(component.name, component))
}
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  RichTextEditor
}
