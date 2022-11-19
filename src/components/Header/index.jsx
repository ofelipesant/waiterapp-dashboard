import logo from '../../assets/images/logo.svg'
import { HeaderContainer, HeaderContent, PageTitle } from './styles'

export default function Header(){
	return(
		<HeaderContainer>
			<HeaderContent>
				<img src={logo} width={250} alt='Waiter App' />
				<PageTitle>
					<h1 className='header-title'>Pedidos</h1>
					<h4 className='header-subtitle'>Acompanhe os pedidos dos clientes</h4>
				</PageTitle>
			</HeaderContent>
		</HeaderContainer>
	)
}
