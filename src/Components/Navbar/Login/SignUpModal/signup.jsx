import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';
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
    p: 4,

};

const SignUp = () => {
    const { setLoginModal,registerUser } = React.useContext(ProductContext)

    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        password: '',
        mobile: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value   
        })
    }

    const handleSubmit = () => {
        registerUser(formData)
    }
    
    return (
        <div>
            <Box sx={style}>
                <div className={styles.signUp_main_container}>
                    <img src="https://ii1.pepperfry.com/media/wysiwyg/banners/Web_IMG_17Dec_09022022.jpg" alt="img" width='100%' />
                   
                    <div>

                        <div className={styles.input_form}>
                            <TextField id="standard-basic1" name="name" color="warning" label="Name" variant="standard" fullWidth onChange={(e) => handleChange(e)} />
                            <br />
                            <TextField id="standard-basic2" name="mobile" color="warning" label="Mobile No." variant="standard" onChange={(e) => handleChange(e)}/>
                            {/* <link>Verfiy with otp</link> */}
                            <br />
                            <TextField id="standard-basic3" name="email" color="warning" label="Email" variant="standard" fullWidth onChange={(e) => handleChange(e)}/>
                            <br />
                            <TextField id="standard-basic4" name="password" color="warning" label="Password" variant="standard" type="password" fullWidth onChange={(e) => handleChange(e)}/>
                            <br />
                            <button className={styles.register_btn} onClick={() => {
                                 handleSubmit()
                                 alert('Registered Successfully')
                                 setLoginModal("login")
                            }} >Register</button>
                            <Typography>By registering you agree to our <u>Terms & Conditions</u></Typography>
                        </div>


                        <div>
                            <button className={styles.goto_login_btn} onClick={() => setLoginModal("login")}>Existng User? LogIn</button>
                            <Typography >
                                <span> OR Continue with </span> <img src="https://ii1.pepperfry.com/images/social_login_fb_2x.png" alt="" width="35px" />
                                <img src="https://ii1.pepperfry.com/images/social_login_google_2x.png" alt="" width="35px" />
                            </Typography>
                        </div>


                    </div>

                </div>
            </Box>

        </div>
    );
}
export default SignUp