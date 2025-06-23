import React, { useState } from 'react'
import Perks from './Perks'

function NewPlace() {

  const [ title, setTitle ] = useState('')
  const [ city, setCity ] = useState('')
  const [ photos, setPhotos ] = useState('')
  const [ description, setDescription ] = useState('')
  const [ extras, setExtras ] = useState('')
  const [ price, setPrice ] = useState('')
  const [ checkin, setCheckin ] = useState('')
  const [ checkout, setCheckout ] = useState('')
  const [ guests, setGuests ] = useState('')
  
  const handleSubmit = async (e) => {
    e.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit} className='w-full px-8 flex flex-col gap-6'>

      <div className='ml-2 flex flex-col gap-1'>
        <label htmlFor='title' className='text-2xl font-bold'>Titulo</label>
        <input id='title' type="text" placeholder='Digite o título do seu lugar...' 
        className='rounded-full border border-gray-300 px-4 py-2'
        value={title} onChange={(e) => setTitle(e.target.value)}/>
      </div>

      <div className='ml-2 flex flex-col gap-1'>
        <label htmlFor='city' className='text-2xl font-bold'>Cidade e País</label>
        <input id='city' type="text" placeholder='Digite a cidade e o país do seu lugar...' 
        className='rounded-full border border-gray-300 px-4 py-2'
        value={city} onChange={(e) => setCity(e.target.value)}/>
      </div>

      <div className='ml-2 flex flex-col gap-1'>
        <label htmlFor='photos' className='text-2xl font-bold'>Fotos</label>
        <div className='flex gap-2'>
          <input id='photos' type="text" placeholder='Adicione uma foto pelo link dela...' 
          className='rounded-full border border-gray-300 px-4 py-2 grow'
          value={photos} onChange={(e) => setPhotos(e.target.value)}/>
          <button className='transition hover:bg-gray-200 rounded-full border border-gray-300 px-4 py-2 bg-gray-100 font-bold cursor-pointer'>Enviar foto</button>

        </div>

        <div className='grid grid-cols-5 gap-4 mt-2'>
          <label htmlFor="file" className='items-center justify-center flex gap-2 font-bold aspect-square border rounded-2xl border-gray-300 cursor-pointer'>
            <input type="file" id="file" className='hidden' />
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
            </svg>

            Upload
          </label>

        </div>

      </div>

      <div className='ml-2 flex flex-col gap-1'>
        <label htmlFor='description' className='text-2xl font-bold'>Descrição</label>
        <textarea id='description' placeholder='Digite a descrição do seu lugar...' 
        className='rounded-2xl border border-gray-300 px-4 py-2 h-56 resize-none'
        value={description} onChange={(e) => setDescription(e.target.value)}/>
      </div>

      <div className='ml-2 flex flex-col gap-1'>
        <label htmlFor='perks' className='text-2xl font-bold'>Comodidades</label>

        <Perks/>
      </div>

      <div className='ml-2 flex flex-col gap-1'>
        <label htmlFor='extras' className='text-2xl font-bold'>Informações Extras</label>
        <textarea id='extras' placeholder='Digite as informações extras do seu lugar...' 
        className='rounded-2xl border border-gray-300 px-4 py-2 h-56 resize-none'
        value={extras} onChange={(e) => setExtras(e.target.value)}/>
      </div>

      <div className='ml-2 flex flex-col gap-1'>
        <h2 htmlFor='extras' className='ml-2 text-2xl font-bold'>Restrições e Preço</h2>
        <div className='grid grid-cols-[repeat(auto-fit,minmax(225px,1fr))] gap-6'>

          <div className='flex flex-col gap-2'> 
            <label className='ml-2 text-xl font-bold' htmlFor="price">Preço</label>
            <input id='price' type="number" placeholder='500' 
            className='rounded-full border border-gray-300 px-4 py-2'
            value={price} onChange={(e) => setPrice(e.target.value)}/>
            
          </div>
          
          <div className='flex flex-col gap-2'> 
            <label className='ml-2 text-xl font-bold' htmlFor="checkin">Checkin</label>
            <input id='checkin' type="text" placeholder='16:00' 
            className='rounded-full border border-gray-300 px-4 py-2'
            value={checkin} onChange={(e) => setCheckin(e.target.value)}/>
            
          </div>
          
          <div className='flex flex-col gap-2'> 
            <label className='ml-2 text-xl font-bold' htmlFor="checkout">Checkout</label>
            <input id='checkout' type="text" placeholder='12:00' 
            className='rounded-full border border-gray-300 px-4 py-2'
            value={checkout} onChange={(e) => setCheckout(e.target.value)}/>
            
          </div>
          
          <div className='flex flex-col gap-2'> 
            <label className='ml-2 text-xl font-bold' htmlFor="guests">N° Convidados</label>
            <input id='guests' type="number" placeholder='4' 
            className='rounded-full border border-gray-300 px-4 py-2'
            value={guests} onChange={(e) => setGuests(e.target.value)}/>
            
          </div>
        </div>
      </div>

      <button className='hover:bg-primary-500 min-w-44 bg-primary-400 cursor-pointer rounded-full px-4 py-2 transition text-white text-center font-bold'>Salvar Informações</button>

    </form>
  )
}

export default NewPlace