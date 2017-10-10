module.exports = function(application) {

    application.get('/doacoes', function(req, res) {
        application.app.controllers.doacoes.doacoes(application, req, res);
    });

};