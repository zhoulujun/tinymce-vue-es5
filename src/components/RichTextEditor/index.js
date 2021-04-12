/**
 * @description
 * @author andyzhou
 * @create andyzhou
 * @update 2021/4/12 by andyzhou
 */
import RichTextEditor from './RichTextEditor'

/* istanbul ignore next */
RichTextEditor.install = function (Vue) {
  Vue.component(RichTextEditor.name, RichTextEditor)
}

export default RichTextEditor
