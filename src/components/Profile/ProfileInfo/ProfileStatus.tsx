import React, {useEffect, useState} from "react";

type ProfileStatusType = {
    status: string
    updateStatusTC: (status: string) => void
}

export const ProfileStatus = (props: ProfileStatusType) => {


    console.log('props.status - ' + props.status)
    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)
    const activateEditMode = () => setEditMode(true)
    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatusTC(status)
    }

    const onStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

    useEffect(() => {
            setStatus(props.status)
    }, [props.status]);

    return (
        <div>
            {!editMode && <div>
                <span onClick={activateEditMode}>{status || '-----'}</span>
            </div>}
            {editMode && <div>
                <input onClick={deactivateEditMode} autoFocus={true} value={status}
                onChange={onStatusChange}
                />
            </div>}
        </div>
    )
}