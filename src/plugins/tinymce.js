// tinymce富文本
import Vue from 'vue';
//样式
import tinymce from 'tinymce'
import VueTinymce from '@packy-tang/vue-tinymce'
import 'tinymce/skins/content/default/content.min.css'
import 'tinymce/skins/ui/oxide-dark/skin.min.css'
import 'tinymce/skins/ui/oxide-dark/content.min.css'

//主题
import 'tinymce/themes/silver/theme.min.js'

//插件
import 'tinymce/plugins/emoticons' // 表情
import 'tinymce/plugins/link' //链接插件
import 'tinymce/plugins/image' //图片插件
import 'tinymce/plugins/media' //媒体插件
import 'tinymce/plugins/table' //表格插件
import 'tinymce/plugins/lists' //列表插件
import 'tinymce/plugins/quickbars' //快速栏插件
import 'tinymce/plugins/fullscreen' //全屏插件
import 'tinymce/plugins/code'
import 'tinymce/plugins/codesample'
/**
 * 注：
 * 5.3.x版本需要额外引进图标，没有所有按钮就会显示not found
 */
import 'tinymce/icons/default/icons'

//本地化 汉化
import 'tinymce/langs/zh_CN.js'

Vue.use(VueTinymce)
Vue.prototype.$tinymce = tinymce //全局注册，使用方法为:this.$tinymce
