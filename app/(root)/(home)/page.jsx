import Feed from "@/components/Feed";
import { courses } from "@/constants";

export default function Home() {
  return (
    <div className="md:flex">
      <div>
        {/* 
        <Feed
          label="Discover categories"
          feedData={category}
          style="md:flex md:flex-wrap mt-[18px] xs:gap-1.5"
          route="category"
        />
        */}
        <Feed
          label="Discover Courses"
          feedData={courses}
          styleHead="mt-3"
          style="md:grid-cols-5  mt-4 gap-1.5 justify-between md:justify-start"
          cardStyle="mt-2 md:mt-0"
          route="courses"
        />
      </div>
    </div>
  );
}
