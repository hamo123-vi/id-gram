import React from 'react';
import '../../style/forms.css';
import '../../style/profiles.css';
import { Links } from '../Home/Secondary component/Links';
import { AppDeviceLinks } from './AppDeviceLinks';
import { AuthLink } from './AuthLink';
import { FbLoginButton } from './FbLoginButton';
import { FormTitle } from './FormTitle';
import { LanguageAndCredentials } from './LanguageAndCredentials';
import { Or } from './Or';
import { Register } from './Register';

export const RegisterPage = () => {

  return (
        <div className='container'>
            <div className='register-form'>
                <FormTitle />
                <h2 className='sign-up-desc'>
                    Sign up to see photos and videos from your friends.
                </h2>
                <FbLoginButton id='fb' className='fb-icon blue'/>
                <Or />
                <Register />
                <div id='sign-up' className='links-container'>
                    <p className='links'>
                        By signing up, you agree to our &nbsp;
                            <span className='bold'>
                                Terms, Data policy &nbsp;
                            </span>
                        and &nbsp;
                            <span className='bold'>
                                Cookies policy
                            </span>
                    </p>
                </div>
            </div>
            <AuthLink text='Have an account?' link='Log in' />
            <AppDeviceLinks />
            <Links id='links-on-register-page'/>
            <LanguageAndCredentials />
        </div>
    );
}