import React, { useRef, useState } from 'react';
import Nav from '../components/Nav';
import { Button, TextField } from '@mui/material';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

function SignIn() {
    const [country, setCountry] = useState('');
    const formRef = useRef();

    const handleCountryChange = (e) => {
        setCountry(e.target.value);
    };

    return (
        <div id="signin-page">
            <Nav />
            <main>
                <section id="signin-section">
                    <h3 id="signin-section__header">Login</h3>
                    <h2 id="signin-section__header2">Welcome Back!!</h2>
                    <form id="signin-section-form" action="" ref={formRef}>
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
                            id="signin-section-form__email"
                            label="Email"
                            variant="outlined"
                        />
                        <Button
                            variant="contained"
                            size="large"
                            id="signin-section-form__continue"
                        >
                            Continue
                        </Button>
                        <div id="signin-section-form__btns">
                            <span id="signin-section-form__btns__span">
                                <span id="signin-section-form__btns__span__line"></span>
                                or
                                <span id="signin-section-form__btns__span__line"></span>
                            </span>
                            <Button
                                id="signin-section-form__btns__faceBook"
                                variant="outlined"
                                size="large"
                            >
                                Login with FaceBook
                            </Button>
                            <Button
                                id="signin-section-form__btns__google"
                                variant="outlined"
                                size="large"
                            >
                                Login with Google
                            </Button>
                            <Button
                                id="signin-section-form__btns__apple"
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

export default SignIn;
