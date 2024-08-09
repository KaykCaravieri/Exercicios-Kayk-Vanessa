import { useState } from 'react';

function FormularioIMC() {
    const [resultado, setResultado] = useState(null);  // Inicializa como null para exibir uma mensagem adequada
    const [peso, setPeso] = useState("");
    const [altura, setAltura] = useState("");
    const [mensagem, setMensagem] = useState("");  // Adiciona um estado para mensagens de erro

    const calcularIMC = () => {
        // Reseta a mensagem e o resultado
        setMensagem("");
        setResultado(null);

        // Converte as entradas para números
        const pesoNum = Number(peso);
        const alturaNum = Number(altura);

        // Verifica se as entradas são números válidos e positivos
        if (isNaN(pesoNum) || isNaN(alturaNum) || pesoNum <= 0 || alturaNum <= 0) {
            setMensagem("Por favor, insira valores válidos e positivos para peso e altura.");
            return;
        }

        // Calcula o IMC
        const imc = pesoNum / Math.pow(alturaNum, 2);
        setResultado(imc);
    }

    return (
        <div>
            <h3>Calcular o IMC</h3>
            <input
                type="number"
                placeholder="Informe o peso (kg)"
                value={peso}
                onChange={(e) => setPeso(e.target.value)}
            />
            <input
                type="number"
                placeholder="Informe a altura (m)"
                value={altura}
                onChange={(e) => setAltura(e.target.value)}
            />
            <button onClick={calcularIMC}>Calcular</button>
            {mensagem && <p>{mensagem}</p>}  {/* Exibe a mensagem de erro, se houver */}
            {resultado !== null && !mensagem && <p>O IMC é: {resultado.toFixed(2)}</p>}  {/* Exibe o IMC, se não houver erro */}
        </div>
    );
}

export default FormularioIMC;
