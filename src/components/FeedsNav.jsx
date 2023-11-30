import { FeedsFilterBtn } from ".";
import { feedTopicsRandom } from "../utils/feedTopic";

const feedsTopic = feedTopicsRandom();

const FeedsNav = ({ feedTopic, setFeedTopic }) => {
  return (
    <div className="feed-nav">
      {feedsTopic.map((feed) => (
        <FeedsFilterBtn
          feed={feed}
          feedTopic={feedTopic}
          setFeedTopic={setFeedTopic}
        />
      ))}
    </div>
  );
};

export default FeedsNav;
