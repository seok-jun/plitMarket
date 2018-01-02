import React from 'react';
import ContactInfo from './ContactInfo';
import ContactDetails from './ContactDetails';
import update from 'react-addons-update';
import ContactCreate from './ContactCreate';

export default class Contact extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
        	selectedKey : -1,
        	keyword : '',
            contactData: [{
                name: 'Abet',
                phone: '010-0000-0001'
            }, {
                name: 'Betty',
                phone: '010-0000-0002'
            }, {
                name: 'Charlie',
                phone: '010-0000-0003'
            }, {
                name: 'David',
                phone: '010-0000-0004'
            }]
        };

        /* TODO 여기에 구현 해야 되는 이유가 잘 이해가 안된다...뒤로 가서 한번더 확인해 봐야 할 듯*/
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handelCreate = this.handelCreate.bind(this);
        this.handelRemove = this.handelRemove.bind(this);
        this.handelEdit = this.handelEdit.bind(this);          
    }
    /*
	* 이벤트 바인딩 함수???
	* 체인지 이벤트 발생시 입력된 값을 value 값에 매핑 시켜준다?
    */
    handleChange(e) {
    	this.setState({
    		keyword : e.target.value
    	});
    }
    /* 클릭 이벤트 바인딩 */
    handleClick(key){
    	this.setState({
    		selectedKey : key
    	});

    	console.log(key, 'is selected');
	}

	/* 새로운 연락처 추가를 위한 이벤트 함수 */
	handelCreate(contact){
		this.setState({
			contactData : update(this.state.contactData, {$push : [contact]})
		});
	}

	/* 연락처 삭제 이벤트 함수 */
	handelRemove(){

        if(this.state.selectedKey < 0){
            return;
        }

		this.setState({
			contactData : update(this.state.contactData,
				{ 
					$splice: [[this.state.selectedKey,1]]
				}),
			selectedKey : -1
		});
	}

	/* 연락처 수정 함수 */
	handelEdit(name,phone){
		this.setState({
			contactData : update(this.state.contactData,
				{
					[this.state.selectedKey] :{
						name : { $set : name},
						phone: { $set : phone }
					}
				}
			)
		});
	}
    
    render() {
        const mapToComponents = (data) => {
        	/* 데이터 정렬 오름차순 */
        	data.sort();
        	/* 검색 기능 추가 */
        	data = data.filter(
        			(contact) => {
        				return contact.name.toLowerCase()
        				.indexOf(this.state.keyword.toLowerCase()) > -1;
        			}
        		);
            return data.map((contact, i) => {
                return (<ContactInfo 
            					contact={contact} 
            					key={i}
            					onClick={() => this.handleClick(i)}/>);
            });
        };
        
        return (
            <div>
                <h1>Contacts</h1>
                <input 
                		name="keyword" 
                		placeholder="search" 
                		value={this.state.keyword} 
                		onChange={this.handleChange}/>
                <div>{mapToComponents(this.state.contactData)}</div>
                <ContactDetails 
                	isSelected={this.state.selectedKey != -1}
					contact={this.state.contactData[this.state.selectedKey]}
                    onRemove={this.handelRemove}
                    onEdit ={this.handleEdit}
            	/>
            	<ContactCreate
            		onCreate={this.handelCreate}
        		/>
            </div>
        );
    }
}