import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Card from '../Card/Card';
import styles from '../Cart/Cart.module.css';
import {
  removeItem,
  changeSelectedQty,
  initialSelectList,
} from '../../reducer/thaliSlice';
import routes from '../../routes/routes.json';

const Cart = () => {
  const selectedList = useSelector((state) => state.thali.selectedItem);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // useEffect(() => {
  //   dispatch(initialSelectList());
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem('list', JSON.stringify(selectedList));
  // }, [selectedList]);

  const dropSelectedHandler = (e, index) => {
    const value = e.target.value;
    dispatch(changeSelectedQty({ index: index, value: +value }));
  };

  const removeItemHandler = (index) => {
    dispatch(removeItem(index));
  };

  const selectedItem = selectedList.map((item, index) => {
    return (
      <div key={index} className='row'>
        <Card
          item={item.item}
          price={`Price ${item.price} Rs`}
          image={item.image}
          quantity={item.quantity}
          btnClickHandler={() => removeItemHandler(index)}
          btnText='Remove'
          selectHandler={(e) => dropSelectedHandler(e, index)}
        />
      </div>
    );
  });

  const sum = selectedList.reduce((prev, current) => {
    return prev + current.quantity * current.price;
  }, 0);

  return (
    <div>
      {selectedList.length > 0 && (
        <div>
          <div className={styles.thali}>
            <div className={styles.container}>{selectedItem}</div>
            <div className={styles.total}>
              <div className={styles.data}>
                Subtotal ({selectedList.length} items): ₹{sum}
                <div>
                  {/* <Link to={routes.PAYMENT}> */}
                  <button
                    onClick={() => navigate(routes.PAYMENT)}
                    className={styles.button}
                  >
                    Proceed to Buy
                  </button>
                  {/* </Link> */}
                </div>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      )}

      {selectedList.length < 1 && (
        <div style={{ marginTop: '100px', marginBottom: '100px' }}>
          <h1>Nothing in Cart</h1>
        </div>
      )}
    </div>
  );
};

export default Cart;
