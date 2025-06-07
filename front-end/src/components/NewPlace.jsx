import React, { useState } from 'react'

function NewPlace() {

  const [ title, setTitle ] = useState('')
  const [ city, setCity ] = useState('')

  return (
    <div className='w-full px-8 flex flex-col gap-6'>

      <div className='ml-2 flex flex-col gap-1'>
        <h2 className='text-2xl font-bold'>Titulo</h2>
        <input type="text" placeholder='Digite o título do seu lugar...' 
        className='rounded-full border border-gray-300 px-4 py-2'
        value={title} onChange={(e) => setTitle(e.target.value)}/>
      </div>

      <div className='ml-2 flex flex-col gap-1'>
        <h2 className='text-2xl font-bold'>Cidade e País</h2>
        <input type="text" placeholder='Digite a cidade e o país do seu lugar...' 
        className='rounded-full border border-gray-300 px-4 py-2'
        value={city} onChange={(e) => setCity(e.target.value)}/>
      </div>

      <div className='ml-2 flex flex-col gap-1'>
        <h2 className='text-2xl font-bold'>Fotos</h2>
        <div className='flex gap-2'>
          <input type="text" placeholder='Adicione uma foto pelo link dela...' 
          className='rounded-full border border-gray-300 px-4 py-2 grow'
          value={city} onChange={(e) => setCity(e.target.value)}/>
          <button className='transition hover:bg-gray-200 rounded-full border border-gray-300 px-4 py-2 bg-gray-100 font-bold cursor-pointer'>Enviar foto</button>

        </div>
      </div>

    </div>
  )
}

export default NewPlace