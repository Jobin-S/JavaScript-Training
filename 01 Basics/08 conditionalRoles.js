var user = "subadmin";

switch (user) {
    case "admin":
        console.log("You have full access");
        break;
    case "subadmin":
        console.log("You can edit or delete course");
        break;
    case "testadmin":
        console.log("You can edit or delete tests");
        break;
    case "user":
        console.log("You can consume courses");
        break;        
    default:
        console.log("Trial user");
        break;
}