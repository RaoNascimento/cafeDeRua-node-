module.exports.index = function(application, req, res) {
    var connection = application.config.dbConnection();
    var doacoesModel = new application.app.models.DoacoesDAO(connection);

    doacoesModel.getDoacoes(function(error, result) {
        res.render("home/index", { doacao: result });
    });
}