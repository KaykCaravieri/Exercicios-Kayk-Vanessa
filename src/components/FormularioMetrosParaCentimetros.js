import { useState } from 'react';

function FormularioMetrosParaCentimetros() {
    const [resultado, setResultado] = useState(null);  // Inicializa como null para exibir uma mensagem adequada
    const [metros, setMetros] = useState("");
    const [mensagem, setMensagem] = useState("");  // Adiciona um estado para mensagens de erro

    const converterParaCentimetros = () => {
        // Reseta a mensagem e o resultado
        setMensagem("");
        setResultado(null);

        // Converte a entrada para número
        const metrosNum = Number(metros);

        // Verifica se a entrada é um número válido
        if (isNaN(metrosNum) || metrosNum < 0) {
            setMensagem("Por favor, insira um valor válido e não negativo para metros.");
            return;
        }

        // Converte metros para centímetros
        const centimetros = metrosNum * 100;
        setResultado(centimetros);
    }

    return (
        <div>
            <h3>Converter Metros para Centímetros</h3>
            <input
                type="number"
                placeholder="Informe o valor em metros"
                value={metros}
                onChange={(e) => setMetros(e.target.value)}
            />
            <button onClick={converterParaCentimetros}>Converter</button>
            {mensagem && <p>{mensagem}</p>}  {/* Exibe a mensagem de erro, se houver */}
            {resultado !== null && !mensagem && <p>O valor em centímetros é: {resultado.toFixed(2)}</p>}  {/* Exibe o valor convertido, se não houver erro */}
        </div>
    );
}

export default FormularioMetrosParaCentimetros;
