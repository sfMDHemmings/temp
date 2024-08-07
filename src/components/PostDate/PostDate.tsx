import React from 'react';
// import { gsap } from 'gsap';
// import SplitText from '../../inc/js/libs/SplitText';
// gsap.registerPlugin(SplitText);

interface Date {
    date: any; // what would be better here?
}

// TODO: remove ALL gsap code from all components.
// I want to redo all this and make it more resuable to stop writting the same stuff all the time.
// Could be done as a custom hook!

const PostDate = ({ date }: Date) => {
    const dateValue = new Date(date);

    const dateFormat = {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
    } as const;

    const displayDate = new Intl.DateTimeFormat('en-GB', dateFormat).format(dateValue);

    return (
        <div className="post-date tagline">
            Posted on <time>{displayDate}</time>
        </div>
    );
};

export default PostDate;
