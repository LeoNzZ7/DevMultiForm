import { createContext, ReactNode, useContext, useReducer } from "react";

type State = {
    currentStep: number;
    name: string;
    level: 0 | 1;
    email: string;
    gitHub: string;
}

type Action = {
    type: FormActions;
    payload: any;
}

type ContextType = {
    state: State;
    dispatch: (action: Action) => void;
}

type FormProviderProps = {
    children: ReactNode
}

const FormCotext = createContext<ContextType | undefined>(undefined);

const initialData: State = {
    currentStep: 0,
    name: '',
    level: 0,
    email: '',
    gitHub: ''
};

export enum FormActions {
    setCurrentStep,
    setName,
    setLevel,
    setEmail,
    setGitHub
};

const FormReducer = (state: State, action: Action) => {
    switch(action.type) {
        case FormActions.setCurrentStep:
            return {...state, currentStep: action.payload};
        case FormActions.setName:
            return {...state, name: action.payload};
        case FormActions.setLevel: 
            return {...state, level: action.payload};
        case FormActions.setEmail:
            return {...state, email: action.payload};
        case FormActions.setGitHub:
            return {...state, gitHub: action.payload};
        default:
            return state;
    };
};

export const FormProvider = ({children}: FormProviderProps) => {
    const [state, dispatch] = useReducer(FormReducer, initialData);
    const value = {state, dispatch};

    return (
        <FormCotext.Provider value={value} >
            {children}
        </FormCotext.Provider>
    );
};  

export const useForm = () => {
    const context = useContext(FormCotext);
    if(context === undefined) {
        throw new Error('useForm deve ser usa dentro dentro de um contexto');
    }
    return context;
};