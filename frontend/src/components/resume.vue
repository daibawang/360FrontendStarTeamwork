<template>
  <div id="resume">
    <header :class="ishidden">
      <a href="javascript:;" :class="active == '#com1' ? 'active' : ''" @click="toTarget('#com1')">个人介绍</a>
      <a href="javascript:;"  :class="active == '#com2' ? 'active' : ''"  @click="toTarget('#com2')">工作经历</a>
      <a href="javascript:;"  :class="active == '#com3' ? 'active' : ''"  @click="toTarget('#com3')">奖项成就</a>
      <a href="javascript:;"  :class="active == '#com4' ? 'active' : ''"  @click="toTarget('#com4')">项目经历</a>
      <!-- <a href="javascript:;"  :class="active == '#com5' ? 'active' : ''"  @click="toTarget('#com5')">加入我们</a> -->
    </header>
    <div class="frame-view">
          <div class="frame">
            <div class="center">
                <ul :class="barcontainer + fold + cross"  @click="toogleActive">
                    <li class="top"></li>
                    <li class="mid"></li>
                    <li class="bottom"></li>
                </ul>
            </div>
          </div>
    </div>
      <Con1 id="com1"></Con1>
      <Con2 id="com2"></Con2>
      <Con3 id="com3"></Con3>
      <Con4 id="com4"></Con4>
      <!-- <Con5 id="com5"></Con5> -->
  </div>
</template>
<script>
import Con1 from './component1'
import Con2 from './component2'
import Con3 from './component3'
import Con4 from './component4'
// import Con5 from './component5'
export default {
    name: 'Resume',
    components:{
        Con1,
        Con2,
        Con3,
        Con4,
        // Con5
    },
    data(){
        return{
           barcontainer:'barcontainer',
           fold:' fold',
           cross:' cross',
           animTimer : null,
            hasChanged : false,
            gapTime : 300,
           ishidden:"",
           active: '#com1',
           scrollIntoViewOptions:{
             block: 'start',
             behavior: 'smooth'
           }
        }
    },
   mounted () {
    // 一次性计算赋值，减少滚动计算节点位置次数
    this.distance_com2 = document.querySelector('#com2').offsetTop - 60
    this.distance_com3 = document.querySelector('#com3').offsetTop - 60
    this.distance_com4 = document.querySelector('#com4').offsetTop - 60
    // this.distance_com5 = document.querySelector('#com5').offsetTop - 60
    var self = this
    this.$nextTick(function () {
      document.querySelector('#app').addEventListener('scroll', self.onScroll)
    })
  },
  methods: {
    toogleActive(){
      clearTimeout(this.animTimer);
      if(!this.hasChanged) {
        this.cross='';
        // $('.container').removeClass('cross');
        this.animTimer = setTimeout(() => {
          // $('.container').removeClass('fold');
        this.ishidden="headerhidden";
          this.fold='';
        }, this.gapTime)
      } else {
                // $('.container').addClass('fold');
        this.fold=' fold';
        this.animTimer = setTimeout(() => {
          // $('.container').addClass('cross');
        this.ishidden="";
        this.cross=' cross';
        }, this.gapTime)

      }
      this.hasChanged = !this.hasChanged;
    },
      toTarget(target){
        window.console.log(target)
        this.active = target
        let toElement = document.querySelector(target);
        window.console.log(toElement)
        toElement.scrollIntoView(this.scrollIntoViewOptions);
      },
      onScroll () {
        let scrolled = document.querySelector('#app').scrollTop
        if (scrolled < this.distance_com2) {
          this.active = "#com1"
        } else if (scrolled >= this.distance_com2 && scrolled < this.distance_com3) {
          this.active = "#com2"
        } else if (scrolled >= this.distance_com3 && scrolled < this.distance_com4) {
          this.active = "#com3"
        } else{
          this.active = "#com4"
        }
      }
  }
 
}
</script>
<style lang="less" scoped>
@import '../assets/css/style.css';
#resume {  //关键代码，需要给容器添加高度
  width: 100%;
  max-height: 100vh;
  overflow-y: scroll;
  background: #ffffff;
}
.headerhidden{
  display:none;
}
header{
  width: 100%;
  height: 60px;
  position: fixed; 
  top: 0px;
  left: 0px;
  z-index: 1;
  background: #fff;
  display: flex;
  display: -webkit-flex;
  justify-content: center;
  a{
    width: 200px;
    height: 60px;
    display: block;
    text-align: center;
    line-height: 60px;
    color: #333333;
    text-decoration: none;
    &:hover,&.active{
      color: dodgerblue;
    }
  }
}
.frame-view{
  position:fixed;
  top:0%;
  right:10%;
  z-index:2;
  // margin-top: 7px;
  // margin-top: -30px;
}

#com1{
  width: 100%;
}
#com2{
  width: 100%;
}
#com3{
  width: 100%;
}
#com4{
   width: 100%;
}

</style>


