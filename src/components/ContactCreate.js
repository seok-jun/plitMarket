import React from 'react';
import PropTypes from 'prop-types';

export default class ContactCreate extends React.Component{

	constructor(props){

		super(props);

		this.state ={
			name : '',
			phone : ''
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	/* input name,phone 입력값 이벤트 함수 */
	handleChange(e){
		let nextState = {};
		nextState[e.target.name] = e.target.value;
		this.setState(nextState);
	}

	/* Create 버튼 등록 함수  */
	handleClick(){
		const contact={
			name : this.state.name,
			phone : this.state.phone
		};
		this.props.onCreate(contact);

		this.setState({
			name : '',
			phone : ''
		});
	}

	render(){

		return(
			<div>
				<h2>Create Contact</h2>
				<p>
					<input 
						type="text" 
						name="name" 
						placeholeder="name" 
						value={this.state.name}
						onChange={this.handleChange}
					/>
					<input 
						type="text" 
						name="phone" 
						placeholeder="phone" 
						value={this.state.phone}
						onChange={this.handleChange}
					/>
				</p>
				<button onClick={this.handleClick}>Create</button>
			</div>
		);
	}
}  

/* onCreate 타입 체크 */
ContactCreate.propTypes = {
	onCreate : PropTypes.func
};

/* 존재 하지 않을때 표현할 default 문구 지정 */
ContactCreate.defaultProps = {
	onCreate : () => {console.error('onCreate not defined') ; }
}