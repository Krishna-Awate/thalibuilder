import { useSelector, useDispatch } from 'react-redux';
import Card from '../Card/Card';
import styles from '../ThaliItem/ThaliItem.module.css';
import {
  addItem,
  changeListQty,
  initialSelectList,
} from '../../reducer/thaliSlice';
import Modal from '../../Modal/Modal';

const ThaliItem = () => {
  const thaliList = useSelector((state) => state.thali.thaliItem);
  const selectedList = useSelector((state) => state.thali.selectedItem);
  const dispatch = useDispatch();

  const addItemHandler = (index) => {
    const selectedIndex = selectedList.findIndex((object) => {
      return object.item === thaliList[index].item;
    });

    const check = selectedList.find((e) => {
      if (e.item === thaliList[index].item) {
        return true;
      }
      return false;
    });
    // if (check) {
    //   dispatch(addQuantity(selectedIndex));
    // }
    if (!check) {
      dispatch(addItem({ index: index }));
    }
  };

  const dropListHandler = (e, index) => {
    const value = e.target.value;
    dispatch(changeListQty({ index: index, value: +value }));
  };

  const list = thaliList.map((item, index) => {
    return (
      <div key={index} className='row'>
        <Card
          item={item.item}
          price={`Price ${item.price} Rs`}
          image={item.image}
          quantity={item.quantity}
          btnText='Add to Cart'
          listIndex={index}
          btnClickHandler={() => addItemHandler(index)}
          selectHandler={(e) => dropListHandler(e, index)}
        />
        <Modal />
      </div>
    );
  });
  return (
    <>
      <div className={styles.container}>{list}</div>
    </>
  );
};

export default ThaliItem;
