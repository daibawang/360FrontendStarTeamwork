<template>
  <div class="banner">
    <div class="container">
      <div class="w3l-banner-grids">
        <el-row>
          <el-col :span="8">
            <div class="w3ls-banner-left">
              <div class="w3ls-banner-left-info">
                <h4>Job Title</h4>
                <p>Web Designer and Developer</p>
              </div>
              <div class="w3ls-banner-left-info">
                <h4>Name</h4>
                <p>Steve Watson</p>
              </div>
              <div class="w3ls-banner-left-info">
                <h4>Sex</h4>
                <p>Male</p>
              </div>
              <div class="w3ls-banner-left-info">
                <h4>Address</h4>
                <p>Eiusmod Tempor inclore Place,Kingsport 56777.</p>
              </div>
              <div class="w3ls-banner-left-info">
                <h4>Email Address</h4>
                <p>
                  <a href="mailto:example@email.com">mail@example.com</a>
                </p>
              </div>
            </div>
          </el-col>
          <el-col :span="16">
            <div class="w3ls-banner-right">
              <div class="banner-right-img">
                <img src="@/assets/1.jpg" alt>
              </div>
              <div class="banner-right-info">
                <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent scelerisque tellus dignissim dolor dignissim, sit amet convallis nisi dignissim.</h2>
                <p>Donec dolor felis, consectetur eget massa non, mattis euismod est. Nam augue neque, hendrerit nec scelerisque non, ultrices at ligula. Praesent posuere, turpis eget lobortis elementum, ex ante ultricies ligula, sit amet varius lacus dui in magna. Aliquam erat volutpat. Nulla condimentum, enim vitae congue ultrices, nibh erat efficitur sem, vel iaculis lectus eros in turpis. Aliquam venenatis cursus suscipit.</p>
              </div>
              <div class="clearfix"></div>
            </div>
          </el-col>

          <div class="clearfix"></div>
        </el-row>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
.clearfix {
  clear: both;
}
.banner {
  background: url(../assets/6.jpg) no-repeat 0px 0;
  background-size: cover;
  padding: 2em 0 5em;
  .container {
    width: 60%;
    margin: 30px auto;
  }
  .w3l-banner-grids {
    margin: 4em 0 0 0;
    padding: 2em 1em;
    background: rgba(255, 255, 255, 0.18);
    .w3ls-banner-left {
      width: 90%;
    }
    .w3ls-banner-left-info {
      padding: 1em 0;
      border-bottom: 1px dashed #fff;
    }
    .w3ls-banner-left-info h4,
    .social-info h4 {
      font-size: 1.2em;
      margin: 0;
      font-family: "Roboto Slab", serif;
      color: #ffffff;
      text-transform: uppercase;
      font-weight: 700;
      letter-spacing: 2px;
    }
    .w3ls-banner-left-info p {
      font-size: 0.9em;
      margin: 1em 0 0 0;
      color: #cecece;
    }
    .w3ls-banner-left-info p a {
      font-size: 0.9em;
      margin: 1em 0 0 0;
      color: #cecece;
      text-decoration: none;
    }
    .w3ls-banner-left-info p a:hover {
      color: #ff9800;
    }
    .w3ls-banner-left-info:nth-child(5) {
      border: none;
    }
    .banner-right-img {
      float: left;
      width: 27%;
    }
    .banner-right-img img {
      width: 100%;
      border: solid 8px #ffffff;
    }
    .banner-right-info {
      float: right;
      width: 65%;
    }
    .banner-right-info h2 {
      color: #ffffff;
      font-size: 1em;
      font-weight: 600;
      margin: 0;
      line-height: 1.5em;
    }
    .banner-right-info p {
      color: #cecece;
      font-size: 0.9em;
      margin: 1em 0 0 0;
      line-height: 1.8em;
    }
  }
}
</style>


