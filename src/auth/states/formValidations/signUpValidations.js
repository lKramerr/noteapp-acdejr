
export const signUpValidations = {

    email: [ ( value ) => value.includes('@'), 'Debe ingresar un email válido' ],
    password: [ ( value ) =>  value.length >= 6, 'La contraseña debe tener más de 6 carácteres' ],
    // passwordRepeat: [ ( password1, password2 ) => password1 === password2, 'Las contraseñas no coinciden']

};