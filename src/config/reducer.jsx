const initState = {
    stagiaires: [
        {id: 1, name: 'othman salahi', age:20},
        {id: 2, name: 'souhail bensaid', age:19},
        {id: 3, name: 'achraf boumour', age:21},
    ]
}

export default function reducer (state=initState, action) {
    switch (action.type) {
        case 'add':
            return {...state,stagiaires:[...state.stagiaires,action.payload]};
        case 'edit':
            const stagiaire = state.stagiaires.find((e)=> e.id === parseInt(action.payload.id))
            if (stagiaire){
                stagiaire.name = action.payload.name;
                stagiaire.age = action.payload.age;
            }
            return state;
            case 'delete':
                return {...state, stagiaires:[...state.stagiaires.filter((e)=> e.id !== parseInt(action.payload))]}
        default:
            return state;
    }

}