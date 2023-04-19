export default function AvaliacaoCliente(props) {
    return (
            <div className="card">
                    <img src={`./img/${props.foto}`} alt="" /> 
                    <h2>{props.nome}</h2>
                    <h3>{props.avaliacao01}</h3>
                    <p>{props.avaliacao02}</p>           
        
</div>
    )
}