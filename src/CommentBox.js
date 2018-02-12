import React, { Component } from 'react';
import './CommentBox.css';
import firebase from './firebase';

class CommentBox extends Component {

    constructor() {
        super();
        this.state = {
            comment: '',
            userName: '',
            comments: [],
            user: null
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

        componentDidMount() {
        const commentsRef = firebase.database().ref('comments');
        commentsRef.on('value', (snapshot) => {
            let comments = snapshot.val();
            let newState = [];
            for (let comment in comments) {
                newState.push({
                    id: comment,
                    comment: comments[comment].comment,
                    user: comments[comment].user
                });
            }
            this.setState({
                comments: newState
            });
        });
    }

        handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    
    handleSubmit(e) {
        e.preventDefault();
        const commentsRef = firebase.database().ref('comments');
        const comment = {
            comment: this.state.comment,
            user: this.state.userName
        }
        commentsRef.push(comment);
        this.setState({
            comment: '',
            userName: ''
        });
    }

    displayComments() {
                    //         this.state.comments.map((comment) => {
                    //     return (
                    //         <div key={comment.id}>
                    //             <h3>{comment.comment}</h3>
                    //             Written by: {comment.user}
                    //         </div>
                    //     );
                    // });
            //                     for (let comment in this.state.comments) {
            //                 return <div key={comment.id}>
            //                     <h3>{comment.comment}</h3>
            //                     Written by: {comment.user}
            //                 </div>
            // }
    }

    render() {
        return (
            <div className="CommentBox">
            <form onSubmit={this.handleSubmit}>
            <div className="commentBox">
            Enter Comment:
            <input type="text" placeholder="What are you thinking?"
                       onChange={this.handleChange} value={this.state.comment} name="comment" />
            </div>
            <div className="UserInput">
            Name:
            <input type="text" placeholder="Who are you?"
                       onChange={this.handleChange} value={this.state.userName} name="userName" />
            </div>
            <button className="CommentBoxButton">Submit</button>
            </form>
            {this.displayComments()}
            </div>
        )
    }
}

export default CommentBox;