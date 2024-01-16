import "./Parallax.css";

interface IBackgrounProps {
  isLandscape: boolean;
}

function Background({ isLandscape }: IBackgrounProps) {
  return (
    <div className={`parallax_layer_back ${isLandscape ? "parallax_layer_back_landscape" : ""} parallax__layer`}>
      <div className="parallax-image" />
    </div>
  );
}

export default Background;
