import {inspect} from "util";
import styles from "./FormsControls.module.css"
import {Field, WrappedFieldProps} from "redux-form";

export const FormControl = ({input, meta, child, ...props}: any) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
            <div>{props.children}</div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const Textarea = (props: any) => {
    const {input, meta, child, ...restprops} = props;
    return <FormControl {...props}><textarea {...input}{...restprops}/></FormControl>
}

export const Input = (props: WrappedFieldProps) => {
    const {input, meta, ...restProps} = props
    return <FormControl {...props}> <input {...input} {...restProps} /> </FormControl>
}

export const Textarea1 = ({input, meta, ...props}: any) => {
    //debugger
    const hasError = meta.touched && meta.error
    return (
        <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
            <div><textarea {...input}{...props}/></div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const Input1 = ({input, meta, ...props}: any) => {
    //debugger
    const hasError = meta.touched && meta.error
    return (
        <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
            <div><input {...input}{...props}/></div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const createField = (component: (props: WrappedFieldProps) => JSX.Element, type: string | null,
                            name: string, placeholder: string | null, validate: any | null,
                            text: string | null) => {
    return <div>
        <Field component={component} type={type} name={name}
               placeholder={placeholder} validate={validate}

        /> {text}
    </div>
}