import TitleWithTip from "./TitleWithTip";
import condensateFunc from "../../module/condensate";
import { Tooltip, Button, Input, Space } from 'antd';
import { PlusCircleOutlined, SearchOutlined, ClearOutlined, CheckOutlined, CheckCircleOutlined } from '@ant-design/icons';
import titleTips from "../../module/titleTips";
import React from "react";

const { EvidenceTypeTip, RPSIdTip, LLPSIdTip, DiseaseTip, VariantsTip } = titleTips;

function renderCondensate(condensateString){
    if(!condensateString){
        return (
            <span>-</span>
        );
    }
    let condensateList = condensateString.split(","); // 注意，这个字符串不是用逗号分隔，而是还有个空格，嘿嘿
    if(condensateList.length <= 2){
        return (
            <div>
                {condensateList.map((condensateName, index) => {
                    return (
                        <div key={index} style={{whiteSpace: 'nowrap'}}>
                            {condensateFunc.hasData(condensateName) ? <a target="_blank" href={`./#/condensateDetail/${condensateFunc.getNameByOtherName(condensateName)}`} >{condensateName}</a> : condensateName}
                            {(index < condensateList.length-1) ? ", " : ""}
                        </div>
                    );
                })}
            </div>
        );
    } else {

        let displayList = condensateList.splice(0,2); // 前两个元素正常展示
        let tooltipList = condensateList; // 剩下的放在tooltip里面展示

        function TootipContent(props){

            const { list } = props;

            return (
                <div style={{whiteSpace: "nowrap"}} className="rps-theme-color-sc" >
                    {list.map((condensateName, index) => {
                        return (
                            <div key={index} >
                                {condensateFunc.hasData(condensateName) ? <a target="_blank" href={`./#/condensateDetail/${condensateFunc.getNameByOtherName(condensateName)}`} >{condensateName}</a> : condensateName}
                                {/* {(index < displayList.length-1) ? ", " : ""} */}
                            </div>
                        );
                    })}
                </div>
            );
        };

        return (
            <div style={{whiteSpace: "nowrap"}} className="rps-theme-color-sc" >
                {displayList.map((condensateName, index) => {
                    return (
                        <div key={index} >
                            {condensateFunc.hasData(condensateName) ? <a target="_blank" href={`./#/condensateDetail/${condensateFunc.getNameByOtherName(condensateName)}`} >{condensateName}</a> : condensateName}
                            {/* {(index < displayList.length-1) ? ", " : ""} */}
                        </div>
                    );
                })}
                <Tooltip color="#fff" placement="bottom" title={<TootipContent list={tooltipList} />} >
                    <PlusCircleOutlined style={{fontSize: "20px", cursor: "pointer"}} />
                </Tooltip>
            </div>
        );
    }
};

/**
 * 渲染表格中的数字按钮
 * @param {Number} text 按钮上的数字
 * @param {String} rpsId 点击后跳转到对应的RPS详情页
 * @param {String} columnName 用于判断跳转后滚动到哪个表格
 * @returns 
 */
function renderNumberButton(text, rpsId, columnName){

    const tableDomIdMap = {
        "rbpCount": "RNA-RBP-Binding",
        "rnaInteraction": "RNA-RNA-Binding",
        "modificationCount": "RNA-Modification",
        "mutationCount": "RNA-Mutation"
    };

    return (
        <React.Fragment>
            {text ?
                <Button 
                    /* className="rps-theme-color-sc rps-theme-bdcolor-sc" */
                    type="primary" 
                    // type="default"
                    shape="circle" 
                    disabled={text?false:true} 
                    style={{padding: "3px", boxShadow: "1px 1px 2px 2px rgba(0,0,0,0.3)"}} 
                    href={`./#/rpsDetail/${rpsId}/${tableDomIdMap[columnName]}`} 
                    target="_blank" 
                >
                    <span>
                        {text || "-"}
                    </span>
                </Button>
                :
                <span>-</span>
            }
        </React.Fragment>
    );
};

/**
 * 渲染表格中是否疾病相关这里的按钮
 * @param {String} hasDisease 
 */
