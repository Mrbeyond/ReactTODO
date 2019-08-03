import React, {Component} from 'react';
import Item from './Item';
	class Items extends React.Component{
		state={
			items: []
		}		
		
		render(){
			return( 
				<React.Fragment>
					<Item toItem={this.props.toItems} delToItem={this.props.filt} searchItem={this.props.search}/>
				</React.Fragment>
			)
		}


	}
	export default Items;