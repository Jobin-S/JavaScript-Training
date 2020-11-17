var getUserRole = function (name, role){
    switch (role) {
        case "admin":
            return `${name} is an admin and have access to all`
        case "subadmin":
            return `${name} is an subadmin and can edit/delete courses`
        case "pretest":
            return `${name} is an preptest and can edit/delete test`
        case "user":
            return `${name} is an user and can consume the courses`    
    
        default:
            break;
    }
}

var getRole = getUserRole("jobin", "admin")
console.log(getRole);