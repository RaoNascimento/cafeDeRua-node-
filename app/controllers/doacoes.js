module.exports.doacoes = function(application, req, res) {
    var connection = application.config.dbConnection();
    var doacoesModel = new application.app.models.DoacoesDAO(connection);

    var idDoacao = req.query;

    doacoesModel.getDoacoesItens(idDoacao, function(error, result) {
        res.render("doacoes/doacoes", { doacoesItens: result });
    });
}