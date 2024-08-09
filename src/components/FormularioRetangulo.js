import { useState } from 'react';

function FormularioRetangulo() {
    const [resultado, setResultado] = useState(null);  // Inicializa como null para exibir uma mensagem adequada
    const [largura, setLargura] = useState("");
    const [altura, setAltura] = useState("");
    const [mensagem, setMensagem] = useState("");  // Adiciona um estado para mensagens de erro

    const calcularArea = () => {
        // Reseta a mensagem e o resultado
        setMensagem("");
        setResultado(null);

        // Converte as entradas para números
        const larguraNum = Number(largura);
        const alturaNum = Number(altura);

        // Verifica se as entradas são números válidos
        if (isNaN(larguraNum) || isNaN(alturaNum)) {
            setMensagem("Por favor, insira valores válidos para largura e altura.");
            return;
        }

        // Calcula a área do retângulo
        const area = larguraNum * alturaNum;
        setResultado(area);
    }

    return (
        <div>
            <h3>Calcular a Área do Retângulo</h3>
            <input
                type="number"
                placeholder="Informe a largura"
                value={largura}
                onChange={(e) => setLargura(e.target.value)}
            />
            <input
                type="number"
                placeholder="Informe a altura"
                value={altura}
                onChange={(e) => setAltura(e.target.value)}
            />
            <button onClick={calcularArea}>Calcular</button>
            {mensagem && <p>{mensagem}</p>}  {/* Exibe a mensagem de erro, se houver */}
            {resultado !== null && !mensagem && <p>A área do retângulo é: {resultado.toFixed(2)}</p>}  {/* Exibe a área, se não houver erro */}
        </div>
    );
}

export default FormularioRetangulo;
