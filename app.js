const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const exphbs = require('express-handlebars');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const clientesRouter = require('./routes/clientes');
const listaRouter = require('./routes/lista');
const produtosRouter = require('./routes/produtos');

const app = express();

// Configuração da view engine Handlebars (sem pastas separadas)
app.engine('hbs', exphbs.engine({
  extname: 'hbs',
  defaultLayout: 'layout' // procura views/layout.hbs (já está em views)
}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// Middlewares
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Rotas
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/clientes', clientesRouter);
app.use('/lista', listaRouter);
app.use('/produtos', produtosRouter);

// Tratamento de erro 404
app.use((req, res, next) => {
  next(createError(404));
});

// Handler de erros
app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
