/*
 * @Author: yongqing.deng 
 * @Date: 2017-09-20 19:14:17 
 * @Last Modified by:   yongqing
 * @Last Modified time: 2018-01-29 13:34:50
 */
import Vue from "vue";
import Router from "vue-router";
import Index from "../components/Index";
import Button from "../components/Button";
import Cell from "../components/Cell";
import Switch from "../components/Switch";
import Icon from "../components/Icon";
import Checkbox from "../components/Checkbox";
import Radio from "../components/Radio";
import Grids from "../components/Grids";
import Toast from "../components/Toast";
import Alert from "../components/Alert";
import Indicator from "../components/Indicator";
import Tab from "../components/Tab";
import Picker from "../components/Picker";
import DateTimePicker from "../components/DateTimePicker";
import PwdKeyboard from "../components/PwdKeyboard";
import ActionSheet from "../components/ActionSheet";
import Vscroll from "../components/Vscroll";
import Swiper from "../components/Swiper";
Vue.use(Router);
export default new Router({
  routes: [
    {
      path: "/",
      name: "index",
      component: Index
    },
    {
      path: "/button",
      name: "button",
      component: Button
    },
    {
      path: "/cell",
      name: "cell",
      component: Cell
    },
    {
      path: "/switch",
      name: "switch",
      component: Switch
    },
    {
      path: "/checkbox",
      name: "checkbox",
      component: Checkbox
    },
    {
      path: "/radio",
      name: "radio",
      component: Radio
    },
    {
      path: "/grids",
      name: "grids",
      component: Grids
    },
    {
      path: "/toast",
      name: "toast",
      component: Toast
    },
    {
      path: "/indicator",
      name: "indicator",
      component: Indicator
    },
    {
      path: "/alert",
      name: "alert",
      component: Alert
    },
    {
      path: "/tab",
      name: "tab",
      component: Tab
    },
    {
      path: "/picker",
      name: "picker",
      component: Picker
    },
    {
      path: "/datetime-picker",
      name: "datetime-picker",
      component: DateTimePicker
    },
    {
      path: "/pwd-keyboard",
      name: "pwd-keyboard",
      component: PwdKeyboard
    },
    {
      path: "/actionsheet",
      name: "actionsheet",
      component: ActionSheet
    },
    {
      path: "/vscroll",
      name: "vscroll",
      component: Vscroll
    },
    {
      path: "/swiper",
      name: "swiper",
      component: Swiper
    },
     {
      path: "/icon",
      name: "icon",
      component: Icon
    }
  ]
});
