import Feed from "@/components/Feed";

export default function Home() {
  return (
    <div className="md:flex">
      <div>
        <Feed
          label="Discover Courses"
          styleHead="mt-3"
          style="md:grid-cols-5  mt-4 gap-1.5 justify-between md:justify-start"
        />
      </div>
    </div>
  );
}

/* 
        <Feed
          label="Discover categories"
          feedData={category}
          style="md:flex md:flex-wrap mt-[18px] xs:gap-1.5"
          route="category"
        />
  */
