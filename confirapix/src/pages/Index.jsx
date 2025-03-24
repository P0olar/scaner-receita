import React from 'react'
import Upload from '../components/Upload'

const Index = () => {
    return (
        <>
            <div className='formulario'>
                <p><b>Scanear Receita</b></p>
                <input type="text" name="nome" id="" placeholder='Nome do Cliente' />
                <Upload />
            </div>
        </>
    )
}

export default Index