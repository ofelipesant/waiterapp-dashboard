import { BrowserRouter, Routes, Route } from 'react-router-dom'

import OrdersList from '../pages/OrdersList'

export default function RoutesApp(){
	return(
		<BrowserRouter>
			<Routes>
				<Route path="pedidos" element={<OrdersList/>}/>
			</Routes>
		</BrowserRouter>
	)
}
