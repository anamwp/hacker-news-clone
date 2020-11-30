import React from 'react'
import Story from './Story';
import UseDataFetcher from '../hooks/dataFetcher';

const showStories = ( props ) => {
    const { type } = props.match.params;
    const { isLoading, errorMsg, stories } = UseDataFetcher(type);
    
    return (
        <React.Fragment>
            {
                isLoading ? <p>Loading </p> : (
                    <React.Fragment>
                        {
                            stories.map( ( {data:story}) => (
                                <Story key={story.id} story={story} />
                                
                            ) )
                        }
                    </React.Fragment>
                )
            }
        </React.Fragment>
    )
}

export default showStories;