import Vue from 'vue';
import SvgIcon from '@/components/SvgIcon';// svg component

// register globally
Vue.component('svg-icon', SvgIcon);

/**
 * require.context
 * 要搜索的文件夹目录
 * 是否应该搜索他的子目录
 * 匹配文件的正则表达式
 */
const req = require.context('./svg', false, /\.svg$/);
const requireAll = requireContext => requireContext.keys().map(requireContext);
requireAll(req);
