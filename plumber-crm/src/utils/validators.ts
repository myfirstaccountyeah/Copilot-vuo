// src/utils/validators.ts

export const isRequired = (value: string): boolean => {
    return !!value.trim();
};

export const isEmail = (value: string): boolean => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(value);
};

export const isPhoneNumber = (value: string): boolean => {
    const phonePattern = /^\+?[0-9]{10,15}$/;
    return phonePattern.test(value);
};

export const isPositiveNumber = (value: number): boolean => {
    return value > 0;
};

export const isValidDate = (value: string): boolean => {
    const datePattern = /^\d{4}-\d{2}-\d{2}$/;
    return datePattern.test(value);
};