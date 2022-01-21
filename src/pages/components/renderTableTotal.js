
/**
 * 展示表格总数的方法，收归方便调整样式
 * @param {Number} total 总数
 */
export default function renderTableTotal(total){
    return (
        <span>
            <span>Total </span>
            <span>{total}</span>
        </span>
    );
};