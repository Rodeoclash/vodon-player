import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
TimeAgo.addDefaultLocale(en);

const timeAgo = new TimeAgo("en-US");

type Props = {
  date: Date;
};

const Component = ({ date }: Props) => {
  return <span>{timeAgo.format(date)}</span>;
};

export default Component;
