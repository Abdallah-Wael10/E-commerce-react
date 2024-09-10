import * as Yup from "yup"

export const Valid = Yup.object({

    first : Yup.string().min(3) .max(10) .required("please enter your first name"),
    email : Yup.string() .email("please enter valid email") .required("please enter email"),
    last : Yup.string().min(3) .max(10) .required("please enter your last name"),

    phone : Yup.string() .max(11) .matches(/^(?=.*\d{11})[\d\s\-\(\)]+$/,'Phone number must contain at least 11 digits')
    .required('Phone number is required'),

    password : Yup.string()     .matches(
        /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{1,10}$/,
        'Password must contain at least one letter, one number, one special character, and be up to 10 characters long'
      )
      .required('Password is required')
      .max(10, 'Password must be at most 10 characters long') ,
    cpassword : Yup.string() .oneOf([Yup.ref("password")], "password not matched"),


})
