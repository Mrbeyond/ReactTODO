import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
// import Student from './files/student';
import Navbar from './files/Navbar';
import Items from './files/Items';
import NewItems from './files/NewItems';

class App extends React.Component {
	state={
		items:[],
		items2:[]
	}

	addItem=(item)=>{
		this.setState({
			items:[...this.state.items, item]
		});
		console.log(this.state.items);
	}

	delete=(toDel)=>{
		const dupItems = this.state.items.filter((e)=>{return e.idNum !== toDel});
		this.setState({
			items: dupItems
		})
		console.log(this.state)
	}

	searcher=(toSearch)=>{
		if(this.state.items2.length<1){
		this.setState({
			items2:this.state.items 
		});}
		const dupItem = this.state.items.filter((e)=>{return e.item.toLowerCase().toString().includes(toSearch.toLowerCase())});
			this.setState({
				items:dupItem
			}); 		
			if (!toSearch) {
				this.setState({
					items: this.state.items2
				})	
			}
				
	}

render(){
  return (
  	<React.Fragment>
 		<Navbar />
 		<div className= "container-fluid">
 			<div className="row">
 				<div className=" col-md-8">
 					<Items toItems={this.state.items} filt={this.delete}  search={this.searcher}/>
 				</div>
 				<div className=" col-md-4">
					<NewItems onAdd={this.addItem} />
 				</div>
 			</div>
 		</div>
 	</React.Fragment>
    )

  
}
  
}
export default App;
