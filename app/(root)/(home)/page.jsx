import Category from "@/components/category/Category";
import Feed from "@/components/feed/Feed";

export default function Home() {
  return (
    <div className="md:flex">
      <div className="md:ml-10">
        <Category />
        <Feed />
      </div>
    </div>
  );
}
