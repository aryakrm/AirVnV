import React, { useRef } from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { Button } from '@mui/material';

{
    /* <Button variant="contained">Contained</Button>
<Button variant="contained" disabled>
  Disabled
</Button>
<Button variant="contained" href="#contained-buttons">
  Link
</Button> */
}

function SignIn() {
    const country = useRef('');
    const email = useRef('');
    const form = useRef(0);
    return (
        <main>
            <Nav />
            <section className="signin-wrapper">
                <form className="signin-wrapper-form" action="" ref={form}>
                    <span className="signin-form__header">Login</span>
                    <label htmlFor="country">Welcome to AirVnV</label>
                    <select
                        name="country"
                        className="signin-form__country"
                        ref={country}
                    >
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                    </select>
                    <input
                        name="email"
                        type="email"
                        ref={email}
                        className="signin-form__email"
                    />
                    <Button variant="contained" size="large">
                        Continue
                    </Button>
                    <span>or</span>
                    <Button
                        className="signin-form__faceBook"
                        variant="contained"
                        size="large"
                    >
                        Login with FaceBook
                    </Button>
                    <Button
                        className="signin-form__faceBook"
                        variant="outlined"
                        size="large"
                    >
                        Login with Google
                    </Button>
                    <Button
                        className="signin-form__faceBook"
                        variant="outlined"
                        size="large"
                    >
                        Login with Apple
                    </Button>
                </form>
            </section>
            <Footer />
        </main>
    );
}

export default SignIn;
