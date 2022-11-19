import styled from 'styled-components'

export const HeaderContainer = styled.header`
	background: #D73035;
	max-width: 100%;
	padding: 8px;
	height: 125px;
	display: flex;
	align-items: center;
	justify-content: center;;
`

export const HeaderContent = styled.div`
	width: 100%;
	max-width: 1420px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`

export const PageTitle = styled.div`
	margin: 12px;
	color: #fefefe;
	
	.header-title{
		font-size: 32px;
	}

	.header-subtitle{
		font-weight: 300;
		font-size: 16px;
		opacity: 0.9;
	}
`
