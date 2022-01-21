import React, { Component } from 'react';
import { Button, Icon } from 'antd-mobile';
import styles from './App.css';
import { Flex, WhiteSpace, WingBlank, Grid } from 'antd-mobile';
import axios from 'axios';

const PlaceHolder = ({ className = '', ...restProps }) => (
  <div className={`${className} placeholder`} {...restProps}>Block</div>
);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {products: []};
  }

  componentDidMount(){
    axios.get('/shop/product')
    .then((result) => {
      console.log(result.data.data.records);
      this.setState({
        products: result.data.data.records
      });
    })
  }
  
  render() {
    const { products } = this.state;
    const data = products.map((product) => ({
      icon: product.cover,
      text: product.title,
      description: product.description,
    }));
    return (
      <div className={styles.App}>
        <WingBlank size="sm">
          <WhiteSpace/>
          <Grid data={data}
            columnNum={2}
            renderItem={dataItem => (
              <div>
                <img src={dataItem.icon} style={{ width: '95%'}} alt="" />
                <div style={{ color: '#888', fontSize: '14px', margin: '12px' }}>
                  <span>品名：{dataItem.text}</span><br/>
                  <span>描述：{dataItem.description}</span>
                </div>
              </div>
            )}
            square={false}
            // className="not-square-grid"
          />
          {/* <Flex align="start" wrap="wrap">
            {products.map((product)=>(
              // <Flex.Item key={product.id}>
                <Product product={product}/>
              // </Flex.Item>
            ))}
          </Flex> */}
        </WingBlank>
      </div>
    );
  }
}

export default App;