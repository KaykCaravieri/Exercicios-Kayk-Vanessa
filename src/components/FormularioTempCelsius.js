import { useState } from 'react';

function FormularioTempCelsius() {
    const [resultado, setResultado] = useState(null);  // Inicializa como null para exibir uma mensagem adequada
    const [fahrenheit, setFahrenheit] = useState("");
    const [mensagem, setMensagem] = useState("");  // Adiciona um estado para mensagens de erro

    const converterParaCelsius = () => {
        // Reseta a mensagem e o resultado
        setMensagem("");
        setResultado(null);

        // Converte a entrada para número
        const tempFahrenheit = Number(fahrenheit);

        // Verifica se a entrada é um número válido
        if (isNaN(tempFahrenheit)) {
            setMensagem("Por favor, insira um valor válido para a temperatura em Fahrenheit.");
            return;
        }

        // Converte a temperatura de Fahrenheit para Celsius
        const tempCelsius = (tempFahrenheit - 32) * 5/9;
        setResultado(tempCelsius);
    }

    return (
        <div>
            <h3>Converter Temperatura de Fahrenheit para Celsius</h3>
            <input
                type="number"
                placeholder="Informe a temperatura em Fahrenheit"
                value={fahrenheit}
                onChange={(e) => setFahrenheit(e.target.value)}
            />
            <button onClick={converterParaCelsius}>Converter</button>
            {mensagem && <p>{mensagem}</p>}  {/* Exibe a mensagem de erro, se houver */}
            {resultado !== null && !mensagem && <p>A temperatura em Celsius é: {resultado.toFixed(2)}</p>}  {/* Exibe a temperatura em Celsius, se não houver erro */}
        </div>
    );
}

export default FormularioTempCelsius;
