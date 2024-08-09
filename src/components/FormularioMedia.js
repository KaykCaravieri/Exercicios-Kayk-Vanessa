import { useState } from 'react';

function FormularioMedia() {
    const [resultado, setResultado] = useState(null);
    const [nota1, setNota1] = useState("");
    const [nota2, setNota2] = useState("");
    const [nota3, setNota3] = useState("");
    const [mensagem, setMensagem] = useState(""); 

    const calcularMedia = () => {

        setMensagem("");
        setResultado(null);

        const n1 = Number(nota1);
        const n2 = Number(nota2);
        const n3 = Number(nota3);

        if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
            setMensagem("Por favor, insira valores válidos para todas as notas.");
            return;
        }

        const media = (n1 + n2 + n3) / 3;
        setResultado(media);
    }

    return (
        <div>
            <h3>Calcular Média das Notas</h3>
            <input
                type="number"
                placeholder="Informe a nota 1"
                value={nota1}
                onChange={(e) => setNota1(e.target.value)}
            />
            <input
                type="number"
                placeholder="Informe a nota 2"
                value={nota2}
                onChange={(e) => setNota2(e.target.value)}
            />
            <input
                type="number"
                placeholder="Informe a nota 3"
                value={nota3}
                onChange={(e) => setNota3(e.target.value)}
            />
            <button onClick={calcularMedia}>Calcular</button>
            {mensagem && <p>{mensagem}</p>}  {}
            {resultado !== null && !mensagem && <p>A média das notas é: {resultado.toFixed(2)}</p>}  {}
        </div>
    );
}

export default FormularioMedia;
