import React, { useState } from 'react';
import { renderToString } from 'react-dom/server';
import AllPosts from '../../containers/Home/AllPosts/AllPosts';

/**
* @author
* @function ReadMore
**/

export const ReadMore = ({textPost}) => {
    var myComponentString = renderToString(AllPosts);
    // const text = myComponentString;
    const [isReadMore, setIsReadMore] = useState(true)
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore)
    }

    return (
        <p className="text">
            {isReadMore ? myComponentString.slice(0, 100) : myComponentString}<br></br>
            <button onClick={toggleReadMore} className="read-or-hide">Read More</button>
            {/* {isReadMore ? "...read more" : " show less"} */}
        </p>
    )
}
