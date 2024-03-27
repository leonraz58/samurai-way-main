import {Field, InjectedFormProps, reduxForm} from "redux-form";
import React, {ComponentType} from "react";
import {createField, Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";

import {AppStateType} from "../../redux/redux-store";
import {Redirect} from "react-router-dom";
import style from "../common/FormsControls/FormsControls.module.css"
import {compose} from "redux";
import {loginTC} from "../../redux/auth-reducer";

type FormDataType = {
    email: string,
    password: string,
    rememberMe: boolean
    captcha: string
}

type Props = {
    captchaUrl: string | null
}

const LoginForm: React.FC<InjectedFormProps<FormDataType> & Props> = (props) => {
    return (

        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Login"} name={"email"} component={Input}
                       validate={[required]}
                />
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"} component={Input}
                       validate={[required]}
                />
            </div>
            <div>
                <Field component={Input} name={"rememberMe"} type="checkbox"/> remember me
            </div>

            {props.captchaUrl && <img src={props.captchaUrl} alt={'captcha-bot'}/>}
            {props.captchaUrl && createField(Input, 'text', 'captcha', 'enter text from image', [required], null)}

            {props.error && <div className={style.formSummaryError}>
                {props.error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

// @ts-ignore
const LoginReduxForm = reduxForm<FormDataType, Props>({form: 'login'})(LoginForm)

const Login = (props:any) => {
    const onSubmit = (formData: FormDataType) => {
        console.log(formData)
        props.loginTC(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }

    if (props.isAuth) {
        alert('Redirect to profile')
        return <Redirect to={"/profile"}/>
    }

    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
    </div>
}

type MapStateToPropsType = {
    isAuth: boolean
    captchaUrl: string | null
}
const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
})

type MapDispatchToPropsType = {
    loginTC: (email: string, password: string, rememberMe: boolean, captchaUrl: string) => void
}

const mapDispatchToProps: MapDispatchToPropsType = {
    loginTC: loginTC,
}

//export default connect(mapStateToProps, {loginTC})(Login)

export const LoginContainer = compose<ComponentType>( connect<MapStateToPropsType, MapDispatchToPropsType, void, AppStateType>(mapStateToProps, mapDispatchToProps))(Login)