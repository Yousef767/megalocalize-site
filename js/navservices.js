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
                  <div class="box dropItems">
                    <a href="./7.html">
                    <!-- <i class="fa-regular fa-pen"></i> Translation -->
                    <img style="margin-top: 3px;" src="../media/icons/trans2.svg" alt="">  Translation
                  </a>
                  <a href="./2.html">
                    <i>
                      <img  style="margin-top: 3px;" src="../media/icons/trasnslation2.svg" alt="Localization Icon">
                    </i> Localization
                  </a>
                    <a href="./1.html">
                      <i class="fa-regular fa-desktop"></i> Desktop Publishing Services
                    </a>
                    <a href="./3.html">
                      <i>
                        <img src="../media/icons/MTPE.svg" alt="MTPE Icon">
                      </i>Machine Translation <br> Post-Editing (MTPE)
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
                </div>
  
              </li>
            <li class="drop">
              <a class="link" href="javascript:;"> Industries <i class="fa-regular fa-angle-down"></i></a>
              <div class="dropMenu">
                <div class="box dropItems">
                  <a href="../industries/11.html">
                    <img style="width: 40px;height: 40px;" src="../media/icons/tech.svg" alt=""> Technology
                  </a>
                  <a href="../industries/1.html">
                    <img style="width: 40px;height: 40px;" src="../media/icons/auto.svg" alt=""> Automotive
                  </a>
                  <a href="../industries/2.html">
                    <i class="fa-regular fa-shopping-cart"></i> E-commerce
                  </a>
                  <a href="../industries/3.html">
                    <i class="fa-regular fa-book-open"></i> Education & E-Learning
                  </a>
                  <a href="../industries/4.html">
                    <i class="fa-regular fa-coins"></i> Financial
                  </a>
                  <a href="../industries/5.html">
                    <i class="fa-regular fa-gamepad"></i> Games
                  </a>
                  <a href="../industries/6.html">
                    <i class="fa-regular fa-balance-scale"></i> Legal
                  </a>
                  <a href="../industries/7.html">
                    <i class="fa-regular fa-heartbeat"></i> Life Sciences
                  </a>
                  <a href="../industries/8.html">
                    <i class="fa-regular fa-bullhorn"></i> Marketing
                  </a>
                  <a href="../industries/9.html">
                    <img style="width: 40px;height: 40px;" src="../media/icons/medical.svg" alt=""> Medical
                  </a>
                  <a href="../industries/10.html">
                    <img style="width: 40px;height: 40px;" src="../media/icons/pharma.svg" alt=""> Pharma Translation
                    Services
                  </a>

                </div>

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
