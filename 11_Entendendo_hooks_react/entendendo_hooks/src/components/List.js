import React from 'react'

const List = ({getItems}) => {
    const [myItems, setMyItems] = React.useState([])

// Sem o use Callback, toda vez que o componente ou for auterado
// teremos o useEffect chamado novamente e com a persistência de
// banco de dados ou serviços de API sendo chamado a todo instante 
// sem necessidade pode afetar a performance da aplicação.
// Para esse problema usaremos o useCallback.
// useCallback foi chamado na função de traz os dados pata a varável getItems
    React.useEffect(() => {
        console.log('Buscando dados do DB')

        setMyItems(getItems)
    }, [getItems])

    return (
        <div>
           {
                myItems && myItems.map((item) => <p key={ item }>{ item }</p>)
           }
        </div>
    )
}

export default List