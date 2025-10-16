import { ref } from 'vue';

export function useForm<T>(initialValues: T) {
    const formValues = ref<T>({ ...initialValues });
    const errors = ref<Record<keyof T, string | null>>({} as Record<keyof T, string | null>);

    const setFieldValue = (field: keyof T, value: any) => {
        formValues.value[field] = value;
    };

    const validate = (validators: Record<keyof T, (value: any) => string | null>) => {
        for (const field in validators) {
            errors.value[field] = validators[field](formValues.value[field]);
        }
    };

    const resetForm = () => {
        formValues.value = { ...initialValues };
        errors.value = {} as Record<keyof T, string | null>;
    };

    return {
        formValues,
        errors,
        setFieldValue,
        validate,
        resetForm,
    };
}