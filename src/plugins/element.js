//第三方element—UI组件

import Vue from 'vue';
import {Button} from 'element-ui';
import { Form,FormItem } from 'element-ui';
import { Input } from 'element-ui';
import {Table,TableColumn} from "element-ui";
import {Tag} from "element-ui";
import {Switch} from 'element-ui'
import {Notification} from "element-ui";
import {Message} from "element-ui";

// use的时候一定要一个一个use！！！！！！！！！！！！！！！！！！！！！！！！！！
Vue.use(Button)
Vue.use(Form) // 表单
Vue.use(FormItem)
Vue.use(Input) // 输入框
Vue.use(Table)
Vue.use(TableColumn) //表格
Vue.use(Tag) // 筛选
Vue.use(Switch) //开关


Vue.prototype.$notify = Notification
Vue.prototype.$message = Message
