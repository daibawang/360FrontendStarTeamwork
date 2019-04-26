<template>
  <div class="banner">
    <div class="container">
      <div class="w3l-banner-grids">
        <el-row>
          <el-col :span="8">
            <div class="w3ls-banner-left">
              <div class="w3ls-banner-left-info">
                <h4>Job Title</h4>
                <p>业余巨星</p>
              </div>
              <div class="w3ls-banner-left-info">
                <h4>Name</h4>
                <p>毛困难</p>
              </div>
              <div class="w3ls-banner-left-info">
                <h4>Sex</h4>
                <p>25</p>
              </div>
              <div class="w3ls-banner-left-info">
                <h4>Address</h4>
                <p>黑龙江省齐齐哈尔市泰来县</p>
              </div>
              <div class="w3ls-banner-left-info">
                <h4>Email Address</h4>
                <p>
                  <a href="mailto:example@email.com">maokunnan@example.com</a>
                </p>
              </div>
            </div>
          </el-col>
          <el-col :span="16">
            <div class="w3ls-banner-right">
              <div class="banner-right-img">
                <img src="@/assets/11.jpg" alt>
              </div>
              <div class="banner-right-info">
                <h2>毛困难，原名王维家，1994年10月1日出生于黑龙江省齐齐哈尔市泰来县，中国内地流行乐男歌手，毕业于杭州师范大学护理专业。</h2>
                <p>
                  2017年，参加腾讯视频选秀娱乐节目《明日之子》，获得全国总决赛冠军，从而正式进入演艺圈  ；9月1日，推出首张个人现场专辑《巨星不易工作室 No.1》  ；11月11日，推出个人原创单曲《项羽虞姬》  ；12月28日，获得腾讯娱乐白皮书音乐年度之星奖  。2018年1月7日，获得首届金鲛奖年度十佳网络新星奖  ；4月，作为“无限唱作人”参加江苏卫视音乐唱作类真人秀节目《无限歌谣季》 [6]  ；5月31日，推出首张个人录音室专辑《平凡的一天》 [7]  ；同年，获得亚洲新歌榜年度盛典年度最佳音乐人奖 [8]  、亚洲音乐盛典最具潜力男歌手奖、年度最佳唱作人奖 [9]  。2019年3月25日，其演唱的歌曲《平凡的一天》获得第26届东方风云榜音乐盛典十大金曲奖、最佳作词奖
                </p>
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


