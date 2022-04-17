import React from "react";
import History from "../components/History";

function HistoryList({ matches }) {
  return (
    <div>
      {/* Use map */}
      <History matches={matches} />
      <History matches={matches} />
    </div>
  );
}

export default HistoryList;
