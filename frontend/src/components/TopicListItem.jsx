import React from "react";

import "../styles/TopicListItem.scss";
import TopicList from "./TopicList";
import topics from "mocks/topics";


const TopicListItem = (props) => {
  const {topic} =props;
  return (
    <div className="topic-list__item">
      {topic.title}
    </div>
  );
};

export default TopicListItem;
