import { useState } from 'react';
import Header from './Header';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import LoginPage from './LoginPage';
import { Link } from 'react-router-dom';

// Sample data
const categories = ['Electronics', 'Fashion', 'Home', 'Books', 'Sports', 'Toys'];

// Fetch random image URL
const fetchImageUrl = (id) => `https://picsum.photos/id/${id * 10 + 1}/200/200`;

const products = Array.from({ length: 50 }, (_, index) => ({
  id: index + 1,
  name: `Product ${index + 1}`,
  price: `$${(index + 1) * 10}`,
  imageUrl: fetchImageUrl(index + 1) // Add image URL
}));

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  margin: 0;
`;

const SidebarWrapper = styled.div`
  display: flex;
  flex: 1;
`;

const Sidebar = styled.div`
  width: 20%;
  background-color: #f4f4f4;
  padding: 20px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  overflow-y: auto;
  position: relative;

  @media (max-width: 768px) {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    z-index: 1000;
    display: ${props => (props.open ? 'block' : 'none')};
    background-color: #fff;
    box-shadow: none;
    padding: 10px;
  }
`;

const MainContent = styled.div`
  flex: 1;
  padding: 20px;
  background-color: #fff;
  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

const CategoryItem = styled.div`
  padding: 10px;
  font-size: 1.2rem;
  border-bottom: 1px solid #ddd;
  cursor: pointer;
  
  &:hover {
    background-color: #f0f0f0;
  }
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-top: 20px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const ProductCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 15px;
  text-align: center;
  background-color: #fafafa;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 10px;
`;

const ProductName = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 10px;
`;

const ProductPrice = styled.p`
  font-size: 1rem;
  color: #333;
`;

const ToggleButton = styled.div`
  display: none;
  font-size: 2rem;
  cursor: pointer;
  position: absolute;
  top: 20px;
  left: 20px;
  @media (max-width: 768px) {
    display: block;
  }
`;

const RegisteredContent = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const user = useSelector((state) => state.login.user);

  const toggleMenu = () => setMenuOpen(!menuOpen);


  return (
    <>
      {user ? (
        <Container>
          <Header />
          <SidebarWrapper>
            <Sidebar open={menuOpen}>
              <ToggleButton onClick={toggleMenu}>
                {menuOpen ? '✖' : '☰'}
              </ToggleButton>
              <h2>Kategoriler</h2>
              {categories.map((category, index) => (
                <CategoryItem key={index}>{category}</CategoryItem>
              ))}
            </Sidebar>
            <MainContent>
              <ProductGrid>
                {products.map(product => (
                  <ProductCard key={product.id}>
                    <Link to={`/item/${product.id}`}>
                    <ProductImage  src={product.imageUrl} alt={product.name} />
                    <ProductName>{product.name}</ProductName>
                    <ProductPrice>{product.price}</ProductPrice>
                    </Link>
                  </ProductCard>
                ))}
              </ProductGrid>
            </MainContent>
          </SidebarWrapper>
        </Container>
      ) : (
        <LoginPage />
      )}
    </>
  );
}

export default RegisteredContent;
