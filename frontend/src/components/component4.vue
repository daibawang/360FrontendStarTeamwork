<template>
    <div class="experience" id="experience">
		<div class="container">
			<div class="w3-agileits-statistics-heading experience-heading">
				<h2>My Project</h2>
			</div>
			<div class="portfolio" id="port">
				<div class="filtr-container">
					<div class="  filtr-item gallery-t" data-category="1, 3" data-sort="Busy streets">
					<a href="@/assets/b.jpg" class="b-link-stripe b-animate-go  thickbox">
		
						<figure class="w3ls-gallery">
						<img src="@/assets/b.jpg" class="img-responsive" alt=" " />	<figcaption class="w3layouts-caption">
								<h3>my designs</h3>
								
							</figcaption>
						</figure>
					</a>
					</div>
					<div class=" filtr-item" data-category="1, 3" data-sort="City wonders">
						<a href="@/assets/d.jpg" class="b-link-stripe b-animate-go  thickbox">

						<figure class="w3ls-gallery">
						<img src="@/assets/d.jpg" class="img-responsive" alt=" " />	<figcaption class="w3layouts-caption">
								<h3>my designs</h3>
							
							</figcaption>
						</figure>
					</a>

					</div>
					<div class=" filtr-item" data-category="2" data-sort="Luminous night">
					<a href="@/assets/c.jpg" class="b-link-stripe b-animate-go  thickbox">

						<figure class="w3ls-gallery">
						<img src="@/assets/c.jpg" class="img-responsive" alt=" " />	<figcaption class="w3layouts-caption">
								<h3>my designs</h3>
								
							</figcaption>
						</figure>
					</a>
					</div>
					<div class="  filtr-item gallery-t" data-category="1, 3" data-sort="Busy streets">
					<a href="@/assets/b.jpg" class="b-link-stripe b-animate-go  thickbox">
		
						<figure class="w3ls-gallery">
						<img src="@/assets/b.jpg" class="img-responsive" alt=" " />	<figcaption class="w3layouts-caption">
								<h3>my designs</h3>
								
							</figcaption>
						</figure>
					</a>
					</div>
					<div class="  filtr-item" data-category="3" data-sort="In production">
					<a href="@/assets/e.jpg" class="b-link-stripe b-animate-go  thickbox">

						<figure class="w3ls-gallery">
						<img src="@/assets/e.jpg" class="img-responsive" alt=" " />	<figcaption class="w3layouts-caption">
								<h3>my designs</h3>
								
							</figcaption>
						</figure>
					</a>

					</div>
					<div class=" filtr-item" data-category="3, 2" data-sort="Industrial site">
					<a href="@/assets/g.jpg" class="b-link-stripe b-animate-go  thickbox">

						<figure class="w3ls-gallery">
						<img src="@/assets/g.jpg" class="img-responsive" alt=" " />	<figcaption class="w3layouts-caption">
								<h3>my designs</h3>
								
							</figcaption>
						</figure>
					</a>
					</div>
					<div class=" filtr-item" data-category="2, 3" data-sort="Peaceful lake">
						<a href="@/assets/f.jpg" class="b-link-stripe b-animate-go  thickbox">

						<figure class="w3ls-gallery">
						<img src="@/assets/f.jpg" class="img-responsive" alt=" " />	<figcaption class="w3layouts-caption">
								<h3>my designs</h3>
								
							</figcaption>
						</figure>
						</a>
					</div>
					<div class="  filtr-item gallery-t" data-category="1, 3" data-sort="Busy streets">
					<a href="@/assets/b.jpg" class="b-link-stripe b-animate-go  thickbox">
		
						<figure class="w3ls-gallery">
						<img src="@/assets/b.jpg" class="img-responsive" alt=" " />	<figcaption class="w3layouts-caption">
								<h3>my designs</h3>
								
							</figcaption>
						</figure>
					</a>
					</div>
				<div class="clearfix"> </div>
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
.port-head {
    text-align: center;
}
figure.w3ls-gallery {
    margin: 0;
    padding: 0;
    position: relative;
    display: block;
    cursor: pointer;
	overflow: hidden;
	img{
		width:100%;
		
	}
}
figure.w3ls-gallery:hover figcaption.w3layouts-caption {
    -ms-filter: alpha(Opacity=100);
    filter: alpha(opacity=100);
    opacity: 1;
    -webkit-transform: rotate(0);
    -moz-transform: rotate(0);
    -o-transform: rotate(0);
    -ms-transform: rotate(0);
    transform: rotate(0);
    top: 0;
}

