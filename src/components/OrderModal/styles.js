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
	background-color: #000;
	opacity: 40%;
`

export const Modal = styled.div`
	background: white;
	width: 120px;
	height: 120px;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 4px;
`
