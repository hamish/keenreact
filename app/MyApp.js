import React from 'react';

class MyApp extends React.Component {
    constructor(props) {
        super(props);
        this.call_keen = this.call_keen.bind(this);
        this.state = {ht:'there'};
    }

    call_keen(){
        console.log("calling keen");
        setTimeout(function(){
                console.log("simulated done");
                this.setState({hoho:"yoyo"});
            }.bind(this)
        , 500);
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
