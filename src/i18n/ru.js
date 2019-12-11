export default {
  reg: {
    name: 'Имя',
    login: 'Логин',
    password: 'Пароль',
    passwordConf: 'Подтверждение пароля',
    passport: 'Паспорт',
    passportHint: 'Маска: ####-######',
    birthday: 'День рождения',
    birthdayHint: 'Маска: ##.##.####',
    signUp: 'Зарегистрироваться',
    regSucc: 'Регистрация прошла успешно!',
    errors: {
      nameErrorMsg: 'Имя не может быть пустым!',
      loginErrorMsg: 'Логин не должен быть пустым или содержать символы отличные от английского алфавита!',
      passwordErrorMsg: 'Длинна пароля должна составлять не менее 3 символов!',
      passwordConfErrorMsg: 'Пароли не совпадают!',
      passportErrorMsg: 'Паспортные данные должны соответствовать шаблону XXXX-XXXXXX!',
      birthdayErrorMsg: 'Дата должна соответствовать шаблону ДД.ММ.ГГГГ!',
      registrationErrorMsg: 'Пользователь с таким ником уже существует!'
    }
  },
  profile: {
    saveLabel: 'Сохранить'
  },
  app: {
    signInLabel: 'Вход',
    signOutLabel: 'Выход',
    registrationLabel: 'Регистрация',
    greetings: 'Привет',
    menuLabel: 'Меню проекта',
    profileLabel: 'Профиль',
    graphsLabel: 'График'
  },
  graph: {
    paramsLabel: 'Параметры',
    newFunctionLabel: 'Добавить новую функцию',
    functionsLabel: 'Фунции',
    fromLabel: 'От',
    toLabel: 'До',
    colorLabel: 'Цвет',
    plotTitle: 'График функции Ax^2 + Bx + C',
    menu: {
      cancel: 'Отменить',
      save: 'Сохранить',
      title: 'Редактирование параметров',
      paramA: 'Параметр A',
      paramB: 'Параметр B',
      paramC: 'Параметр C',
      errors: {
        emptyStrMsg: 'Строка пуста!',
        invalidNumberMsg: 'Введенное значение не является числом!'
      }
    }
  },
  auth: {
    signIn: 'Войти',
    generalMsg: 'Введите логин и пароль!',
    authInit: 'Введите логин и пароль!',
    authErrorMsg: 'Ошибка авторизации!',
    authSuccMsg: 'Авторизация прошла успешно!'
  }
}
