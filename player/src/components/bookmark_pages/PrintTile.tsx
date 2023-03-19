import { observer } from "mobx-react-lite";
import BookmarkPage from "services/models/bookmark_page";
import RichTextViewer from "components/ui/RichTextViewer";
import VideoSizer from "components/ui/VideoSizer";
import Drawing from "components/ui/Drawing";

type Props = {
  bookmarkPage: BookmarkPage;
};

const Container = observer(({ bookmarkPage }: Props) => {
  const video = bookmarkPage.video;
  const imageStyle = {
    aspectRatio: `${video.width}/${video.height}`,
  };

  if (
    bookmarkPage.videoFrame === null ||
    bookmarkPage.videoFrame.url === null
  ) {
    return null;
  }

  return (
    <>
      <div className="relative">
        <div className="absolute inset-0">
          <VideoSizer originalWidth={video.width} originalHeight={video.height}>
            {({ width, height, scale }) => {
              const dimensionsStyle = {
                width: `${width}px`,
                height: `${height}px`,
              };

              return (
                <div style={dimensionsStyle} className="relative">
                  <div className="absolute inset-0 z-30">
                    <Drawing
                      drawingId={bookmarkPage.id}
                      drawing={bookmarkPage.drawing.data || null}
                      scale={scale}
                      readOnly={true}
                    />
                  </div>
                </div>
              );
            }}
          </VideoSizer>
        </div>

        <img
          className="w-full"
          src={bookmarkPage.videoFrame.url}
          style={imageStyle}
        />
      </div>
      <div className="bg-zinc-800 p-4">
        <RichTextViewer content={bookmarkPage.content.data} />
      </div>
    </>
  );
});

export default Container;
