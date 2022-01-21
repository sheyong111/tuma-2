
/**
 * @namespace 数据转换对象
 */
let matchObj = {

    /**
     * LLPS过程发生定位枚举对象
     * @deprecated
     */
    locationMap: {
        1: "Cytoplasm",
        2: "Nucleus",
    },

    /**
     * LLPS实验类型枚举转换对象
     * @deprecated
     */
    experimentTypeMap: {
        1: "in vivo",
        2: "in vitro",
        3: "in vivo, in vitro"
    },

    /**
     * LLPS实验数据来源枚举转换对象
     * @deprecated
     */
    sourceMap: {
        1: "Reviewed",
        2: "High-throughput",
        3: "Predicted"
    },

    /**
     * RNA来源枚举转换对象
     * @deprecated
     */
    rnaSourceMap: {
        1: "Natural",
        2: "Synthetic"
    },

    /**
     * 搜索关键字的类型列表
     */
    keyWordsTypeList: [
        /* {label: "RNA Name", value: "rnaName"}, */
        {label: "Gene symbol", value: "geneName"},
        /* {label: "LLPS ID", value: "llpsId"},
        {label: "RPS ID", value: "rpsId"}, */
        {label: "Ensembl gene ID", value: "ensemblGeneId"},
        {label: "Ensembl transcript ID", value: "ensemblTranscriptId"}
    ],

    /**
     * Browse页面转换一些值的对象，是个非常恶心的写法，接口传参是需要“展示用的字段”，而前端json保存的一些数据需要“值”进行读取，我也不想搞成这样的。。。
     */
    browseValueLabelMap: { // 转换值与展示文本的对象
        "reviewed": "Reviewed",
        "highThroughput": "High-throughput",
        "predicted": "Predicted"
    }

};

export default matchObj;