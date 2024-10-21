const express = require('express');
const path = require("path");
const session = require('express-session');
const flash = require('connect-flash')
const helmet = require('helmet')
// import bcrypt from 'bcrypt';

const app = express();
//Helmet config
app.use(helmet());
app.use('/uploads', express.static('uploads'));

app.set('view engine', 'ejs');
app.use(express.static(path.join('./public')))
app.use(express.urlencoded({extended: false}));
app.use(session({
    secret : 'schoolbase',
    resave : true,
    saveUninitialized : true
}))
app.use(flash());

let login = require('./route/login.js')
let user = require('./route/subject.js')
let teacherlogin = require('./route/teacherlogin.js')
let classes = require('./route/class.js')
let teachers = require('./route/teachers.js')
let student = require('./route/student.js')
let index = require('./route/index.js');
let registerschool = require('./route/registerschool.js')
let first_term = require('./route/first_term.js')
let second_term = require('./route/second_term.js')
let third_term = require('./route/third_term.js')
let student_login = require('./route/student_login.js')
let student_login2 = require('./route/student_login2.js')
let student_login3 = require('./route/student_login3.js')
let studenthome = require('./route/studenthome.js')
let academic_session = require('./route/academicsession.js')
let chart = require('./route/chart.js')
let token = require('./route/token.js')

app.use('/token', token);
app.use('/chart', chart)
app.use('/academicsession', academic_session)
app.use('/studentHome', studenthome)
app.use('/student_login3', student_login3)
app.use('/student_login2', student_login2)
app.use('/student_login', student_login)
app.use('/third_term', third_term)
app.use('/second_term', second_term)
app.use('/first_term', first_term)
app.use('/registerschool', registerschool)
app.use('/', index)
app.use('/student', student)
app.use('/teachers', teachers)
app.use('/class', classes)
app.use('/teacher', teacherlogin)
app.use('/subject', user)
app.use('/login', login)

let port = 3000;
app.listen(port, function(err){
    if(err){
        throw err;
    }else{
        console.log(`app running on '${port}'`)
    }
})