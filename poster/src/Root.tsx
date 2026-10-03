import { Still } from "remotion";
import { Poster } from "./Poster";
import "@fontsource/baloo-2/800.css";
import "@fontsource/nunito/400.css";
import "@fontsource/nunito/700.css";
import "@fontsource/jetbrains-mono/400.css";
import "@fontsource/jetbrains-mono/700.css";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Still id="Poster" component={Poster} width={1191} height={1684} />
    </>
  );
};
