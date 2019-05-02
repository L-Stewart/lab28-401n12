import React from 'react'

export default class NoteList extends React.Component{

  renderNotes = () => {
    const {notes} = this.props;
    return(
      <ul>
        {
          notes.map(currentNote => {
            return <li key={currentNote.id}>
              {currentNote.title} : {currentNote.content}
            </li>
          })
        }
      </ul>
    );
  };

  render(){
   return(
     <div>
       {this.renderNotes() }
     </div>
   )
  }
}