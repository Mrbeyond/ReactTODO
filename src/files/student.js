import React, {Component} from 'react';


export default class Student extends React.Component {

	constructor(props){
		super(props);		
		this.state = {
		    students:[
		    {firstname:'Omogungi', lastname:'Omokanlapa', age:29},
		    {firstname: 'Marabo', lastname:'Tifunloran', age:15},
		    {firstname: 'Alaanu', lastname:'Tonfimajelerofo', age:25},
		    {firstname: 'Favour', lastname:'Oko Omoge Worldwide', age:85},
		    {firstname: 'Mr Atom', lastname:'the guru', age:35},
		    {firstname: 'Delight', lastname:'Nepa-Kind', age:48}
		    ],
		    yewo: true
	    }
	    //this.man = this.man.bind(this);
	}

    man =(e)=>{
    	e.preventDefault();
        this.setState(prev=>({
    	yewo: !prev.yewo
    	}))
    } 

    consoller = (e)=> {
    	e.preventDefault();
    	this.man(e);
    	alert(this.state.yewo);
    }

	render() {
	    return (
	   	    <React.Fragment>
	   	    <button type="button"  onClick={this.man} > {this.state.yewo? 'on':'off'} </button>
	      		{
	        		this.state.students.map(s =>{
		         		return(
		           		<div > 
		                	<p> { "My name is " + s.firstname +" "+ s.lastname +" and my age is "+ s.age} </p>
		           		 </div>
		             	)
	        		})
	     		 }
	         <form>	         	
	         	<div>
	         		<input type='text' id='firstname' onChange= {this.consoller} /> <br/> <br/>
	         		<input type='text' id='lastname' /> <br/> <br/>
	         		<input type='number' id='age' /> <br/> <br/>
	         		<input type='submit' value='submit' />
	         	</div>
	        </form>
	   		</React.Fragment>
	    );
	}


}