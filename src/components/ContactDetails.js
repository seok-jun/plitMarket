import React from 'react';
import PropTypes from 'prop-types';

export default class ContactDetails extends React.Component{

	constructor(props){

		super(props);

		this.state = {
			isEdit : false,
			name : '' ,
			phone : ''
		};

		this.handleToggle = this.handleToggle.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleEdit  = this.handleEdit.bind(this);
	}

	/* 토글 이벤트 바인딩 함수  */
	handleToggle(){
		if(!this.state.isEdit){
			this.setState({
				name : this.props.contact.name,
				phone : this.props.contact.phone
			});
		}else{
			this.handleEdit();
		}

		this.setState({
			isEdit : !this.state.isEdit
		});
	}

	/* input name,phone 입력값 이벤트 함수 */
	handleChange(e){
		let nextState = {};
		nextState[e.target.name] = e.target.value;
		this.setState(nextState);
	}


	handleEdit(){
		this.props.onEdit(this.state.name, this.state.phone);
	}

	handleTest(){
		alert("여기");
	}

	render(){

		const details = (
				<div>
					<p>{this.props.contact.name}</p>
					<p>{this.props.contact.phone}</p>
				</div>
			);

	    const edit = (
		    	<div>
		    		<p>
						<input 
							type="text" 
							name="name" 
							placeholeder="name" 
							value={this.state.name}
							onChange={this.handleChange}
						/>
					</p>	
					<p>				
						<input 
							type="text" 
							name="phone" 
							placeholeder="phone" 
							value={this.state.phone}
							onChange={this.handleChange}
						/>
					</p>
				</div>
	    	);

	    const view = this.state.isEdit ? edit : details;

		const blank = (<div>is not selected</div>);

		return(
			<div>
				<h2>Details</h2>
				{this.props.isSelected ? view : blank}
				<p>
					<button onClick={this.handleToggle}>
						{this.state.isEdit ? 'OK' : 'Edit'}
					</button>
					<button onClick={this.props.onRemove}>Remove</button>
				</p>
			</div>
		);
	}
}

ContactDetails.propTypes ={
	contact : PropTypes.object,
	onRemove : PropTypes.func,
	onEdit : PropTypes.func
}

/* contact 정보가 넘어왔을때 빈 값일 경우 default 값 설정 */
ContactDetails.defaultProps = {
	contact:{
		name : '',
		phone : ''
	},
	onRemove : () => {console.log('onRemove not defined')},
	onEdit : () => {console.log('onEdit not defined')}
}
