import { UVIndexChart, UVIndexWrapper } from './UVIndexStyles';
import { toPercentUVIndex } from '../../../utils/helpers/handyFunctions';
import { Info, Name, Percent } from '../Humidity/HumidityStyles';
import { useAppSelector } from '../../../utils/hooks/hooks';
import { RootState } from '../../../services/store/store';

export const UVIndex = () => {
  const { UIIndex } = useAppSelector((state: RootState) => state.weatherData);

  const width = toPercentUVIndex(UIIndex);
  return (
    <UVIndexWrapper>
      <Info>
        <Name>UV Index</Name>
        <Percent>{UIIndex} UV</Percent>
      </Info>
      <UVIndexChart>
        <svg
          width="373"
          height="164"
          viewBox="0 0 373 164"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <linearGradient id="paint0_linear_94_2735">
            <stop offset="0%" stopColor="#F0AE02" />
            <stop offset={width} stopColor="rgba(240, 174, 2, 0)" />
          </linearGradient>
          <path
            d="M364.625 160.615C366.213 140.063 362.747 119.458 354.439 100.067C346.131 80.6761 333.158 62.9107 316.318 47.8644C299.478 32.818 279.128 20.8094 256.521 12.5778C233.914 4.34629 209.528 0.0660751 184.865 0.000758997C160.202 -0.0645571 135.784 4.0864 113.114 12.1981C90.445 20.3097 70.004 32.2103 53.0501 47.1671C36.0963 62.1239 22.9883 79.8204 14.5335 99.1667C6.0786 118.513 2.89873 142.44 4.33104 163H39.1258C37.9817 146.577 41.9359 125.029 48.6896 109.575C55.4433 94.1211 65.9139 79.9853 79.4566 68.0379C92.9992 56.0905 109.327 46.5843 127.436 40.1048C145.544 33.6252 165.049 30.3095 184.749 30.3616C204.45 30.4138 223.929 33.8328 241.988 40.4081C260.047 46.9835 276.302 56.5759 289.754 68.5948C303.206 80.6138 313.568 94.8047 320.205 110.294C326.841 125.783 329.61 142.243 328.341 158.659L364.625 160.615Z"
            fill="url(#paint0_linear_94_2735)"
          />
          <path
            d="M346.058 162.798C346.058 123.623 328.916 86.0528 298.404 58.3519C267.891 30.6511 226.507 15.0889 183.356 15.0889C140.205 15.0889 98.8211 30.6511 68.3086 58.3519C37.7961 86.0528 20.6543 123.623 20.6543 162.798"
            stroke="#080338"
          />
          <path
            d="M47.9136 157.621C47.2835 157.621 46.7468 157.45 46.3035 157.107C45.8602 156.761 45.5215 156.26 45.2873 155.605C45.0531 154.947 44.936 154.153 44.936 153.222C44.936 152.296 45.0531 151.506 45.2873 150.85C45.5242 150.192 45.8644 149.691 46.3077 149.345C46.7537 148.996 47.289 148.822 47.9136 148.822C48.5381 148.822 49.072 148.996 49.5153 149.345C49.9613 149.691 50.3015 150.192 50.5357 150.85C50.7726 151.506 50.8911 152.296 50.8911 153.222C50.8911 154.153 50.774 154.947 50.5398 155.605C50.3057 156.26 49.9669 156.761 49.5236 157.107C49.0803 157.45 48.5436 157.621 47.9136 157.621ZM47.9136 156.701C48.5381 156.701 49.0232 156.4 49.3689 155.798C49.7146 155.195 49.8875 154.337 49.8875 153.222C49.8875 152.48 49.808 151.848 49.6491 151.327C49.493 150.806 49.2671 150.408 48.9716 150.135C48.6789 149.862 48.3262 149.725 47.9136 149.725C47.2946 149.725 46.8109 150.031 46.4624 150.641C46.1139 151.249 45.9397 152.109 45.9397 153.222C45.9397 153.963 46.0177 154.593 46.1738 155.112C46.33 155.63 46.5544 156.025 46.8471 156.295C47.1427 156.566 47.4981 156.701 47.9136 156.701Z"
            fill="#080338"
          />
          <path
            d="M63.1991 97.9434V97.1906L66.0261 94.0959C66.3579 93.7335 66.6311 93.4184 66.8458 93.1508C67.0605 92.8804 67.2194 92.6267 67.3225 92.3897C67.4285 92.1499 67.4814 91.899 67.4814 91.6369C67.4814 91.3358 67.409 91.0751 67.264 90.8549C67.1218 90.6346 66.9266 90.4646 66.6785 90.3447C66.4304 90.2248 66.1516 90.1649 65.8421 90.1649C65.5131 90.1649 65.226 90.2332 64.9806 90.3698C64.7381 90.5036 64.5499 90.6918 64.416 90.9343C64.285 91.1769 64.2195 91.4613 64.2195 91.7875H63.2325C63.2325 91.2856 63.3482 90.8451 63.5796 90.466C63.811 90.0868 64.1261 89.7913 64.5248 89.5794C64.9262 89.3675 65.3765 89.2615 65.8756 89.2615C66.3774 89.2615 66.8221 89.3675 67.2096 89.5794C67.5971 89.7913 67.901 90.077 68.1213 90.4367C68.3415 90.7963 68.4517 91.1964 68.4517 91.6369C68.4517 91.952 68.3945 92.26 68.2802 92.5611C68.1687 92.8594 67.9735 93.1926 67.6947 93.5606C67.4187 93.9259 67.0354 94.3719 66.5447 94.8989L64.621 96.9564V97.0233H68.6022V97.9434H63.1991Z"
            fill="#080338"
          />
          <path
            d="M106.228 57.2738V56.4207L109.992 50.4656H110.611V51.7871H110.192L107.349 56.2869V56.3538H112.417V57.2738H106.228ZM110.259 59.0303V57.0146V56.6173V50.4656H111.246V59.0303H110.259Z"
            fill="#080338"
          />
          <path
            d="M183.156 40.8827C182.805 40.8771 182.454 40.8102 182.102 40.682C181.751 40.5537 181.43 40.3377 181.14 40.0338C180.85 39.7271 180.618 39.3131 180.442 38.7917C180.266 38.2676 180.179 37.6096 180.179 36.8178C180.179 36.0595 180.25 35.3876 180.392 34.8021C180.534 34.2138 180.74 33.719 181.011 33.3175C181.281 32.9132 181.607 32.6066 181.989 32.3975C182.374 32.1884 182.808 32.0838 183.29 32.0838C183.769 32.0838 184.196 32.18 184.57 32.3724C184.946 32.5619 185.253 32.8268 185.49 33.1669C185.727 33.5071 185.88 33.8988 185.95 34.3421H184.929C184.834 33.9573 184.65 33.6381 184.377 33.3844C184.104 33.1307 183.742 33.0038 183.29 33.0038C182.626 33.0038 182.104 33.2924 181.722 33.8695C181.343 34.4466 181.152 35.2565 181.149 36.2993H181.216C181.372 36.0623 181.557 35.8601 181.772 35.6929C181.989 35.5228 182.229 35.3918 182.491 35.2998C182.753 35.2078 183.031 35.1618 183.323 35.1618C183.814 35.1618 184.263 35.2844 184.67 35.5298C185.077 35.7723 185.403 36.1083 185.649 36.5376C185.894 36.9642 186.017 37.4535 186.017 38.0055C186.017 38.5352 185.898 39.0203 185.661 39.4608C185.424 39.8986 185.091 40.2471 184.662 40.5063C184.235 40.7628 183.733 40.8883 183.156 40.8827ZM183.156 39.9627C183.507 39.9627 183.822 39.8749 184.101 39.6992C184.383 39.5236 184.604 39.288 184.766 38.9925C184.931 38.6969 185.013 38.3679 185.013 38.0055C185.013 37.6514 184.933 37.3294 184.775 37.0395C184.618 36.7467 184.402 36.5139 184.126 36.3411C183.853 36.1682 183.541 36.0818 183.19 36.0818C182.925 36.0818 182.678 36.1348 182.449 36.2407C182.221 36.3439 182.02 36.4861 181.847 36.6673C181.677 36.8485 181.543 37.0562 181.446 37.2904C181.348 37.5218 181.299 37.7657 181.299 38.0222C181.299 38.3624 181.379 38.6802 181.538 38.9757C181.699 39.2713 181.92 39.5096 182.198 39.6909C182.48 39.8721 182.799 39.9627 183.156 39.9627Z"
            fill="#080338"
          />
          <path
            d="M249.866 55.9706C249.292 55.9706 248.785 55.8688 248.344 55.6653C247.906 55.459 247.565 55.176 247.32 54.8164C247.074 54.4539 246.953 54.0413 246.956 53.5785C246.953 53.2161 247.024 52.8815 247.169 52.5748C247.314 52.2654 247.512 52.0075 247.763 51.8012C248.017 51.5921 248.3 51.4596 248.612 51.4039V51.3537C248.202 51.2477 247.876 51.0177 247.633 50.6637C247.391 50.3068 247.271 49.9011 247.274 49.4467C247.271 49.0118 247.381 48.6228 247.604 48.2799C247.827 47.937 248.134 47.6666 248.524 47.4686C248.917 47.2707 249.365 47.1717 249.866 47.1717C250.363 47.1717 250.806 47.2707 251.196 47.4686C251.587 47.6666 251.893 47.937 252.116 48.2799C252.342 48.6228 252.456 49.0118 252.459 49.4467C252.456 49.9011 252.332 50.3068 252.087 50.6637C251.845 51.0177 251.523 51.2477 251.121 51.3537V51.4039C251.431 51.4596 251.709 51.5921 251.957 51.8012C252.206 52.0075 252.404 52.2654 252.551 52.5748C252.699 52.8815 252.774 53.2161 252.777 53.5785C252.774 54.0413 252.649 54.4539 252.401 54.8164C252.155 55.176 251.814 55.459 251.376 55.6653C250.941 55.8688 250.438 55.9706 249.866 55.9706ZM249.866 55.0506C250.254 55.0506 250.589 54.9878 250.87 54.8624C251.152 54.7369 251.369 54.5599 251.523 54.3313C251.676 54.1027 251.754 53.835 251.757 53.5283C251.754 53.2049 251.67 52.9192 251.506 52.671C251.341 52.4229 251.117 52.2277 250.832 52.0855C250.551 51.9434 250.229 51.8723 249.866 51.8723C249.501 51.8723 249.175 51.9434 248.888 52.0855C248.603 52.2277 248.379 52.4229 248.215 52.671C248.053 52.9192 247.973 53.2049 247.976 53.5283C247.973 53.835 248.047 54.1027 248.198 54.3313C248.351 54.5599 248.57 54.7369 248.854 54.8624C249.139 54.9878 249.476 55.0506 249.866 55.0506ZM249.866 50.9857C250.173 50.9857 250.445 50.9243 250.682 50.8017C250.922 50.679 251.11 50.5075 251.247 50.2873C251.383 50.067 251.453 49.8091 251.456 49.5136C251.453 49.2237 251.385 48.9713 251.251 48.7567C251.117 48.5392 250.931 48.3719 250.694 48.2548C250.458 48.1349 250.181 48.075 249.866 48.075C249.546 48.075 249.266 48.1349 249.026 48.2548C248.786 48.3719 248.601 48.5392 248.47 48.7567C248.339 48.9713 248.275 49.2237 248.277 49.5136C248.275 49.8091 248.34 50.067 248.474 50.2873C248.61 50.5075 248.799 50.679 249.038 50.8017C249.278 50.9243 249.554 50.9857 249.866 50.9857Z"
            fill="#080338"
          />
          <path
            d="M292.577 89.3786V97.9434H291.54V90.466H291.49L289.399 91.8544V90.8005L291.54 89.3786H292.577ZM297.834 98.0605C297.204 98.0605 296.667 97.889 296.224 97.5461C295.781 97.2004 295.442 96.6999 295.208 96.0447C294.974 95.3868 294.856 94.5922 294.856 93.661C294.856 92.7354 294.974 91.945 295.208 91.2898C295.445 90.6318 295.785 90.13 296.228 89.7843C296.674 89.4358 297.21 89.2615 297.834 89.2615C298.459 89.2615 298.992 89.4358 299.436 89.7843C299.882 90.13 300.222 90.6318 300.456 91.2898C300.693 91.945 300.812 92.7354 300.812 93.661C300.812 94.5922 300.695 95.3868 300.46 96.0447C300.226 96.6999 299.887 97.2004 299.444 97.5461C299.001 97.889 298.464 98.0605 297.834 98.0605ZM297.834 97.1404C298.459 97.1404 298.944 96.8393 299.289 96.2371C299.635 95.6349 299.808 94.7762 299.808 93.661C299.808 92.9194 299.729 92.2879 299.57 91.7666C299.413 91.2452 299.188 90.8479 298.892 90.5747C298.599 90.3015 298.247 90.1649 297.834 90.1649C297.215 90.1649 296.731 90.4701 296.383 91.0807C296.034 91.6885 295.86 92.5486 295.86 93.661C295.86 94.4026 295.938 95.0327 296.094 95.5513C296.25 96.0698 296.475 96.4643 296.768 96.7348C297.063 97.0052 297.419 97.1404 297.834 97.1404Z"
            fill="#080338"
          />
          <path
            d="M314.585 148.939V157.504H313.548V150.027H313.498L311.407 151.415V150.361L313.548 148.939H314.585ZM317.048 157.504V156.751L319.875 153.656C320.207 153.294 320.48 152.979 320.695 152.711C320.91 152.441 321.069 152.187 321.172 151.95C321.278 151.71 321.331 151.46 321.331 151.197C321.331 150.896 321.258 150.636 321.113 150.415C320.971 150.195 320.776 150.025 320.528 149.905C320.28 149.785 320.001 149.725 319.691 149.725C319.362 149.725 319.075 149.794 318.83 149.93C318.587 150.064 318.399 150.252 318.265 150.495C318.134 150.737 318.069 151.022 318.069 151.348H317.082C317.082 150.846 317.197 150.406 317.429 150.027C317.66 149.647 317.975 149.352 318.374 149.14C318.775 148.928 319.226 148.822 319.725 148.822C320.227 148.822 320.671 148.928 321.059 149.14C321.446 149.352 321.75 149.638 321.971 149.997C322.191 150.357 322.301 150.757 322.301 151.197C322.301 151.513 322.244 151.821 322.129 152.122C322.018 152.42 321.823 152.753 321.544 153.121C321.268 153.486 320.885 153.932 320.394 154.459L318.47 156.517V156.584H322.451V157.504H317.048Z"
            fill="#080338"
          />
          <path d="M0 163L373 163.444" stroke="#080338" />
        </svg>
      </UVIndexChart>
    </UVIndexWrapper>
  );
};
