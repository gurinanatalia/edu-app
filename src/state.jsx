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

    0:  {name: "Johan", lastname: "Jacobsen", id:2},
    1:  {name: "Arnhild", lastname: "Corneliussen Ms", id:12},
    2:  {name: "Fredrik", lastname: "Eliassen", id:21},
    3:  {name: "Mari", lastname: "Corneliussen Ms", id:22},
    4:  {name: "Katrine", lastname: "Enoksen Ms", id:32},
    5:  {name: "Johan", lastname: "Corneliussen", id:27},
    6:  {name: "Lisa", lastname: "Jacobsen Ms", id:82},
    7:  {name: "Fredrik", lastname: "Ellefsen", id:29},
    8:  {name: "Johan", lastname: "Farstad", id:20},
    9:  {name: "Fredrik", lastname: "Eliassen", id:32},
    10:  {name: "Katrine", lastname: "Haaland Ms", id:52},
    11:  {name: "Fredrik", lastname: "Haaland", id:62},
    12:  {name: "Fredrik", lastname: "Jacobsen", id:72},
    13:  {name: "Mari", lastname: "Haaland Ms", id:26},
    14:  {name: "Johan", lastname: "Farstad", id:92},
    15:  {name: "Hannah", lastname: "Ellefsen Ms", id:201}
}

export function getUser(userId){
    for (let i = 0; i < Object.keys(users).length; i++)
        if (users[i].id == userId) return users[i];
    return user;
}

export function getUsers(){
    return users;
}
