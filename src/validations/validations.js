import * as yup from 'yup';

export const userValidation = yup.object({

    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required().min(8),
    telephone:yup.string().required(),
    numbers: yup.number().required(),
    cep: yup.number().required()

})


