import "./Footer.css";
import logoGithubBranco from "/images/github-mark-white.png";

interface isLandscapeProps {
  isLandscape: boolean;
}

export default function Footer({ isLandscape }: isLandscapeProps) {
  return (
    <footer id="footer" className={`footer ${isLandscape ? "footer-landscape" : ""}`}>
      <div>
        <a href="https://github.com/pet-ads/wecomp-v" target="_blank">
          <img className="logoGithub footer-ref" src={logoGithubBranco} alt="Logo do Github" />
        </a>
        <a href="http://petads.paginas.scl.ifsp.edu.br" target="_blank">
          <p className="footer_text footer-ref">Desenvolvido com ♥ por PET/ADS @ IFSP/SCL</p>
        </a>
      </div>
    </footer>
  );
}
