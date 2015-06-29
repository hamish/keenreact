import React from 'react';
//import {Keen} from 'keen-js';
import {PROJECT_ID, READ_KEY} from './CONSTANTS';

class MyApp extends React.Component {
    constructor(props) {
        super(props);
        this.call_keen = this.call_keen.bind(this);
        this.state = {count:1};
    }

    call_keen(){
        console.log("calling keen");
        console.log(PROJECT_ID);
        console.log(READ_KEY);

        //var client = new Keen({
        //    projectId: PROJECT_ID, // String (required always)
        //    readKey: READ_KEY      // String (required for querying data)
        //});
        //console.log(client);


         //The code below works...
        setTimeout(function(){
                console.log("simulated done");
                this.setState({count: this.state.count+1});
            }.bind(this)
        , 1000);
    }

    render(){
        var keen_results_str = JSON.stringify(this.state, null, 2);

        return <div>
            <h1>MyApp</h1>
            <p>
                <button onClick={ this.call_keen }>Call Keen</button>
            </p>
            Keen results here: <br />
            <pre>
                { keen_results_str }
            </pre>

        </div>
    }

}

export default MyApp;
