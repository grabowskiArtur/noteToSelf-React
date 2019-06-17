import React, {Component} from 'react';
import {Form, FormControl, Button} from 'react-bootstrap';
import Note from './Note';

import {bake_cookie, read_cookie, delete_cookie} from 'sfcookies'


const cookie_key = 'NOTES';

class App extends Component{
    constructor() {
        super();

        this.state = {
            text: '',
            notes: [] // to bedzie tworzone nowe za kazdym razem a nie tylko dopisywane
        }
    }

    componentDidMount() {
        this.setState( {notes : read_cookie(cookie_key)});
        console.log("I ve already run componentDidMount function");
    }


    submit(){
        const {notes, text} = this.state;
        console.log(text);
        console.log(notes.values().next().value);

        notes.push({text}); // wrzuc ja do tablicy (lokalnie!)

        this.setState({notes});
        console.log(this.state);


        bake_cookie(cookie_key, this.state.notes);
    }

    clear(){
        delete_cookie(cookie_key);
        this.setState( {notes: []});
    }

    render() {
        return (
            <div>
                <h2> Note to Self 2 </h2>
                <Form inline>
                <FormControl onChange={event => { this.setState({ text : event.target.value})} } />

                    <Button onClick={() => this.submit()}>Submit </Button>
                </Form>
                {

                    this.state.notes.map((note, index) => {
                        return(

                            <Note key={index} note={note}/>
                        )
                    })
                }
                <hr/>
                <Button onClick={() => this.clear()}>Clear Notes </Button>
            </div>
        )
    }
}


export default App;