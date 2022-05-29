import React, { useState, useEffect } from "react";
import { useWindowScroll } from "react-use";
// the video https://www.youtube.com/watch?v=0jgl5L8yeTw

export default function ScrollToTop() {
  const { y: pageYOffset } = useWindowScroll();
  const [visible, setVisiblity] = useState(false);

  useEffect(() => {
    if (pageYOffset > 400) {
      setVisiblity(true);
    } else {
      setVisiblity(false);
    }
  }, [pageYOffset]);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  if (!visible) {
    return false;
  }

  return (
    <div
      className="scroll-to-top cursor-point text-center"
      onClick={scrollToTop}
    >
      <i className="icon fa fa-chevron-up"></i>
    </div>
  );
}
