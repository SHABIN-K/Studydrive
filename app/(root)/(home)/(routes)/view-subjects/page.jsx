import SubCard from "@/components/cards/SubCard";
import { subjects } from "@/constants";

const ViewSubjects = () => {
  return (
    <div>
      <h1 className="select_header">Select Subjects</h1>
      <div className="items-center">
        <div className="grid md:grid-cols-2 mt-[18px] gap-[10px]">
          {subjects.map((subject, index) => {
            return <SubCard key={index} data={subject} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default ViewSubjects;
