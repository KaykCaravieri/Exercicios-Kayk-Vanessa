import { useState } from 'react';

function FormularioQuilometrosParaMilhas() {
    const [resultado, setResultado] = useState(null);  // Inicializa como null para exibir uma mensagem adequada
    const [quilometros, setQuilometros] = useState("");
    const [mensagem, setMensagem] = useState("");  // Adiciona um estado para mensagens de erro

    const converterParaMilhas = () => {
        // Reseta a mensagem e o resultado
        setMensagem("");
        setResultado(null);

        // Converte a entrada para número
        const quilometrosNum = Number(quilometros);

        // Verifica se a entrada é um número válido
        if (isNaN(quilometrosNum) || quilometrosNum < 0) {
            setMensagem("Por favor, insira um valor válido e não negativo para quilômetros.");
            return;
        }

        // Converte quilômetros para milhas
        const milhas = quilometrosNum * 0.621371;
        setResultado(milhas);
    }

    return (
        <div>
            <h3>Converter Quilômetros para Milhas</h3>
            <input
                type="number"
                placeholder="Informe o valor em quilômetros"
                value={quilometros}
                onChange={(e) => setQuilometros(e.target.value)}
            />
            <button onClick={converterParaMilhas}>Converter</button>
            {mensagem && <p>{mensagem}</p>}  {/* Exibe a mensagem de erro, se houver */}
            {resultado !== null && !mensagem && <p>O valor em milhas é: {resultado.toFixed(2)}</p>}  {/* Exibe o valor convertido, se não houver erro */}
        </div>
    );
}

export default FormularioQuilometrosParaMilhas;
