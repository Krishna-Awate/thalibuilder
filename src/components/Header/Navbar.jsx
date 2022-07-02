import { Link } from 'react-router-dom';
import routes from '../../routes/routes.json';
import { useSelector, useDispatch } from 'react-redux';

const Navbar = () => {
  const thaliList = useSelector((state) => state.thali.selectedItem);
  const dispatch = useDispatch();
  return (
    <>
      {/* <nav class='navbar fixed-top navbar-light bg-light'> */}
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark fixed-top'>
        <div className='container-fluid'>
          <a className='navbar-brand' href='#'>
            ThaliBuilder
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-mdb-toggle='collapse'
            data-mdb-target='#navbarTogglerDemo02'
            aria-controls='navbarTogglerDemo02'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <i className='fas fa-bars'></i>
          </button>
          <div className='collapse navbar-collapse' id='navbarTogglerDemo02'>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
              <li className='nav-item'>
                <Link
                  className='nav-link active'
                  aria-current='page'
                  to={routes.HOME}
                >
                  Home
                </Link>
              </li>
            </ul>
            <form className='d-flex input-group w-auto'>
              <span
                className='input-group-text text-white border-0'
                id='search-addon'
              >
                <Link className='nav-link' to={routes.CART}>
                  {thaliList.length}
                  <i className='fa-solid fa-cart-arrow-down fa-2x'></i>
                </Link>
              </span>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
