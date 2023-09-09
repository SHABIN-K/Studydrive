import Feed from "@/components/Feed";
import { category } from "@/constants/category";
import { courses } from "@/constants/courses";

export default function Home() {
  return (
    <div className="md:flex">
      <div className="md:ml-10">
        <Feed
          label="Discover categories"
          feedData={category}
          style="md:flex md:flex-wrap mt-[18px] xs:gap-1.5"
          route="category"
        />
        <Feed
          label="Courses"
          feedData={courses}
          styleHead="mt-3"
          style="md:grid-cols-5  mt-2 gap-1.5 justify-between md:justify-start"
          cardStyle="mt-2 md:mt-0"
          route="courses"
        />
      </div>
    </div>
  );
}
