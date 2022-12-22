import React, { useRef, useState } from 'react';
import Nav from '../components/Nav';
import { Button, TextField } from '@mui/material';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

function SignUp() {
    const [country, setCountry] = useState('');
    const formRef = useRef();

    const handleCountryChange = (e) => {
        setCountry(e.target.value);
    };
    return (
        <div id="signup-page">
            <Nav />
            <main>
                <section id="signup-section">
                    <h3 id="signup-section__header">SignUp</h3>
                    <h2 id="signup-section__header2">Welcome to AirVnV</h2>
                    <form id="signup-section-form" action="" ref={formRef}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">
                                Country
                            </InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={'put Value here'}
                                label="Country"
                            >
                                <MenuItem value={'USA'}>USA</MenuItem>
                                <MenuItem value={'Germany'}>Germany</MenuItem>
                                <MenuItem value={'Romania'}>Romania</MenuItem>
                            </Select>
                        </FormControl>
                        <TextField
                            fullWidth
                            id="signup-section-form__email"
                            label="Email"
                            variant="outlined"
                        />
                        <Button
                            variant="contained"
                            size="large"
                            id="signup-section-form__continue"
                        >
                            Continue
                        </Button>
                        <div id="signup-section-form__btns">
                            <span id="signup-section-form__btns__span">
                                <span id="signup-section-form__btns__span__line"></span>
                                or
                                <span id="signup-section-form__btns__span__line"></span>
                            </span>
                            <Button
                                id="signup-section-form__btns__faceBook"
                                variant="outlined"
                                size="large"
                            >
                                Login with FaceBook
                            </Button>
                            <Button
                                id="signup-section-form__btns__google"
                                variant="outlined"
                                size="large"
                            >
                                Login with Google
                            </Button>
                            <Button
                                id="signup-section-form__btns__apple"
                                variant="outlined"
                                size="large"
                            >
                                Login with Apple
                            </Button>
                        </div>
                    </form>
                </section>
            </main>
        </div>
    );
}

export default SignUp;
