import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRecycle } from "@fortawesome/free-solid-svg-icons"; // İkonu içe aktarın
import "./CSS/MainPageContent.css";

const MainPageContent = () => {
  return (
    <div className="container">
      <div className="info">
        <h3>Takasla</h3>
        <span>
          Elinde ihtiyaç fazlası ürünlerin mi var? Takasla ile bu ürünleri diğer kullanıcılarla takas edebilir, ihtiyacın olan ürünlere kolayca ulaşabilirsin. 
          Hem çevreye katkıda bulunur hem de evindeki fazlalıklardan kurtulursun. Ürünlerini hemen listele ve takas yapmanın keyfini çıkar!
        </span>
        <FontAwesomeIcon icon={faRecycle} size="1x" /> {/* İkon boyutunu 4x yapın */}
      </div>
    </div>
  );
}

export default MainPageContent;