figcaption.w3layouts-caption {
    -ms-filter:alpha(Opacity=0);
    filter: alpha(opacity=0);
    opacity: 0;
    position: absolute;
    height: 100%;
    width: 100%;
	top: -100%;
    background: rgba(0,0,0,.5);
    color: #fff;
    -webkit-transition: all .5s ease;
    -moz-transition: all .5s ease;
    -o-transition: all .5s ease;
    -ms-transition: all .5s ease;
    transition: all .5s ease;
    -webkit-transition-delay: .5s;
    -moz-transition-delay: .5s;
    -o-transition-delay: .5s;
    -ms-transition-delay: .5s;
    transition-delay: .5s;
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    transform: rotate(360deg);
	    text-align: center;
}

figcaption.w3layouts-caption h3 {
      font-weight: 400;
    font-size: 1.8em;
    color: #fff;
    text-transform: uppercase;
    padding: 10px 0px;
    margin-bottom: 0;
    background: #111;
    position: relative;
    left: 100%;
    margin-top: 110px;
    -webkit-transition: all .5s;
    -moz-transition: all .5s;
    -o-transition: all .5s;
    -ms-transition: all .5s;
    transition: all .5s;
    -webkit-transition-delay: 1s;
    -moz-transition-delay: 1s;
    -o-transition-delay: 1s;
    -ms-transition-delay: 1s;
    transition-delay: 1s;
}

figcaption.w3layouts-caption p {
    padding: 10px 0px;
    margin-bottom: 0;
    position: relative;
    left: 100%;
        font-size: 0.85em;
    line-height: 2em;
    -webkit-transition: all .5s;
    -moz-transition: all .5s;
    -o-transition: all .5s;
    -ms-transition: all .5s;
    transition: all .5s;
    -webkit-transition-delay: 1.3s;
    -moz-transition-delay: 1.3s;
    -o-transition-delay: 1.3s;
    -ms-transition-delay: 1.3s;
    transition-delay: 1.3s;
}

figure.w3ls-gallery:hover h3,figure.w3ls-gallery:hover p {
    left: 0;
}

figcaption.w3layouts-caption a {
    color: #fff;
    border: 2px solid #fff;
    padding: 4px 0px;
    text-decoration: none;
}

figcaption.w3layouts-caption:hover {
    color: #4f5856;
}
.gallery {
    padding: 6em 0;
}
.ga-top{
	margin-bottom:3em;
}

.filtr-item {
    padding: 0em;
   width: 24.8%;
    float: left;
}
.filtr-container {
	width:90%;
	margin:30px auto;
}
.item-desc {
    background-color: rgba(0,0,0,0.5);
    color: white;
    position: absolute;
    text-transform: uppercase;
    text-align: center;
    z-index: 1;
}
/* Filter controls */
.simplefilter li, .multifilter li, .sortandshuffle li {
    color: #000;
    cursor: pointer;
    display: inline-block;
    padding: 10px 20px;
    font-size: 15px;
    font-weight: 500;
    letter-spacing: 1px;
    margin: 0 12px;
    text-transform: uppercase;
    border: none;
    background: none;
    border-bottom: 5px solid #fff;
}
.simplefilter li {
    border: none;
    background: none;
	position:relative;
	border: 1px solid #000;
	transition:0.5s all;
	-webkit-transition:0.5s all;
	-moz-transition:0.5s all;
	-ms-transition:0.5s all;
	-o-transition:0.5s all;
	letter-spacing: 2px;
}
.simplefilter li:before{
    content: '';
    position: absolute;
    top: 19px;
    background: #fff;
    height: 1px;
    width: 10px;
    right: -12px;
    -webkit-transition: .5s all;
    -moz-transition: .5s all;
    transition: .5s all;
    -webkit-transform: rotate(-64deg);
    -moz-transform: rotate(-64deg);
    -o-transform: rotate(-64deg);
    -ms-transform: rotate(-64deg);
    transform: rotate(-180deg);
}
.simplefilter li:last-child:before {
	content: '';
    position: absolute;
    top: 19px;
    background: #fff;
    height: 1px;
    width: 10px;
    right: -12px;
    -webkit-transition: .5s all;
    -moz-transition: .5s all;
    transition: .5s all;
    -webkit-transform: rotate(-64deg);
    -moz-transform: rotate(-64deg);
    -o-transform: rotate(-64deg);
    -ms-transform: rotate(-64deg);
    transform: rotate(-180deg);
}
.simplefilter li.active,.simplefilter li:hover {
    background: #ce7501;
    color: #fff;
    border: 1px solid #ce7501;
	transition:0.5s all;
	-webkit-transition:0.5s all;
	-moz-transition:0.5s all;
	-ms-transition:0.5s all;
	-o-transition:0.5s all;
}
</style>


