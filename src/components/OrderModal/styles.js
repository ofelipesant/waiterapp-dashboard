import styled from 'styled-components'

export const ModalWrapper = styled.div`
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: rgba(0, 0, 0, 0.6);
	backdrop-filter: blur(4.5px);
`

export const Modal = styled.div`
	width: 330px;
	background: white;
	opacity: 100;
	display: flex;
	flex-direction: column;
	align-items: left;
	justify-content: center;
	border-radius: 4px;
	padding: 16px;

	>header{
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;

		.order-table{
			font-size: 18px;
		}

		.close-button{
			border: none;
			background: transparent;
			display: flex;
		}

		
	}

	.order-detail-button{
		background: transparent;
		border: none;
		margin-top: 16px;
		font-size: 16px;
		text-decoration: underline;
	}

	.order-status-container{
		display: flex;
		flex-direction: column;
		margin: 24px 0;
	}

	.order-total-container{
		margin-top: 32px;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
`

export const ProductList = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 16px;

	.product-image{
		width: 56px;
		height: 56px;
		border-radius: 4px;
		margin: 4px 0;
	}

	.product-quantity{
		opacity: 0.7;
	}

	.product-infos{
		display: flex;
		flex-direction: column;
	}
`

export const Actions = styled.footer`
	margin-top: 32px;
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 16px;

	.change-status-button{
		border: none;
		padding: 8px;
		border-radius: 4px;
		background: rgba(0, 0, 0, 0.8);
		
		:hover{
			background: rgba(0, 0, 0, 0.7);
		}

		:active{
			transform: scale(0.98);
		}

		strong{
			font-weight: 500;
			color: white;
		}
	}

	.cancel-order-button{
		background: transparent;
		border: 0;

		:active{
			transform: scale(0.98);
		}

		strong{
			color: #D73035;
		}
	}
`
