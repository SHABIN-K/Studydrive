import { RWebShare } from "react-web-share";

const ShareButton = ({ title, text, url, btn }) => {
  return (
    <RWebShare
      data={{
        text: text,
        title: title,
        url: url,
      }}
    >
      {btn}
    </RWebShare>
  );
};
export default ShareButton;
