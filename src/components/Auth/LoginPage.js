import React from 'react';
import '../../style/forms.css';
import '../../style/profiles.css';
import { FbLoginButton } from './FbLoginButton';
import { AuthLink } from './AuthLink';
import { FormTitle } from './FormTitle';
import { Login } from './Login';
import { Or } from './Or';
import { AppDeviceLinks } from './AppDeviceLinks';
import { Links } from '../Home/Secondary component/Links';
import { LanguageAndCredentials } from './LanguageAndCredentials';

export const LoginPage = () => {

  return (
        <div className='container'>
            <div className='login-form'>
                <FormTitle />
                <Login />
                <Or />
                <FbLoginButton id='fb-white' className='fb-icon white'/>
                <div id='log-in' className='links-container'>
                    <p id='li' className='links'>
                        Forgot password?
                    </p>
                </div>
            </div>
            <AuthLink text="Don't have an account?" link='Log in' />
            <AppDeviceLinks />
            <Links id='links-on-login-page'/>
            <LanguageAndCredentials />
        </div>
    );
}