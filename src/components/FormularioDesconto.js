import { useState } from 'react';

function FormularioDesconto() {
    const [resultado, setResultado] = useState(null);  // Inicializa como null para exibir uma mensagem adequada
    const [preco, setPreco] = useState("");
    const [desconto, setDesconto] = useState("");
    const [mensagem, setMensagem] = useState("");  // Adiciona um estado para mensagens de erro

    const calcularDesconto = () => {
        // Reseta a mensagem e o resultado
        setMensagem("");
        setResultado(null);

        // Converte as entradas para números
        const precoNum = Number(preco);
        const descontoNum = Number(desconto);

        // Verifica se as entradas são números válidos e positivos
        if (isNaN(precoNum) || isNaN(descontoNum) || precoNum < 0 || descontoNum < 0 || descontoNum > 100) {
            setMensagem("Por favor, insira valores válidos para preço e percentual de desconto.");
            return;
        }

        // Calcula o preço com desconto
        const precoComDesconto = precoNum * (1 - descontoNum / 100);
        setResultado(precoComDesconto);
    }

    return (
        <div>
            <h3>Calcular Preço com Desconto</h3>
            <input
                type="number"
                placeholder="Informe o preço"
                value={preco}
                onChange={(e) => setPreco(e.target.value)}
            />
            <input
                type="number"
                placeholder="Informe o percentual de desconto"
                value={desconto}
                onChange={(e) => setDesconto(e.target.value)}
            />
            <button onClick={calcularDesconto}>Calcular</button>
            {mensagem && <p>{mensagem}</p>}  {/* Exibe a mensagem de erro, se houver */}
            {resultado !== null && !mensagem && <p>O preço com desconto é: {resultado.toFixed(2)}</p>}  {/* Exibe o preço com desconto, se não houver erro */}
            
        </div>
    );
}

export default FormularioDesconto;
