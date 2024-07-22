import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const fetchImageUrl = (id) => `https://picsum.photos/id/${id * 10 + 1}/200/200`;

const products = Array.from({ length: 50 }, (_, index) => ({
  id: index + 1,
  name: `Product ${index + 1}`,
  price: `$${(index + 1) * 10}`,
  imageUrl: fetchImageUrl(index + 1) // Add image URL
}));

const ProductDetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const ProductImage = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 20px;
`;

const ProductName = styled.h2`
  font-size: 2rem;
  margin-bottom: 10px;
`;

const ProductPrice = styled.p`
  font-size: 1.5rem;
  color: #333;
`;

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <ProductDetailWrapper>
      <ProductImage src={product.imageUrl} alt={product.name} />
      <ProductName>{product.name}</ProductName>
      <ProductPrice>{product.price}</ProductPrice>
    </ProductDetailWrapper>
  );
}

export default ProductDetail;
