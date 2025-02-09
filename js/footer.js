document.querySelector('footer').innerHTML = `
  <div class="box footer">
      <div class="footerLogo">
        <img src="../media/footerLogo.png" alt="">
      </div>
      <div class="footerLinkGroup">
        <div class="linkGroup">
          <h2> Helpful Links</h2>
          <ul>
            <li><a href="../index.html"><img src="../media/icons/footerLink.svg" alt=""> Home </a></li>
            <li><a href="../about.html"><img src="../media/icons/footerLink.svg" alt=""> About Us </a></li>
            <li><a href="../index.html#services"><img src="../media/icons/footerLink.svg" alt=""> Services</a></li>
            <li><a href="../index.html#specializations"><img src="../media/icons/footerLink.svg" alt="">
                Specializations</a></li>
            <li><a href="../contact.html"><img src="../media/icons/footerLink.svg" alt=""> Contact Us</a></li>
          </ul>
        </div>
        <div class="linkGroup cont">
          <h2> Contact Us</h2>
          <ul>
            <li><a href="tel:+20100xxxxxxx" target="_blank"><img src="../media/icons/call.png" alt=""> +20100xxxxxxx </a>
            </li>
            <li><a href="mailto:info@megalocalize.com" target="_blank"><img src="../media/icons/mail.png" alt="">
                info@megalocalize.com</a></li>
          </ul>
          <div class="media">
            <a href="https://www.facebook.com/" target="_blank"><i class="fa-brands fa-facebook-f"></i></a>
            <a href="https://www.linkedin.com/feed/?trk=onboarding-landing" target="_blank"><i class="fa-brands fa-linkedin-in"></i></a>
            <!-- <a href="##"><i class="fa-brands fa-instagram"></i></a>
            <a href="##"><i class="fa-brands fa-whatsapp"></i></a> -->
          </div>
        </div>
      </div>
    </div>
    <div class="box copyInner">
      <div class="copy">
        All right reserved to <strong>Megalocalize</strong> 2011
      </div>
    </div>
`;