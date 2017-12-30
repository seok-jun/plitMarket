import React from 'react';

export default class ContactDetails extends React.Component{
	render(){

		const details = (
				<div>
					<p>{this.props.contact.name}</p>
					<p>{this.props.contact.phone}</p>
				</div>
			);
		const blank = (<div>is not selected</div>);

		return(
			<div>
				<h2>Details</h2>
				{this.props.isSelected ? details : blank}
			</div>
		);
	}
}

/* contact 정보가 넘어왔을때 빈 값일 경우 default 값 설정 */
ContactDetails.defaultProps = {
	contact:{
		name : '',
		phone : ''
	}
}