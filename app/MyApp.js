import React from 'react';

class MyApp extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        console.log(this.props);
        return <div>MyApp</div>
    }

}

export default MyApp;
