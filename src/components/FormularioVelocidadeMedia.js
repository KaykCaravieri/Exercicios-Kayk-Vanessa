import { useState } from 'react';

function FormularioVelocidadeMedia() {
    const [resultado, setResultado] = useState(null);  // Inicializa como null para exibir uma mensagem adequada
    const [distancia, setDistancia] = useState("");
    const [tempo, setTempo] = useState("");
    const [mensagem, setMensagem] = useState("");  // Adiciona um estado para mensagens de erro

    const calcularVelocidadeMedia = () => {
        // Reseta a mensagem e o resultado
        setMensagem("");
        setResultado(null);

        // Converte as entradas para números
        const distanciaNum = Number(distancia);
        const tempoNum = Number(tempo);

        // Verifica se as entradas são números válidos e positivos
        if (isNaN(distanciaNum) || isNaN(tempoNum) || distanciaNum <= 0 || tempoNum <= 0) {
            setMensagem("Por favor, insira valores válidos e positivos para distância e tempo.");
            return;
        }

        // Calcula a velocidade média
        const velocidade = distanciaNum / tempoNum;
        setResultado(velocidade);
    }

    return (
        <div>
            <h3>Calcular Velocidade Média</h3>
            <input
                type="number"
                placeholder="Informe a distância"
                value={distancia}
                onChange={(e) => setDistancia(e.target.value)}
            />
            <input
                type="number"
                placeholder="Informe o tempo"
                value={tempo}
                onChange={(e) => setTempo(e.target.value)}
            />
            <button onClick={calcularVelocidadeMedia}>Calcular</button>
            {mensagem && <p>{mensagem}</p>}  {/* Exibe a mensagem de erro, se houver */}
            {resultado !== null && !mensagem && <p>A velocidade média é: {resultado.toFixed(2)}</p>}  {/* Exibe a velocidade média, se não houver erro */}
        </div>
    );
}

export default FormularioVelocidadeMedia;
