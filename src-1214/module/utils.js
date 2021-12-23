import FileSaver from "file-saver";

/**
 * 通用方法utils
 * @namespace utils
 */
const utils = {
  /**
   * 站内页面跳转，使用hash路由
   * @param {String} path 目标页面路径，例："#/WebServer"
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

  /**
   * 判断当前页面是否位于home页，用于区别处理home页的样式
   */
  isHome: function () {
    return window.location.hash === "#/Home";
  },

  /**
   * 将指定文字生成指定文件名的文件并下载
   * @param {String} text 用于生成文件的文本内容
   * @param {String} fileName 生成的文件名，如"test.fasta"
   */
  downloadText: function (text, fileName) {
    let blob = new Blob([text], { type: "text/plain;charset=utf-8" });
    FileSaver.saveAs(blob, fileName);
  },

  /**
   * 重定向页面至Http
   */
  redirectToHttp: function () {
    let currentProtocol = window.location.protocol;
    let currentHref = window.location.href;
    if (currentProtocol === "https:") {
      let newHref = currentHref.replace("https://", "http://");
      window.location.href = newHref;
    }
  },
  /**
   * 给数字加上千位分割符
   * @param {} num
   */
  toThousands: function (num) {
    num = (num || 0).toString();
    let result = "";
    while (num.length > 3) {
      result = "," + num.slice(-3) + result;
      num = num.slice(0, num.length - 3);
    }
    if (num) {
      result = num + result;
    }
    return result;
  },
  /**
   * 滚动到指定id的Dom元素
   * @param {String} id 需要滚动到的元素的Id
   */
  scrollToElementById: function (id) {
    let targetDom = document.getElementById(id);
    if (targetDom) {
      targetDom.scrollIntoView({
        block: "center",
        behavior: "smooth",
      });
    }
  },
};

export default utils;
