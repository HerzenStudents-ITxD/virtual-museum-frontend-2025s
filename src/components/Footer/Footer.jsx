import { Link } from 'react-router-dom';
import logo from "../../assets/img/svg/logo.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="box-container footer__box-container">
        <div className="container footer__container">
          <ul className="footer__list">
            <li className="footer__item">
              <a href="" className="logo-wrapper footer__logo-wrapper">
                <img
                  src={logo}
                  alt="logo"
                  className="section-hero__header-logo"
                />
                <p className="section-hero__header-logo-description">
                  МУЗЕЙ <br />ТРАДИЦИОННОЙ <br />КУЛЬТУРЫ
                </p>
              </a>
              <div className="footer__adress-wrapper">
                <svg className="footer__adress-icon" width="9" height="12" viewBox="0 0 9 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.6245 6.21535C7.2315 6.95368 6.699 7.68924 6.1545 8.3497C5.63741 8.97194 5.08514 9.56835 4.5 10.1364C3.91486 9.56835 3.36259 8.97194 2.8455 8.3497C2.301 7.68924 1.7685 6.95368 1.3755 6.21535C0.978 5.46937 0.75 4.77066 0.75 4.17138C0.75 3.24944 1.14509 2.36527 1.84835 1.71337C2.55161 1.06147 3.50544 0.695229 4.5 0.695229C5.49456 0.695229 6.44839 1.06147 7.15165 1.71337C7.85491 2.36527 8.25 3.24944 8.25 4.17138C8.25 4.77066 8.02125 5.46937 7.6245 6.21535ZM4.5 11.1237C4.5 11.1237 9 7.17059 9 4.17138C9 3.06506 8.52589 2.00405 7.68198 1.22177C6.83807 0.439483 5.69347 0 4.5 0C3.30653 0 2.16193 0.439483 1.31802 1.22177C0.474106 2.00405 1.77842e-08 3.06506 0 4.17138C0 7.17059 4.5 11.1237 4.5 11.1237Z" fill="white"/>
                  <path d="M4.5 5.56184C4.10218 5.56184 3.72064 5.41535 3.43934 5.15458C3.15804 4.89382 3 4.54015 3 4.17138C3 3.80261 3.15804 3.44894 3.43934 3.18818C3.72064 2.92742 4.10218 2.78092 4.5 2.78092C4.89782 2.78092 5.27936 2.92742 5.56066 3.18818C5.84196 3.44894 6 3.80261 6 4.17138C6 4.54015 5.84196 4.89382 5.56066 5.15458C5.27936 5.41535 4.89782 5.56184 4.5 5.56184ZM4.5 6.25707C5.09674 6.25707 5.66903 6.03733 6.09099 5.64619C6.51295 5.25504 6.75 4.72454 6.75 4.17138C6.75 3.61822 6.51295 3.08772 6.09099 2.69658C5.66903 2.30543 5.09674 2.08569 4.5 2.08569C3.90326 2.08569 3.33097 2.30543 2.90901 2.69658C2.48705 3.08772 2.25 3.61822 2.25 4.17138C2.25 4.72454 2.48705 5.25504 2.90901 5.64619C3.33097 6.03733 3.90326 6.25707 4.5 6.25707Z" fill="white"/>
                </svg>
                <p className="footer__item-adress">
                  Санкт-Петербург, пр. Стачек, 30к29
                </p>
              </div>
            </li>
            <li className="footer__item">
              <ul className="footer__nav-list">
                <li className="footer__nav-item">
                  <Link to="/exhibits" className="footer__nav-link" style={{textWrap: "nowrap"}}>3D-экспонаты</Link>
                </li>
                <li className="footer__nav-item">
                  <Link to="/culture" className="footer__nav-link">Художественная культура</Link>
                </li>
                <li className="footer__nav-item">
                  <a href="" className="footer__nav-link">Религиозная культура</a>
                </li>
                <li className="footer__nav-item">
                  <a href="" className="footer__nav-link">Традиционная культура жизнеобеспечения</a>
                </li>
                <li className="footer__nav-item">
                  <a href="" className="footer__nav-link">Языковые материалы</a>
                </li>
                <li className="footer__nav-item">
                  <a href="" className="footer__nav-link">материалы экспедиций</a>
                </li>
                <li className="footer__nav-item">
                  <a href="" className="footer__nav-link">Институт народов севера</a>
                </li>
              </ul>
            </li>
            <li className="footer__item footer__item-socials">
              <div className="footer__socials">
                <a href="" className="footer__social-link footer__social-tg">
                  <svg className="footer__social-icon" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M18.2372 0.0740261C14.4181 0.403427 10.7656 1.85068 7.62878 4.27744C6.77574 4.93742 4.91817 6.80069 4.26022 7.65634C2.21904 10.311 0.923488 13.1947 0.334176 16.395C-0.704121 22.0343 0.697046 27.7409 4.25944 32.381C5.01435 33.3642 6.90826 35.2211 7.94079 35.9902C11.5746 38.6972 15.4454 39.9935 19.9142 40C23.3269 40.005 26.2359 39.2995 29.2032 37.7473C31.0652 36.7733 32.4607 35.7309 34.0752 34.1081C37.23 30.9371 39.0957 27.1634 39.7257 22.6789C39.7892 22.227 39.8418 21.6746 39.8426 21.4512C39.8434 21.2278 39.8791 21.0233 39.922 20.9967C39.9675 20.9684 40 20.5249 40 19.9312C40 19.273 39.9725 18.9311 39.922 18.9624C39.8738 18.9923 39.8434 18.8521 39.8426 18.5953C39.8418 18.3669 39.7892 17.8103 39.7257 17.3584C39.214 13.7161 37.8966 10.5831 35.6463 7.65634C34.9883 6.80069 33.1307 4.93742 32.2777 4.27744C28.1936 1.11778 23.2601 -0.359202 18.2372 0.0740261ZM18.6714 15.8762C12.8853 18.116 8.66044 19.793 8.50615 19.911C7.99009 20.3059 7.98876 20.7369 8.50296 21.0065C8.64422 21.0806 9.90061 21.4994 11.2949 21.9371L13.83 22.733L14.142 22.5345C19.0197 19.4326 25.4878 15.3866 25.6234 15.3525C25.8625 15.2923 26.0451 15.3696 25.992 15.5085C25.9684 15.5702 23.8454 17.5276 21.2741 19.8584C18.6279 22.2572 16.5986 24.1537 16.5979 24.2286C16.5972 24.3015 16.5276 25.3294 16.4431 26.5128C16.2454 29.2822 16.2446 29.1731 16.4626 29.1727C16.7524 29.1722 17.0462 28.9374 18.3964 27.6267L19.6867 26.3743L22.2086 28.2376C23.5957 29.2624 24.8404 30.1466 24.9745 30.2024C25.1087 30.2582 25.3486 30.3039 25.5077 30.3039C25.8651 30.304 26.2151 29.9962 26.3862 29.5314C26.5883 28.9824 29.7974 13.6651 29.8054 13.2116C29.8182 12.483 29.4442 12.0342 28.83 12.0407C28.6825 12.0422 24.3461 13.6794 18.6714 15.8762ZM0.0150657 20.0187C0.0150657 20.5996 0.0273121 20.8372 0.0423667 20.5468C0.0573433 20.2564 0.0573433 19.781 0.0423667 19.4905C0.0273121 19.2 0.0150657 19.4377 0.0150657 20.0187Z" fill="white"/>
                  </svg>
                </a>
                <a href="" className="footer__social-link footer__social-vk">
                  <svg className="footer__social-icon" width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M40.1503 19.9108C40.1503 19.9404 40.1503 19.97 40.1503 19.9997C40.1503 20.0301 40.1503 20.0604 40.1503 20.0906C40.1022 31.0158 31.2947 39.8726 20.3887 40C20.3096 40 20.2302 40 20.1505 40C20.0706 40 19.9911 40 19.9119 40C9.01634 39.8727 0.21534 31.0329 0.150392 20.1223C0.150393 20.0543 0.150393 19.986 0.150392 19.9175C0.150391 19.9048 0.150391 19.8921 0.150391 19.8794C0.215642 8.88915 9.14489 -6.0397e-09 20.1503 -1.34297e-08C20.1531 -1.34316e-08 20.1559 5.77763e-07 20.1588 1.76004e-06M16.4895 14.1169C15.7177 13.5013 15.7983 13.2125 16.8627 12.7843C17.0887 12.6933 18.2954 12.6459 19.5442 12.6788C21.2146 12.7232 21.8831 12.8476 22.0741 13.15C22.2171 13.3761 22.3377 14.794 22.3423 16.3009C22.3511 19.1402 22.5555 19.9129 23.2303 19.654C23.7561 19.4523 25.5016 16.7968 26.3096 14.9696C26.954 13.5125 26.9641 13.5046 28.4171 13.33C30.7045 13.0555 32.0572 13.118 32.6128 13.5243C33.0753 13.8627 33.0887 13.9852 32.7506 14.8014C32.5449 15.2978 31.5985 16.7878 30.6473 18.1125C29.696 19.4372 28.9179 20.7463 28.9179 21.0217C28.9179 21.2971 29.713 22.3105 30.6851 23.2739C31.6569 24.2372 32.6032 25.3907 32.7882 25.837C33.3254 27.1341 32.6347 27.4555 29.5426 27.3481L27.0165 27.2604L25.3981 25.6584C23.4057 23.6862 22.8785 23.6794 22.4632 25.62L22.1706 26.9864L19.859 26.979C18.0118 26.9733 17.2863 26.8445 16.2463 26.3382C13.7138 25.1052 11.4401 22.3004 8.7345 17.0711C7.93092 15.5178 7.27336 14.0761 7.27336 13.8673C7.27336 13.6588 7.5509 13.4136 7.88982 13.3227C8.83697 13.0689 11.6365 13.1196 12.1606 13.4002C12.4176 13.5377 13.1505 14.6808 13.7892 15.9403C14.9289 18.1884 16.0734 19.7257 16.6065 19.7257C17.1142 19.7257 17.4581 18.2194 17.3504 16.468C17.2572 14.9529 17.1416 14.6367 16.4895 14.1169Z" fill="white"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M40.1476 20.2653C40.1488 20.1772 40.1494 20.0889 40.1494 20.0004C40.1494 8.95449 31.1951 -7.6753e-09 20.1494 -2.58273e-10C20.0209 -1.7199e-10 19.8927 0.00121182 19.7648 0.00362465L40.1476 20.2653Z" fill="white"/>
                  </svg>
                </a>
              </div>
              <p className="footer__item-description">
                © 2023 Виртуальный музей традиционной культуры малочисленных  народов Севера, Сибири и Дальнего Востока Российской Федерации
              </p>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}