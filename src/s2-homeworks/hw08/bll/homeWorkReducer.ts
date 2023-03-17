import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
             switch (action.payload){ case "up": {
                 const collatore = new Intl.Collator('ru-RU')
                let editState = state.sort((a,b)=>collatore.compare(a.name,b.name))

                 return editState}
             }
            switch (action.payload){ case "down": {
                const collatore = new Intl.Collator('ru-RU')
                let editState = state.sort((a,b)=>collatore.compare(b.name,a.name))

                return editState
               }
            }
               // need to fix
        }
        case 'check': {
switch (action.payload){

}
            return state.filter(el => el.age > 18) // need to fix
        }
        default:
            return state
    }
}
