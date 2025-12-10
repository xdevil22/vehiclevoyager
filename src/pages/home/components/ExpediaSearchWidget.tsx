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
      <div>
        <iframe
          src="/ExpediaSearchWidget.html"
          title="Eagle Rider Widget"
          width="100%"
          height="318"
          style={{border: "none", overflow: "hidden"}}
          loading="lazy"
          // onLoad={() => setLoading(false)}
          className="eagle-rider-widget mb-2"
        />
      </div>
      <div>
        <iframe
          src="/vrbo-widget.html"
          title="Eagle Rider Widget"
          width="100%"
          height="320"
          style={{border: "none", overflow: "hidden"}}
          loading="lazy"
          // onLoad={() => setLoading(false)}
          className="eagle-rider-widget mb-2"
        />
      </div>
      <div>
        <iframe
          src="/hotelscom-widget.html"
          title="Eagle Rider Widget"
          width="100%"
          height="318"
          style={{border: "none", overflow: "hidden"}}
          loading="lazy"
          // onLoad={() => setLoading(false)}
          className="eagle-rider-widget mb-2"
        />
      </div>
    </>
  );
}

export default ExpediaSearchWidget;
