import lottie from "lottie-web";
import { useEffect, useRef } from "react";

export function LottieAnimation({ type = "loader" }) {
  const container = useRef("");
  useEffect(() => {
    const instance = lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require(`./${type}.json`),
    });
    return () => instance.destroy();
  }, []);
  return <div className="lottie-container" ref={container}></div>;
}
