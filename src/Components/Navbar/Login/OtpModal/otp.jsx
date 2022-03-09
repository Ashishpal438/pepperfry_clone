//https://ii1.pepperfry.com/images/new_login_modal_bg_2020.jpg
import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Box, Link, TextField } from '@mui/material';
import { ProductContext } from '../../../../Context/ProductContext';
import styles from './styles.module.css'
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 2
};

const OTP = () => {
 
    const { setLoginModal, handleloginClose } = React.useContext(ProductContext);
    const [mobile, setMobile] = React.useState("")
    const [otpDisabled, setotpDisabled] = React.useState(true)
    const handleotp = () => {
        console.log(mobile);
        if (mobile.length === 10) {
            setotpDisabled(false);
        }
        else {
            alert("enter a valid no.");
        }

    }
    const submitOtp = () => {
        handleloginClose()
    }
    return (
        <div>
            <Box sx={style}>
                <div className={styles.OTP_main_container}>
                    <img src="https://ii1.pepperfry.com/images/new_login_modal_bg_2020.jpg" alt="" />
                    <div>
                        <div>
                            <div className={styles.otp_form}>
                            <TextField id="standard-basic" color="warning" label=" Mobile Number" variant="standard" fullWidth value={mobile} onChange={(e) => setMobile(e.currentTarget.value)} />
                                <Link style={{
                                color: '#e75a16',
                                textDecoration: 'none',
                                fontSize: '16px',
                                cursor: 'pointer'
                            }} onClick={() => setLoginModal("login")} underline='none'>Login Using Password</Link>
                               
                            <TextField id="standard-basic" color="warning" label="OTP" variant="standard" fullWidth disabled={otpDisabled} />
                           
                            </div>
                            <br />
                            <button className={styles.Get_OTP_Btn} onClick={otpDisabled ? (handleotp) : (submitOtp)}>{otpDisabled ? "Get OTP" : "Submit Otp"}</button>
                        </div>
                        <div className={styles.lowerPart}>
                            <button onClick={() => setLoginModal("signUp")} className={styles.register_Button} >New to Pepperfry? Register Here</button>
                            <Typography >
                                <span className={styles.continue_with}> OR Continue with </span> <img className={styles.social_img} src="https://ii1.pepperfry.com/images/social_login_fb_2x.png" alt="" width='35px' /> <img src="https://ii1.pepperfry.com/images/social_login_google_2x.png" alt="" width='35px' className={styles.social_img} />
                            </Typography>
                        </div>
                    </div>
                </div>

            </Box>
        </div>
    );
}
export default OTP