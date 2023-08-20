import React from "react"

function Contact() {
  return (
    <main className="contactMain">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d42221.80714336262!2d17.758529!3d48.593323!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6299a7824b563ec0!2sKPS%20-%20priemyseln%C3%BD%20tovar%2C%20s.r.o.!5e0!3m2!1sen!2sus!4v1614808582117!5m2!1sen!2sus"
        allowFullScreen=""
        loading="lazy"
        title="KPS"
      ></iframe>
      <ul className="getInTouch">
        <li className="email">
          <a href="mailto:kps-trebatice@t-network.sk">
            <div>
              <svg viewBox="0 0 24 24">
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6Z"
                  />
                  <path d="m2 8l7.501 6.001a4 4 0 0 0 4.998 0L22 8" />
                </g>
              </svg>
              <h2>Write to us</h2>
            </div>
            <p>kps-trebatice@t-network.sk</p>
          </a>
        </li>
        <li className="phone">
          <a href="tel:+421 905 361 241">
            <div>
              <svg viewBox="0 0 48 48">
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="4"
                >
                  <path
                    strokeLinecap="round"
                    d="M41.78 20.607a13.06 13.06 0 0 0-.25-5.102a12.939 12.939 0 0 0-3.415-6.018a12.94 12.94 0 0 0-6.018-3.416a13.068 13.068 0 0 0-5.102-.249m7.195 13.981a5.991 5.991 0 0 0-1.692-5.132a5.991 5.991 0 0 0-5.132-1.691"
                  />
                  <path d="M14.376 8.794a2 2 0 0 1 1.748 1.03l2.447 4.406a2 2 0 0 1 .04 1.866l-2.357 4.713s.683 3.512 3.541 6.37c2.859 2.858 6.359 3.53 6.359 3.53l4.712-2.357a2 2 0 0 1 1.867.041l4.42 2.457a2 2 0 0 1 1.027 1.748v5.074c0 2.583-2.4 4.45-4.848 3.623c-5.028-1.696-12.832-4.927-17.78-9.873c-4.946-4.947-8.176-12.752-9.873-17.78c-.826-2.448 1.04-4.848 3.624-4.848h5.073Z" />
                </g>
              </svg>
              <h2>Ring us up</h2>
            </div>
            <p>+421 905 361 241</p>
          </a>
        </li>
        <li className="facebook">
          <a
            href="https://www.facebook.com/zeleziarstvotrebatice"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <svg viewBox="0 0 48 48">
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="3.8"
                  d="M36 12.6h-6.013c-1.086 0-1.967.88-1.967 1.967v6.9H36l-1.169 7.597h-6.81V43h-8.776V29.064H12v-7.597h7.151l.094-7.21l-.013-1.31A7.868 7.868 0 0 1 27.099 5H36v7.6Z"
                />
              </svg>
              <h2>Facebook</h2>
            </div>
            <p>@zeleziarstvotrebatice</p>
          </a>
        </li>
        <li className="whatsApp">
          <a
            href="https://api.whatsapp.com/send/?phone=421905361241&text&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <svg viewBox="0 0 24 24">
                <g fill="none">
                  <g clipPath="url(#akarIconsWhatsappFill0)">
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="M17.415 14.382c-.298-.149-1.759-.867-2.031-.967c-.272-.099-.47-.148-.669.15c-.198.296-.767.966-.94 1.164c-.174.199-.347.223-.644.075c-.297-.15-1.255-.463-2.39-1.475c-.883-.788-1.48-1.761-1.653-2.059c-.173-.297-.019-.458.13-.606c.134-.133.297-.347.446-.52c.149-.174.198-.298.297-.497c.1-.198.05-.371-.025-.52c-.074-.149-.668-1.612-.916-2.207c-.241-.579-.486-.5-.668-.51c-.174-.008-.372-.01-.57-.01c-.198 0-.52.074-.792.372c-.273.297-1.04 1.016-1.04 2.479c0 1.462 1.064 2.875 1.213 3.074c.149.198 2.095 3.2 5.076 4.487c.71.306 1.263.489 1.694.625c.712.227 1.36.195 1.872.118c.57-.085 1.758-.719 2.006-1.413c.247-.694.247-1.289.173-1.413c-.074-.124-.272-.198-.57-.347Zm-5.422 7.403h-.004a9.87 9.87 0 0 1-5.032-1.378l-.36-.214l-3.742.982l.999-3.648l-.235-.374a9.861 9.861 0 0 1-1.511-5.26c.002-5.45 4.436-9.884 9.889-9.884c2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.892 6.993c-.002 5.45-4.436 9.885-9.884 9.885Zm8.412-18.297A11.815 11.815 0 0 0 11.992 0C5.438 0 .102 5.335.1 11.892a11.864 11.864 0 0 0 1.587 5.945L0 24l6.304-1.654a11.881 11.881 0 0 0 5.684 1.448h.005c6.554 0 11.89-5.335 11.892-11.893a11.821 11.821 0 0 0-3.48-8.413"
                      clipRule="evenodd"
                    />
                  </g>
                  <defs>
                    <clipPath id="akarIconsWhatsappFill0">
                      <path fill="#fff" d="M0 0h24v24H0z" />
                    </clipPath>
                  </defs>
                </g>
              </svg>
              <h2>WhatsApp</h2>
            </div>
            <p>+421 905 361 241</p>
          </a>
        </li>
        <li className="instagram">
          <a
            href="https://www.instagram.com/kps_trebatice/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <svg viewBox="0 0 48 48">
                <g fill="none">
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth="4"
                    d="M34 6H14a8 8 0 0 0-8 8v20a8 8 0 0 0 8 8h20a8 8 0 0 0 8-8V14a8 8 0 0 0-8-8Z"
                  />
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth="4"
                    d="M24 32a8 8 0 1 0 0-16a8 8 0 0 0 0 16Z"
                  />
                  <path
                    fill="currentColor"
                    d="M35 15a2 2 0 1 0 0-4a2 2 0 0 0 0 4Z"
                  />
                </g>
              </svg>
              <h2>Instagram</h2>
            </div>
            <p>@kps_trebatice</p>
          </a>
        </li>
        <li className="telegram">
          <a
            href="https://t.me/kpstrebatice"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <svg viewBox="0 0 24 24">
                <g fill="none" fillRule="evenodd">
                  <path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z" />
                  <path
                    fill="currentColor"
                    d="M21.84 6.056a1.5 1.5 0 0 0-2.063-1.626l-17.1 7.2c-1.192.502-1.253 2.226 0 2.746a56.46 56.46 0 0 0 3.774 1.418c1.168.386 2.442.743 3.463.844c.279.334.63.655.988.95c.547.45 1.205.913 1.885 1.357c1.362.89 2.873 1.741 3.891 2.295c1.217.66 2.674-.1 2.892-1.427l2.27-13.757ZM4.594 12.992l15.124-6.367l-2.118 12.84c-.999-.543-2.438-1.356-3.72-2.194a19.982 19.982 0 0 1-1.709-1.229a7.962 7.962 0 0 1-.426-.374l3.961-3.96a1 1 0 0 0-1.414-1.415L9.955 14.63c-.734-.094-1.756-.366-2.878-.736a48.89 48.89 0 0 1-2.482-.902Z"
                  />
                </g>
              </svg>
              <h2>Telegram</h2>
            </div>
            <p>@kpstrebatice</p>
          </a>
        </li>
      </ul>
    </main>
  );
}

export default Contact;
