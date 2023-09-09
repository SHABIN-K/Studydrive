import MenuCard from "./cards/MenuCard";

const Feed = ({ label, feedData, styleHead, style, route, cardStyle }) => {
  const feed = feedData;
  return (
    <div>
      <h1
        className={`font-epilogue font-bold sm:font-semibold text-[20px] text-green-300 text-left ${styleHead}`}
      >
        {label}
      </h1>
      <div className={`grid grid-cols-4 md:gap-[26px] ${style}`}>
        {feed.map((FeedData, index) => {
          return (
            <MenuCard
              key={index}
              data={FeedData}
              route={route}
              style={cardStyle}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Feed;
