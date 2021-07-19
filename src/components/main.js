import react from 'react';
import Tweet from './Tweet';
import Tweetdata from './Tweetdata';



function Main ()  {
    const TweetComponents = Tweetdata.map(tweeta => <Tweet key={tweeta.id} TweetMessage={tweeta.TweetMessage} Tweethandle={tweeta.Tweethandle} />)
 
    return (
        <div>Main Component
  
           {TweetComponents}
        </div>
    );
}

export default Main