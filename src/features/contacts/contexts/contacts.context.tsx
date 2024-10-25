import React, { createContext, useContext, useState, ReactNode } from 'react';

interface FormData {
    dni: number;
    celular: number;
    price: number;
    name: string;
}

interface FormContextType {
    formData: FormData;
    setFormData: (data: FormData) => void;
}

const FormContext = createContext<FormContextType | undefined>(undefined);

export function FormProvider({ children }: { children: ReactNode }) {
    const [formData, setFormData] = useState<FormData>({
        dni: 0,
        celular: 0,
        price: 0,
        name: '',
    });

    return (
        <FormContext.Provider value={{ formData, setFormData }}>
            {children}
        </FormContext.Provider>
    );
}


export function useFormContext() {
    const context = useContext(FormContext);
    if (context === undefined) {
        throw new Error('useFormContext debe ser usado dentro de un FormProvider');
    }
    return context;
}
