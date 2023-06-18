import s from './Dialogs.module.css'


type DialogsPropsType = {}
export const Dialogs = (Props: DialogsPropsType) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog+' '+s.active}>Димыч</div>
                <div className={s.dialog}>Вася</div>
            </div>
            <div className={s.messages}>
            <div className={s.message}>123</div>
                <div className={s.message}>312</div>
            </div>
        </div>

    )
}