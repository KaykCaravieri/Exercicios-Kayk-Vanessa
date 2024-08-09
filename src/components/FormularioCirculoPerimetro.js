import { useState } from 'react';

function FormularioCirculoPerimetro() {
    const [resultado, setResultado] = useState(null);  // Inicializa como null para exibir uma mensagem adequada
    const [raio, setRaio] = useState("");
    const [mensagem, setMensagem] = useState("");  // Adiciona um estado para mensagens de erro

    const calcularPerimetro = () => {
        // Reseta a mensagem e o resultado
        setMensagem("");
        setResultado(null);

        // Converte a entrada para número
        const raioNum = Number(raio);

        // Verifica se a entrada é um número válido e positivo
        if (isNaN(raioNum) || raioNum <= 0) {
            setMensagem("Por favor, insira um valor válido e positivo para o raio.");
            return;
        }

        // Consta valor de π
        const PI = Math.PI;

        // Calcula o perímetro do círculo
        const perimetro = 2 * PI * raioNum;
        setResultado(perimetro);
    }

    return (
        <div>
            <h3>Calcular o Perímetro do Círculo</h3>
            <input
                type="number"
                placeholder="Informe o raio"
                value={raio}
                onChange={(e) => setRaio(e.target.value)}
            />
            <button onClick={calcularPerimetro}>Calcular</button>
            {mensagem && <p>{mensagem}</p>}  {/* Exibe a mensagem de erro, se houver */}
            {resultado !== null && !mensagem && <p>O perímetro do círculo é: {resultado.toFixed(2)}</p>}  {/* Exibe o perímetro, se não houver erro */}
        </div>
    );
}

export default FormularioCirculoPerimetro;
