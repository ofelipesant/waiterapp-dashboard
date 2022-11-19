import OrderModal from '../OrderModal'
import { ListContainer } from './styles'
import  { MdBookmarkBorder } from 'react-icons/md'
import { useState } from 'react'

export default function OrderBoard(){
	const [isOpenModal, setIsOpenModal] = useState(false)

	function handleOpenModal(){
		console.log('deu certo')
	}

	return(
		<>
			<OrderModal/>
			<ListContainer onClick={handleOpenModal}>
				<div className='infos-container'>
					<div className='icon-container'>
						<MdBookmarkBorder size={25}/>
					</div>
					<div className='infos-content'>
						<h3 className='order-table'>Mesa 2</h3>
						<h4 className='order-items'>2 itens</h4>
					</div>
				</div>

				<div className='status-container'>
					<strong className='order-status'>Em produção</strong>
				</div>
			</ListContainer>
		</>
		
	)
}
