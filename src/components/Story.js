import React from 'react';
import styled from 'styled-components';

const Link = ({ url, title }) => (
  <a href={url} target="_blank" rel="noreferrer">
    {title}
  </a>
);

const StoryWrapper = styled.div`
  border:solid 1px #eee;
  background:#f5f5f5;
  padding:15px;
  margin-bottom:15px;
  border-radius:4px;
`
const StoryTitle = styled.div`
    margin-bottom:5px;
    a{
        color: #046B99;
        font-weight:500;
    }
`
const StoryInfo = styled.div`
    color:#969696;
    font-size: 14px;
    span{
        padding:10px;
        text-transform: capitalize;
        &:first-child{
            padding-left:0;
        }
        a{
            color:#969696;
        }
    }
`

const Story = ({ story: { id, by, title, kids, time, url } }) => {
  return (
    <StoryWrapper className="story">
      <StoryTitle className="story-title">
        <Link url={url} title={title} />
      </StoryTitle>
      <StoryInfo className="story-info">
        <span>
          by{' '}
          <Link url={`https://news.ycombinator.com/user?id=${by}`} title={by} />
        </span>
        |
        <span>
          {new Date(time * 1000).toLocaleDateString('en-US', {
            hour: 'numeric',
            minute: 'numeric'
          })}
        </span>
        |
        <span>
          <Link
            url={`https://news.ycombinator.com/item?id=${id}`}
            title={`${kids && kids.length > 0 ? kids.length : 0} comments`}
          />
        </span>
      </StoryInfo>
    </StoryWrapper>
  );
};

export default Story;