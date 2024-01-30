import Lottie from "react-lottie";

export function ScrollDown() {
  return (
    <Lottie
      options={{
        loop: true,
        autoplay: true,
        animationData: require("../../assets/lottie/scroll-down.json"),
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice",
        },
      }}
      height={50}
      width={50}
    />
  );
}
