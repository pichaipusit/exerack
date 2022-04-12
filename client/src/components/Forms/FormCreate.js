import React, { useEffect } from "react";
import FileBase from "react-file-base64";

function FormCreate() {
  const [recordInput, setRecordInput] = useEffect({
    imgFile: "",
    activityName: "",
    date: new Date(),
    duration: "",
    note: "",
    goal: 0,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h3>Create New Activity</h3>

        <div className="form-group">
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setRecordInput({ ...recordInput, imgFile: base64 })
            }
          />

          <input
            className="act_name"
            type="text"
            placeholder="Activity Name"
            value={recordInput.activityName}
            onChange={(e) =>
              setRecordInput({ ...recordInput, activityName: e.target.value })
            }
          />

          <input
            className="date"
            type="date"
            placeholder=" Na"
            value={recordInput.date}
            onChange={(e) =>
              setRecordInput({ ...recordInput, date: e.target.value })
            }
          />

          {/* Duration */}

          <input
            className="goal"
            type="number"
            placeholder="goal"
            value={recordInput.goal}
            onChange={(e) =>
              setRecordInput({ ...recordInput, goal: e.target.value })
            }
          />

          <input
            className="note"
            type="text"
            placeholder="note"
            value={recordInput.note}
            onChange={(e) =>
              setRecordInput({ ...recordInput, note: e.target.value })
            }
          />
        </div>
      </form>
    </>
  );
}

export default FormCreate;
