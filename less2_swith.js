var login = "admin";
var password = "TheMaster";
switch (login) {

    case "admin": {
        console.log('helou admin');

        switch (password) {
            case "TheMaster": {
                console.log('access is allowed')
            };
            break;
        case "oTher": {
            console.log('password:not true');
        }
        break;
        default: {
            console.log('password:not ');
        }
        }

    }
    break;

case "other": {
    console.log('login:not true');
}
break;
default: {
    console.log('login:not ');
}
}
//lol