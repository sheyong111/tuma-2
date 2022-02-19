import { Card } from 'antd';

import "./innerCard.scss";

/**
 * 二次封装antd的Card组件，方便统一管理卡片样式，这个是卡片容器内部的卡片，样式有所修改
 */
export default function InnerCard(props){

    const {
        title,
        icon,
        wrapStyle,
        className,
        hideTitle
    } = props;

    // 渲染卡片头部的方法
    function renderCardTitle(){
        return (
            <div 
                /* className="innercard-title-wrap rps-theme-bgcolor rps-theme-bdcolor-sc" */ 
                className="innercard-title-wrap rps-theme-color rps-theme-bdcolor"
            >
                {icon}
                <span className="innercard-title-text" >{title}</span>
            </div>
        );
    };

    const cardHeadStyle = {
        "border": "none",
        "paddingLeft": "0px",
    };

    return (
        <Card title={!hideTitle && renderCardTitle()} headStyle={cardHeadStyle} style={wrapStyle} className={"innercard-wrap-shadow innercard-wrap-border " + className} >
            {props.children}
        </Card>
    );
};