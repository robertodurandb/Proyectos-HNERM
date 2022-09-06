import React, { useEffect } from 'react'

function ReagentList() {
    const [ReagentList, setReagentList] = React.useState([])

    //Usando Fetch para consumir API_reactivos
    function getReagents() {
        fetch('http://localhost:8000/reagents')
        .then(response => response.json())
        .then(data => setReagentList(data))
    }

    useEffect(()=> {
        getReagents()
    }, [])

    return (
        <div>
            <h1>Reactivos Essalud</h1>
            <div>
                <ul>
                    {ReagentList.map((reagent)=> {
                        return(
                            <li>
                                {reagent.name}
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default ReagentList;