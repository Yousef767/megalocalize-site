document.querySelector('nav').innerHTML = `
  <div class="box f-s">
      <a href="../index.html" class="logo">
        <img src="../media/logo.png" alt="">
      </a>
      <div class="links">
        <div class="ls">
          <ul class="mainLinks">
            <li><a class="link" href="../index.html">Home</a></li>
            <li><a class="link" href="../about.html"> About Us</a></li>
            <li class="drop">
              <a class="link active" href="javascript:;">Services <i class="fa-regular fa-angle-down"></i></a>
              <div class="dropMenu">
                <a href="./7.html">
                  <i class="fa-regular fa-pen"></i> Translation
                </a>
                <a href="./2.html">
                  <i>
                    <img src="../media/icons/trasnslation.svg" alt="Localization Icon">
                  </i> Localization
                </a>
                <a href="./1.html">
                  <i class="fa-regular fa-desktop"></i> Desktop Publishing Services
                </a>
                <a href="./3.html">
                  <i>
                    <img src="../media/icons/handshake.png" alt="MTPE Icon">
                  </i> Machine Translation <br> Post-Editing (MTPE)
                </a>
                <a href="./4.html">
                  <i class="fa-regular fa-book"></i> Terminology Management
                </a>
                <a href="./5.html">
                  <i class="fa-regular fa-lightbulb-on"></i> Transcreation
                </a>
                <a href="./6.html">
                  <i class="fa-regular fa-keyboard"></i> Transcription
                </a>
              </div>

            </li>
            <li class="drop">
              <a class="link" href="javascript:;"> Specializations <i class="fa-regular fa-angle-down"></i></a>
              <div class="dropMenu">
                <a href="../specializations/1.html">
                  <i class="fa-regular fa-car"></i> Automotive
                </a>
                <a href="../specializations/2.html">
                  <i class="fa-regular fa-shopping-cart"></i> E-commerce
                </a>
                <a href="../specializations/3.html">
                  <i class="fa-regular fa-book-open"></i> Education & E-Learning
                </a>
                <a href="../specializations/4.html">
                  <i class="fa-regular fa-coins"></i> Financial
                </a>
                <a href="../specializations/5.html">
                  <i class="fa-regular fa-gamepad"></i> Game Localization Services
                </a>
                <a href="../specializations/6.html">
                  <i class="fa-regular fa-balance-scale"></i> Legal
                </a>
                <a href="../specializations/7.html">
                  <i class="fa-regular fa-heartbeat"></i> Life Sciences
                </a>
                <a href="../specializations/8.html">
                  <i class="fa-regular fa-bullhorn"></i> Marketing
                </a>
                <a href="../specializations/9.html">
                  <i class="fa-regular fa-user-md"></i> Medical
                </a>
                <a href="../specializations/10.html">
                  <i class="fa-regular fa-pills"></i> Pharma Translation Services
                </a>
                <a href="../specializations/11.html">
                  <i class="fa-regular fa-cogs"></i> Technical
                </a>
              </div>

            </li>
            <li><a class="link" href="../contact.html"> Contact Us</a></li>
          </ul>
        </div>
      </div>
      <div class="last">
        <button class="menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>
`
