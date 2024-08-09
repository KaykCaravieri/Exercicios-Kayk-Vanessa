import { useState } from 'react';

function FormularioExpoente() {
    const [resultado, setResultado] = useState(null);  // Inicializa como null para exibir uma mensagem adequada
    const [base, setBase] = useState("");
    const [expoente, setExpoente] = useState("");
    const [mensagem, setMensagem] = useState("");  // Adiciona um estado para mensagens de erro

    const calcularExpoente = () => {
        // Reseta a mensagem e o resultado
        setMensagem("");
        setResultado(null);

        // Converte as entradas para números
        const baseNum = Number(base);
        const expoenteNum = Number(expoente);

        // Verifica se as entradas são números válidos
        if (isNaN(baseNum) || isNaN(expoenteNum)) {
            setMensagem("Por favor, insira valores válidos para base e expoente.");
            return;
        }

        // Calcula a base elevada ao expoente
        const resultadoExpoente = Math.pow(baseNum, expoenteNum);
        setResultado(resultadoExpoente);
    }

    return (
        <div>
            <h3>Calcular Base Elevada ao Expoente</h3>
            <input
                type="number"
                placeholder="Informe a base"
                value={base}
                onChange={(e) => setBase(e.target.value)}
            />
            <input
                type="number"
                placeholder="Informe o expoente"
                value={expoente}
                onChange={(e) => setExpoente(e.target.value)}
            />
            <button onClick={calcularExpoente}>Calcular</button>
            {mensagem && <p>{mensagem}</p>}  {/* Exibe a mensagem de erro, se houver */}
            {resultado !== null && !mensagem && <p>O resultado é: {resultado.toFixed(2)}</p>}  {/* Exibe o resultado, se não houver erro */}
        </div>
    );
}

export default FormularioExpoente;
