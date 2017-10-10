function DoacoesDAO(connection) {
    this._connection = connection;
}

DoacoesDAO.prototype.getDoacoes = function(callback) {
    this._connection.query('select * from doacao inner join usuario where doacao.idUsuario = usuario.idUsuario; ', callback);
}

DoacoesDAO.prototype.getDoacoesItens = function(idDoacao, callback) {
    this._connection.query('select distinct item.idItem, item.idTipo, doacao_item.QuantidadeDoacaoRecebida,item.DescricaoItem  from item  inner join doacao_item on item.idItem = doacao_item.idItem where doacao_item.idDoacao = ' + idDoacao.idDoacao, callback);
}

DoacoesDAO.prototype.addDoacao = function(noticia, callback) {
    this._connection.query('insert into doacao set ? ', doacao, callback)
}

module.exports = function() {
    return DoacoesDAO;
}