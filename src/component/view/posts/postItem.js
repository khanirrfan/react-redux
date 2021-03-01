import React from 'react'

const PostItem = ({item}) => {
    console.log('Hello Post items')
    console.log(item)
    return (
        <div>
        {JSON.stringify(item)}
        </div>
    )
}

export default PostItem;
