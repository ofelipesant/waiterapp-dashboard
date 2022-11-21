import OrderModal from '../OrderModal'
import { ListContainer } from './styles'
import  { MdBookmarkBorder } from 'react-icons/md'
import { useState } from 'react'

export default function OrderBoard(props){
	const { order } = props

	const [isOpenModal, setIsOpenModal] = useState(false)
	const [selectedOrder, setSelectedOrder] = useState(null)

	function handleOpenModal(order){
		setIsOpenModal(!isOpenModal)
		setSelectedOrder(order)
	}

	function handleCloseModal(){
		setIsOpenModal(!isOpenModal)
		setSelectedOrder(null)
	}

	return(
		<>
			<OrderModal isOpen={isOpenModal} order={selectedOrder} onClose={handleCloseModal}/>

			<ListContainer onClick={() => handleOpenModal(order)}>
				<div className='infos-container'>
					<div className='icon-container'>
						<MdBookmarkBorder size={25}/>
					</div>
					<div className='infos-content'>
						<h3 className='order-table'>Mesa {order.table}</h3>
						<h4 className='order-items'>{order.products.lenght} itens</h4>
					</div>
				</div>

				<div className='status-container'>
					<strong className='order-status'>{order.status}</strong>
				</div>
			</ListContainer>
		</>
		
	)
}
