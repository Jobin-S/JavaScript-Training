var user = {
    firstName : "Jobin",
    lastName : "S",
    role : "Admin",
    loginCount : 26,
    courseList : ["JavaScript"],
    getUserInfo : function (){
        console.log(`
        ${this.firstName} ${this.lastName} is the ${this.role} of the site.
        ${this.firstName} has logined ${this.loginCount} times and has ${this.courseList.length} enrolled courses. `)
    }
}

user.getUserInfo()