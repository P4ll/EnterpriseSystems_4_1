export default {
  reg: {
    name: 'Name',
    login: 'Login',
    password: 'Password',
    passwordConf: 'Password confirmation',
    passport: 'Passport',
    passportHint: 'Mask: ####-######',
    birthday: 'Birthday',
    birthdayHint: 'Mask: ##.##.####',
    signUp: 'Sign up',
    regSucc: 'You have successfully signed up!',
    errors: {
      nameErrorMsg: "Name can't be empty!",
      loginErrorMsg: "Login can't be emty or contain non-latin letters!",
      passwordErrorMsg: 'Password must be 3 or more symbols long!',
      passwordConfErrorMsg: "Passwords doesn't match!",
      passportErrorMsg: 'Passport mask is XXXX-XXXXXX!',
      birthdayErrorMsg: 'Date mask is DD.MM.YYYY!',
      registrationErrorMsg: 'Login is already taken!'
    }
  },
  profile: {
    saveLabel: 'Save'
  },
  app: {
    signInLabel: 'Sign in',
    signOutLabel: 'Sign out',
    registrationLabel: 'Sign up',
    greetings: 'Hi',
    menuLabel: 'Project menu',
    profileLabel: 'Profile',
    graphsLabel: 'Graph'
  },
  graph: {
    paramsLabel: 'Parameters',
    newFunctionLabel: 'Add new function',
    functionsLabel: 'Functions',
    fromLabel: 'From',
    toLabel: 'To',
    colorLabel: 'Color',
    plotTitle: 'Graph of Ax^2 + Bx + C',
    menu: {
      cancel: 'Cancel',
      save: 'Save',
      title: 'Edit parameters',
      paramA: 'Parameter A',
      paramB: 'Parameter B',
      paramC: 'Parameter C',
      errors: {
        emptyStrMsg: 'String is empty!',
        invalidNumberMsg: 'Input value is not a number!'
      }
    }
  },
  auth: {
    signIn: 'Sign in',
    generalMsg: 'Enter login and password!',
    authInit: '',
    authErrorMsg: 'Authorization error!',
    authSuccMsg: 'Authorization is successful!'
  }
}
