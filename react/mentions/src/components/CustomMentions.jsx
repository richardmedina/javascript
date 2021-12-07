import React from 'react'
import {
  MentionsInput,
  Mention
} from 'react-mentions';

//import './style.scss';
import classNames from './css.module.css'

const users = [
  {
    id: 'richard',
    display: 'Ricardo Medina'
  },
  {
    id: 'kristian',
    display: 'Kristian Medina'
  }
];


class CustomMentions extends React.Component {

  constructor(props){
    super(props);
    this.state ={
      comment: ''
    };
  }

  customDisplay = (entry, search, highlightedDisplay, index, focused) => {
    const json = {
      entry,
      search,
      highlightedDisplay,
      index,
      focused
    };
  
    console.log("CustomDisplay: ", json); 
    return (
      <div 
        style={{
          background: focused ? '#aaa' : 'white' 
        }}
        //className={`user ${focused ? 'focused' : ''}`}
      >
        {highlightedDisplay} {`(${focused})`}
      </div>
    )
  }
  

  render() {
    console.log('CustomMentions state: ', this.state);
    return (
    <>
      <MentionsInput
        value={this.state.comment}
        //className='mentions'
        //classNames={classNames}
        a11ySuggestionsListLabel={"Suggested mentions"}
        //className='comments-textarea'
        onChange={event => this.setState({comment: event.target.value})}
        
      >
       <Mention
        trigger='@'
        data={users}
        renderSuggestion={this.customDisplay}
        //className={classNames.mentions__mention}
        markup='@@@____id__^^____display__@@@^^^'
       />
      </MentionsInput>
    </>
    );
  }
}

export default CustomMentions;
