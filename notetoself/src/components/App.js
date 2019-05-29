import React, {Component} from 'react';
import {Form,FormControl, Button} from 'react-bootstrap'; //it's not a default that's why the brackets are here!

class App extends Component{
    constructor() {
        super();

        this.state = {
            text: ''
        }
    }

    render() {
        return (
            <div>
                <h2> Note to Self 2 </h2>
                <Form inline> {/*to to samo co by bylo : inline={true} */}
                    <FormControl onChange={event => this.setState({ text : event.target.value})}/> {/*Here user will
                     put a data and it has not any data or value. UWAGA NA {}*/}
                    {' '}
                    <Button onClick={() => console.log(this.state)}>Submit </Button>
                </Form>
            </div>
        )
    }
}


export default App;