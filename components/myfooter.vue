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
                <img src="https://medncom.com/wp-content/uploads/2017/11/Ooredoo-black.png" alt />
                <img src="http://assets.stickpng.com/images/5842905ca6515b1e0ad75ab9.png" alt />
              </li>
              <li>
                <img
                  src="https://w7.pngwing.com/pngs/920/617/png-transparent-huawei-sydney-business-zte-%E5%8D%8E%E4%B8%BA-sydney.png"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Logo_Alg%C3%A9rie_T%C3%A9l%C3%A9com.svg/1200px-Logo_Alg%C3%A9rie_T%C3%A9l%C3%A9com.svg.png"
                  alt
                />
              </li>
              <li>
                <img src="http://assets.stickpng.com/images/58429064a6515b1e0ad75aba.png" alt />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/MIT_logo.svg/1280px-MIT_logo.svg.png"
                  alt
                />
              </li>
            </ul>
          </div>
          <div
            class="col-md-4 col-lg-4 offset-lg-1 footer-contact wow fadeInDown animated animated"
            style="visibility: visible; animation-name: fadeInDown;"
          >
            <h1>Contact</h1>
            <p>
              <font-awesome-icon :icon="['fas', 'map-marker-alt']" />Dergana , Alger , min
              jihet khamej ou bnin
            </p>
            <p>
              <font-awesome-icon :icon="['fas', 'phone']" />Phone: (+213) 78 29 83 435
            </p>
            <p>
              <font-awesome-icon :icon="['fas', 'envelope']" />Email:
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
                <font-awesome-icon :icon="['fab', 'facebook']" />
              </a>
              <a href="#">
                <font-awesome-icon :icon="['fab', 'google-plus-g']" />
              </a>
              <a href="#">
                <font-awesome-icon :icon="['fab', 'youtube']" />
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
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0 !important;
  align-content: space-evenly;
}
#partners li img {
  width: 10vw;
}
</style>