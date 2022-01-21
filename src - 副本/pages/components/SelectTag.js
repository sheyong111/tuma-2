import { Tag } from 'antd';
import { useRef, useState } from 'react';

export default function SelectTag(props){
    const { label, value, closable, onClose } = props;
    const onPreventMouseDown = event => {
        event.preventDefault();
        event.stopPropagation();
    };
    const colorList = [
        'magenta', 'red', 'volcano', 'orange', 'gold', 'lime', 'green', 'cyan', 'blue', 'geekblue', 'purple'
    ];
    function getTagColor(){
        let randomIndex = parseInt(Math.random() * (0-11+1)+11);
        return colorList[randomIndex];
    };

    const [tagColor, updateTagColor] = useState(getTagColor());

    return (
        <Tag
          color={/* tagColor */'purple'}
          onMouseDown={onPreventMouseDown}
          closable={closable}
          onClose={onClose}
          className="rps-theme-color"
          style={{ marginRight: 3, fontSize: "16px", border: "none", paddingTop: "2px", paddingBottom: "2px" }}
        >
          {label}
        </Tag>
    );
};