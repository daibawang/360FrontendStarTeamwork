<template>
    <div class="experience" id="experience">
		<div class="container">
			<div class="w3-agileits-statistics-heading experience-heading">
				<h2>Work Experience</h2>
			</div>
            <div class="experience-top-grids">
                <!-- 做循环 -->
                <div class=" experience-grid">
                    <div class="experience-grid-icon icon-left hvr-radial-out">
                        <i class="fa el-icon-bell" aria-hidden="true"></i>
                    </div>
                    <div class="experience-grid-info">
                        <h5>杭州某医院实习</h5>
                        <p>不知未来会在哪个城市平凡地生活，从事什么样的工作，期待，但更彷徨</p>
                    </div>
                </div>
                <div class=" experience-grid">
                    <div class="experience-grid-icon icon-left hvr-radial-out">
                        <i class="fa el-icon-user-solid" aria-hidden="true"></i>
                    </div>
                    <div class="experience-grid-info">
                        <h5>明日之子节目参赛者</h5>
                        <p>喝几口酒，背上即将断线的吉他，从变有钱一首首唱到了最后，手捧最强厂牌的白金唱片出道</p>
                    </div>
                </div>
                <div class=" experience-grid">
                    <div class="experience-grid-icon icon-left hvr-radial-out">
                        <i class="fa el-icon-s-platform" aria-hidden="true"></i>
                    </div>
                    <div class="experience-grid-info">
                        <h5>哇唧唧哇工作</h5>
                        <p>和好朋友在北京有了家一起住，不断的实现追星梦，唱着歌，从事着自己喜欢的工作，为哇唧唧哇奋斗，攒钱买房</p>
                    </div>
                </div>
                
            </div>
		</div>
	</div>
</template>
<script>
export default {
    
}
</script>

<style lang="less" scoped>
.clearfix{
    clear:both;
}
.container{
    width:100%;
    text-align: center;
}
.experience{
	background:#FFFFFF;
}
.experience-heading h3{
	color: #2f2f2f;
}
.w3-agile-experience-grids {

}
.experience-top-grids{
    width:80%;
    margin: 4em auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
}
.experience-grid{
    width: 40%;
    text-align: center;
    padding: 2em;
}
.experience-grid-icon i.fa.el-icon-bell, .experience-grid-icon i.fa.el-icon-user-solid,.experience-grid-icon i.el-icon-s-platform{
    color: #2f2f2f;
    background: none;
    border: solid 2px #ff9800;
    width: 80px;
    height: 50px;
    font-size: 2em;
    padding: 0.5em 0 0 0;
}
.experience-grid-info h5{
    color: #2f2f2f;
    font-size: 1em;
    margin: 1em 0 0 0;
    font-weight: 700;
}
.experience-grid-info p{
	color: #999999;
    font-size: .9em;
    margin: 1em 0 0 0;
    line-height: 1.8em;
}
.experience-grid1 {
    border-right: none !important;
}
.experience-grid2 {
    border-bottom: none !important;
}
.experience-grid3 {
    border-bottom: none !important;
    border-right: none !important;
}
/* Radial Out */
.hvr-radial-out {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -moz-osx-font-smoothing: grayscale;
  position: relative;
  overflow: hidden;
  background: none;
  -webkit-transition-property: color;
  transition-property: color;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
}
.hvr-radial-out:before {
  content: "";
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #ff9800;
  border-radius: 100%;
  -webkit-transform: scale(0);
  transform: scale(0);
  -webkit-transition-property: transform;
  transition-property: transform;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
}
.hvr-radial-out:hover, .hvr-radial-out:focus, .hvr-radial-out:active {
  color: #FFFFFF;
}
.experience-grid:hover div.hvr-radial-out:before{
  -webkit-transform: scale(2);
  transform: scale(2);	
  color:#FFFFFF;
    transition: 0.5s all;
  -webkit-transition: 0.5s all;
  -o-transition: 0.5s all;
  -moz-transition: 0.5s all;
  -ms-transition: 0.5s all;
}
.experience-grid:hover div i.fa.fa-folder-open,.experience-grid:hover div i.fa.fa-bell,.experience-grid:hover div i.fa.fa-comments,.experience-grid:hover div i.fa.fa-asterisk{
	color: #FFFFFF;
}
</style>


