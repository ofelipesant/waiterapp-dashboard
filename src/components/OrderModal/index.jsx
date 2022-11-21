import { Actions, Modal, ModalWrapper, ProductList } from './styles'
import closeIcon from '../../assets/images/close-icon.svg'
import { currencyFormatter } from '../../helpers/currencyFormatter'

export default function OrderModal(props){
	const { isOpen, order, onClose } = props

	if(isOpen == false || !order){
		return null
	}

	const orderTotal = order.products.reduce((total, {product, quantity}) => {
		return total + (product.price * quantity)
	}, 0)

	return(
		<ModalWrapper>
			<Modal>
				<header>
					<strong className='order-table'>Mesa {order.table}</strong>
					<button className='close-button' onClick={onClose}>
						<img src={closeIcon} alt="Ícone de fechar modal"/>
					</button>
				</header>

				<div className='order-status-container'>
					<small className='order-status-label'>Status do pedido</small>
					<strong className='order-status'>
						{order.status == 'WAITING' && 'Fila de espera'}
						{order.status == 'IN_PRODUCTION' && 'Preparando'}
						{order.status == 'DONE' && 'Concluído'}
					</strong>
				</div>

				{order && order.products.map((element) => {
					return(
						<ProductList key={element._id}>
							<img 
								src={`http://localhost:3001/uploads/${element.product.imagePath}`} 
								alt="Imagem do produto" 
								className='product-image'
							/>
							<span className='product-quantity'>{element.quantity}x</span>
							<div className='product-infos'>
								<strong className='product-name'>{element.product.name}</strong>
								<span className='product-price'>{currencyFormatter(element.product.price)}</span>
							</div>
						</ProductList>
					)
				})}

				<div className='order-total-container'>
					<span className='order-total-label'>Total:</span>
					<h3 className='order-total'>{currencyFormatter(orderTotal)}</h3>
				</div>

				{order.satus != 'DONE' ? (
					<Actions>
						<button type='button' className='change-status-button'>
							<strong>
								{order.status == 'WAITING' && 'Iniciar Preparo'}
								{order.status == 'IN_PRODUCTION' && 'Concluir Pedido'}
							</strong>
						</button>

						<button type='button' className='cancel-order-button'>
							<strong>Cancelar Pedido</strong>
						</button>
					</Actions>
				) : (
					<strong>
						Pedido concluído
					</strong>
				)}

			</Modal>
		</ModalWrapper>
				
	)
}
