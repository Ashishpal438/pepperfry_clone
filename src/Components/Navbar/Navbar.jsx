import React, { useContext } from 'react';
import styles from './Navbar.module.css';
import styled from 'styled-components';
import { FiSearch } from 'react-icons/fi';
import { RiShoppingCart2Line } from 'react-icons/ri';
import { BsHeart } from 'react-icons/bs';
import { HiOutlineUser } from 'react-icons/hi';
import MetaTab from './MetaTab';
import SearchTab from './SearchTab';
import SearchFun from './SearchFun';
import { ProductContext } from '../../Context/ProductContext';
import { Link } from 'react-router-dom';
// import SearchFun from './SearchFun';
import { Modal } from '@mui/material';
import MainCart from '../Home/Cart/MainCart';
import SignUp from './Login/SignUpModal/signup';
import LogIn from './Login/LoginModal/login';
import OTP from './Login/OtpModal/otp';


const NavBar = styled.div`
  padding: 1rem 6rem;
  border-bottom: 1px solid rgb(230, 230, 230);
  position: relative;
`;
const LeftNav = styled.div`
  float: left;
  // background:pink;
  width: 75%;
`;

const RightNav = styled.div`
  margin-left: 1.5rem;
  display: flex;
  width: 23%;
`;

const Li = styled.li`
  float: left;
  display: block;
  margin-right: 3rem;
  cursor: pointer;

  ${props => props.selected === props.subMenu ?
    ({
      color: "black",
      fontWeight: "bolder",
      borderBottom: "2px solid orange"
    }) :
    ({
      color: "gray"
    })
  }

`;
export const Navbar = () => {
  let { setPage } = useContext(ProductContext);
  const [subMenu, setSubMenu] = React.useState("shop");
  const [meta, setMeta] = React.useState("");
  const [searchKey, setSearchKey] = React.useState("");
  const [search, setSearch] = React.useState(false);
  const [searchOption, setSearchOption] = React.useState(false);
  const [loginVis, setLoginVis] = React.useState(false);
  const { loginModal, logInopen,  handleloginClose, handleLoginOpen, opencart,handleClosecart,handleOpencart,Auth}=useContext(ProductContext)
  
  const cancleMeta = () => {
    setMeta("");
  }

  const handleChange = (e) => {
    console.log("Search", search)
    setSearchKey(e.target.value)
    setSearch(false)
    setSearchOption(true);
  }

  const handleEmpty = () => {
    setSearchOption(false);
    setSearch(true);
  }

  const handleRemoveSearch = () => {
    setSearch(false)
  }
  return (
    <>
      <NavBar >
        <div style={{ display: "flex" }}>
          <LeftNav>
            <div style={{ display: "flex" }}>
              <Link to="/"><img src="/pepperfry-logo.png" width="200px" height="45px" alt='' /></Link>
              <ul className={styles.menu}>
                <Li selected="shop" subMenu={subMenu} onMouseOver={() => setSubMenu("shop")}>SHOP</Li>
                <Li selected="inspired" subMenu={subMenu} onMouseOver={() => setSubMenu("inspired")} >GET INSPIRED</Li>
                <Li selected="partner" subMenu={subMenu} onMouseOver={() => setSubMenu("partner")} >PARTNER</Li>
              </ul>
              {/* </div> */}
              <div className={styles.search}>
              <input type="text" placeholder="Door to happiness begins with a Search" value={searchKey} onChange={(e) => handleChange(e)} onClick={() => setSearch(true)} />
                <FiSearch className={styles.icon} />
              </div>
              {searchOption && <SearchFun word={searchKey} setSearchOption={handleEmpty}/>}
              {search && <SearchTab handleRemoveSearch={handleRemoveSearch} />}
            </div>
          </LeftNav>

          <RightNav>
            <div>
              <p>Enter Pincode</p>
              <p style={{ color: "orangered", fontSize: "0.9rem" }}>Find Pepperfry studio</p>
            </div>

            <div className={styles.profile}>
              <BsHeart onClick={()=> Auth?handleOpencart("wishlist"):alert("Please Login to view the wishlist")} className={styles.profileIcon} />
              <RiShoppingCart2Line onClick={()=> Auth?handleOpencart("mycart"):(alert("Please Login to view the cart"))} className={styles.profileIcon} />
              <Modal
                keepMounted
                open={opencart}
                onClose={handleClosecart}
              >
                <MainCart/>
              </Modal>
              <HiOutlineUser size="2rem" style={{ position: "relative" }} onMouseEnter={() => setLoginVis(true)} />
              {loginVis && (<div className={styles.loginVisible} onMouseLeave={() => setLoginVis(false)}>
                <button onClick={handleLoginOpen}>LOGIN/REGISTER</button>
                <Modal
                keepMounted
                open={logInopen}
                onClose={handleloginClose}
            >
            {loginModal==="signUp"?<SignUp/>:loginModal==="login"?<LogIn/>:<OTP/>}
            </Modal>
                <p>To access your account & manage orders</p>
              </div>)}
            </div>
          </RightNav>
        </div>

        <div className={styles.heading} style={{ display: "flex", position: "relative" }} onMouseLeave={() => setSubMenu("shop")} >

          {
            subMenu === "shop" ? (
              <ul className={styles.menu} >
                <li onMouseOver={() => setMeta("furniture")} >Furniture</li>
                <li onMouseOver={() => setMeta("Sofas and Recliners")} onClick={() => setPage("Sofas & Recliners")}>Sofas & Recliners</li>
                <li onMouseOver={() => setMeta("cabinetry")} onClick={() => setPage("Cabinetry")}>Cabinetry</li>
                <li onMouseOver={() => setMeta("beds")} onClick={() => setPage("Cabinetry")}>Beds</li>
                <li onMouseOver={() => setMeta("mattresses")} onClick={() => setPage("Mattresses")}>Mattresses</li>
                <li onMouseOver={() => setMeta("furnishings")} onClick={() => setPage("Furnishings")}>Furnishings</li>
                <li onMouseOver={() => setMeta("decor")} onClick={() => setPage("Decor")}>Decor</li>
                <li onMouseOver={() => setMeta("lighting")} onClick={() => setPage("Lighting")}>Lighting</li>
                <li onMouseOver={() => setMeta("appliances")} onClick={() => setPage("Appliances")}>Appliances</li>
                <li onMouseOver={() => setMeta("modular")} onClick={() => setPage("Modular")}>Modular</li>
              </ul>
            ) : subMenu === "inspired" ? (
              <ul className={styles.menu}>
                <li>Ideas</li>
                <li>Buying Guides</li>
                <li>Visit Studios</li>

              </ul>
            ) :
              (
                <ul className={styles.menu}>
                  <li>Sell on Pepperfry</li>
                  <li>Become a Franchise</li>
                  <li>Place Bulk Orders</li>
                  <li>Join Us As Design Partner</li>
                  <li>Careers</li>

                </ul>
              )
          }

          <h4 className={styles.head4}>Need Help?</h4>
        </div>

      </NavBar>

      {meta && <MetaTab currentSubMenu={meta} cancleMeta={cancleMeta} />}
    </>

  )
}