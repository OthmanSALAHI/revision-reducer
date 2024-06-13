export const AddAction =(stg)=> {
    return {type: 'add', payload: stg}
}
export const EditAction =(stg)=> {
    return {type: 'edit', payload: stg}
}
export const DeleteAction =(id)=> {
    return {type: 'delete', payload: id}
}