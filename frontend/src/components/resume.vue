<template>
  <div id="resume">
    <header>
      <a href="javascript:;" :class="active == '#com1' ? 'active' : ''" @click="toTarget('#com1')">首页</a>
      <a href="javascript:;"  :class="active == '#com2' ? 'active' : ''"  @click="toTarget('#com2')">团队</a>
      <a href="javascript:;"  :class="active == '#com3' ? 'active' : ''"  @click="toTarget('#com3')">联系</a>
      <a href="javascript:;"  :class="active == '#com4' ? 'active' : ''"  @click="toTarget('#com4')">加入我们</a>
      <a href="javascript:;"  :class="active == '#com5' ? 'active' : ''"  @click="toTarget('#com5')">加入我们</a>
          <div class="frame">
            <div class="center">
                <ul :class="barcontainer +fold +cross"  @click="toogleActive">
                    <li class="top"></li>
                    <li class="mid"></li>
                    <li class="bottom"></li>
                </ul>
            </div>
          </div>
    </header>
      <Con1 id="com1"></Con1>
      <Con2 id="com2"></Con2>
      <Con3 id="com3"></Con3>
      <Con4 id="com4"></Con4>
      <Con5 id="com5"></Con5>
  </div>
</template>
<script src="./assets/js/jquery.min.js"></script>
<script>
import Con1 from './component1'
import Con2 from './component2'
import Con3 from './component3'
import Con4 from './component4'
import Con5 from './component5'
export default {
    name: 'Resume',
    components:{
        Con1,
        Con2,
        Con3,
        Con4,
        Con5
    },
    data(){
        return{
           barcontainer:'barcontainer',
           animTimer : null,
            hasChanged : false,
            gapTime : 300,
           fold:'',
           cross:'',
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
    this.distance_com5 = document.querySelector('#com5').offsetTop - 60
    var self = this
    this.$nextTick(function () {
      document.querySelector('#app').addEventListener('scroll', self.onScroll)
    })
  },
  methods: {
    toogleActive(){
      clearTimeout(this.animTimer);
      if(!this.hasChanged) {
        // $('.container').addClass('fold');
        this.fold=' fold';
        this.animTimer = setTimeout(() => {
          // $('.container').addClass('cross');
        this.cross=' cross';
        }, this.gapTime)
      } else {
        this.cross='';
        // $('.container').removeClass('cross');
        this.animTimer = setTimeout(() => {
          // $('.container').removeClass('fold');
          this.fold='';
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
        } else if (scrolled >= this.distance_com4 && scrolled < this.distance_com5){
          this.active = "#com4"
        }else{
          this.active = "#com5"
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
  background: #f1f1f1;
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
#com2,#com3,#com4,#com5{
  width: 100%;
  height: 500px;
  color: #FFFF;
  font-size: 30px;
  text-align: center;
  line-height: 500px;
}
#com1{
  width: 100%;
}
#com2{
  background: deepskyblue;
}
#com3{
  background: orange;
}
#com4{
  background: lightgreen;
}
#com5{
  background: lightblue; 
}
</style>


