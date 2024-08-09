import { useState } from 'react';

function FormularioTemperatura() {
    const [resultado, setResultado] = useState(null);  // Inicializa como null para exibir uma mensagem adequada
    const [celsius, setCelsius] = useState("");
    const [mensagem, setMensagem] = useState("");  // Adiciona um estado para mensagens de erro

    const converterParaFahrenheit = () => {
        // Reseta a mensagem e o resultado
        setMensagem("");
        setResultado(null);

        // Converte a entrada para número
        const tempCelsius = Number(celsius);

        // Verifica se a entrada é um número válido
        if (isNaN(tempCelsius)) {
            setMensagem("Por favor, insira um valor válido para a temperatura em Celsius.");
            return;
        }

        // Converte a temperatura de Celsius para Fahrenheit
        const tempFahrenheit = (tempCelsius * 9/5) + 32;
        setResultado(tempFahrenheit);
    }

    return (
        <div>
            <h3>Converter Temperatura de Celsius para Fahrenheit</h3>
            <input
                type="number"
                placeholder="Informe a temperatura em Celsius"
                value={celsius}
                onChange={(e) => setCelsius(e.target.value)}
            />
            <button onClick={converterParaFahrenheit}>Converter</button>
            {mensagem && <p>{mensagem}</p>}  {/* Exibe a mensagem de erro, se houver */}
            {resultado !== null && !mensagem && <p>A temperatura em Fahrenheit é: {resultado.toFixed(2)}</p>}  {/* Exibe a temperatura em Fahrenheit, se não houver erro */}
        </div>
    );
}

export default FormularioTemperatura;
