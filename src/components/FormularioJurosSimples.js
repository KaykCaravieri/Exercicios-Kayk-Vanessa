import { useState } from 'react';

function FormularioJurosSimples() {
    const [resultado, setResultado] = useState(null);  // Inicializa como null para exibir uma mensagem adequada
    const [capital, setCapital] = useState("");
    const [taxa, setTaxa] = useState("");
    const [periodo, setPeriodo] = useState("");
    const [mensagem, setMensagem] = useState("");  // Adiciona um estado para mensagens de erro

    const calcularJurosSimples = () => {
        // Reseta a mensagem e o resultado
        setMensagem("");
        setResultado(null);

        // Converte as entradas para números
        const capitalNum = Number(capital);
        const taxaNum = Number(taxa);
        const periodoNum = Number(periodo);

        // Verifica se as entradas são números válidos e positivos
        if (isNaN(capitalNum) || isNaN(taxaNum) || isNaN(periodoNum) || capitalNum <= 0 || taxaNum <= 0 || periodoNum <= 0) {
            setMensagem("Por favor, insira valores válidos e positivos para capital, taxa e período.");
            return;
        }

        // Calcula os juros simples
        const juros = capitalNum * taxaNum * periodoNum;
        setResultado(juros);
    }

    return (
        <div>
            <h3>Calcular Juros Simples</h3>
            <input
                type="number"
                placeholder="Informe o capital"
                value={capital}
                onChange={(e) => setCapital(e.target.value)}
            />
            <input
                type="number"
                placeholder="Informe a taxa de juros (decimal)"
                value={taxa}
                onChange={(e) => setTaxa(e.target.value)}
            />
            <input
                type="number"
                placeholder="Informe o período"
                value={periodo}
                onChange={(e) => setPeriodo(e.target.value)}
            />
            <button onClick={calcularJurosSimples}>Calcular</button>
            {mensagem && <p>{mensagem}</p>}  {/* Exibe a mensagem de erro, se houver */}
            {resultado !== null && !mensagem && <p>Os juros simples são: {resultado.toFixed(2)}</p>}  {/* Exibe os juros simples, se não houver erro */}
        </div>
    );
}

export default FormularioJurosSimples;
