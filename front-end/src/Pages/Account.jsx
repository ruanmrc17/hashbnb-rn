import React from 'react'
import { useParams } from 'react-router-dom'

// Começar com o Padding no section 
// Depois mudar o tamanho máximo da div, e magrin auto (centralizar), dpeois colocar flex, flex col e gap4 espaçamento e flex de coluna, alinhar no centro items-center (div[0])
// div[1] transformar em flex e gap-2
// div[2] tranformar em flex, flex col centralizar os items e gap-2
// mudar o arredondamento os paddings e cores dos botoes, cor do texto



function Account() {
	const { subpage } = useParams()
	// console.log(useParams())

	const buttonClass = (button) => {

		let finalClass = 'rounded-full hover:bg-primary-400 hover:text-white px-4 py-2 cursor-pointer transition'

		if(button == subpage){
			finalClass += ' bg-primary-400 text-white'
		}

		return finalClass

	}

  return (
    <section className='p-8'>
    	<div className='max-w-7xl mx-auto flex flex-col gap-4 items-center'>
        <div className='flex gap-2'>
          <button className={buttonClass('profile')}>Perfil</button>
          <button className={buttonClass('bookings')}>Reservas</button>
          <button className={buttonClass('places')}>Lugares</button>
        </div>

				<div className='flex flex-col items-center gap-2'>
					<p>Logado como Ruan Marcos (r@r.com)</p>	
					<button className='min-w-44 bg-primary-400 cursor-pointer rounded-full px-4 py-2 transition  text-white '>Logout</button>
				</div>	
      </div>
  	</section>
  )
}

export default Account