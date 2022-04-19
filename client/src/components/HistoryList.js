import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import History from "../components/History";

function HistoryList() {
  const recordList = useSelector((state) => state.records);

  return (
    <div>
      {/* Use map */}
      {recordList
        .slice(0, -2)
        .reverse()
        .map((rec) => {
          return <History key={rec._id} rec={rec} />;
        })}
    </div>
  );
}

export default HistoryList;