function renderDiseaseButton(hasDisease, rpsId){
    return (
        <React.Fragment>
            {hasDisease === 'Yes' ? 
            <Button 
                type="primary" 
                shape="circle" 
                icon={<CheckOutlined />} 
                style={{padding: "3px", boxShadow: "1px 1px 2px 2px rgba(0,0,0,0.3)", backgroundColor: "#d0648a", borderColor: "#d0648a"}} 
                href={`./#/rpsDetail/${rpsId}/RNA-Associated-Disease`} 
                target="_blank" 
            ></Button>
            :
            <span>-</span>
            }
        </React.Fragment>
    );
};


/**
 * 获取RPS表格列的方法，方便传参进行一些个性化
 * @param {Boolean} allowSearchGene 是否允许筛选geneSymbol
 */
function getRPSTableColumns(allowSearchGene){

    /**
     * 搜索RPS结果展示表格的columns，目前用于search页和browse页，抽取以保持统一设置
     */
    const rpsTableColumns = [
        { title: <TitleWithTip title="RPS ID" tooltip={<RPSIdTip />} />, dataIndex: "rpsId", key: "rpsId", render: (text, item, index) => <a target="_blank" href={`./#/rpsDetail/${item.rpsId}`} >{text}</a> },
        { 
            title: "Gene symbol", 
            dataIndex: "geneName", 
            key: "geneName",
            onHeaderCell: () => {
                return {
                    style: {whiteSpace: "nowrap"}
                }
            },
            render: (text) => <span>{text || "-"}</span>,
            filterDropdown: allowSearchGene ? ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => {
                return (
                    <div style={{padding: 8}} >
                        <Space>
                            <Input
                                value={selectedKeys[0]}
                                onChange={event => {
                                    setSelectedKeys(event.target.value ? [event.target.value] : [])
                                }}
                                onPressEnter={confirm}
                                style={{display: "inline-block", width: "150px"}}
                            />
                            <Button type='primary' icon={<SearchOutlined />} onClick={confirm} />
                            <Button icon={<ClearOutlined />} onClick={clearFilters} />
                        </Space>
                    </div>
                );
            }:undefined,
            filterIcon: filtered => <SearchOutlined className={(filtered ? "rps-theme-color" : "")} />
        },
        { title: "Natural/ Synthetic", dataIndex: "rnaSource", key: "rnaSource" },
        { title: "RNA type", dataIndex: "rnaType", key: "rnaType", render: (text) => <span>{text || "-"}</span> },
        { title: "Organism", dataIndex: "rnaOrganism", key: "rnaOrganism", render: (text) => <span>{text || "-"}</span> },
        { title: <TitleWithTip title="LLPS ID" tooltip={<LLPSIdTip />} />, dataIndex: "llpsId", key: "llpsId" , render: (text, item, index) => item.llpsId ? <a target="_blank" href={`./#/llpsDetail/${item.llpsId}`} >{text}</a> : <span>-</span>},
        { title: "Condensate", dataIndex: "condensate", key: "condensate", render: (text, item, index) => renderCondensate(text) },
        /* { title: "Cell line/Tissue", dataIndex: "materials", key: "materials", render: (text) => <span>{text || "-"}</span> }, */
        { title: <TitleWithTip title="Evidence type" tooltip={<EvidenceTypeTip />} />, dataIndex: "evidenceType", key: "evidenceType" },
        /* { title: "PMID", dataIndex: "pmid", key: "pmid", render: (text) => <a target="_blank" href={`https://pubmed.ncbi.nlm.nih.gov/${text}/`} >{text}</a> }, */
        { title: "RBP interactions", dataIndex: "rbpCount", key: "rbpCount", width: 100, render: (text, item, index) => renderNumberButton(text, item.rpsId, "rbpCount") },
        { title: "RNA interactions", dataIndex: "rnaInteraction", key: "rnaInteraction", render: (text, item, index) => renderNumberButton(text, item.rpsId, "rnaInteraction") },
        { title: "RNA modifications", dataIndex: "modificationCount", key: "modificationCount", render: (text, item, index) => renderNumberButton(text, item.rpsId, "modificationCount") },
        { title: <TitleWithTip title="Variants" tooltip={<VariantsTip />} />, dataIndex: "mutationCount", key: "mutationCount", render: (text, item, index) => renderNumberButton(text, item.rpsId, "mutationCount")},
        { title: <TitleWithTip title="Disease" tooltip={<DiseaseTip />} />, dataIndex: "disease", key: "disease", render: (text, item, index) => renderDiseaseButton(text, item.rpsId) },
    ];

    return rpsTableColumns;

};

export default getRPSTableColumns;