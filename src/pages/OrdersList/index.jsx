import Header from '../../components/Header'
import OrderBoard from '../../components/OrderBoard'
import { DashBoard } from './styles'

export default function OrdersList(){
	
	return(
		<>
			<Header/>
			<DashBoard>
				<OrderBoard />
				<OrderBoard />
				<OrderBoard />
			</DashBoard>
		</>
	)
}
