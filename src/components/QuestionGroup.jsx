import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const QuestionGroup = ({ data }) => {
  const [selectedId, setSelectedId] = useState(null);

  const displayQuestion = (id) => {
    if (selectedId === id) {
      setSelectedId(null);
    } else {
      setSelectedId(id);
    }
  };

  return (
    <div className="bg-blue-50 md:my-10 md:p-6">
      {data.map((item) => {
        const { id, title, content } = item;
        return (
          <div
            className="cursor-pointer"
            key={id}
            onClick={() => displayQuestion(id)}
          >
            <div
              className={`flex justify-between pt-2 pb-4 mt-4 ${
                selectedId === id ? "" : "border-b"
              }`}
            >
              <h2 className="font-semibold text-xl text-accent">{title}</h2>
              {selectedId !== id ? <IoIosArrowDown /> : <IoIosArrowUp />}
            </div>
            {selectedId === id ? (
              <div className={`py-4 ${selectedId === id ? "border-b" : ""}`}>
                <p>{content}</p>
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
};

export default QuestionGroup;
