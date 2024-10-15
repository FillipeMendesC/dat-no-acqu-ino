const express = require('express');

const SERVIDOR_PORTA = 3300;

const serial = async (
    Sensor1valores,
    Sensor2valores
) => {
    setInterval(() => {
        // Essas constantes são servem para o codigo não ficar gigante
        // se quiser você pode usar o Math.random() ou outro calculo
        // dentro do .push() de cada sensor
        const valor1 = parseInt(Math.random() * 61).toString();
        const valor2 = parseFloat(Math.random() * 61).toString();

        Sensor1valores.push(valor1);
        Sensor2valores.push(valor2);

        console.log('Valor 1:', valor1, ' valor 2:', valor2);
    }, 1000);
}

const servidor = (
    Sensor1valores,
    Sensor2valores
) => {
    const app = express();

    // configurações de requisição e resposta
    app.use((request, response, next) => {
        response.header('Access-Control-Allow-Origin', '*');
        response.header('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept');
        next();
    });

    // inicia o servidor na porta especificada
    app.listen(SERVIDOR_PORTA, () => {
        console.log(`API executada com sucesso na porta ${SERVIDOR_PORTA}`);
    });

    // define os endpoints da API para cada tipo de sensor
    app.get('/sensores/sensor1', (_, response) => {
        return response.json(Sensor1valores);
    });
    app.get('/sensores/sensor2', (_, response) => {
        return response.json(Sensor2valores);
    });
}

// função principal assíncrona para iniciar a comunicação serial e o servidor web
(async () => {
    // arrays para armazenar os valores dos sensores
    const Sensor1valores = [];
    const Sensor2valores = [];

    // inicia a comunicação serial
    await serial(
        Sensor1valores,
        Sensor2valores
    );

    // inicia o servidor web
    servidor(
        Sensor1valores,
        Sensor2valores
    );
})();