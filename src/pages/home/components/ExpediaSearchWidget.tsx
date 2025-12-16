import React from "react";

interface Props {}

function ExpediaSearchWidget(props: Props) {
  const {} = props;

  return (
    <>
      <iframe
        src="/eg-affiliate-banners.html"
        title="Eagle Rider Widget"
        width="100%"
        height="270"
        style={{border: "none", overflow: "hidden"}}
        loading="lazy"
        // onLoad={() => setLoading(false)}
        className="eagle-rider-widget mb-2"
      />
    </>
  );
}

export default ExpediaSearchWidget;
