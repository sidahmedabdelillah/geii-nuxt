<template>
<div class="holder" :style="colors" >
  <section class="section1"  >
      <div>
        <div class="splash" :style="splash"></div>
        <div class="tittle">
          <p class="tittle-top">Ing et master</p>
          <h1 class="tittle-h1">
            {{header_tittle}}
          </h1>
          <p class="tittle-text">
            {{specialite.discription}}
          </p>
          <a class="tittle-btn" href=""
            >Telecharger Pdf <i class="fas fa-cloud-download-alt"></i>
          </a>
        </div>
      </div>
      <div class="tab-formation">
        <div class="row">
          <div class="col col-lg-12">
            <div class="quick-facts">
              <dl class="quick-facts__list">
                <dt class="quick-facts__heading">
                  <i class="fas fa-history"></i>
                  Periode de foramtion
                </dt>
                <dd>
                  Full-time: 3 ans
                </dd>
              </dl>
              <dl class="quick-facts__list">
                <dt class="quick-facts__heading">
                  <i class="fas fa-history"></i>
                  Type de foramtion
                </dt>
                <dd>
                  Foramtion ingenieur
                </dd>
                <dd>
                  Formaion complementaire master
                </dd>
              </dl>
              <dl class="quick-facts__list">
                <dt class="quick-facts__heading">
                  <i class="fas fa-history"></i>
                  Methode dacess
                </dt>
                <dd>
                  Concour daccess aux ecole superieur
                </dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
      <img class="img-right tower" :src="side_image" alt="" />
      <img class="img-left tower" :src="side_image" alt="" />
    </section>
    <section class="section2">
      <div class="container">
        <div class="row">
          <img :src="body_image" alt="" class="background-image" />
          <div class="col col-md-8">
            <div class="paragraph" v-for="item in specialite.paragraphs" :key="item.title">
              <h1>
                {{item.tittle}}
              </h1>
              <p>
                  <div v-html="$md.render(item.paragraph)"></div>
              </p>
            </div>
          </div>

          <div class="row align-items-end">
            <div class="mission">
              <h1>Notre mission</h1>
              <div v-html="$md.render(specialite.Notre_mission)"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
</template>

<script>
export default {
  props : [  "tittle_color" ,
  "border_color"  ,
  'paragraph_tittle_color' 
  , "table_second_color" 
  , "paragraph_tittle_line_color"
   , "notre_mission_color" 
   , "header_tittle"
   ,"side_image"
   ,"splash_image"
   ,"body_image" , "specialite"]
  
,computed : {
  colors(){
   return {
      '--tittle-color' : this.tittle_color ,
      '--border-color' : this.border_color ,
      '--paragraph-tittle-color' : this.paragraph_tittle_color ,
      "--table-second-color" : this.table_second_color ,
      "--paragraph-tittle-line-color" : this.paragraph_tittle_line_color ,
      "--notre-mission-color" : this.notre_mission_color
    }
  },
  splash(){
      return{'background-image' : `url("${this.splash_image}")`}
  }
}
}</script>

<style scoped >

.holder{
 --tittle-color : #ffffff ;
 --border-color : #ffffff ;
 --paragraph-tittle-color : #ffffff ;
 --table-second-color : #ffffff;
 --paragraph-tittle-line-color : #ffffff ;
 --notre-mission-color : black;

}

body {

  box-sizing: border-box;
  padding: 0;
  margin: 0;
  line-height: 1.5;
  font-size: 12px;
}
a {
  text-decoration: none;
}
i {
  overflow: hidden;
  vertical-align: middle;
}
dd {
  float: none;
  width: auto;
}

.section1 {
  height: 100vh;
  position: relative;
}

.splash {

  background-size: cover;
  height: 40vh;
  z-index: -1;
}

.tittle {
  -webkit-box-shadow: 1px 2px 9px 2px rgba(0, 0, 0, 0.36);
  -moz-box-shadow: 1px 2px 9px 2px rgba(0, 0, 0, 0.36);
  box-shadow: 1px 2px 9px 2px rgba(0, 0, 0, 0.36);
  border-top: solid 5px var(--border-color);
  height: auto;
  width: 66vw;
  position: absolute;
  right: 50%;
  top: 30%;
  transform: translateX(50%);
  background-color: white;
  margin-bottom: 2rem;
}

