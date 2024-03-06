export const updateObjectInArray = (items: Array<any>, itemId: number, objPropName: string, newObjProps: object) => {
    return items.map(u => {
        if (u[objPropName] === itemId) {
            return {...u, ...newObjProps}
        }
        return u
    })
}