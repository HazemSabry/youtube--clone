import React from "react";

const FeedsFilterBtn = ({ feed, feedTopic, setFeedTopic }) => {
  return (
    <button
      className="feed-btn"
      style={{
        color: feed === feedTopic && "#272727",
        backgroundColor: feed === feedTopic && "#ffffff",
      }}
      onClick={() => setFeedTopic(feed)}
    >
      {feed}
    </button>
  );
};

export default FeedsFilterBtn;
