const crypto = require('crypto');

const secret = "Esto me está gustando aunque me esta costando MUCHO Y QUIERO REFRESCAR";
const secret2 = "Los animales me gustan solo a RATOS PARA REFRESCAR";

const hash = crypto.createHmac('sha256', secret).update(secret2).digest("hex");

console.log(hash)