.tittle .tittle-top {
  color: var(--border-color);
  font-size: 1rem;
  margin-top: 0;
  margin-bottom: 0.5rem;
  text-align: center;
  font-weight: 400;
  line-height: 1em;
}
.tittle .tittle-h1 {
  width: auto;
  margin: 0;
  font-size: 1.5rem;
  text-align: center;
  color: var(--tittle-color);
  font-weight: 900;
}
.tittle .tittle-text {
  width: auto;
  margin: 0.5rem 0;
  text-align: center;
  line-height: 1.4;
}
.tittle .tittle-btn {
  background-color: #ff4a4a;
  color: white;
  border-radius: 1.7rem;
  max-width: 388px;
  padding: 0.75rem 4.16rem 0.9em 1rem;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: left;
  transition: 0.3s;
  line-height: 1.2;
  outline: none;
  display: inline-block;
  vertical-align: middle;
  font-family: NationalBold, sans-serif;
  padding-right: 1.5rem;
  border: none;
  position: relative;
  vertical-align: middle;
  left: 50%;
  transform: translateX(-50%);
  margin: 0.5rem 0 0.75rem 0;
}
.tittle .tittle-btn img {
  display: inline-block;
  height: 1.5rem;
  margin: 0;
}

.tab-formation {
  position: absolute;
  bottom: 3%;
  margin: 0 auto;
  color: var(--border-color);
  width: 50vw;
  right: 50%;
  transform: translateX(50%);
}
.quick-facts {
  background-color: var(--tittle-color);
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-content: stretch;
  align-items: flex-start;
  width: 100%;
  color: #ffffff;
  margin-bottom: 0.5rem;
}
.quick-facts__list {
  order: 0;
  flex: 1 1 auto;
  align-self: stretch;
  width: 100%;
  display: block;
  overflow: hidden;
  position: relative;
  padding: 1.1rem 1.33rem 1.1rem 2.33rem;
  margin: 0;
}
.quick-facts__list:nth-child(2n) {
  background-color: var(--table-second-color);
}

.quick-facts__heading i {
  size: 1.2vw;
  font-size: 2rem;
  top: 2px;
  position: relative;
  margin-right: 0.83rem;
  vertical-align: text-top;
  top: 0;
  left: 0;
}
.quick-facts__heading {
  float: none;
  width: auto;
  padding-right: 0;

  min-height: 3.2rem;
  border-bottom: solid 1px rgba(255, 255, 255, 0.5);
  padding-bottom: 0.9rem;
  margin-bottom: 0.5rem;
  display: block;
  font-weight: normal;
  line-height: 1.2;
  padding-bottom: 0.9rem;
  margin-bottom: 0.5rem;
  padding-left: 0;
  position: relative;
  top: 0.22rem;
  font-weight: 700 !important;
}

.quick-facts__list dd {
  font-size: 1.2vw;
  margin-bottom: 0.5rem;
  line-height: 1.4;
}
.section1 .tower {
  width: 12vw;
  height: 48vh;
  position: absolute;
  bottom: 5%;
}
.img-left {
  left: 3%;
}
.img-right {
  right: 3%;
}
.section2 {
  position: relative;
}
.section2 img {
  width: 60%;
  min-width: 500px !important;
  position: absolute;
  top: 0;
  right: 0;
}
.paragraph {
  margin: 5vh 0;
}
.paragraph h1 {
  color: var(--paragraph-tittle-color);
  margin-bottom: 1.4rem;
  position: relative;
  font-size: 3vw;
  font-weight: 600;
}
.paragraph h1::after {
  content: "";
  height: 2px;
  bottom: -35%;
  position: absolute;
  margin: 0;
  left: 0;
  right: 0;
  width: 30%;
  background: var(--paragraph-tittle-line-color);
}
.paragraph pre {
  font-size: 1rem;
  overflow: visible;
}

.mission {
  background-color: var(--notre-mission-color);
  width: 25vw;
  padding: 1rem;
  color: white;
  border-radius: 5%;
  margin: 1rem;
}

</style>