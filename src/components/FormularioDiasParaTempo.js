import { useState } from 'react';

function FormularioDiasParaTempo() {
    const [resultado, setResultado] = useState("");  // Inicializa como string para exibir uma mensagem adequada
    const [dias, setDias] = useState("");
    const [mensagem, setMensagem] = useState("");  // Adiciona um estado para mensagens de erro

    const converterTempo = () => {
        // Reseta a mensagem e o resultado
        setMensagem("");
        setResultado("");

        // Converte a entrada para número
        const diasNum = Number(dias);

        // Verifica se a entrada é um número válido e não negativo
        if (isNaN(diasNum) || diasNum < 0) {
            setMensagem("Por favor, insira um valor válido e não negativo para dias.");
            return;
        }

        // Converte dias para horas, minutos e segundos
        const horas = diasNum * 24;
        const minutos = horas * 60;
        const segundos = minutos * 60;

        setResultado(`Horas: ${horas}, Minutos: ${minutos}, Segundos: ${segundos}`);
    }

    return (
        <div>
            <h3>Converter Dias para Horas, Minutos e Segundos</h3>
            <input
                type="number"
                placeholder="Informe o valor em dias"
                value={dias}
                onChange={(e) => setDias(e.target.value)}
            />
            <button onClick={converterTempo}>Converter</button>
            {mensagem && <p>{mensagem}</p>}  {/* Exibe a mensagem de erro, se houver */}
            {resultado && !mensagem && <p>{resultado}</p>}  {/* Exibe o resultado, se não houver erro */}
        
        </div>
    );
}

export default FormularioDiasParaTempo;
