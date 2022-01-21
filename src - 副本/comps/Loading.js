import { Spin } from 'antd';

export default function Loading(props){
    return (
        <div style={{ textAlign: "center", marginTop: "100px", marginBottom: "100px", position: 'relative' }} >
            <span style={{fontSize: "30px", color: '#fff'}} >Loading...</span><Spin size="large" />
        </div>
    );
}