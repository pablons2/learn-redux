import { useSelector } from 'react-redux';
import * as Styles from "./styles";
import CartItem from '../cart-item';

const Cart = ({ isVisible, setIsVisible }) => {
  const handleEscapeAreaClick = () => setIsVisible(false);
  
  // Utilize o useSelector para extrair diretamente o estado do cartReducer
  const { products } = useSelector(state => state.cartReducer);

  return (
    <Styles.CartContainer isVisible={isVisible}>
      <Styles.CartEscapeArea onClick={handleEscapeAreaClick} />
      <Styles.CartContent>
        <Styles.CartTitle>Seu Carrinho</Styles.CartTitle>
        {products.map(product => <CartItem product={product} key={product.id} />)}
      </Styles.CartContent>
    </Styles.CartContainer>
  );
};

export default Cart;
