/* user из БД */

const user = {
    lastname: "Принцесса",
    name: "Эльза",
    email: "13gurina@mail.ru",
    id: "1",
    about: "Тут я рассказываю о себе",
    avatar: "https://kino-novosti.org.ua/uploads/posts/2017-07/1501049969115010499581elza-koroleva-iz-multfilma-holodnoe-serdce-.jpeg"
}

const users = {

    0:  {name: "Johan", lastname: "Jacobsen"},
    1:  {name: "Arnhild", lastname: "Corneliussen Ms"},
    2:  {name: "Fredrik", lastname: "Eliassen"},
    3:  {name: "Mari", lastname: "Corneliussen Ms"},
    4:  {name: "Katrine", lastname: "Enoksen Ms"},
    5:  {name: "Johan", lastname: "Corneliussen"},
    6:  {name: "Lisa", lastname: "Jacobsen Ms"},
    7:  {name: "Fredrik", lastname: "Ellefsen"},
    8:  {name: "Johan", lastname: "Farstad"},
    9:  {name: "Fredrik", lastname: "Eliassen"},
    10:  {name: "Katrine", lastname: "Haaland Ms"},
    11:  {name: "Fredrik", lastname: "Haaland"},
    12:  {name: "Fredrik", lastname: "Jacobsen"},
    13:  {name: "Mari", lastname: "Haaland Ms"},
    14:  {name: "Johan", lastname: "Farstad"},
    15:  {name: "Hannah", lastname: "Ellefsen Ms"}
}

export function getUser(){
    return user;
}

export function getUsers(){
    return users;
}
