import React, { useEffect, useState } from 'react'
import { Container,Col,Row } from 'react-bootstrap';
import ProductCard from '../components/ProductCard';
import { useSearchParams } from 'react-router-dom';

const ProductAll =  ({authenticate}) => {
  const [productList,setProductList] = useState([]);
  const [query ,setQuery] = useSearchParams();
  const getProducts= async ()=>{
    
    let searchQuery = query.get('q') || "";

    console.log("쿼리값은",searchQuery);
    let data;
    // fetch 실패 시에, 예외처리 잘 안됨 ...!
    try{
        let url = `http://localhost:5000/products?q=${searchQuery}`;
        let response = await fetch(url);
        data=await response.json();
        data && setProductList(data);
    }catch(e){
      console.log("error",e);
      data = null;
      data && setProductList(data);
    }

  }

  useEffect(()=>{
  
    getProducts();
  },[query]);


  return (
    <div>
      전체상품 페이지
        <Container>
        <Row>
          {productList.map((menu)=>
              <Col lg={3}>
                <ProductCard item={menu} />
              </Col>
          )}
          </Row>
        </Container>     

    
    </div>
  )
}

export default ProductAll
