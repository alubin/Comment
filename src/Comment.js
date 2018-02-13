import React, { Component } from 'react';
import './style.css';
import PropTypes from 'prop-types';

class Comment extends Component {
    render() {
        return <section className='Comment'>
            <div>User: {this.props.userName}</div>
            <div>Comment: {this.props.comment}</div>
        </section>
    }
}

Comment.propTypes = {
    userName: PropTypes.string,
    comment: PropTypes.string
};

export default Comment;