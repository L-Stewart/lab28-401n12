import React from 'react'
import UUIDV1 from 'uuid/v1';

import NoteCreateForm from './NoteCreateForm/NoteCreateForm';
import NoteList from './NoteList/NoteList';

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
    this.state.notes = [];
  }

  addNote = (note) =>{
    this.setState((previousState) => {
      note.id = UUIDV1();

      return{
        notes: [...previousState.notes, note]
      }
    })
  };

  render(){
    return(
      <div>
        This is the Dashboard
        <NoteCreateForm addNote={this.addNote}/>
        <NoteList notes={this.state.notes}/>
      </div>
    )
  }
}