//https://ii1.pepperfry.com/images/new_login_modal_bg_2020.jpg
import * as React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, Link, TextField } from '@mui/material';
import { ProductContext } from '../../../../Context/ProductContext'
import styles from './styles.module.css'
import styled from '@emotion/styled';
import { ContactsOutlined } from '@mui/icons-material';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 2,
};


const LogIn = () => {
  console.log(document.getElementById("standard-basic2"));
  const [userMail, setUserMail] = React.useState("")
  const [userpassword, setUserPassword] = React.useState("")
    console.log(userMail,userpassword)
  const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
      color: '#e75a16',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#e75a16',
    },
  });
  const { login_change, setLoginModal, authentication } = React.useContext(ProductContext);
  const handleLogin = (email, password) => {
    authentication(email, password)
  }
  return (
    <div>
      <Box sx={style}>
        <div className={styles.Login_main_container}>
          <img src="https://ii1.pepperfry.com/images/new_login_modal_bg_2020.jpg" alt="" srcset="" />
          <div>
            <div className={styles.login_form} >
              <CssTextField id="standard-basic" type="email" label="User email" variant="standard"
                value={userMail}
                onKeyPress={(e) => {
                  console.log(e);
                  setUserMail(e.currentTarget.value)}}
                 />
              <Link className={styles.login_Link} onClick={() => setLoginModal("otp")} underline="none">LogIn using OTP</Link>
              <CssTextField id="standard-basic" type="password" label="Password" variant="standard"
                value={userpassword} 
               onKeyPress={(e) => setUserPassword(e.currentTarget.value)}
                />
            </div>
            <button className={styles.Login_Btn} onClick={() => handleLogin(userMail, userpassword)}>Login</button>
            <Typography className={styles.fp}><u>Forgot Password?</u></Typography>

            <div className={styles.lower_part}>
              <button className={styles.register_Button} onClick={() => setLoginModal("signUp")}>New to Pepperfry? Register Here</button>
              <Typography>
                <span className={styles.continue_with}> OR Continue with </span> <img className={styles.social_img} src="https://ii1.pepperfry.com/images/social_login_fb_2x.png" alt="" width="35px" /> <img src="https://ii1.pepperfry.com/images/social_login_google_2x.png" alt="" width="35px" className={styles.social_img} />
              </Typography>
            </div>
          </div>
        </div>
      </Box>

    </div>
  );
}
export default LogIn