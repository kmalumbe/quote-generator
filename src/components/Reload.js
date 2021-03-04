import React, { Component } from 'react';
import RefreshIcon from '@material-ui/icons/Refresh';
class Reload extends React.Component{

     refreshPage() {
		window.location.reload(false);
	}

    render(){
        return(
        	<div>
		    	<RefreshIcon style={{fontSize:'40pt'}} onClick={this.refreshPage}></RefreshIcon>
		    </div>    
        )  
    }
}

export default Reload;