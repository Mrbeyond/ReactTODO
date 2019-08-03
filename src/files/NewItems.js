import React, {Component} from 'react';
	class NewItems extends React.Component{
		state={
			idNum:1
		}

		handleChange=(e)=>{
			this.setState({				
			[e.target.id]: e.target.value
			});
		}

		handleSubmit=(e)=>{
			e.preventDefault();
			this.setState({
				idNum: this.state.idNum+1
			})
			this.props.onAdd(this.state);
			console.log(this.state);
		}

		render(){
			return(
				<React.Fragment>
						<div className="card shadow">
							<div className="card-header d-flex justify-content-center bg-primary text-white">
								<span> New Items</span>
							</div>
							<div className="card-body">
								<form onSubmit={this.handleSubmit}>
									<div className="form-group">
										<input className="form-control" id="item" type="text" placeholder="New item" onChange={this.handleChange} />
									</div>
									<div className="form-group">
										<input className="form-control" id="price" type="text" placeholder="Price" onChange={this.handleChange} />
									</div>
									<div className="form-group">
										<input className="form-control" id="quantity" type="text" placeholder="Quantity" onChange={this.handleChange} />
									</div>
									<div className="form-group">
										<button type="submit" className="btn btn-primary btn-block" > Add New Item </button>
									</div>								
								</form>
							</div>
						</div>
			</React.Fragment>
			)
		}


	}
	export default NewItems;