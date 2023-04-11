import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom'

const ProductDetail = ({item}) => {
  let {id} = useParams();
  const [product,setProduct] = useState();

  const getProductDetail= async ()=>{
    let url = `http://localhost:5000/products/${id}`
    let responsen = await fetch(url);
    let data = await responsen.json();
    console.log("data:",data);
    setProduct(data);
  }
  useEffect(()=>{
    getProductDetail();
  },[])
  // 23.04.07 옵션널 체이닝에서 오류나서, 버전 업그레이드 필요.
  return (
    <Container>
      <Row>
        <Col className='product-img'>
        <img src={product?.img}/>
        </Col>
      
        <Col>
        <div>{product?.title}</div>
        <div>{product?.price}</div>
        
        </Col>
      </Row>
    
    </Container>
  )
}

export default ProductDetail
