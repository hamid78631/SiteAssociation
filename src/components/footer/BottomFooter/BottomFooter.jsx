import "../../../styles/BottomFooter.css";
import { useTranslation } from "react-i18next";

function BottomFooter() {
  const { t } = useTranslation();

  return (
    <div className="bloc-footer">
      <div>
        <h3 className="social-title">{t("footer.follow_us")}</h3>
        <div className="social-icons">
          <a href='https://wa.me/212691688503'>
            <img src="src/assets/whatsapp.png" alt="whatsapp" className="social-icon" />
          </a>
          <a href="https://www.facebook.com/AQJ.BM/">
            <img src="src/assets/communication.png" alt="Facebook" className="social-icon" />
          </a>
          <a href="https://www.linkedin.com/">
            <img src="src/assets/Linkedin.png" alt="LinkedIn" className="social-icon" />
          </a>
          <a href="https://www.instagram.com/aqj__bm?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
            <img src="src/assets/instagram.png" alt="Instagram" className="social-icon" />
          </a>
          
          <a href="https://www.youtube.com/@AQJ-BM">
            <img src="src/assets/youtube.png" alt="YouTube" className="social-icon" />
          </a>
          <a href="https://x.com/">
            <img src="src/assets/twitter.png" alt="Twitter" className="social-icon" />
          </a>
          
          
        </div>
      </div>

      <div>
        <h1 className="text-cyan-300 text-3xl font-bold mb-25">{t("footer.company")}</h1><br />
        <p className="text-gray-400 text-2xl mb-9 ml-5">{t("footer.about")}</p>
        <p className="text-gray-400 text-2xl mb-9 ml-5">{t("footer.features")}</p>
        <p className="text-gray-400 text-2xl mb-9 ml-5">{t("footer.works")}</p>
        <p className="text-gray-400 text-2xl mb-9 ml-5">{t("footer.career")}</p>
      </div>

      <div>
        <h1 className="text-cyan-300 text-3xl font-bold mb-25 ml-10">{t("footer.help")}</h1><br />
        <p className="text-gray-400 text-2xl mb-9 ml-5">{t("footer.customer_support")}</p>
        <p className="text-gray-400 text-2xl mb-9 ml-5">{t("footer.delivery_details")}</p>
        <p className="text-gray-400 text-2xl mb-9 ml-5">{t("footer.terms_conditions")}</p>
        <p className="text-gray-400 text-2xl mb-9 ml-5">{t("footer.privacy_policy")}</p>
      </div>

      <div>
        <h1 className="text-cyan-300 text-3xl font-bold mb-25 ml-5">{t("footer.resources")}</h1><br />
        <p className="text-gray-400 text-2xl mb-9 ml-5">{t("footer.free_ebooks")}</p>
        <p className="text-gray-400 text-2xl mb-9 ml-5">{t("footer.dev_tutorial")}</p>
        <p className="text-gray-400 text-2xl mb-9 ml-5">{t("footer.blog")}</p>
        <p className="text-gray-400 text-2xl mb-9 ml-5 pb-25">{t("footer.youtube_playlist")}</p>
      </div>
    </div>
  );
}

export default BottomFooter;

