<template>
    <textarea :id="domId" class="fulltext-wrapper"></textarea>
</template>
<script>
    import tinymce from 'tinymce/tinymce'
    // Default icons are required for TinyMCE 5.3 or above
    import 'tinymce/icons/default'
    // A theme is also required
    import 'tinymce/themes/silver'
    import 'tinymce/skins/ui/oxide/skin.css'
    import 'tinymce/skins/ui/oxide/content.css'

    // Any plugins you want to use has to be imported
    import 'tinymce/plugins/advlist'
    import 'tinymce/plugins/autolink'
    import 'tinymce/plugins/lists'
    import 'tinymce/plugins/link'
    import 'tinymce/plugins/image'
    import 'tinymce/plugins/charmap'

    import 'tinymce/plugins/searchreplace'
    import 'tinymce/plugins/visualblocks'
    import 'tinymce/plugins/code'
    import 'tinymce/plugins/fullscreen'
    import 'tinymce/plugins/preview'
    import 'tinymce/plugins/anchor'
    import 'tinymce/plugins/insertdatetime'
    import 'tinymce/plugins/media'

    import 'tinymce/plugins/paste'
    import 'tinymce/plugins/wordcount'
    import 'tinymce/plugins/table'

    export default {
        name: '',
        model: {
            event: 'change'
        },
        props: {
            value: {
                type: String,
                default: '',
                required: true
            },
            options: {
                type: Object,
                default: () => ({})
            }
        },
        data () {
            return {
                domId: Math.random().toString(16)
                    .substr(3, 10),
                editorContent: '',
                hasInit: false
            }
        },
        // watch: {
        //   value(val) {
        //     this.$nextTick(() => tinymce.get(this.domId).setContent(val || ''));
        //   },
        // },
        mounted () {
            this.$nextTick(() => {
                this.initTinyMCE()
            })
        },
        destroyed () {
            this.destroyTinymce()
        },
        methods: {
            initTinyMCE () {
                const options = {
                    selector: `#${this.domId}`,
                    branding: false,
                    height: 300,
                    menubar: true,
                    plugins: [
                        'advlist autolink lists link image charmap',
                        'searchreplace visualblocks code fullscreen',
                        'preview anchor insertdatetime media',
                        'paste code wordcount table'
                    ],
                    toolbar: 'undo redo |fontformats|fontsizeselect| formatselect | forecolor fontsize | bold italic underline strikethrough subscript superscript | alignleft aligncenter alignright | bullist numlist outdent indent | h1 h2 h3 |',
                    menu: {
                        edit: { title: 'Edit', items: 'undo redo | cut copy paste | selectall | searchreplace' },
                        view: {
                            title: 'View',
                            items: 'code | visualaid visualchars visualblocks | spellchecker | preview fullscreen'
                        },
                        insert: {
                            title: 'Insert',
                            items: 'image link media template codesample inserttable | charmap emoticons hr | pagebreak nonbreaking anchor toc | insertdatetime'
                        },
                        format: {
                            title: 'Format',
                            items: 'bold italic underline strikethrough superscript subscript codeformat | formats blockformats fontformats fontsizes align | forecolor backcolor | removeformat'
                        },
                        tools: { title: 'Tools', items: 'spellchecker spellcheckerlanguage | code wordcount' },
                        table: { title: 'Table', items: 'inserttable | cell row column | tableprops deletetable' }
                    },
                    content_style: 'p{margin-block-start: initial;margin-block-end: initial;}',
                    setup: (editor) => {
                        editor.on('FullscreenStateChanged', (e) => {
                            this.$emit('FullscreenStateChanged', e.state)
                        })
                        editor.on('NodeChange', () => {
                            const content = editor.getContent()
                            this.$emit('change', content)
                            this.editorContent = content
                        })
                    },
                    init_instance_callback: (editor) => {
                        if (this.value) {
                            editor.setContent(this.value)
                        }
                        this.hasInit = true
                    },
                    language: 'zh_CN',
                    language_url: `https://cdn.zhoulujun.cn/src/js/tinymce/zh_CN.js`,
                    content_css: `https://www.zhoulujun.cn/statics/css/frontend/reset.css`,
                    paste_data_images: true,
                    toolbar_mode: 'sliding',
                    font_formats: '微软雅黑=Microsoft YaHei,Helvetica Neue,PingFang SC,sans-serif;苹果苹方=PingFang SC,Microsoft YaHei,sans-serif;宋体=simsun,serif;黑体=SimHei,STHeiti;仿宋=FangSong,STFangsong;楷体=KaiTi,STKaiti;隶书=LiSu;幼圆=YouYuan;Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats',
                    images_upload_handler: (blobInfo, success, failure) => {
                        const img = `data:image/jpeg;base64,${blobInfo.base64()}`
                        success(img)
                    }

                }
                Object.assign(options, this.options)
                tinymce.init(options)
            },
            destroyTinymce () {
                if (tinymce.get(this.domId)) {
                    tinymce.get(this.domId).destroy()
                }
            },
            // 设置编辑器内容
            setContent (value) {
                tinymce.get(this.domId).setContent(value)
            },
            // 获取编辑器内容
            getContent () {
                tinymce.get(this.domId).getContent()
            }
        }
        // render () {
        //     return (
        // <textarea id={this.domId} className="fulltext-wrapper"></textarea>
        //     )
        // }
    }
</script>
<style lang="scss">
.tox-tinymce-aux {
  z-index: 9999999 !important;
}
.tox-notification--warning {
  display: none;
}
</style>
