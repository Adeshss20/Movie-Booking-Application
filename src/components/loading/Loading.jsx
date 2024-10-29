import loadingGif from "../../static/loading.gif";

const Loading = () => {
  return (
    <div className="text-center">
      <img src={loadingGif} alt="Loading..." />
    </div>
  );
};

export default Loading;
