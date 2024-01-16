import { ReactNode } from "react";
import "./Parallax.css";

interface IBackgrounProps {
  isLandscape: boolean;
  children: ReactNode;
}

function Background({ isLandscape, children }: IBackgrounProps) {
  return (
    <div className={`parallax_layer_back ${isLandscape ? "parallax_layer_back_landscape" : ""} parallax__layer`}>
      <div className="parallax-image">{children}</div>
    </div>
  );
}

export default Background;
