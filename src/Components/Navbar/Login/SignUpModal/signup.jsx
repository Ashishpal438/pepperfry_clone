import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';
import { ProductContext } from '../../../../Context/ProductContext';
import styles from './styles.module.css'
import styled from '@emotion/styled';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p:4,
  
};

const SignUp = () => {
  const { setLoginModal } = React.useContext(ProductContext)
  
const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: '#e75a16',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#e75a16',
  },
});
  return (
    <div>
      <Box sx={style}>
        <div className={styles.signUp_main_container}>
          <img src="https://ii1.pepperfry.com/media/wysiwyg/banners/Web_IMG_17Dec_09022022.jpg" alt="" srcset="" width='100%'/>
          <div>
            <div className={styles.input_form}>
              <CssTextField className={styles.tf} id="standard-basic" label="Name" variant="standard"  fullWidth/>
              <br />
              <CssTextField id="standard-basic" label="Mobile No." variant="standard" />
              {/* <link>Verfiy with otp</link> */}
              <br />
              <CssTextField id="standard-basic" label="Email" variant="standard" fullWidth />
              <br />
              <CssTextField id="standard-basic" label="Password" variant="standard" type="password" fullWidth />
              <br />
              <button className={styles.register_btn} onClick={() => setLoginModal("login")} >Register</button>
              <Typography>By registering you agree to our <u>Terms & Conditions</u></Typography>
            </div>
            <div>
              <button className={styles.goto_login_btn} onClick={() => setLoginModal("login")}>Existng User? LogIn</button>
              <Typography >
                <span> OR Continue with </span> <img src="https://ii1.pepperfry.com/images/social_login_fb_2x.png" alt="" width="35px" /> 
                <img src="https://ii1.pepperfry.com/images/social_login_google_2x.png" alt="" width="35px"/>
              </Typography>
            </div>
          </div>
        </div>
      </Box>

    </div>
  );
}
export default SignUp