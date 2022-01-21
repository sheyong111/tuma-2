import condensateList from "./json/condensateListNew.json";
import utils from "./utils";

/**
 * @namespace 无膜细胞器信息相关方法
 */
let condensate = {
    /**
     * 获取用于Select组件选择的无膜细胞器name列表
     */
    getSelectList: function(){
        let list = [];
        condensateList.forEach((eachType,index) => {
            eachType.condensate.forEach((eachCondensate,index2) => {
                list.push(eachCondensate.name);
            });
        });
        return list;
    },
    /**
     * 根据大类type获取无膜细胞器name列表
     * @param {String} type "Cytoplasm"|"Nucleus"|"Others"
     */
    getListByType: function(type){
        let list = [];
        condensateList.forEach((eachType, index) => {
            if(eachType.type === type){
                eachType.condensate.forEach((eachCondensate,index2) => {
                    list.push(eachCondensate.name);
                });
            }
        })
        return list;
    },
    /**
     * 根据无膜细胞器别名匹配唯一指定名字
     * @param {String} otherName 无膜细胞器别名
     */
    getNameByOtherName: function(otherName){

        let name = '';
        condensateList.forEach((eachType,index) => {
            eachType.condensate.forEach((eachCondensate,index2) => {
                eachCondensate.otherNames.forEach((eachOtherName,index3) => {
                    if(eachOtherName === otherName){
                        name = eachCondensate.name;
                    }
                });
            });
        });

        return name;
    },
    /**
     * 获取所有无膜细胞器的别名列表
     */
    getOtherNameList: function(){
        let list = [];
        condensateList.forEach((eachType,index) => {
            eachType.condensate.forEach((eachCondensate,index2) => {
                eachCondensate.otherNames.forEach((eachOtherName, index3) => {
                    list.push(eachOtherName);
                })
            });
        });
        return list;
    },
    /**
     * 通过名字获取别名列表，用于回传接口
     * @param {String} name 无膜细胞器指定名
     */
    getOtherNameListByName: function(name){
        let list = [];
        condensateList.forEach((eachType,index) => {
            eachType.condensate.forEach((eachCondensate,index2) => {
                if (eachCondensate.name === name){
                    list = eachCondensate.otherNames;
                }
            });
        });
        return list;
    },
    /**
     * 根据别名判断是否有详细信息
     * @param {String} otherName 无膜细胞器别名
     */
    hasData: function(otherName){
        return utils.contain(this.getOtherNameList(),otherName);
    }
};

export default condensate;