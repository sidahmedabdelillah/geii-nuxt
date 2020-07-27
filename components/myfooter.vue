<template>
  <footer>
    <div class="footer-top">
      <div class="container">
        <div class="row">
          <div
            class="col-md-4 col-lg-4 footer-about wow fadeInUp animated animated"
            style="visibility: visible; animation-name: fadeInUp;"
          >
            <h1>Partners</h1>
            <ul id="partners">
              <li>
                <a target="_blank" href="https://www.ulaval.ca/en/">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/en/thumb/9/90/Ulaval_Shield.svg/175px-Ulaval_Shield.svg.png"
                    alt
                  />
                </a>
              </li>
              <li>
                <a target="_blank" href="https://www.uphf.fr/">
                  <img
                    src="https://lh3.googleusercontent.com/proxy/IG7flVgfKwP-prGZ7pN3zFwaSP2RKKBNuUSWm8J6zJIWLT-W7uu7w0I8Gc0gMlmuMdhBreWTIZ3QFEoN93gnZc1fhA5jhXins93lQA"
                    alt
                  />
                </a>
              </li>
              <li>
                <a href="https://www.umc.edu.dz/index.php/en/" target="_blanc">
                  <img
                    src="https://www.umc.edu.dz//images/headers/logoufmc1new3languearenfr.png"
                    alt=""
                /></a>
              </li>
              <li>
                <a href="https://escolaeuropea.eu/" target="_blanc">
                  <img
                    src="https://www.escolaeuropea.eu/wp-content/uploads/2018/03/logo-blanc-2e3s-300x250.png"
                    alt=""
                /></a>
              </li>
            </ul>
          </div>
          <div
            class="col-md-4 col-lg-4 offset-lg-1 footer-contact wow fadeInDown animated animated"
            style="visibility: visible; animation-name: fadeInDown;"
          >
            <h1>Contact</h1>
            <p>
              <i id="small" class="fas fa-map-marker-alt"></i>ENST Cité
              Diplomatique Ex Centre Biomédical Dergana-Bordj El Kiffan-
            </p>
            <p>
              <i id="small" class="fas fa-phone"></i><bold>Phone:</bold>
              (+213) 78 29 83 435
            </p>
            <p>
              <i class="fas fa-envelope" id="small"></i>Email:
              <a href="mailto:hello@domain.com">geii@enst.dz</a>
            </p>
          </div>
          <div
            class="col-md-4 col-lg-3 footer-social wow fadeInUp animated animated"
            style="visibility: visible; animation-name: fadeInUp;"
          >
            <h1>Follow us</h1>
            <p>
              <a href="#">
                <i class="fab fa-facebook"></i>
              </a>
              <a href="#">
                <i class="fab fa-google "></i>
              </a>
              <a
                target="_blanc"
                href="https://www.youtube.com/channel/UCq8M4rEJ1bQRRjZYng8CQyA/channels"
              >
                <i class="fab fa-youtube"></i>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "myfooter"
};
</script>

<style scoped>
body {
  font-family: "Open Sans", sans-serif;
  font-size: 15px;
  font-weight: 400;
  color: #888;
  line-height: 30px;
  text-align: center;
}
a {
  color: #856dc0;
  border-bottom: 1px dashed #856dc0;
  text-decoration: none;
  transition: all 0.3s;
}
a:focus,
a:hover {
  color: #856dc0;
  border: 0;
  text-decoration: none;
}
h1,
h2 {
  margin-top: 10px;
  font-size: 38px;
  font-weight: 300;
  color: #555;
  line-height: 50px;
  font-style: italic;
}
h3 {
  font-size: 22px;
  font-weight: 300;
  color: #555;
  line-height: 30px;
  font-style: italic;
}
img {
  max-width: 100%;
}
::-moz-selection {
  background: #7762ac;
  color: #fff;
  text-shadow: none;
}
::selection {
  background: #7762ac;
  color: #fff;
  text-shadow: none;
}
.footer-top {
  padding: 60px 0;
  background: #333;
  text-align: left;
  color: #aaa;
}
.footer-top h3 {
  padding-bottom: 10px;
  color: #fff;
}
.footer-about img.logo-footer {
  max-width: 74px;
  margin-top: 0;
  margin-bottom: 18px;
}
.footer-about p a {
  color: #aaa;
  border-bottom: 1px dashed #666;
}
.footer-about p a:focus,
.footer-about p a:hover {
  color: #fff;
  border-color: #aaa;
}
.footer-contact p {
  word-wrap: break-word;
  margin: 2rem 0;
}
.footer-contact font-awesome-icon {
  padding-right: 10px;
  font-size: 18px;
  color: #666;
}
.footer-contact p a {
  color: #aaa;
  border-bottom: 1px dashed #666;
}
.footer-contact p a:focus,
.footer-contact p a:hover {
  color: #fff;
  border-color: #aaa;
}
.footer-social a {
  display: inline-block;
  margin-right: 20px;
  margin-bottom: 8px;
  color: #777;
  border: 0;
}
.footer-social a:focus,
.footer-social a:hover {
  color: #aaa;
  border: 0;
}
#partners {
  display: grid;
  grid-template-columns: 1fr 1fr;
  list-style: none;
  padding: 0 !important;
}
#partners li {
  margin: 0 1rem 1rem 0;
}
#partners li a img {
  height: 100px;
}
i {
  font-size: 3rem;
}
#small {
  font-size: 1.3rem;
  margin-right: 1rem;
}
</style>
