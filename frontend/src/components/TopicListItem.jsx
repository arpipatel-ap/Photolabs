import React from "react";
import "../styles/TopicListItem.scss";
import TopicList from "./TopicList";
import topics from "mocks/topics";


const TopicListItem = (props) => {
  const {topics, getPhotosByTopics} =props;
  return (
    <div className="topic-list__item" onClick={()=>getPhotosByTopics(topics.id)}>
      <p>{topics.title}</p>
      
    </div>
  );
};

export default TopicListItem;
