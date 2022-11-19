import styled from 'styled-components'

export const ListContainer = styled.button`
	width: 70%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 16px;
	background: white;
	border: 1px solid rgba(204, 204, 204, 0.4);
	border-radius: 4px;

	:hover{
		background-color: rgba(204, 204, 204, 0.2);
	}

	:active{
		transform: scale(0.98)
	}

	.infos-container{
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 32px;
	}

	.infos-content{
		.order-table{
			font-weight: 500;
		}

		.order-items{
			font-weight: 400;
		}
	}

	.status-container{
		padding: 4px;
		margin-right: 32px;
		background-color: #8ecae6;
		border-radius: 4px;
		
		.order-status{
			font-size: 14px;
			font-weight: 500;
		}
	}
`
