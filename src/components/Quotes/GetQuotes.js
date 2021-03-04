import React, { Component } from 'react';
import Reload from '../Reload';
import './GetQuotes.css';
class GetQuotes extends Component{
    constructor(props){
        super(props);
        this.state = {
            error : null,
            isLoaded : false,
            // quotes : []  ,
            randomQuote : null,      
        };
    }


    componentDidMount() {
        fetch("https://type.fit/api/quotes")
        .then( response => response.json())
        .then(
            (result) => {
                this.setState({
                    isLoaded : true,
                    quotes : result,
                    randomQuote : result[Math.floor(Math.random()*result.length)]
                    
                });
            },

            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                })
            },
        )
    }
    
    render() {
        const {error, isLoaded, randomQuote} = this.state;
        
        if(error){
            return <div>Error in loading</div>
        }else if (!isLoaded) {
            return <div>Loading ...</div>
        }else{
            // quote = quotes[Math.floor(Math.random()*quotes.length)];
            console.log("Author: "+randomQuote.author);
            return(
                <div>
                    <ul className="item" >
                    {   <div align='center'>
                            <p className="text">{randomQuote.text}</p>
                            {(typeof randomQuote.author !=='undefined' && randomQuote.author !=null ) 
                                ?<p className="author">- { randomQuote.author} -</p> 
                                :<p className="author">- Unknown Author -</p>}

                        </div>
                        // quotes.map(quote => (
                        //     <li align="center">
                        //         <div>
                        //             <p>{quote.text}</p>
                        //             <p>{quote.author}</p>
                        //         </div>
                        //     </li>
                        // ))

                    }
                    </ul>
                    <Reload/>
                </div>
            );
        }    
    }

    

    
}
export default GetQuotes;