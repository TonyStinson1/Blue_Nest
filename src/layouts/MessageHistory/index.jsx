import React, { Component } from 'react';

class MessageHistory extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { key, message } = this.props;
    const { sender,receiver} = message;
    const nestedDiv = <React.Fragment>
      <div className="media">
        <div className="media-left">
          <img src={receiver.image} alt="" />
        </div>
        <div className="media-body">
          <a href="#"><h3>{receiver.userName}</h3></a>
          <p>{receiver.text}</p>
          <a href="#" className="replay">Reply</a>
        </div>
      </div>
    </React.Fragment>

    const emptyDiv = <React.Fragment></React.Fragment>

    return (
      <li className="media" key={key} >
        <div className="media-left">
          <img src={sender.image} alt="" />
        </div>
        <div className="media-body">
          <a href="#"><h3>{sender.userName}</h3></a>
          <p>{sender.text}</p>
          <a href="#" className="replay">Reply</a>

          {receiver.userName !== '' ? nestedDiv : emptyDiv}
        </div>
      </li>
    );

  }
}
export default MessageHistory;