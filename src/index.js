import React from "react";
import ReactDOM from "react-dom";
import ApprovalCard from "./ApprovalCard";
import CommentDetail from "./CommentDetail";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail author="Sam" date="Today at 6:00PM" content="Good" />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail author="John" date="Today at 6:00PM" content="Great" />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail author="Jane" date="Today at 6:00PM" content="Bad" />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
