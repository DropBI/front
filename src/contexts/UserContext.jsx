// Context, Reducer, Provider, Hook
import { createContext, useContext, useReducer } from 'react';

const initialData = {
    currentStep: 0,
}

// Context
const UserContext = createContext(undefined);

// Reducer
// enum UserActions {
//     setCurrentStep,

// }
const userReducer = (state, action) => {
    switch(action.type) {
        case 'setCurrentStep':
            return {...state, currentStep: action.payload};
        default:
            return state;
    }
}

// Provider
export const UserProvider = ({children}) => {
    const [state, dispatch] = useReducer(userReducer, initialData);
    const value = { state, dispatch };
    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    );
}

// Context Hook
export const useUser = () => {
    const context = useContext(UserContext);
    if(context === undefined) {
        throw new Error('useUser precisa ser usado dentro do FormProvider');
    }
    return context;
}