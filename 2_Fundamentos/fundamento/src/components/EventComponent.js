const EventComponent = () => {
    
    const handleMyEvent = (e) => {
        console.log(e);
        console.log('Ativou o evento!');
    };

    const renderHTML = (a) => {
        if (a){
            return <h1>Verdadeiro!</h1>
        }
        else{
            return <h1>Falso!</h1>
        }
    };

    return(
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique aqui!</button>
            </div>
            <button onClick={() => console.log('Deu Certo')}>De novo</button>
            {renderHTML(true)}
            {renderHTML(false)}
        </div>
    );
};

export default EventComponent;