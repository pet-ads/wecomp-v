import "./Parallax.css";

interface BackgroundProps {
  isLandscape: boolean;
}

export default function Background({ isLandscape }: BackgroundProps) {
  return (
    <div className={`parallax_layer_back ${isLandscape ? "parallax_layer_back_landscape" : ""} parallax__layer`}>
      <div className="parallax-image" />
    </div>
  );
}
