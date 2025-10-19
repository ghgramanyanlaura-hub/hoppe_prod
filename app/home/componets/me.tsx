import {FC} from "react"
import styles from "../style/me.module.scss"

const Me:FC = () => {
  return (
    <div>
      <div className={styles.me_container}>
        <h1 className={styles.h1_me}>Ո՞վ ենք մենք</h1>
        <div className={styles.svg_icon}>
          <svg xmlns="http://www.w3.org/2000/svg" width="384" height="384" viewBox="0 0 384 384" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M85.6787 91.9008L110.738 103.444L132.932 87.2115L128.816 59.797L85.6787 91.9008Z" fill="#F6A91C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M56.8608 137.532L84.2466 138.614L98.7449 116.43L85.6785 91.9008L56.8608 137.532Z" fill="#F6A91C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M128.816 59.797L147.789 79.8168L173.564 72.4221L180.544 45.5486L128.816 59.797Z" fill="#F6A91C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M180.545 45.5486L190.927 70.7988L218.85 73.6846L233.885 51.1397L180.545 45.5486Z" fill="#F6A91C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M233.884 51.1397L233.705 78.1936L258.943 91.1794L281.675 75.6685L233.884 51.1397Z" fill="#F6A91C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M281.676 75.6686L272.368 101.64L290.088 121.66L317.474 116.069L281.676 75.6686Z" fill="#F6A91C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M85.6787 291.017L112.348 281.278L132.038 295.887L128.458 323.662L85.6787 291.017Z" fill="#F6A91C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M57.3982 245.025L84.9629 244.304L98.9243 266.849L85.6789 291.017L57.3982 245.025Z" fill="#F6A91C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M128.459 323.662L147.969 304.003L173.386 311.578L180.008 338.451L128.459 323.662Z" fill="#F6A91C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M180.008 338.451L190.569 313.382L218.67 310.676L233.527 333.582L180.008 338.451Z" fill="#F6A91C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M233.526 333.582V306.528L258.764 293.903L281.496 309.414L233.526 333.582Z" fill="#F6A91C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M281.496 309.414L272.546 283.442L290.445 263.783L316.399 269.374L281.496 309.414Z" fill="#F6A91C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M56.8617 137.532L77.0878 157.732L72.792 179.916L46.4802 190.557L56.8617 137.532Z" fill="#F6A91C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M46.4802 190.557L72.613 201.92L76.9088 226.268L57.3987 245.025L46.4802 190.557Z" fill="#F6A91C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M317.474 116.069L299.038 135.728L309.24 163.323L336.268 166.75L317.474 116.069Z" fill="#F6A91C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M336.267 166.75L312.103 178.653L311.745 207.15L335.73 220.857L336.267 166.75Z" fill="#F6A91C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M316.398 269.374L335.73 220.857L309.239 222.3L298.32 249.534L316.398 269.374Z" fill="#F6A91C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M207.93 4.78754L202.56 14.3466L211.152 16.1501L215.448 6.41077L207.93 4.78754Z" fill="#F6A91C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M216.701 6.59109L212.763 16.5108L221.533 18.4948L224.397 8.21432L216.701 6.59109Z" fill="#F6A91C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M225.471 8.57504L222.786 18.8555L231.915 20.6591L233.526 10.1983L225.471 8.57504Z" fill="#F6A91C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M202.023 15.4288L196.833 24.6271L206.677 26.7914L210.794 17.2324L202.023 15.4288Z" fill="#F6A91C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M212.227 17.593L208.289 27.3324L218.313 29.3163L221.177 19.5769L212.227 17.593Z" fill="#F6A91C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M222.428 19.9377L219.923 29.677L230.483 32.0217L231.736 21.7412L222.428 19.9377Z" fill="#F6A91C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M195.938 25.7092L206.141 27.8735L200.413 40.6789L188.6 39.4164L195.938 25.7092Z" fill="#F6A91C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M207.751 28.4145L202.56 40.8592L214.732 42.1218L217.954 30.5788L207.751 28.4145Z" fill="#F6A91C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M219.564 30.9396L216.7 42.3022L229.23 43.7451L230.304 33.1039L219.564 30.9396Z" fill="#F6A91C"/>
<path d="M206.857 1L181.083 43.5647L233.348 49.1558L236.57 7.49292L206.857 1Z" stroke="#F6A91C" stroke-width="0.596967" stroke-miterlimit="22.9256"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M274.336 22.4627L265.744 29.6771L273.262 34.5467L280.78 26.7913L274.336 22.4627Z" fill="#F6A91C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M282.032 27.5128L274.514 35.4485L282.211 40.3182L288.655 31.8414L282.032 27.5128Z" fill="#F6A91C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M289.551 32.5628L283.465 41.2201L291.34 46.4505L296.531 36.8914L289.551 32.5628Z" fill="#F6A91C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M264.85 30.3985L256.616 37.4325L265.208 43.0236L272.546 35.2682L264.85 30.3985Z" fill="#F6A91C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M273.8 36.3503L266.64 43.9254L275.411 49.6969L281.496 41.22L273.8 36.3503Z" fill="#F6A91C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M282.75 42.1218L276.843 50.5987L285.971 56.5505L290.804 47.3522L282.75 42.1218Z" fill="#F6A91C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M255.363 38.1539L264.313 43.9254L254.29 53.8451L243.55 48.4344L255.363 38.1539Z" fill="#F6A91C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M265.744 45.0075L256.258 54.9273L267.355 60.5184L274.694 50.5987L265.744 45.0075Z" fill="#F6A91C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M276.126 51.5005L269.146 61.4202L280.601 67.1917L285.255 57.6327L276.126 51.5005Z" fill="#F6A91C"/>
<path d="M274.695 18.4948L234.959 49.5165L282.571 73.865L300.47 35.4485L274.695 18.4948Z" stroke="#F6A91C" stroke-width="0.596967" stroke-miterlimit="22.9256"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M139.913 12.3626L138.481 23.0038L146.894 21.5609L147.252 11.1001L139.913 12.3626Z" fill="#F6A91C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M148.505 10.9197V21.3805L157.096 19.9377L156.023 9.47687L148.505 10.9197Z" fill="#F6A91C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M157.276 9.29648L158.529 19.7573L167.658 18.1341L165.152 8.03397L157.276 9.29648Z" fill="#F6A91C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M138.302 24.2662L136.87 34.727L146.715 32.9235L146.894 22.643L138.302 24.2662Z" fill="#F6A91C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M148.506 22.643L148.327 32.7431L158.35 30.9395L157.276 21.0198L148.506 22.643Z" fill="#F6A91C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M158.708 20.8395L159.96 30.7592L170.342 28.9556L167.836 19.0359L158.708 20.8395Z" fill="#F6A91C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M136.514 35.9896L146.537 34.186L146.179 47.8932L134.724 51.1397L136.514 35.9896Z" fill="#F6A91C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M148.326 34.0056L148.147 47.3522L159.781 44.1057L158.528 32.2021L148.326 34.0056Z" fill="#F6A91C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M159.96 31.8413L161.392 43.5647L173.564 40.1378L170.521 30.0378L159.96 31.8413Z" fill="#F6A91C"/>
<path d="M137.586 9.29651L128.279 57.6327L179.291 43.5647L167.12 4.24646L137.586 9.29651Z" stroke="#F6A91C" stroke-width="0.596967" stroke-miterlimit="22.9256"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M78.1616 41.7611L80.6675 52.763L88.3641 48.254L84.7843 37.7932L78.1616 41.7611Z" fill="#F6A91C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M86.0376 37.2521L89.6174 47.3522L97.4931 42.8432L92.8393 33.1039L86.0376 37.2521Z" fill="#F6A91C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M93.9133 32.5627L98.9251 42.1218L106.98 37.2521L101.073 28.4145L93.9133 32.5627Z" fill="#F6A91C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M80.8467 53.8451L83.3526 64.4863L92.1232 59.4362L88.7223 49.3361L80.8467 53.8451Z" fill="#F6A91C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M90.1541 48.6147L93.7339 58.5344L102.683 53.1237L98.0297 43.745L90.1541 48.6147Z" fill="#F6A91C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M99.4604 43.2039L104.114 52.4022L113.601 46.8111L107.694 38.1539L99.4604 43.2039Z" fill="#F6A91C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M83.3521 65.9292L92.4806 60.5184L96.9554 74.0453L87.1109 81.2597L83.3521 65.9292Z" fill="#F6A91C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M94.0916 59.797L98.5663 72.7828L108.769 65.3881L103.22 54.2059L94.0916 59.797Z" fill="#F6A91C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M104.653 53.4844L110.202 64.1256L120.762 56.5505L114.318 47.8933L104.653 53.4844Z" fill="#F6A91C"/>
<path d="M74.7607 39.7772L84.2473 89.7365L127.563 57.813L101.609 24.0859L74.7607 39.7772Z" stroke="#F6A91C" stroke-width="0.596967" stroke-miterlimit="22.9256"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M379.226 190.918L369.202 186.229L368.128 195.066L378.331 198.493L379.226 190.918Z" fill="#F6A91C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M378.151 199.936L367.769 196.689L366.695 205.707L377.077 207.691L378.151 199.936Z" fill="#F6A91C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M377.078 208.954L366.517 207.15L365.443 216.709L376.004 217.25L377.078 208.954Z" fill="#F6A91C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M368.128 185.868L358.283 181.359L357.03 191.459L367.054 194.705L368.128 185.868Z" fill="#F6A91C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M366.697 196.329L356.673 193.262L355.599 203.723L365.623 205.527L366.697 196.329Z" fill="#F6A91C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M365.443 206.97L355.42 205.166L353.988 215.988L364.37 216.529L365.443 206.97Z" fill="#F6A91C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M357.031 180.637L355.778 191.098L342.712 186.589L342.891 174.325L357.031 180.637Z" fill="#F6A91C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M355.419 192.902L342.532 188.573L342.353 201.198L354.345 203.363L355.419 192.902Z" fill="#F6A91C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M354.167 204.986L342.353 203.002L342.174 215.988H352.914L354.167 204.986Z" fill="#F6A91C"/>
<path d="M382.805 189.475L338.057 167.11L337.162 220.677L379.046 220.136L382.805 189.475Z" stroke="#F6A91C" stroke-width="0.596967" stroke-miterlimit="22.9256"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M366.159 257.109L358.641 249.534L354.704 257.29L362.758 263.783L366.159 257.109Z" fill="#F6A91C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M362.042 264.865L353.987 258.552L349.87 266.308L358.641 271.719L362.042 264.865Z" fill="#F6A91C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M358.105 272.62L349.334 267.57L345.038 275.686L354.525 279.835L358.105 272.62Z" fill="#F6A91C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M357.746 248.813L350.586 241.418L345.932 250.256L353.808 256.568L357.746 248.813Z" fill="#F6A91C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M353.092 257.831L345.038 251.699L340.563 260.536L348.976 265.767L353.092 257.831Z" fill="#F6A91C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M348.259 267.029L339.847 261.979L335.014 271.358L344.143 275.326L348.259 267.029Z" fill="#F6A91C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M349.692 240.336L345.039 249.354L334.657 240.877L338.953 230.056L349.692 240.336Z" fill="#F6A91C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M344.143 250.797L333.941 242.681L329.645 253.863L339.49 259.995L344.143 250.797Z" fill="#F6A91C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M338.953 261.438L328.929 255.667L324.455 267.21L333.941 270.817L338.953 261.438Z" fill="#F6A91C"/>
<path d="M369.918 257.109L336.984 221.759L318.368 269.554L356.136 283.442L369.918 257.109Z" stroke="#F6A91C" stroke-width="0.596967" stroke-miterlimit="22.9256"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M366.336 122.923L355.239 122.381L357.566 130.858L368.305 130.317L366.336 122.923Z" fill="#F6A91C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M368.486 131.76L357.926 132.482L360.074 141.319L370.455 139.335L368.486 131.76Z" fill="#F6A91C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M370.812 140.598L360.431 142.582L362.758 151.78L372.781 148.533L370.812 140.598Z" fill="#F6A91C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M354.167 122.201L343.427 121.66L345.933 131.58L356.314 131.039L354.167 122.201Z" fill="#F6A91C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M356.672 132.482L346.291 133.383L348.976 143.303L358.999 141.499L356.672 132.482Z" fill="#F6A91C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M359.358 142.942L349.334 144.926L352.019 155.387L361.685 152.141L359.358 142.942Z" fill="#F6A91C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M342.175 121.48L344.68 131.58L330.719 132.121L326.781 120.758L342.175 121.48Z" fill="#F6A91C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M345.038 133.383L331.613 134.105L335.909 145.828L347.723 143.664L345.038 133.383Z" fill="#F6A91C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M348.26 145.107L336.625 147.632L340.921 159.716L350.945 155.928L348.26 145.107Z" fill="#F6A91C"/>
<path d="M369.202 120.217L319.621 115.889L337.878 165.848L376.72 150.157L369.202 120.217Z" stroke="#F6A91C" stroke-width="0.596967" stroke-miterlimit="22.9256"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M329.466 64.306L319.084 67.7328L324.275 74.9471L333.94 70.4382L329.466 64.306Z" fill="#F6A91C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M334.657 71.5204L325.17 76.2097L330.361 83.424L339.132 77.8329L334.657 71.5204Z" fill="#F6A91C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M339.847 78.915L331.076 84.6865L336.625 92.2616L344.68 85.5883L339.847 78.915Z" fill="#F6A91C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M318.011 68.0934L307.987 71.5203L313.715 79.8168L323.202 75.4882L318.011 68.0934Z" fill="#F6A91C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M323.917 76.7507L314.789 81.2597L320.875 89.5562L329.466 84.1454L323.917 76.7507Z" fill="#F6A91C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M330.182 85.2276L321.769 90.8187L328.034 99.6563L335.731 92.983L330.182 85.2276Z" fill="#F6A91C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M306.554 71.881L312.64 80.3578L300.11 85.949L292.056 76.931L306.554 71.881Z" fill="#F6A91C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M313.536 81.8007L301.365 87.3918L309.598 96.7705L319.801 90.2776L313.536 81.8007Z" fill="#F6A91C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M320.696 91.5402L310.852 98.0331L319.264 107.592L327.14 100.378L320.696 91.5402Z" fill="#F6A91C"/>
<path d="M331.077 60.8791L283.644 74.9471L318.727 114.265L348.797 85.5882L331.077 60.8791Z" stroke="#F6A91C" stroke-width="0.596967" stroke-miterlimit="22.9256"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M145.641 374.884L152.8 366.227L144.567 362.8L138.481 371.998L145.641 374.884Z" fill="#F6A91C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M137.228 371.457L142.956 362.078L134.543 358.651L129.89 368.391L137.228 371.457Z" fill="#F6A91C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M128.817 367.85L133.291 358.11L124.342 354.503L121.12 364.784L128.817 367.85Z" fill="#F6A91C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M153.517 365.144L160.319 356.848L150.832 352.88L145.104 361.898L153.517 365.144Z" fill="#F6A91C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M143.672 361.177L149.22 352.159L139.555 348.191L135.08 357.75L143.672 361.177Z" fill="#F6A91C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M133.828 357.028L138.124 347.65L127.921 343.501L124.699 353.421L133.828 357.028Z" fill="#F6A91C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M161.392 355.766L151.547 351.798L159.602 340.075L171.236 343.501L161.392 355.766Z" fill="#F6A91C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M149.937 351.077L157.454 339.534L145.462 335.926L140.092 347.109L149.937 351.077Z" fill="#F6A91C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M138.481 346.567L143.493 335.566L131.142 331.778L128.279 342.419L138.481 346.567Z" fill="#F6A91C"/>
<path d="M146.178 378.852L179.649 340.616L127.921 325.646L117.36 367.128L146.178 378.852Z" stroke="#F6A91C" stroke-width="0.596967" stroke-miterlimit="22.9256"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M83.5307 345.485L93.1963 339.894L86.5736 333.762L77.803 340.075L83.5307 345.485Z" fill="#F6A91C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M76.9082 339.173L85.4998 332.68L78.8771 326.367L71.0015 333.762L76.9082 339.173Z" fill="#F6A91C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M70.107 332.86L77.8036 325.285L70.8229 318.792L64.0212 327.269L70.107 332.86Z" fill="#F6A91C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M94.2714 339.173L103.579 333.762L96.0613 326.728L87.6487 333.041L94.2714 339.173Z" fill="#F6A91C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M86.573 331.778L94.9856 325.466L87.1099 318.432L79.5923 325.646L86.573 331.778Z" fill="#F6A91C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M105.009 333.221L97.1338 326.007L108.768 317.89L118.434 325.285L105.009 333.221Z" fill="#F6A91C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M95.881 324.744L106.978 316.628L96.955 309.053L88.0054 317.53L95.881 324.744Z" fill="#F6A91C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M86.7531 316.448L95.3447 307.971L85.1422 300.035L78.6985 308.873L86.7531 316.448Z" fill="#F6A91C"/>
<path d="M82.637 349.273L127.206 325.466L84.2479 293.181L59.905 327.991L82.637 349.273Z" stroke="#F6A91C" stroke-width="0.596967" stroke-miterlimit="22.9256"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M78.5195 324.744L86.0372 317.53L77.9826 309.774L71.3599 318.071L78.5195 324.744Z" fill="#F6A91C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M35.2031 294.985L46.4796 293.181L42.3628 285.065L31.8022 287.771L35.2031 294.985Z" fill="#F6A91C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M31.0862 286.508L41.6467 283.622L37.7089 275.145L27.5063 279.294L31.0862 286.508Z" fill="#F6A91C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M26.9692 278.031L36.9928 273.703L32.697 265.045L23.3894 270.456L26.9692 278.031Z" fill="#F6A91C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M47.5538 293.001L58.4723 291.378L53.9975 281.999L43.616 284.705L47.5538 293.001Z" fill="#F6A91C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M42.8995 283.262L53.281 280.376L48.4483 270.636L38.7827 274.604L42.8995 283.262Z" fill="#F6A91C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M38.2468 273.342L47.7333 269.194L42.9005 259.094L33.772 264.324L38.2468 273.342Z" fill="#F6A91C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M59.9035 291.378L55.2498 281.638L69.2111 278.212L75.6548 288.853L59.9035 291.378Z" fill="#F6A91C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M54.5349 279.835L67.9593 276.228L61.1576 265.406L49.7021 270.095L54.5349 279.835Z" fill="#F6A91C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M48.9849 268.653L60.0824 263.783L53.2807 252.601L43.9731 258.372L48.9849 268.653Z" fill="#F6A91C"/>
<path d="M32.8773 298.231L83.8899 292.28L55.0723 245.567L19.095 269.554L32.8773 298.231Z" stroke="#F6A91C" stroke-width="0.596967" stroke-miterlimit="22.9256"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.20767 231.498L17.6631 233.843L16.5892 224.645L5.4917 223.382L6.20767 231.498Z" fill="#F6A91C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.31244 221.94L16.5889 222.841L15.515 213.282L4.41748 213.643L5.31244 221.94Z" fill="#F6A91C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.41693 212.381L15.5144 211.839L14.4405 201.92L3.52197 203.723L4.41693 212.381Z" fill="#F6A91C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M18.9145 234.204L29.833 236.549L28.7591 225.727L17.8406 224.645L18.9145 234.204Z" fill="#F6A91C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.8406 223.022L28.759 223.924L27.5061 212.922L16.7666 213.282L17.8406 223.022Z" fill="#F6A91C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.768 211.839L27.3285 211.298L26.2546 199.755L15.6941 201.739L16.768 211.839Z" fill="#F6A91C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M31.2656 236.909L30.1917 225.907L44.69 227.531L47.1959 239.975L31.2656 236.909Z" fill="#F6A91C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M30.1917 223.923L44.332 225.366L41.6471 212.38L28.9387 212.922L30.1917 223.923Z" fill="#F6A91C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M28.5803 211.118L41.2887 210.577L38.6038 197.23L27.5063 199.575L28.5803 211.118Z" fill="#F6A91C"/>
<path d="M4.23793 233.302L54.8926 245.747L43.7951 190.918L1.19507 201.018L4.23793 233.302Z" stroke="#F6A91C" stroke-width="0.596967" stroke-miterlimit="22.9256"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M333.761 314.644L328.928 304.905L322.663 310.856L328.212 319.874L333.761 314.644Z" fill="#F6A91C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M327.319 320.776L321.592 311.939L315.148 318.071L321.771 326.007L327.319 320.776Z" fill="#F6A91C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M320.875 326.908L314.073 318.973L307.45 325.285L314.968 332.319L320.875 326.908Z" fill="#F6A91C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M328.392 303.822L323.917 294.444L316.757 301.297L322.127 309.955L328.392 303.822Z" fill="#F6A91C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M320.875 310.856L315.326 302.38L307.987 309.414L314.431 317.169L320.875 310.856Z" fill="#F6A91C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M313.356 318.071L306.912 310.496L299.216 317.71L306.554 324.564L313.356 318.071Z" fill="#F6A91C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M323.38 293.181L316.041 300.215L308.882 288.492L316.578 279.474L323.38 293.181Z" fill="#F6A91C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M314.609 301.297L307.629 290.115L299.753 299.313L307.271 308.512L314.609 301.297Z" fill="#F6A91C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M306.198 309.594L298.68 300.756L290.446 310.135L298.322 316.989L306.198 309.594Z" fill="#F6A91C"/>
<path d="M337.342 315.907L317.474 270.997L283.823 310.496L315.505 336.467L337.342 315.907Z" stroke="#F6A91C" stroke-width="0.596967" stroke-miterlimit="22.9256"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M280.422 359.373L279.885 348.191L271.472 351.437L273.262 362.078L280.422 359.373Z" fill="#F6A91C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M272.01 362.619L270.041 351.978L261.628 355.225L264.671 365.325L272.01 362.619Z" fill="#F6A91C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M263.597 365.686L260.196 355.585L251.426 359.012L255.901 368.752L263.597 365.686Z" fill="#F6A91C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M279.706 347.109L279.169 336.287L269.683 339.894L271.294 350.355L279.706 347.109Z" fill="#F6A91C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M269.862 350.716L268.072 340.435L258.228 344.223L261.27 354.142L269.862 350.716Z" fill="#F6A91C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M259.838 354.503L256.795 344.764L246.592 348.551L250.888 357.93L259.838 354.503Z" fill="#F6A91C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M279.348 334.844L269.504 338.632L267.356 324.744L278.095 319.333L279.348 334.844Z" fill="#F6A91C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M267.713 339.173L265.566 325.646L254.468 331.237L257.869 342.96L267.713 339.173Z" fill="#F6A91C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M256.437 343.501L252.679 332.139L241.223 337.91L246.235 347.469L256.437 343.501Z" fill="#F6A91C"/>
<path d="M283.465 361.898L282.391 311.578L234.779 335.566L254.647 372.72L283.465 361.898Z" stroke="#F6A91C" stroke-width="0.596967" stroke-miterlimit="22.9256"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M214.732 379.573L218.132 368.932H209.362L207.035 379.393L214.732 379.573Z" fill="#F6A91C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M205.782 379.393L207.751 368.932L198.802 368.752L197.907 379.393H205.782Z" fill="#F6A91C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M196.655 379.212L197.371 368.752L187.884 368.571L188.6 379.212H196.655Z" fill="#F6A91C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M218.491 367.85L221.892 357.75L211.69 357.569L209.542 367.85H218.491Z" fill="#F6A91C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M207.931 367.669L209.9 357.389H199.697L198.802 367.669H207.931Z" fill="#F6A91C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M197.371 367.489L198.087 357.389L187.347 357.209L187.884 367.489H197.371Z" fill="#F6A91C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M222.429 356.487L212.047 356.307L215.09 342.6L226.904 341.517L222.429 356.487Z" fill="#F6A91C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M210.257 356.127L212.941 342.78L200.591 344.043L199.696 356.127H210.257Z" fill="#F6A91C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M198.085 356.126L198.801 344.223L186.093 345.305L187.167 355.946L198.085 356.126Z" fill="#F6A91C"/>
<path d="M216.521 383L233.704 335.926L181.081 340.796L185.914 382.639L216.521 383Z" stroke="#F6A91C" stroke-width="0.596967" stroke-miterlimit="22.9256"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.10107 158.994L16.4086 165.487L18.9145 156.83L9.42797 151.6L7.10107 158.994Z" fill="#F6A91C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.78638 150.337L19.4519 155.387L22.1368 146.55L12.1133 142.762L9.78638 150.337Z" fill="#F6A91C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.4714 141.5L22.495 145.287L25.1798 136.089L14.9773 133.564L12.4714 141.5Z" fill="#F6A91C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.3035 166.028L26.253 172.161L29.1169 162.421L19.9883 157.371L17.3035 166.028Z" fill="#F6A91C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M20.5259 155.928L29.8334 160.798L32.6973 150.698L23.0318 146.91L20.5259 155.928Z" fill="#F6A91C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M23.5684 145.648L33.2339 149.075L36.4558 138.614L26.4322 136.269L23.5684 145.648Z" fill="#F6A91C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M27.1492 173.243L30.371 162.962L42.5424 169.816L40.2156 181.9L27.1492 173.243Z" fill="#F6A91C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M30.9072 161.339L42.8997 167.832L45.4056 155.387L33.9501 151.059L30.9072 161.339Z" fill="#F6A91C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M34.3079 149.435L45.5843 153.584L48.0902 140.778L37.5297 138.974L34.3079 149.435Z" fill="#F6A91C"/>
<path d="M3.34302 159.896L43.7951 190.016L53.9977 137.171L12.4716 130.137L3.34302 159.896Z" stroke="#F6A91C" stroke-width="0.596967" stroke-miterlimit="22.9256"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M31.8022 94.0652L38.2459 103.263L43.6157 96.2295L36.635 87.933L31.8022 94.0652Z" fill="#F6A91C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M37.3518 86.8509L44.6905 94.967L50.2392 87.5723L42.3636 80.5383L37.3518 86.8509Z" fill="#F6A91C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M43.0793 79.4561L51.134 86.4901L57.0407 78.915L48.0911 72.9632L43.0793 79.4561Z" fill="#F6A91C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M38.7827 104.165L45.0474 113.183L51.3121 105.067L44.3315 96.9508L38.7827 104.165Z" fill="#F6A91C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M45.406 95.8688L52.3867 103.805L58.8304 95.3277L51.1337 88.4741L45.406 95.8688Z" fill="#F6A91C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M52.0291 87.3918L59.7257 94.0651L66.5274 85.4079L57.9358 79.6364L52.0291 87.3918Z" fill="#F6A91C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M45.5845 114.446L52.0282 105.969L61.1567 116.971L54.713 127.251L45.5845 114.446Z" fill="#F6A91C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M53.2817 104.706L62.2313 115.167L68.854 104.346L59.7254 96.2295L53.2817 104.706Z" fill="#F6A91C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M60.7991 94.7866L69.9276 102.722L76.7293 91.7205L67.6008 86.1293L60.7991 94.7866Z" fill="#F6A91C"/>
<path d="M28.043 93.3437L55.0707 136.089L83.5304 90.458L47.0161 68.8149L28.043 93.3437Z" stroke="#F6A91C" stroke-width="0.596967" stroke-miterlimit="22.9256"/>
</svg>
        </div>

        <p className={styles.p_me}>
            Հիմնադրված է 2016-ին՝ Sunny City-ն գրեթե տասնամյակով հուսալի առաջատար է <br /> արևային վահանակների տեղադրման ոլորտում։ Sunny City-ում մենք պարզապես <br /> արևային համակարգեր չենք տեղադրում՝ մենք հեղափոխում ենք աշխարհի <br /><span className={styles.span_me}>էներգիա ստանալու եղանակը։</span> 
        </p>
        
      </div>
    </div>
  )
}

export default Me
