import React, { Component } from 'react'
import '../App.css';
import AddCommentForm from './AddCommentForm';




export class PostCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div style={{width:'60%', border:'1px solid black', margin:'20px auto 20px auto',backgroundColor:'wheat',borderRadius:'2px'}}>
        <div style={{display:'flex',}}>
        <button className='deletBt'>X</button>
        </div>
        <h3>{this.props.data.title}</h3>
        <hr></hr>
        <h4>{this.props.data.content}</h4>
        {this.props.data.comments.length ? this.props.data.comments.map(item => <p>comment</p>) : <p>No comments</p>}
        <AddCommentForm/>
      </div>
    )
  }
}

export default PostCard