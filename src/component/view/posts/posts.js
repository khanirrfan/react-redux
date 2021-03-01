import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchPosts } from '../../actions/posts';

import PostItems from './postItem';

const Posts = ({ fetchPosts, posts: { results } }) => {
    console.log('posts;', results)
    useEffect(() => {
        fetchPosts()
    }, []);

    return (
        <>
            { results && results.map(item => {
                console.log(item);
                return <PostItems item = { item } />
            })

            }
        </>
    )
}

Posts.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
}
const mapStateToProps = state => ({
    posts: state.posts.items
})
export default connect(mapStateToProps, { fetchPosts })(Posts);
