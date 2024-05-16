'use client'
import { useState } from "react";
import s from "./HomeHeader.module.css"
import { useRouter } from "next/navigation";
function HomeHeader ()
{

   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
      const router = useRouter();
   const toggleDropdown = () => {
     setIsDropdownOpen((prev) => !prev);
   };
  const handleLogout = () =>
  {
     localStorage.setItem("isLoggedIn", "false");
  router.push('/');
}
    return (
      <div
        className={`${s.container} `}
      >
        <div div className={`${s.logo}  `}>
          <svg
            width="22"
            height="40"
            viewBox="0 0 22 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.9675 37.3955L15.3885 39.8751C15.4499 39.9356 15.5274 39.9763 15.6115 39.9924C15.6956 40.0084 15.7824 39.999 15.8613 39.9653C15.9401 39.9317 16.0074 39.8752 16.0548 39.803C16.1023 39.7308 16.1277 39.646 16.128 39.5592V34.1656L12.9675 37.3955Z"
              fill="#26B7CD"
            />
            <path
              d="M19.057 6.92705L21.3923 6.50852C21.5035 6.48887 21.6073 6.43854 21.6922 6.36304C21.7771 6.28754 21.8399 6.18979 21.8736 6.08049C21.9074 5.9712 21.9109 5.85458 21.8836 5.74343C21.8564 5.63227 21.7995 5.53087 21.7192 5.45033L16.6126 0.190986C16.533 0.107162 16.4319 0.0476069 16.3206 0.0190561C16.2094 -0.00949484 16.0925 -0.005903 15.9832 0.0294254C15.8738 0.0647539 15.7764 0.13041 15.7019 0.218969C15.6275 0.307528 15.5789 0.415457 15.5617 0.530553L15.1492 2.9786L19.057 6.92705Z"
              fill="#26B7CD"
            />
            <path
              d="M13.9567 17.9813L2.16322 30.0636C1.86071 30.3816 1.69165 30.8062 1.69165 31.2481C1.69165 31.6901 1.86071 32.1147 2.16322 32.4327L8.24288 38.7028C8.55441 39.0134 8.97374 39.1875 9.41054 39.1875C9.84735 39.1875 10.2667 39.0134 10.5782 38.7028L12.5088 36.7207L15.6926 33.4672L21.2118 27.813C21.5179 27.4969 21.6895 27.0716 21.6895 26.6284C21.6895 26.1853 21.5179 25.7599 21.2118 25.4439L13.9567 17.9813Z"
              fill="#26B7CD"
            />
            <path
              d="M7.70638 23.1706L19.4998 11.0646C19.8023 10.7466 19.9714 10.322 19.9714 9.88008C19.9714 9.43818 19.8023 9.01352 19.4998 8.69555L13.4202 2.47278C13.2702 2.31713 13.0909 2.1936 12.893 2.1095C12.6951 2.0254 12.4826 1.98244 12.2681 1.98317C12.0523 1.98227 11.8386 2.02512 11.6394 2.1092C11.4402 2.19328 11.2596 2.31689 11.1082 2.47278L0.474624 13.3705C0.170298 13.6875 0 14.1126 0 14.5551C0 14.9976 0.170298 15.4226 0.474624 15.7396L7.70638 23.1706Z"
              fill="#26B7CD"
            />
          </svg>

          <svg
            width="140"
            height="30"
            viewBox="0 0 140 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.4695 10.967C10.1495 10.503 9.71748 10.167 9.17348 9.95903C8.64548 9.73503 8.08548 9.62303 7.49348 9.62303C7.14148 9.62303 6.79748 9.66303 6.46148 9.74303C6.14148 9.82303 5.84548 9.95103 5.57348 10.127C5.31748 10.303 5.10948 10.535 4.94948 10.823C4.78948 11.095 4.70948 11.423 4.70948 11.807C4.70948 12.383 4.90948 12.823 5.30948 13.127C5.70948 13.431 6.20548 13.695 6.79748 13.919C7.38948 14.143 8.03748 14.359 8.74148 14.567C9.44548 14.775 10.0935 15.063 10.6855 15.431C11.2775 15.799 11.7735 16.287 12.1735 16.895C12.5735 17.503 12.7735 18.311 12.7735 19.319C12.7735 20.231 12.6055 21.031 12.2695 21.719C11.9335 22.391 11.4775 22.951 10.9015 23.399C10.3415 23.847 9.68548 24.183 8.93348 24.407C8.18148 24.631 7.38948 24.743 6.55748 24.743C5.50148 24.743 4.48548 24.567 3.50948 24.215C2.53348 23.863 1.69348 23.271 0.989483 22.439L3.26948 20.231C3.63748 20.791 4.11748 21.231 4.70948 21.551C5.31748 21.855 5.95748 22.007 6.62948 22.007C6.98148 22.007 7.33348 21.959 7.68548 21.863C8.03748 21.767 8.35748 21.623 8.64548 21.431C8.93348 21.239 9.16548 20.999 9.34148 20.711C9.51748 20.407 9.60548 20.063 9.60548 19.679C9.60548 19.055 9.40548 18.575 9.00548 18.239C8.60548 17.903 8.10948 17.623 7.51748 17.399C6.92548 17.159 6.27748 16.935 5.57348 16.727C4.86948 16.519 4.22148 16.239 3.62948 15.887C3.03748 15.519 2.54148 15.039 2.14148 14.447C1.74148 13.839 1.54148 13.031 1.54148 12.023C1.54148 11.143 1.71748 10.383 2.06948 9.74303C2.43748 9.10303 2.90948 8.57503 3.48548 8.15903C4.07748 7.72703 4.74948 7.40703 5.50148 7.19903C6.25348 6.99103 7.02148 6.88703 7.80548 6.88703C8.70148 6.88703 9.56548 7.02303 10.3975 7.29503C11.2455 7.56703 12.0055 8.01503 12.6775 8.63903L10.4695 10.967ZM18.3227 7.31904H24.0347C24.8507 7.31904 25.6347 7.39903 26.3867 7.55903C27.1547 7.71903 27.8267 7.99103 28.4027 8.37503C28.9787 8.74303 29.4347 9.24703 29.7707 9.88703C30.1227 10.511 30.2987 11.295 30.2987 12.239C30.2987 13.311 30.1147 14.175 29.7467 14.831C29.3787 15.487 28.8827 15.999 28.2587 16.367C27.6347 16.719 26.9067 16.959 26.0747 17.087C25.2587 17.215 24.4027 17.279 23.5067 17.279H21.3467V24.311H18.3227V7.31904ZM23.1707 14.687C23.6027 14.687 24.0507 14.671 24.5147 14.639C24.9787 14.607 25.4027 14.511 25.7867 14.351C26.1867 14.191 26.5067 13.951 26.7467 13.631C27.0027 13.311 27.1307 12.863 27.1307 12.287C27.1307 11.759 27.0187 11.343 26.7947 11.039C26.5707 10.719 26.2827 10.479 25.9307 10.319C25.5787 10.143 25.1867 10.031 24.7547 9.98304C24.3227 9.93503 23.9067 9.91103 23.5067 9.91103H21.3467V14.687H23.1707ZM39.1094 7.31904H41.7254L49.0454 24.311H45.5894L44.0054 20.423H36.6374L35.1014 24.311H31.7174L39.1094 7.31904ZM42.9494 17.831L40.3334 10.919L37.6694 17.831H42.9494ZM64.9977 11.303C64.3737 10.631 63.7657 10.183 63.1737 9.95903C62.5977 9.73503 62.0137 9.62303 61.4217 9.62303C60.5417 9.62303 59.7417 9.78303 59.0217 10.103C58.3177 10.407 57.7097 10.839 57.1977 11.399C56.6857 11.943 56.2857 12.583 55.9977 13.319C55.7257 14.055 55.5897 14.847 55.5897 15.695C55.5897 16.607 55.7257 17.447 55.9977 18.215C56.2857 18.983 56.6857 19.647 57.1977 20.207C57.7097 20.767 58.3177 21.207 59.0217 21.527C59.7417 21.847 60.5417 22.007 61.4217 22.007C62.1097 22.007 62.7737 21.847 63.4137 21.527C64.0697 21.191 64.6777 20.663 65.2377 19.943L67.7337 21.719C66.9657 22.775 66.0297 23.543 64.9257 24.023C63.8217 24.503 62.6457 24.743 61.3977 24.743C60.0857 24.743 58.8777 24.535 57.7737 24.119C56.6857 23.687 55.7417 23.087 54.9417 22.319C54.1577 21.535 53.5417 20.599 53.0937 19.511C52.6457 18.423 52.4217 17.215 52.4217 15.887C52.4217 14.527 52.6457 13.295 53.0937 12.191C53.5417 11.071 54.1577 10.119 54.9417 9.33503C55.7417 8.55103 56.6857 7.95103 57.7737 7.53503C58.8777 7.10303 60.0857 6.88703 61.3977 6.88703C62.5497 6.88703 63.6137 7.09503 64.5897 7.51103C65.5817 7.91103 66.5017 8.59903 67.3497 9.57503L64.9977 11.303ZM72.1634 7.31904H83.4194V10.055H75.1874V14.231H82.9874V16.967H75.1874V21.575H83.8514V24.311H72.1634V7.31904ZM97.8512 18.623C97.8512 19.407 97.7792 20.167 97.6352 20.903C97.5072 21.639 97.2512 22.295 96.8672 22.871C96.4832 23.431 95.9312 23.887 95.2112 24.239C94.5072 24.575 93.5792 24.743 92.4272 24.743C91.0832 24.743 89.9472 24.423 89.0192 23.783C88.0912 23.143 87.4912 22.143 87.2192 20.783L90.6512 19.943C90.6992 20.359 90.8832 20.711 91.2032 20.999C91.5392 21.287 91.9152 21.431 92.3312 21.431C92.7632 21.431 93.0992 21.327 93.3392 21.119C93.5792 20.895 93.7552 20.623 93.8672 20.303C93.9792 19.983 94.0432 19.639 94.0592 19.271C94.0912 18.887 94.1072 18.535 94.1072 18.215V7.31904H97.8512V18.623ZM109.059 7.31904H112.155L119.547 24.311H115.323L113.859 20.711H107.259L105.843 24.311H101.715L109.059 7.31904ZM110.499 12.263L108.435 17.543H112.587L110.499 12.263ZM124.741 10.631H119.893V7.31904H133.333V10.631H128.485V24.311H124.741V10.631Z"
              fill="#475467"
            />
          </svg>
        </div>

        <div
          onClick={toggleDropdown}
          className={`${s.textContainer} cursor-pointer flex items-center `}
        >
          <p className={`${s.text}`}>Hello World</p>
          <svg
            width="12"
            height="7"
            viewBox="0 0 12 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.00003 6.74997C5.80803 6.74997 5.616 6.67649 5.46975 6.53024L0.219754 1.28024C-0.0734956 0.98699 -0.0734956 0.512943 0.219754 0.219693C0.513004 -0.0735566 0.987051 -0.0735566 1.2803 0.219693L6.00003 4.93942L10.7198 0.219693C11.013 -0.0735566 11.4871 -0.0735566 11.7803 0.219693C12.0736 0.512943 12.0736 0.98699 11.7803 1.28024L6.5303 6.53024C6.38405 6.67649 6.19203 6.74997 6.00003 6.74997Z"
              fill="#475467"
            />
          </svg>
          {isDropdownOpen && (
            <div className="absolute mt-[5.5rem] w-[8.5rem] bg-white text-[#475467] shadow-xl rounded-md p-2">
              <button onClick={handleLogout} > Logout</button>
            </div>
          )}
        </div>
      </div>
    );
}

export default HomeHeader