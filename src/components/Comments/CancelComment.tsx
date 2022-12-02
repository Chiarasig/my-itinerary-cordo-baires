import React from 'react'

const CancelComment =({delete_commet})=>{
console.log(delete_commet)
const detele =()=>{
console.log(delete_commet)
}
    return(
        
        <button onClick={detele}>
                                    Eliminar
        </button>
        
    )
}

export default CancelComment