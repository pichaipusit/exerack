import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import History from "../components/History";

function HistoryList() {
  const records = useSelector((state) => state.records);
  const [recordList, setRecordList] = useState(records.slice(0, -2));

  return (
    <div>
      {/* Use map */}
      {recordList.map((rec) => {
        return <History key={rec._id} rec={rec} />;
      })}
    </div>
  );
}

export default HistoryList;
