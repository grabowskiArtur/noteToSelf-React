import React, {Component} from 'react';
import {Form,FormControl, Button} from 'react-bootstrap'; //it's not a default that's why the brackets are here!
import Note from './Note';
// 3 podstawowe operacje na ciasteczkach, stworz. odczytaj, wywal all
import {bake_cookie, read_cookie, delete_cookie} from 'sfcookies'

//klucz dla naszych konkretnych cookiesow! czyli odwolujac sie do  tego keya mozemy uzywac tych wyzej wymienionych
// funkcji!
const cookie_key = 'NOTES';

class App extends Component{
    constructor() {
        super();

        this.state = {
            text: '',
            notes: [] // to bedzie tworzone nowe za kazdym razem a nie tylko dopisywane
        }
    }
    //funkcja odpala sie po zaladowaniu komponentu od razu!
    componentDidMount() {
        //do notes wrzuc co masz w cookies pod tym keyem. chyba dziala jak lista ten read_cookie tylko nei ma get
        // tylko od razu zwraca co cza wg keya
        // dodatkowo ustawiamy jako initial state of notes dla odswiezonej strony!
        this.setState( {notes : read_cookie(cookie_key)});
        console.log("I ve already run componentDidMount function");
    }


    submit(){
        const {notes, text} = this.state; //O.o! do text wchodzi automatycznie samo text! bo JS sam ogarnia ze to jest
        // zwykla zmienna i jako ze nazwy sa takie same to nie trzeba jej po prawo pisac po raz drugi :o!! to samo
        // dla notes!!
        console.log(text);
        console.log(notes.values().next().value);

        // notes trzyma referencje albo kopie ? :o!!
        //const notes =  []; // to nie zadziala

        //const newNote = {text}; //a wgl to po co ta zmienna skoro uzywamy jej tylko raz
        //kolejna magia ze jako iz nazwa jest ta sama to text wystarczy uzyc raz :o !
        //const newNote = {text: text};
        //ale jako ze text juz wyciagnelismy do mozna uzyc text
        // zrob nowa notke z wartoscia aktualnie onCHange

        notes.push({text}); // wrzuc ja do tablicy (lokalnie!)

        //to samo tutaj skoro na poczatku wyciaglismy notes to juz mozna sie od kopa do tego odwolac
        this.setState({notes}); //notes zaraz zginie wiec trzeba zapisac do obiektu ktory przezyje
        console.log(this.state);

        //tak jak z reszta podpowiada, trzeba dac key i co ma "upiec". Wazne ze za kazdym razem robi jakby
        // ciasteczko od nowa a nie doklada!
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
                <Form inline> {/*to to samo co by bylo : inline={true} */}
                <FormControl onChange={event => { this.setState({ text : event.target.value})} } />
                 {/*Here user will
                     put a data and it has not any data or value. UWAGA NA {}*/}
                    {' '}
                    <Button onClick={() => this.submit()}>Submit </Button>
                </Form>
                {
                    /*przelec wszystkie wartosci z state.notes i zrob z nimi to co w ()*/
                    /*drugi parametr zawsze bedzie indexem co z reszta widac w podpowiedzi!!*/
                    this.state.notes.map((note, index) => {
                        return(
                            // teraz transportujemy do Note.js note(lewy chyba) ktory ma wartosc {note}
                            <Note key={index} note={note}/> //self enclosing tag '/>'
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