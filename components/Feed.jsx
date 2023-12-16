import DataCard from "./cards/DataCard";

const Feed = ({ label, feedData, styleHead, style, route, cardStyle }) => {
  const feed = feedData;
  return (
    <div>
      <h1 className={`select_header ${styleHead}`}>{label}</h1>
      <div className={`grid grid-cols-3 md:gap-[26px] ${style}`}>
        {feed.map((FeedData, index) => {
          return (
            <DataCard
              key={index}
              hrefData={{
                pathname: `/${route}`,
                query: { name: FeedData.link },
              }}
              data={FeedData}
              altMsg={FeedData.description}
              style={cardStyle}
              styleContent="flex flex-col"
              syleName="text-[#808191] tracking-tighter"
            />
          );
        })}
      </div>
    </div>
  );
};

export default Feed;
