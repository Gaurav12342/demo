import React from 'react';

class ConditionalRender extends React.Component {
  constructor(props) {
    super(props);
    this.unreadMessages = this.props.unreadMessages;
    this.userLogin = false;
  }
  render() {
    const login = this.userLogin;
    const createMarkup = () => {
      return { __html: 'First &middot; Second' };
    }
    return (
      <div>
        <h2>Second page</h2>
        {/* {this.unreadMessages.length > 0 &&
          <h2>
            You have {this.unreadMessages.length} unread messages.
        </h2>
        } */}
        <h2>The User is {login ? "Currently" : "Not"} Logged In. </h2>
        <h3 dangerouslySetInnerHTML={createMarkup()} />
      </div>
    )
  }
}

export default ConditionalRender;