import Dropdown from '../Dropdown/Dropdown';
import { useSelector, useDispatch } from 'react-redux';

const Card = ({
  item,
  price,
  image,
  btnClickHandler,
  btnText,
  quantity,
  selectHandler,
}) => {
  const thaliList = useSelector((state) => state.thali.thaliItem);
  const selectedList = useSelector((state) => state.thali.selectedItem);
  const dispatch = useDispatch();

  return (
    <>
      <div style={{ height: '400px', width: '280px' }} className='card'>
        <img
          style={{ height: '250px', width: '265px' }}
          src={image}
          className='card-img-top'
          alt='Fissure in Sandstone'
        />
        <div className='card-body'>
          <h5 className='card-title'>{item}</h5>
          <h6 className='card-text'>{price}</h6>
          <h6 className='card-text'>
            Qty: <Dropdown selected={quantity} selectHandler={selectHandler} />
          </h6>
          <button
            onClick={btnClickHandler}
            type='button'
            className='btn btn-primary'
            data-mdb-toggle='modal'
            data-mdb-target='#staticBackdrop'
          >
            {btnText}
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
