import {inspect} from "util";
import styles from "./FormsControls.module.css"

export const FormControl = ({input, meta, child, ...props}: any) => {
    //debugger
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

export const Input = (props: any) => {
    const {input, meta, child, ...restprops} = props;
    return <FormControl {...props}><input {...input}{...restprops}/></FormControl>
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