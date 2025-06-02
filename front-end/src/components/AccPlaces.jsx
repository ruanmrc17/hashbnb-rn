import React from 'react'

function AccPlaces() {

  const addNewPlace = () => {
    console.log('Adicionar um novo Lugar')
  }

  return (
    <div>
      <button onClick={addNewPlace} className='hover:bg-primary-500 flex gap-2 min-w-44 bg-primary-400 cursor-pointer rounded-full px-4 py-2 transition  text-white '>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
        Adicionar novo Lugar

      </button>
    </div>
  )
}

export default AccPlaces