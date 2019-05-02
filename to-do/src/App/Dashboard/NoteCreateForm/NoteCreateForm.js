import React from 'react'

export default class NoteCreateForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {id: '', title:'', content: ''}
  };

  handleChange = event => {
    const {name, value} = event.target;
    this.setState({
      [name]:value
    });
  };

  onComplete = event => {
    event.preventDefault();
    this.props.addNote(this.state)
};

  render(){
    return(
        <div>
          <form onSubmit={this.onComplete}>
            <input
            type="text"
            name="title"
            value={this.state.title}
            placeholder="Title Your TO-DO"
            onChange={this.handleChange}
            />
            <input
            type="text"
            name="content"
            value={this.state.content}
            placeholder="Whats Your TO-DO"
            onChange={this.handleChange}
            />
            <button type="submit">Create Your TO-DO Note</button>
          </form>
        </div>
    )
  };
}
