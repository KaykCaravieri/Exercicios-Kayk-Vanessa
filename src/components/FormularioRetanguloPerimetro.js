import { useState } from 'react';

function FormularioRetanguloPerimetro() {
    const [resultado, setResultado] = useState(null);  // Inicializa como null para exibir uma mensagem adequada
    const [largura, setLargura] = useState("");
    const [altura, setAltura] = useState("");
    const [mensagem, setMensagem] = useState("");  // Adiciona um estado para mensagens de erro

    const calcularPerimetro = () => {
        // Reseta a mensagem e o resultado
        setMensagem("");
        setResultado(null);

        // Converte as entradas para números
        const larguraNum = Number(largura);
        const alturaNum = Number(altura);

        // Verifica se as entradas são números válidos e positivos
        if (isNaN(larguraNum) || isNaN(alturaNum) || larguraNum <= 0 || alturaNum <= 0) {
            setMensagem("Por favor, insira valores válidos e positivos para largura e altura.");
            return;
        }

        // Calcula o perímetro do retângulo
        const perimetro = 2 * (larguraNum + alturaNum);
        setResultado(perimetro);
    }

    return (
        <div>
            <h3>Calcular o Perímetro do Retângulo</h3>
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
            <button onClick={calcularPerimetro}>Calcular</button>
            {mensagem && <p>{mensagem}</p>}  {/* Exibe a mensagem de erro, se houver */}
            {resultado !== null && !mensagem && <p>O perímetro do retângulo é: {resultado.toFixed(2)}</p>}  {/* Exibe o perímetro, se não houver erro */}
        </div>
    );
}

export default FormularioRetanguloPerimetro;
