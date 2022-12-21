import React, { useRef } from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

function SignIn() {
    const country = useRef('');
    const email = useRef('');
    const form = useRef(0);
    return (
        <main>
            <Nav />
            <section>
                <form className="signin-form" action="" ref={form}>
                    <span>Login</span>
                    <label htmlFor="country">Welcome to AirVnV</label>
                    <select name="country" ref={country}>
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
                    <input name="email" type="email" ref={email} />
                    <button>Continue</button>
                    <span>or</span>
                    <button>Login with FaceBook</button>
                    <button>Login with Google</button>
                    <button>Login with Apple</button>
                </form>
            </section>
            <Footer />
        </main>
    );
}

export default SignIn;
