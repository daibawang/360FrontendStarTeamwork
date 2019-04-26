<template>
    	<div class="jarallax statistics" id="statistics">
		<div class="container">
			<div class="w3-agileits-statistics-heading">
				<h2>Work Experience</h2>
			</div>
			<div class="agile-statistics-grids">
				<div class="agile-statistics-grid" >
					<h4>1024</h4>
					<i class="fa el-icon-trophy-1" aria-hidden="true"></i>
					<p>Projects Complete</p>
				</div>
				<div class="agile-statistics-grid">
					<h4>2746</h4>
					<i class="fa el-icon-data-analysis" ></i>
					<p>Clients</p>
				</div>
				<div class="agile-statistics-grid" >
					<h4>575</h4>
					<i class="fa el-icon-monitor" aria-hidden="true"></i>
					<p>Awards</p>
				</div>
				<div class="clearfix"> </div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
    
}
</script>

<style lang="less" scoped>
.container{
    width:100%;
    text-align:center;
}
.statistics{
    padding-top: 15px;
    padding-bottom: 30px;
	background:url(../assets/s2.jpg) no-repeat 0px 0px;
    background-size:cover;
    height: 350px;
}
.jarallax {
    position: relative;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 50%;
}
.w3-agileits-statistics-heading h2{

    text-align: center;
    color: #FFFFFF;
}
.agile-statistics-grids {
    display: flex;
    height:200px;
    width:50%;
    margin: 60px auto;
    flex-direction:row;
}
.agile-statistics-grid{
    flex:1;
	text-align:center;
}
.agile-statistics-grid h4{
    color: #FFFFFF;
    font-size: 2em;
    margin: 0 0 .5em 0;
}
.agile-statistics-grid p{
    color: #FFFFFF;
    font-size: 1em;
    margin: 1em 0 0 0;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 1px;
}
.grid1{
    // margin-left: 370px;

}
.grid2{
    margin-left:50px;

}
.grid3{
    // margin-right: 350px;
}
.agile-statistics-grid i.fa.el-icon-trophy-1,.agile-statistics-grid i.fa.el-icon-data-analysis
,.agile-statistics-grid i.fa.el-icon-monitor {
	color: #FFFFFF;
    font-size: 2em;
    width: 100px;
    height: 70px;
    background: #ff9800;
    border-radius: 50%;
    padding: 1.1em 0 0 0;
}
.statistics-grid2{
    position:relative;
}
// .statistics-grid2:before{
//     content: "";
//     height: 2px;
//     background: #FFFFFF;
//     position: absolute;
//     width: 40%;
//     top: 100px;
//     left: -18px;
// }
// .statistics-grid2:after{
//     content: "";
//     height: 2px;
//     background: #FFFFFF;
//     position: absolute;
//     width: 40%;
//     top: 100px;
//     right: 12px;
// }
</style>


