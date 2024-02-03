import React, {useState} from "react";

export const ProfileStatus = (props: any) => {
    const [editMode, setEditMode] = useState(false)
    const activateEditMode = () => setEditMode(true)
    const deactivateEditMode = () => setEditMode(false)

    return (
        <div>
            {!editMode && <div>
                <span onClick={activateEditMode}>{props.status}</span>
            </div>}
            {editMode && <div>
                <input onClick={deactivateEditMode} autoFocus={true} value={props.status}/>
            </div>}
        </div>
    )
}