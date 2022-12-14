import Header from '../../components/Header'
import OrderBoard from '../../components/OrderBoard'
import { DashBoard } from './styles'

export default function OrdersList(){

	const order = [
		{
			_id: '6372e48cbcd195b0d3d0f7f3',
			table: '123',
			status: 'WAITING',
			products: [
				{
					product: {
						name: 'Pizza quatro queijos',
						imagePath: '1668472896991-quatro-queijos.png',
						price: 40,
					},
					quantity: 3,
					_id: '6372e48cbcd195b0d3d0f7f4'
				},
				{
					product: {
						name: 'Coca cola',
						imagePath: '1668473462705-coca-cola.png',
						price: 7,
					},
					quantity: 2,
					_id: '6372e48cbcd195b0d3d0f7f5'
				}
			],
		}
	]
	
	return(
		<>
			<Header/>
			<DashBoard>
				{order && order.map((element) => {
					return(
						<OrderBoard order={element} key={element._id} />
					)
				})}
				
			</DashBoard>
		</>
	)
}
