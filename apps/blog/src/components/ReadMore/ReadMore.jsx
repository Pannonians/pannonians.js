import React, { useState } from 'react';
import { renderToString } from 'react-dom/server';
import AllPosts from '../../containers/Home/AllPosts/AllPosts';

/**
* @author
* @function ReadMore
**/

export const ReadMore = ({textPost}) => {
    var postToString = renderToString(AllPosts);
    // const text = myComponentString;
    const [isReadMore, setIsReadMore] = useState(true)
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore)
    }

    return (
        <p className="text">
            {isReadMore ? postToString.slice(0, 100) : postToString}<br></br>
            <button onClick={toggleReadMore} className="read-or-hide">Read More</button>
            {/* {isReadMore ? "...read more" : " show less"} */}
        </p>
    )
}
