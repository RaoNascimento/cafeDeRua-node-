var app = require('./config/server')

//var rotaNoticias = require('./app/routes/noticias');
//rotaNoticias(app);

//var rotahome = require('./app/routes/home');
//rotahome(app);

//var rotaFormulario_inclusao_noticias = require('./app/routes/formulario_inclusao_noticia');
//rotaFormulario_inclusao_noticias(app);

app.listen(3000, function(){
    console.log('Sever ON');
});
