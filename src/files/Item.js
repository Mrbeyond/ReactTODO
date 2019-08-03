import React, {Component} from 'react';

	class Item extends React.Component{
		state ={

		}
		
		render(){
			return(
				<React.Fragment>
					<div className="card shadow">
							<div className="card-header justify-content-center bg-primary text-white">
								<div className="d-flex justify-content-center">
									<div>ITEMS</div>
								</div>
								<div className="row">
									<div className="col-md-4 d-flex justify-content-center">
										<input className="form-control" placeholder="Search..."  onKeyUp={(e)=>{e.preventDefault(); this.props.searchItem(e.target.value); console.log(e.target.value)}}/>
									</div>
								</div>
							</div>
							<div className="card-body">
								<table className="table table-hover">
									<thead>
										<tr>
											<th>S/N</th>
											<th>Item</th>
											<th>Price</th>
											<th>Quantity</th>
											<th>Operation</th>
										</tr>
									</thead>
									<tbody>
										{ 
											this.props.toItem.map((Object)=>{
											return(
												<tr key={Object.idNum}>
													<td>{Object.idNum}</td>
													<td>{Object.item}</td>
													<td>{Object.price}</td>
													<td>{Object.quantity}</td>
													<td><span onClick={(e)=>{e.preventDefault(); this.props.delToItem(Object.idNum)}} className="badge badge-danger"><strong>&times;</strong></span></td>
												</tr>
												)
											})											
										}
									</tbody>
								</table>
							</div>
						</div>
				</React.Fragment>
			)
		}
	}
	export default Item;