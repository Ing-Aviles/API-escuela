const pgConn = require("pg").Client;// importar lib de mysql
const connex = new pgConn({// config de conexion a base de datos
    user: 'postgres',
    host: '172.29.48.1',
    port: 5432,
    database: 'prueba',
    password: 'postgres', 
});

connex.connect(function(err){// conectando a bd
    if(err){
        console.log(err);
        return
    }else{
        console.log('BASE DATOS CONECTADA FULL')
    }
}); 

module.exports = connex;// exportar modulo a otras rutas
