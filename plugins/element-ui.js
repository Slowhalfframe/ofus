import Vue from 'vue'
import { form, input, button, formItem, Message, autocomplete, dropdown, dropdownMenu, dropdownItem, dialog, select, option, tabs, tabPane,
  timeline, timelineItem} from "element-ui";

Vue.use(form);
Vue.use(input);
Vue.use(button);
Vue.use(formItem);
Vue.use(autocomplete);
Vue.use(dropdown);
Vue.use(dropdownMenu);
Vue.use(dropdownItem);
Vue.use(dialog);
Vue.use(select);
Vue.use(option);
Vue.use(tabs);
Vue.use(tabPane);
Vue.use(timeline);
Vue.use(timelineItem);
Vue.prototype.$message = Message;
