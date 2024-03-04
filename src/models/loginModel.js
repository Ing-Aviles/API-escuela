const config = require("../conexion_db"); // heredando la conexion


module.exports = { 
    async obtLog(usuario,psswrd) {
        const connex = await config.query('select idlog,usuario,psswrd from login where usuario = @dato1 and psswrd = @dato2', {usuario, psswrd});
        return resultados.rows;
    },

    async obtLog22(usuario, psswrd){
        let consulta = "select idlog,usuario,psswrd from login where usuario = @dato1 and psswrd = @dato2";
        return new Promise((resolve, rejct) => {
            connection.query(consulta, [usuario,psswrd], (err, rows) => {
                if (err){
                    return reject(err);
                }else{
                    console.log("lineas actualizadas" + rows.affectedRows);
                    resolve(rows.affectedRows);
                }
            });
        });
    },

    async mostrarReg() {
        const resultados = await conexion.query("select * from login");
        return resultados.rows;
    },
}