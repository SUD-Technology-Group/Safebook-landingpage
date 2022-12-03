const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const handlebars = require('express-handlebars');
const session = require('express-session');
const flash = require('req-flash');
const db = require('./config/db');

const indexRouter = require('./src/routes/index');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'src/views'));
app.set('view engine', 'hbs');
app.engine(
  'hbs',
  handlebars.engine({
    extname: 'hbs',
    helpers: {
      when: function (operand_1, operator, operand_2, options) {
        let operators = {
          //  {{#when <operand1> 'eq' <operand2>}}
          eq: (l, r) => l == r, //  {{/when}}
          noteq: (l, r) => l != r,
          gt: (l, r) => +l > +r, // {{#when var1 'eq' var2}}
          gteq: (l, r) => +l > +r || l == r, //               eq
          lt: (l, r) => +l < +r, // {{else when var1 'gt' var2}}
          lteq: (l, r) => +l < +r || l == r, //               gt
          or: (l, r) => l || r, // {{else}}
          and: (l, r) => l && r, //               lt
          '%': (l, r) => l % r === 0, // {{/when}}
        };
        let result = operators[operator](operand_1, operand_2);
        if (result) return options.fn(this);
        return options.inverse(this);
      },
    },
  })
);

app.use(logger('dev'));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: false, limit: '50mb' }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({ secret: '123' }));
app.use(flash());

db.connect();

app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error', { layout: false });
});

module.exports = app;
