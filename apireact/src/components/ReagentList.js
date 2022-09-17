import React, { useEffect } from 'react'

function ReagentList() {
    const [ReagentList, setReagentList] = React.useState([])
    const [newName, setNewName] = React.useState("")
    const [newCode, setNewCode] = React.useState("")
    

    //Usando Fetch para consumir API_reactivos
    function addReagents() {
        fetch('http://10.1.22.204:8000/reagents', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwidXNlcm5hbWUiOiJhZG1pbiIsImlhdCI6MTY2MzQ0MzU0MCwiZXhwIjoxNjYzNDQ1MzQwfQ.4iZMIqSi7mxTyXAyOmeR573j0FG4PNyiSQgAqyhZIAQ'
            },
            body: JSON.stringify({
                name: newName,
                codeEssi: newCode
            })
        }).then((response) => {
            return response.json()
        }).then((data) => {
            getReagents()
        })
    }

    function handleNewNameChange(event) {
        setNewName(event.target.value)
    }
    function handleNewCodeChange(event) {
        setNewCode(event.target.value)
    }

    function getReagents() {
        fetch('http://10.1.22.204:8000/reagents')
        .then(response => response.json())
        .then(data => setReagentList(data))
    }

    useEffect(()=> {
        getReagents()
    }, [])

    return (
        <div>
            <h1>Reactivos Essalud2</h1>
            <div>
                <h4>
                    Ingresar Nuevo examen de laboratorio:
                </h4>
                <fieldset>
                    <legend>Nuevo Examen</legend>
                    <input id='name' value={newName} onChange={handleNewNameChange} placeholder='nombre del reactivo'/>
                    <input id='Codigo' value={newCode} onChange={handleNewCodeChange} placeholder='Codigo Essi'/>
                    <button onClick={addReagents}>Agregar</button>
                </fieldset>
            </div>
            <div>
                <ul>
                    {ReagentList.map((reagent)=> {
                        return(
                            <li>
                                {reagent.name}, {reagent.codeEssi}
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default ReagentList;