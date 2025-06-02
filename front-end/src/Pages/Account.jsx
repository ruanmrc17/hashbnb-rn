import React from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import AccProfile from '../components/AccProfile'
import AccPlaces from '../components/AccPlaces'

// Começar com o Padding no section 
// Depois mudar o tamanho máximo da div, e magrin auto (centralizar), dpeois colocar flex, flex col e gap4 espaçamento e flex de coluna, alinhar no centro items-center (div[0])
// div[1] transformar em flex e gap-2
// div[2] tranformar em flex, flex col centralizar os items e gap-2
// mudar o arredondamento os paddings e cores dos botoes, cor do texto



function Account() {
	const { subpage } = useParams()
	// console.log(useParams())
  var subpages = ['profile', 'bookings', 'places']
	const buttonClass = (button) => {

		let finalClass = 'rounded-full hover:bg-primary-400 hover:text-white px-4 py-2 cursor-pointer transition'

		if(button == subpage){
			finalClass += ' bg-primary-400 text-white'
		}

		return finalClass

	}

  function achar(subpage){
    if(subpage == 'profile'){
      return 0
    }else if(subpage == 'bookings'){
      return 1
    }else if(subpage == 'places'){
      return 2
    }else{
      return -1
    }
  }

  return (
    <section className='p-8'>
    	<div className='max-w-7xl mx-auto flex flex-col gap-8 items-center'>
        <div className='flex gap-2'>
          <Link to='/account/profile' className={buttonClass('profile')}>Perfil</Link>
          <Link to='/account/bookings' className={buttonClass('bookings')}>Reservas</Link>
        	<Link to='/account/places' className={buttonClass('places')}>Lugares</Link>
        </div>

        { subpage === 'profile' && <AccProfile /> }
        { subpage === 'places' && <AccPlaces /> }
        {/* { subpages[achar(subpage)] === undefined && <Navigate to='/account/profile'/>} */}
				{/* <AccProfile/> */}
      </div>
  	</section>
  )
}

export default Account