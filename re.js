

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return alert('wowwwwwww you liked it!!!!'),
      prompt('enter your a name for a SHOUT OUT!')
    
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
      
    );
  }
}


const domContainer = document.getElementById('container');
ReactDOM.render(e(LikeButton), domContainer);