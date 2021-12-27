import FileSaver from "file-saver";

/**
 * 通用方法utils
 * @namespace utils
 */
const utils = {
  /**
   * 站内页面跳转，
   * @param {String} path 目标页面路径，例："/WebServer"
   */
  routeToPage: function (path) {
    window.location.href = path;
  },

  /**
   * 查找目标字符串是否在某个字符串数组中
   * @param {String[]} arr
   * @param {String} target
   */
  contain: function (arr, target) {
    if (!arr) {
      return false;
    }

    return arr.indexOf(target) > -1;
  },

  /**
   * 为指定数组的每一项加上"key"字段，用于处理传给table的data数组
   * @param {Object[]} arr 要加上key字段的数组
   * @return 加上key字段后的原数组的复制
   */
  addKeyForArray: function (arr) {
    if (!arr) {
      return [];
    }
    let _arr = [];
    arr.forEach((item, index) => {
      item.key = index;
      _arr.push(item);
    });
    return _arr;
  },
};

export default utils;
