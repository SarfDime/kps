import React from "react"
import Nav from "./Nav/Nav"
import { logout } from "../../shared/api"
import { setNotification } from "../../store/slices/notificationSlice"
import { useDispatch, useSelector } from "react-redux"
import { setLogin } from "../../store/slices/loginSlice"

function Header() {
    const isLoggedIn = useSelector((state) => state.logIn.isLoggedIn)
    const dispatch = useDispatch()

    const handleLogOut = async () => {
        try {
            const response = await logout()
            dispatch(setNotification(response))
            dispatch(setLogin(false))
        } catch (error) {
            dispatch(setNotification(error.message))
        }
    }

    return (
        <header>
            <svg className="heroLogo" viewBox="0 0 693 144">
                <g clipPath="url(#clip0_101_69)">
                    <path
                        d="M1.15002 44.41H8.15002V87.01H1.15002V44.41ZM5.91998 69.35L23.85 44.41H32.58L5.97998 79.04L5.91998 69.35ZM13.01 64.86L18.81 60.5L34.37 87.01H25.96L13.01 64.86Z"
                        fill="black"
                    />
                    <path
                        d="M40.23 44.41H47.23V87.01H40.23V44.41ZM43.6 63.78H57.22C58.2734 63.8069 59.3131 63.5366 60.22 63C61.0847 62.4703 61.7789 61.7032 62.22 60.79C62.7173 59.7588 62.964 58.6247 62.94 57.48C62.9633 56.3269 62.7203 55.1839 62.23 54.14C61.7931 53.2189 61.0983 52.4442 60.23 51.91C59.3227 51.3734 58.2839 51.0999 57.23 51.12H43.6V44.41H57.02C59.4049 44.3609 61.7628 44.922 63.87 46.04C65.8155 47.0923 67.4135 48.6868 68.47 50.63C69.5484 52.7506 70.1106 55.096 70.1106 57.475C70.1106 59.8541 69.5484 62.1994 68.47 64.32C67.4066 66.2504 65.8096 67.8335 63.87 68.88C61.7587 69.9849 59.4025 70.5387 57.02 70.49H43.6V63.78Z"
                        fill="black"
                    />
                    <path
                        d="M84.19 86.85C82.3603 86.4691 80.5815 85.875 78.89 85.08C77.2616 84.3122 75.739 83.3375 74.36 82.18L78.08 76.58C79.7086 77.9634 81.5805 79.0316 83.6 79.73C85.6865 80.4539 87.8815 80.8158 90.09 80.8C92.4024 80.9302 94.7045 80.4032 96.73 79.28C97.4716 78.8369 98.0813 78.2037 98.4962 77.446C98.9111 76.6883 99.1161 75.8335 99.09 74.97C99.152 73.8322 98.7722 72.7145 98.03 71.85C97.281 71.0486 96.3316 70.4617 95.28 70.15C93.8469 69.7209 92.3871 69.3868 90.91 69.15C90.8537 69.1405 90.7963 69.1405 90.74 69.15C90.6804 69.1595 90.6196 69.1595 90.56 69.15L90.03 69.07C87.6543 68.7086 85.3129 68.15 83.03 67.4C81.1648 66.7298 79.5375 65.5267 78.35 63.94C77.06 62.28 76.41 59.94 76.41 56.88C76.3409 54.4466 76.9726 52.0445 78.23 49.96C79.4999 48.0024 81.3391 46.4808 83.5 45.6C86.1427 44.5411 88.9741 44.034 91.82 44.11C93.3474 44.0854 94.8729 44.2262 96.37 44.53C97.9184 44.8783 99.4289 45.3773 100.88 46.02C102.385 46.6968 103.822 47.5173 105.17 48.47L101.77 54.24C100.234 53.1244 98.5515 52.2259 96.77 51.57C95.1671 50.9862 93.4759 50.6818 91.77 50.67C89.5866 50.5396 87.4131 51.0543 85.52 52.15C84.8174 52.5892 84.2431 53.2061 83.855 53.9382C83.467 54.6704 83.279 55.492 83.31 56.32C83.2781 56.9055 83.3644 57.4915 83.5637 58.0429C83.7629 58.5944 84.0711 59.1001 84.47 59.53C85.2612 60.3326 86.2411 60.924 87.32 61.25C88.8965 61.7131 90.4951 62.0969 92.11 62.4L92.33 62.45H92.55L92.88 62.51L93.2 62.57C95.4565 62.9877 97.6669 63.624 99.8 64.47C101.583 65.229 103.12 66.4684 104.24 68.05C105.533 70.0405 106.159 72.3901 106.03 74.76C106.096 77.1715 105.445 79.5485 104.16 81.59C102.829 83.5544 100.926 85.0624 98.71 85.91C95.9613 86.9629 93.0325 87.4657 90.09 87.39C88.1098 87.4168 86.1324 87.2359 84.19 86.85Z"
                        fill="black"
                    />
                    <path d="M125.58 68.83V72.73H110.76V68.83H125.58Z" fill="black" />
                    <path
                        d="M131.76 67.45C131.76 63.73 131.64 60.73 131.52 57.97H136.26L136.5 62.97H136.62C137.667 61.1822 139.18 59.7129 140.998 58.7194C142.816 57.7259 144.87 57.2456 146.94 57.33C153.94 57.33 159.24 63.27 159.24 72.09C159.24 82.53 152.88 87.69 146.04 87.69C144.283 87.7669 142.536 87.3874 140.969 86.5882C139.402 85.7891 138.069 84.5976 137.1 83.13H136.98V98.91H131.76V67.45ZM136.98 75.19C136.994 75.9158 137.074 76.6388 137.22 77.35C137.66 79.1168 138.679 80.6852 140.115 81.8053C141.55 82.9254 143.319 83.5326 145.14 83.53C150.72 83.53 153.96 78.97 153.96 72.31C153.96 66.49 150.9 61.51 145.32 61.51C143.45 61.5579 141.649 62.2266 140.201 63.4106C138.752 64.5946 137.739 66.2267 137.32 68.05C137.108 68.7516 136.987 69.4775 136.96 70.21L136.98 75.19Z"
                        fill="black"
                    />
                    <path
                        d="M165.9 67.03C165.9 63.61 165.84 60.67 165.66 57.97H170.28L170.46 63.67H170.7C172.02 59.77 175.2 57.31 178.7 57.31C179.206 57.3033 179.71 57.3638 180.2 57.49V62.49C179.609 62.3615 179.005 62.3012 178.4 62.31C174.68 62.31 172.04 65.13 171.32 69.09C171.172 69.9019 171.092 70.7248 171.08 71.55V87.03H165.86L165.9 67.03Z"
                        fill="black"
                    />
                    <path
                        d="M191.64 49.81C191.64 50.6773 191.296 51.509 190.682 52.1222C190.069 52.7355 189.237 53.08 188.37 53.08C187.503 53.08 186.671 52.7355 186.058 52.1222C185.445 51.509 185.1 50.6773 185.1 49.81C185.092 49.3779 185.171 48.9486 185.332 48.5476C185.494 48.1467 185.734 47.7823 186.039 47.4762C186.344 47.1701 186.708 46.9286 187.108 46.7661C187.509 46.6035 187.938 46.5232 188.37 46.53C188.806 46.51 189.241 46.5812 189.647 46.7391C190.054 46.897 190.422 47.138 190.73 47.4468C191.038 47.7557 191.278 48.1254 191.435 48.5323C191.591 48.9393 191.661 49.3745 191.64 49.81ZM185.76 87.01V58.01H191.04V87.01H185.76Z"
                        fill="black"
                    />
                    <path
                        d="M202.74 73.45C202.86 80.59 207.42 83.53 212.74 83.53C215.483 83.6109 218.212 83.0993 220.74 82.03L221.64 85.81C218.583 87.0835 215.291 87.6968 211.98 87.61C203.04 87.61 197.7 81.73 197.7 72.97C197.7 64.21 202.86 57.31 211.32 57.31C220.8 57.31 223.32 65.65 223.32 70.99C223.311 71.8129 223.251 72.6345 223.14 73.45H202.74ZM218.22 69.67C218.28 66.31 216.84 61.09 210.9 61.09C205.56 61.09 203.22 66.01 202.8 69.67H218.22Z"
                        fill="black"
                    />
                    <path
                        d="M229.86 65.83C229.86 62.83 229.8 60.37 229.62 57.97H234.24L234.48 62.65H234.66C235.53 60.997 236.845 59.6206 238.457 58.6768C240.069 57.733 241.913 57.2595 243.78 57.31C245.589 57.2898 247.358 57.8417 248.834 58.887C250.31 59.9322 251.418 61.4173 252 63.13H252.12C252.924 61.6574 254.028 60.3696 255.36 59.35C257.201 57.9555 259.472 57.2481 261.78 57.35C265.62 57.35 271.31 59.87 271.31 69.95V87.05H266.16V70.53C266.16 64.95 264.16 61.59 259.86 61.59C258.452 61.6499 257.097 62.1431 255.98 63.0022C254.863 63.8614 254.039 65.0446 253.62 66.39C253.345 67.2431 253.203 68.1336 253.2 69.03V86.97H248.04V69.57C248.04 64.95 246.04 61.57 241.98 61.57C238.68 61.57 236.28 64.21 235.44 66.85C235.145 67.6776 235.003 68.5517 235.02 69.43V86.95H229.86V65.83Z"
                        fill="black"
                    />
                    <path
                        d="M281.04 57.97L287.37 75.13C288.03 77.05 288.75 79.33 289.23 81.07H289.37C289.91 79.33 290.51 77.07 291.23 75.01L296.99 58.01H302.57L294.65 78.71C290.87 88.71 288.29 93.77 284.65 96.89C282.823 98.573 280.59 99.7517 278.17 100.31L276.85 95.87C278.54 95.3115 280.108 94.4359 281.47 93.29C283.387 91.7021 284.908 89.6887 285.91 87.41C286.123 87.018 286.265 86.5914 286.33 86.15C286.282 85.6741 286.161 85.2085 285.97 84.77L275.23 58.01L281.04 57.97Z"
                        fill="black"
                    />
                    <path
                        d="M306.3 81.61C308.403 82.9246 310.821 83.6498 313.3 83.71C317.14 83.71 318.94 81.79 318.94 79.39C318.94 76.99 317.44 75.49 313.54 74.05C308.32 72.19 305.86 69.31 305.86 65.83C305.86 61.15 309.64 57.31 315.86 57.31C318.355 57.2852 320.815 57.9052 323 59.11L321.68 62.95C319.894 61.8496 317.838 61.2678 315.74 61.27C312.62 61.27 310.88 63.07 310.88 65.27C310.88 67.67 312.62 68.75 316.4 70.19C321.4 72.11 324.02 74.63 324.02 78.95C324.02 84.05 320.02 87.65 313.16 87.65C310.313 87.6959 307.503 87.007 305 85.65L306.3 81.61Z"
                        fill="black"
                    />
                    <path
                        d="M333.72 73.45C333.84 80.59 338.4 83.53 343.72 83.53C346.463 83.6109 349.192 83.0993 351.72 82.03L352.62 85.81C349.563 87.0835 346.271 87.6968 342.96 87.61C334.02 87.61 328.68 81.73 328.68 72.97C328.68 64.21 333.84 57.31 342.3 57.31C351.78 57.31 354.3 65.65 354.3 70.99C354.291 71.8129 354.231 72.6345 354.12 73.45H333.72ZM349.2 69.67C349.26 66.31 347.82 61.09 341.88 61.09C336.54 61.09 334.2 66.01 333.78 69.67H349.2Z"
                        fill="black"
                    />
                    <path d="M360.84 44.41H366.12V87.01H360.84V44.41Z" fill="black" />
                    <path
                        d="M375 65.83C375 62.83 374.94 60.37 374.76 57.97H379.44L379.74 62.77H379.86C380.811 61.0715 382.208 59.6651 383.899 58.7028C385.591 57.7405 387.514 57.2589 389.46 57.31C393.46 57.31 399.72 59.71 399.72 69.67V87.01H394.44V70.27C394.44 65.59 392.7 61.69 387.72 61.69C386.118 61.7157 384.566 62.2538 383.292 63.2256C382.018 64.1974 381.088 65.5516 380.64 67.09C380.386 67.8846 380.264 68.7158 380.28 69.55V87.01H375V65.83Z"
                        fill="black"
                    />
                    <path
                        d="M409.44 57.97L415.8 75.13C416.46 77.05 417.18 79.33 417.66 81.07H417.78C418.32 79.33 418.92 77.07 419.64 75.01L425.4 58.01H430.98L423.06 78.71C419.28 88.71 416.7 93.77 413.06 96.89C411.233 98.573 409 99.7517 406.58 100.31L405.26 95.87C406.95 95.3115 408.518 94.4359 409.88 93.29C411.797 91.7021 413.318 89.6887 414.32 87.41C414.533 87.018 414.675 86.5914 414.74 86.15C414.692 85.6741 414.571 85.2085 414.38 84.77L403.64 58.01L409.44 57.97ZM426.06 45.43L418.74 54.01H414.96L420.24 45.43H426.06Z"
                        fill="black"
                    />
                    <path
                        d="M454.86 49.63V57.97H462.42V61.97H454.86V77.63C454.86 81.23 455.86 83.27 458.86 83.27C459.891 83.2848 460.92 83.1638 461.92 82.91L462.16 86.91C460.658 87.436 459.071 87.6801 457.48 87.63C456.426 87.6929 455.371 87.5271 454.387 87.144C453.403 86.7608 452.514 86.1692 451.78 85.41C450.28 83.85 449.78 81.27 449.78 77.85V61.99H445.28V57.99H449.78V50.99L454.86 49.63Z"
                        fill="black"
                    />
                    <path
                        d="M494.28 72.25C494.28 82.99 486.83 87.67 479.82 87.67C471.96 87.67 465.9 81.91 465.9 72.73C465.9 63.01 472.26 57.31 480.3 57.31C488.63 57.31 494.28 63.37 494.28 72.25ZM471.28 72.55C471.28 78.91 474.94 83.71 480.1 83.71C485.26 83.71 488.91 78.97 488.91 72.43C488.91 67.51 486.45 61.27 480.22 61.27C473.99 61.27 471.24 67.03 471.24 72.53L471.28 72.55Z"
                        fill="black"
                    />
                    <path
                        d="M502.56 57.97L508.26 74.29C509.169 76.7276 509.95 79.2109 510.6 81.73H510.78C511.44 79.33 512.28 76.93 513.24 74.29L518.88 57.97H524.37L512.97 86.97H507.97L496.97 57.97H502.56Z"
                        fill="black"
                    />
                    <path
                        d="M545.21 87.01L544.79 83.35H544.62C543.587 84.7212 542.244 85.8278 540.7 86.5788C539.156 87.3298 537.456 87.7038 535.74 87.67C529.86 87.67 526.86 83.53 526.86 79.33C526.86 72.33 533.1 68.47 544.32 68.53V67.93C544.32 65.53 543.66 61.21 537.71 61.21C535.042 61.2198 532.429 61.9673 530.16 63.37L528.96 59.89C531.834 58.1586 535.135 57.265 538.49 57.31C547.37 57.31 549.54 63.37 549.54 69.19V80.05C549.501 82.3924 549.658 84.7339 550.01 87.05L545.21 87.01ZM544.44 72.19C538.68 72.07 532.14 73.09 532.14 78.73C532.091 79.3992 532.186 80.0712 532.42 80.7002C532.654 81.3291 533.021 81.9003 533.495 82.3748C533.97 82.8493 534.541 83.2159 535.17 83.4498C535.799 83.6837 536.471 83.7792 537.14 83.73C538.672 83.7689 540.176 83.3187 541.435 82.4449C542.693 81.571 543.641 80.3188 544.14 78.87C544.335 78.3308 544.439 77.7632 544.45 77.19L544.44 72.19Z"
                        fill="black"
                    />
                    <path
                        d="M558.06 67.03C558.06 63.61 558 60.67 557.82 57.97H562.44L562.62 63.67H562.86C564.18 59.77 567.36 57.31 570.86 57.31C571.362 57.3039 571.863 57.3644 572.35 57.49V62.49C571.759 62.3605 571.155 62.3001 570.55 62.31C566.83 62.31 564.2 65.13 563.48 69.09C563.332 69.9019 563.252 70.7248 563.24 71.55V87.03H558.02L558.06 67.03Z"
                        fill="black"
                    />
                    <path
                        d="M571.08 94.39C572.688 89.7217 573.892 84.9242 574.68 80.05L580.56 79.45C579.187 84.4999 577.276 89.3879 574.86 94.03L571.08 94.39Z"
                        fill="black"
                    />
                    <path
                        d="M598.91 81.61C601.013 82.9246 603.431 83.6498 605.91 83.71C609.75 83.71 611.55 81.79 611.55 79.39C611.55 76.99 610.05 75.49 606.15 74.05C600.93 72.19 598.47 69.31 598.47 65.83C598.47 61.15 602.25 57.31 608.47 57.31C610.965 57.2852 613.425 57.9052 615.61 59.11L614.29 62.95C612.504 61.8496 610.448 61.2678 608.35 61.27C605.23 61.27 603.49 63.07 603.49 65.27C603.49 67.67 605.23 68.75 609.01 70.19C614.01 72.11 616.63 74.63 616.63 78.95C616.63 84.05 612.63 87.65 605.77 87.65C602.923 87.6959 600.113 87.007 597.61 85.65L598.91 81.61Z"
                        fill="black"
                    />
                    <path
                        d="M621.48 83.89C621.448 83.4006 621.518 82.9099 621.685 82.4488C621.853 81.9878 622.114 81.5664 622.452 81.2113C622.79 80.8561 623.198 80.5749 623.651 80.3854C624.103 80.1958 624.59 80.1021 625.08 80.11C625.837 80.072 626.588 80.2618 627.236 80.6549C627.884 81.0481 628.399 81.6265 628.715 82.3154C629.031 83.0043 629.133 83.7721 629.008 84.5197C628.883 85.2672 628.537 85.9602 628.015 86.509C627.492 87.0578 626.817 87.4374 626.076 87.5985C625.335 87.7597 624.564 87.6952 623.86 87.4132C623.157 87.1312 622.554 86.6448 622.129 86.0168C621.705 85.3887 621.479 84.6479 621.48 83.89Z"
                        fill="black"
                    />
                    <path
                        d="M635.15 67.03C635.15 63.61 635.09 60.67 634.91 57.97H639.53L639.71 63.67H639.95C641.27 59.77 644.45 57.31 647.95 57.31C648.456 57.3033 648.96 57.3638 649.45 57.49V62.49C648.859 62.3615 648.255 62.3012 647.65 62.31C643.93 62.31 641.29 65.13 640.57 69.09C640.436 69.8965 640.369 70.7126 640.37 71.53V87.01H635.15V67.03Z"
                        fill="black"
                    />
                    <path
                        d="M650.37 83.89C650.338 83.4006 650.408 82.9099 650.575 82.4488C650.743 81.9878 651.004 81.5664 651.342 81.2113C651.68 80.8561 652.088 80.5749 652.541 80.3854C652.993 80.1958 653.48 80.1021 653.97 80.11C654.727 80.072 655.478 80.2618 656.126 80.6549C656.774 81.0481 657.289 81.6265 657.605 82.3154C657.921 83.0043 658.023 83.7721 657.898 84.5197C657.773 85.2672 657.427 85.9602 656.904 86.509C656.382 87.0578 655.707 87.4374 654.966 87.5985C654.225 87.7597 653.454 87.6952 652.75 87.4132C652.047 87.1312 651.444 86.6448 651.019 86.0168C650.595 85.3887 650.369 84.6479 650.37 83.89Z"
                        fill="black"
                    />
                    <path
                        d="M690.29 72.25C690.29 82.99 682.85 87.67 675.83 87.67C667.97 87.67 661.91 81.91 661.91 72.73C661.91 63.01 668.27 57.31 676.31 57.31C684.65 57.31 690.29 63.37 690.29 72.25ZM667.29 72.55C667.29 78.91 670.95 83.71 676.11 83.71C681.27 83.71 684.93 78.97 684.93 72.43C684.93 67.51 682.47 61.27 676.23 61.27C669.99 61.27 667.25 67.03 667.25 72.53L667.29 72.55Z"
                        fill="black"
                    />
                    <path
                        d="M49.07 111.02H40.87V108.02H60.87V111.02H52.63V135.02H49.07V111.02Z"
                        fill="black"
                    />
                    <path
                        d="M67.15 110.22C67.15 110.798 66.9203 111.353 66.5115 111.761C66.1027 112.17 65.5482 112.4 64.97 112.4C64.3918 112.4 63.8374 112.17 63.4285 111.761C63.0197 111.353 62.79 110.798 62.79 110.22C62.7817 109.929 62.8329 109.639 62.9406 109.368C63.0482 109.098 63.2099 108.852 63.4159 108.646C63.6219 108.44 63.8677 108.278 64.1384 108.171C64.409 108.063 64.6988 108.012 64.99 108.02C65.2798 108.01 65.5685 108.06 65.8378 108.168C66.1072 108.275 66.3512 108.438 66.5543 108.644C66.7575 108.851 66.9153 109.098 67.0179 109.37C67.1204 109.641 67.1655 109.93 67.15 110.22ZM63.23 135.01V115.66H66.75V135.01H63.23Z"
                        fill="black"
                    />
                    <path
                        d="M72.11 131.41C73.5043 132.282 75.1062 132.765 76.75 132.81C79.31 132.81 80.51 131.53 80.51 129.93C80.51 128.33 79.51 127.33 76.91 126.37C73.43 125.13 71.79 123.21 71.79 120.9C71.79 117.78 74.31 115.22 78.47 115.22C80.1335 115.203 81.7731 115.617 83.23 116.42L82.35 118.98C81.15 118.234 79.7626 117.846 78.35 117.86C76.27 117.86 75.11 119.06 75.11 120.49C75.11 122.09 76.27 122.81 78.79 123.77C82.15 125.05 83.87 126.77 83.87 129.61C83.87 133.01 81.23 135.41 76.63 135.41C74.7332 135.446 72.8592 134.992 71.19 134.09L72.11 131.41Z"
                        fill="black"
                    />
                    <path
                        d="M95.59 107.3L90.71 113.02H88.19L91.71 107.3H95.59ZM88.43 135.01V115.66H91.95V135.01H88.43Z"
                        fill="black"
                    />
                    <path
                        d="M111.59 134.29C109.842 135.068 107.943 135.45 106.03 135.41C100.19 135.41 96.39 131.41 96.39 125.53C96.39 119.65 100.47 115.26 106.79 115.26C108.469 115.241 110.133 115.582 111.67 116.26L110.87 118.98C109.615 118.32 108.207 118.002 106.79 118.06C102.35 118.06 99.95 121.33 99.95 125.37C99.95 129.85 102.83 132.61 106.67 132.61C108.167 132.604 109.643 132.262 110.99 131.61L111.59 134.29Z"
                        fill="black"
                    />
                    <path
                        d="M117.43 125.97C117.51 130.73 120.55 132.69 124.07 132.69C125.908 132.748 127.737 132.407 129.43 131.69L130.03 134.21C127.992 135.059 125.797 135.468 123.59 135.41C117.59 135.41 114.07 131.49 114.07 125.65C114.07 119.81 117.51 115.22 123.15 115.22C129.47 115.22 131.15 120.78 131.15 124.33C131.144 124.879 131.104 125.426 131.03 125.97H117.43ZM127.75 123.45C127.75 121.21 126.83 117.74 122.87 117.74C119.31 117.74 117.75 121.01 117.47 123.45H127.75Z"
                        fill="black"
                    />
                    <path
                        d="M143.99 121.97C143.99 119.49 143.91 117.5 143.83 115.66H146.99L147.15 118.98H147.23C147.928 117.788 148.936 116.808 150.148 116.146C151.361 115.483 152.73 115.163 154.11 115.22C158.79 115.22 162.31 119.22 162.31 125.05C162.31 132.05 158.07 135.45 153.51 135.45C152.336 135.512 151.165 135.269 150.114 134.743C149.062 134.217 148.165 133.427 147.51 132.45H147.43V142.93H143.95L143.99 121.97ZM147.47 127.13C147.479 127.614 147.533 128.096 147.63 128.57C147.923 129.748 148.602 130.794 149.559 131.541C150.516 132.288 151.696 132.692 152.91 132.69C156.63 132.69 158.79 129.69 158.79 125.21C158.79 121.33 156.79 118.02 153.03 118.02C151.787 118.054 150.59 118.5 149.628 119.287C148.665 120.074 147.991 121.159 147.71 122.37C147.569 122.838 147.488 123.322 147.47 123.81V127.13Z"
                        fill="black"
                    />
                    <path
                        d="M184.27 125.17C184.27 132.33 179.27 135.45 174.63 135.45C169.39 135.45 165.35 131.61 165.35 125.45C165.35 118.98 169.59 115.18 174.95 115.18C180.51 115.22 184.27 119.25 184.27 125.17ZM168.91 125.37C168.91 129.61 171.35 132.81 174.79 132.81C178.23 132.81 180.67 129.65 180.67 125.29C180.67 122.01 179.03 117.86 174.87 117.86C170.71 117.86 168.91 121.7 168.91 125.37Z"
                        fill="black"
                    />
                    <path d="M188.71 106.62H192.23V135.01H188.71V106.62Z" fill="black" />
                    <path
                        d="M215.67 125.17C215.67 132.33 210.67 135.45 206.03 135.45C200.79 135.45 196.75 131.61 196.75 125.45C196.75 118.98 200.99 115.18 206.35 115.18C211.91 115.22 215.67 119.25 215.67 125.17ZM200.31 125.37C200.31 129.61 202.75 132.81 206.19 132.81C209.63 132.81 212.07 129.65 212.07 125.29C212.07 122.01 210.43 117.86 206.27 117.86C202.11 117.86 200.31 121.7 200.31 125.37Z"
                        fill="black"
                    />
                    <path
                        d="M217.63 132.97L226.37 121.53C227.21 120.53 228.01 119.53 228.89 118.53H218.43V115.7H233.19V117.9L224.55 129.13C223.75 130.21 222.95 131.13 222.07 132.13V132.21H233.37V135.01H217.63V132.97ZM224.71 112.97L220.87 107.25H223.59L225.95 111.05H226.03L228.39 107.25H231.03L227.27 112.97H224.71Z"
                        fill="black"
                    />
                    <path
                        d="M240.87 110.22C240.87 110.798 240.64 111.353 240.232 111.761C239.823 112.17 239.268 112.4 238.69 112.4C238.112 112.4 237.557 112.17 237.149 111.761C236.74 111.353 236.51 110.798 236.51 110.22C236.502 109.929 236.553 109.639 236.661 109.368C236.768 109.098 236.93 108.852 237.136 108.646C237.342 108.44 237.588 108.278 237.858 108.171C238.129 108.063 238.419 108.012 238.71 108.02C239 108.01 239.289 108.06 239.558 108.168C239.827 108.275 240.071 108.438 240.274 108.644C240.477 108.851 240.635 109.098 240.738 109.37C240.84 109.641 240.885 109.93 240.87 110.22ZM236.95 135.01V115.66H240.47V135.01H236.95Z"
                        fill="black"
                    />
                    <path
                        d="M248.27 125.97C248.35 130.73 251.39 132.69 254.91 132.69C256.748 132.748 258.577 132.407 260.27 131.69L260.87 134.21C258.832 135.059 256.637 135.468 254.43 135.41C248.43 135.41 244.91 131.49 244.91 125.65C244.91 119.81 248.35 115.22 253.99 115.22C260.31 115.22 261.99 120.78 261.99 124.33C261.984 124.879 261.944 125.426 261.87 125.97H248.27ZM258.59 123.45C258.59 121.21 257.67 117.74 253.71 117.74C250.15 117.74 248.59 121.01 248.31 123.45H258.59Z"
                        fill="black"
                    />
                    <path
                        d="M269.83 124.53H269.91C270.39 123.85 271.07 123.01 271.63 122.33L277.31 115.66H281.55L274.07 123.66L282.59 135.06H278.31L271.63 125.78L269.83 127.78V135.06H266.37V106.62H269.85L269.83 124.53Z"
                        fill="black"
                    />
                    <path
                        d="M293.59 121.97C293.59 119.49 293.51 117.5 293.43 115.66H296.59L296.75 118.98H296.83C297.528 117.788 298.537 116.808 299.749 116.146C300.961 115.483 302.33 115.163 303.71 115.22C308.39 115.22 311.91 119.22 311.91 125.05C311.91 132.05 307.67 135.45 303.11 135.45C301.936 135.512 300.765 135.269 299.714 134.743C298.662 134.217 297.765 133.427 297.11 132.45H297.03V142.93H293.55L293.59 121.97ZM297.07 127.13C297.079 127.614 297.133 128.096 297.23 128.57C297.523 129.748 298.202 130.794 299.159 131.541C300.116 132.288 301.296 132.692 302.51 132.69C306.23 132.69 308.39 129.69 308.39 125.21C308.39 121.33 306.39 118.02 302.63 118.02C301.387 118.054 300.19 118.5 299.228 119.287C298.265 120.074 297.591 121.159 297.31 122.37C297.169 122.838 297.088 123.322 297.07 123.81V127.13Z"
                        fill="black"
                    />
                    <path
                        d="M333.87 125.17C333.87 132.33 328.87 135.45 324.23 135.45C318.99 135.45 314.95 131.61 314.95 125.45C314.95 118.98 319.19 115.18 324.55 115.18C330.11 115.22 333.87 119.25 333.87 125.17ZM318.51 125.37C318.51 129.61 320.95 132.81 324.39 132.81C327.83 132.81 330.27 129.65 330.27 125.29C330.27 122.01 328.63 117.86 324.47 117.86C320.31 117.86 318.51 121.7 318.51 125.37Z"
                        fill="black"
                    />
                    <path
                        d="M355.03 106.62V130.01C355.03 131.73 355.03 133.69 355.19 135.01H352.03L351.87 131.65H351.79C351.159 132.84 350.205 133.828 349.037 134.5C347.87 135.172 346.536 135.502 345.19 135.45C340.51 135.45 336.91 131.45 336.91 125.61C336.91 119.18 340.91 115.22 345.59 115.22C346.743 115.154 347.892 115.397 348.919 115.924C349.946 116.452 350.813 117.244 351.43 118.22H351.51V106.62H355.03ZM351.51 123.53C351.516 123.032 351.462 122.535 351.35 122.05C351.096 120.893 350.454 119.858 349.529 119.117C348.605 118.377 347.454 117.975 346.27 117.98C342.63 117.98 340.47 121.17 340.47 125.45C340.47 129.37 342.39 132.61 346.19 132.61C347.401 132.606 348.574 132.187 349.513 131.423C350.452 130.658 351.1 129.595 351.35 128.41C351.467 127.912 351.521 127.401 351.51 126.89V123.53Z"
                        fill="black"
                    />
                    <path
                        d="M364.63 140.61C366.05 140.612 367.419 140.084 368.47 139.13C369.47 138.01 369.79 136.49 369.79 131.85V115.66H373.31V133.21C373.31 136.97 372.71 139.41 370.99 141.21C369.33 142.658 367.193 143.442 364.99 143.41L364.63 140.61ZM373.71 110.22C373.723 110.511 373.675 110.801 373.569 111.072C373.462 111.342 373.3 111.588 373.092 111.791C372.885 111.995 372.637 112.153 372.364 112.254C372.091 112.356 371.8 112.399 371.51 112.38C371.224 112.388 370.94 112.338 370.674 112.232C370.408 112.127 370.166 111.968 369.964 111.766C369.762 111.564 369.603 111.322 369.497 111.056C369.392 110.791 369.342 110.506 369.35 110.22C369.343 109.926 369.396 109.633 369.507 109.36C369.617 109.088 369.783 108.84 369.993 108.634C370.203 108.428 370.453 108.267 370.728 108.161C371.002 108.056 371.296 108.008 371.59 108.02C371.877 108.014 372.162 108.067 372.427 108.177C372.692 108.286 372.932 108.45 373.131 108.656C373.33 108.863 373.485 109.108 373.584 109.378C373.684 109.647 373.727 109.934 373.71 110.22Z"
                        fill="black"
                    />
                    <path
                        d="M381.03 125.97C381.11 130.73 384.15 132.69 387.67 132.69C389.508 132.748 391.336 132.407 393.03 131.69L393.63 134.21C391.592 135.059 389.397 135.468 387.19 135.41C381.19 135.41 377.67 131.49 377.67 125.65C377.67 119.81 381.11 115.22 386.75 115.22C393.07 115.22 394.75 120.78 394.75 124.33C394.744 124.879 394.704 125.426 394.63 125.97H381.03ZM391.35 123.45C391.35 121.21 390.43 117.74 386.47 117.74C382.91 117.74 381.35 121.01 381.07 123.45H391.35Z"
                        fill="black"
                    />
                    <path
                        d="M415.83 106.62V130.01C415.83 131.73 415.83 133.69 415.99 135.01H412.83L412.67 131.65H412.59C411.959 132.84 411.005 133.828 409.837 134.5C408.67 135.172 407.336 135.502 405.99 135.45C401.31 135.45 397.71 131.45 397.71 125.61C397.71 119.18 401.71 115.22 406.39 115.22C407.543 115.154 408.692 115.397 409.719 115.924C410.746 116.452 411.613 117.244 412.23 118.22H412.31V106.62H415.83ZM412.31 123.53C412.316 123.032 412.263 122.535 412.15 122.05C411.896 120.893 411.253 119.858 410.329 119.117C409.405 118.377 408.254 117.975 407.07 117.98C403.43 117.98 401.27 121.17 401.27 125.45C401.27 129.37 403.19 132.61 406.99 132.61C408.201 132.606 409.374 132.187 410.313 131.423C411.252 130.658 411.901 129.595 412.15 128.41C412.267 127.912 412.32 127.401 412.31 126.89V123.53Z"
                        fill="black"
                    />
                    <path
                        d="M421.67 120.9C421.67 118.9 421.67 117.26 421.51 115.66H424.63L424.83 118.86H424.91C425.544 117.728 426.475 116.79 427.603 116.149C428.731 115.507 430.013 115.186 431.31 115.22C433.99 115.22 438.15 116.82 438.15 123.45V135.01H434.63V123.85C434.63 120.74 433.47 118.14 430.15 118.14C428.797 118.182 427.515 118.753 426.58 119.732C425.644 120.71 425.131 122.017 425.15 123.37V135.01H421.63L421.67 120.9Z"
                        fill="black"
                    />
                    <path
                        d="M461.37 125.17C461.37 132.33 456.37 135.45 451.73 135.45C446.49 135.45 442.45 131.61 442.45 125.45C442.45 118.98 446.69 115.18 452.05 115.18C457.63 115.22 461.37 119.25 461.37 125.17ZM446.01 125.37C446.01 129.61 448.45 132.81 451.89 132.81C455.33 132.81 457.77 129.65 457.77 125.29C457.77 122.01 456.13 117.86 451.97 117.86C447.81 117.86 446.03 121.7 446.03 125.37H446.01Z"
                        fill="black"
                    />
                    <path
                        d="M482.03 129.73C482.03 131.73 482.03 133.49 482.19 135.01H479.07L478.87 131.85H478.79C478.138 132.963 477.202 133.883 476.077 134.516C474.953 135.149 473.68 135.471 472.39 135.45C469.39 135.45 465.71 133.77 465.71 126.97V115.66H469.23V126.37C469.23 130.05 470.35 132.53 473.55 132.53C474.553 132.513 475.528 132.2 476.353 131.631C477.179 131.062 477.818 130.261 478.19 129.33C478.403 128.754 478.512 128.144 478.51 127.53V115.66H482.03V129.73Z"
                        fill="black"
                    />
                    <path
                        d="M495.87 131.41C497.264 132.282 498.866 132.765 500.51 132.81C503.07 132.81 504.27 131.53 504.27 129.93C504.27 128.33 503.27 127.33 500.67 126.37C497.19 125.13 495.55 123.21 495.55 120.9C495.55 117.78 498.07 115.22 502.23 115.22C503.894 115.203 505.533 115.617 506.99 116.42L506.11 118.98C504.91 118.234 503.523 117.846 502.11 117.86C500.03 117.86 498.87 119.06 498.87 120.49C498.87 122.09 500.03 122.81 502.55 123.77C505.91 125.05 507.63 126.77 507.63 129.61C507.63 133.01 504.99 135.41 500.39 135.41C498.493 135.446 496.619 134.992 494.95 134.09L495.87 131.41Z"
                        fill="black"
                    />
                    <path
                        d="M516.43 110.1V115.66H521.43V118.34H516.43V128.77C516.43 131.17 517.11 132.53 519.07 132.53C519.744 132.536 520.416 132.456 521.07 132.29L521.23 134.93C520.228 135.281 519.171 135.443 518.11 135.41C517.407 135.452 516.704 135.341 516.048 135.086C515.392 134.831 514.799 134.436 514.31 133.93C513.31 132.93 512.95 131.17 512.95 128.93V118.34H509.95V115.66H512.95V111.02L516.43 110.1Z"
                        fill="black"
                    />
                    <path
                        d="M525.43 121.7C525.43 119.41 525.43 117.46 525.27 115.7H528.37L528.49 119.49H528.65C528.983 118.309 529.68 117.264 530.643 116.505C531.606 115.745 532.784 115.309 534.01 115.26C534.347 115.256 534.683 115.296 535.01 115.38V118.69C534.616 118.604 534.213 118.564 533.81 118.57C531.33 118.57 529.57 120.45 529.09 123.09C528.991 123.631 528.938 124.18 528.93 124.73V135.05H525.45L525.43 121.7Z"
                        fill="black"
                    />
                    <path
                        d="M540.07 125.97C540.15 130.73 543.19 132.69 546.71 132.69C548.548 132.748 550.376 132.407 552.07 131.69L552.67 134.21C550.632 135.059 548.437 135.468 546.23 135.41C540.23 135.41 536.71 131.49 536.71 125.65C536.71 119.81 540.15 115.22 545.79 115.22C552.11 115.22 553.79 120.78 553.79 124.33C553.782 124.879 553.738 125.427 553.66 125.97H540.07ZM550.39 123.45C550.39 121.21 549.47 117.74 545.51 117.74C541.95 117.74 540.39 121.01 540.11 123.45H550.39Z"
                        fill="black"
                    />
                    <path
                        d="M571.94 134.29C570.196 135.069 568.3 135.452 566.39 135.41C560.55 135.41 556.75 131.41 556.75 125.53C556.75 119.65 560.83 115.26 567.15 115.26C568.826 115.241 570.487 115.582 572.02 116.26L571.22 118.98C569.969 118.319 568.564 118.001 567.15 118.06C562.71 118.06 560.31 121.33 560.31 125.37C560.31 129.85 563.19 132.61 567.03 132.61C568.523 132.603 569.996 132.261 571.34 131.61L571.94 134.29Z"
                        fill="black"
                    />
                    <path
                        d="M576.07 106.62H579.59V118.7H579.67C580.266 117.657 581.138 116.799 582.19 116.22C583.282 115.577 584.523 115.233 585.79 115.22C588.38 115.22 592.54 116.82 592.54 123.49V135.01H589.02V123.89C589.02 120.78 587.87 118.14 584.55 118.14C583.496 118.16 582.474 118.509 581.628 119.139C580.781 119.768 580.153 120.646 579.83 121.65C579.638 122.188 579.556 122.76 579.59 123.33V135.01H576.07V106.62Z"
                        fill="black"
                    />
                    <path
                        d="M615.78 125.17C615.78 132.33 610.78 135.45 606.15 135.45C600.91 135.45 596.87 131.61 596.87 125.45C596.87 118.98 601.11 115.18 606.47 115.18C612.02 115.22 615.78 119.25 615.78 125.17ZM600.43 125.37C600.43 129.61 602.87 132.81 606.31 132.81C609.75 132.81 612.18 129.65 612.18 125.29C612.18 122.01 610.54 117.86 606.39 117.86C602.24 117.86 600.43 121.7 600.43 125.37Z"
                        fill="black"
                    />
                    <path
                        d="M636.42 129.73C636.42 131.73 636.42 133.49 636.58 135.01H633.46L633.26 131.85H633.18C632.53 132.963 631.595 133.882 630.472 134.515C629.349 135.147 628.079 135.47 626.79 135.45C623.79 135.45 620.11 133.77 620.11 126.97V115.66H623.63V126.37C623.63 130.05 624.75 132.53 627.95 132.53C628.952 132.515 629.927 132.203 630.751 131.633C631.575 131.063 632.212 130.262 632.58 129.33C632.801 128.756 632.913 128.145 632.91 127.53V115.66H636.42V129.73Z"
                        fill="black"
                    />
                    <path
                        d="M51.49 2L104.45 35.35"
                        stroke="black"
                        strokeWidth="4"
                        strokeMiterlimit="10"
                    />
                    <path
                        d="M53.68 2L2 35.45"
                        stroke="black"
                        strokeWidth="4"
                        strokeMiterlimit="10"
                    />
                    <path
                        d="M103.37 35.03C299.31 34.52 494.37 34.52 690.29 35.03Z"
                        fill="black"
                    />
                    <path
                        d="M103.37 35.03C299.31 34.52 494.37 34.52 690.29 35.03"
                        stroke="black"
                        strokeWidth="4"
                        strokeMiterlimit="10"
                    />
                </g>
                <defs>
                    <clipPath id="clip0_101_69">
                        <rect width="692.29" height="143.41" fill="white" />
                    </clipPath>
                </defs>
            </svg>

            {isLoggedIn ? (
                <button className="logOutButton" onClick={handleLogOut}>
                    <p>Log out</p>
                    <svg viewBox="0 0 24 24">
                        <g fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="7" r="5" />
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M17 22H5.266a2 2 0 0 1-1.985-2.248l.39-3.124A3 3 0 0 1 6.649 14H7"
                            />
                            <path strokeLinecap="round" d="m22 19l-5-5m5 0l-5 5" />
                        </g>
                    </svg>
                </button>
            ) : null}

            <Nav />
        </header>
    )
}

export default Header
