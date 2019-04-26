<template>
    <div class="resume">
    <transition
      :duration="{ enter: 2500, leave: 1500 }"
      :leave-active-class="'animated ' + leaveanimate"
      :enter-active-class="'animated ' + enteranimate">
      <div class="section" :style="{height: `${clientHeight}`}" v-if="init === 1">
        <div class="sec">
          <Con1></Con1>
        </div>
      </div>
    </transition>
    <transition
      :duration="{ enter: 2500, leave: 1500 }"
      :leave-active-class="'animated ' + leaveanimate"
      :enter-active-class="'animated ' + enteranimate">
      <div class="section" :style="{height: `${clientHeight}`}" v-if="init === 2">
        <div class="sec">
          <Con2></Con2>
        </div>
      </div>
    </transition>
    <transition
      :duration="{ enter: 1500, leave: 1500 }"
      :leave-active-class="'animated ' + leaveanimate"
      :enter-active-class="'animated ' + enteranimate">
      <div class="section" :style="{height: `${clientHeight}`}" v-if="init === 3">
        <div class="sec">
          <Con3></Con3>
        </div>
      </div>
    </transition>
    <transition
      :duration="{ enter: 1500, leave: 1500 }"
      :leave-active-class="'animated ' + leaveanimate"
      :enter-active-class="'animated ' + enteranimate">
      <div class="section" :style="{height: `${clientHeight}`}" v-if="init === 4">
        <div class="sec">
          <Con4></Con4>
        </div>
      </div>
    </transition>
    <!-- 下方的下一页按钮 -->
    <div class="next"><i class="iconfont icon-xiala setarrow" @click="nextPage"></i></div>
  </div>
</template>
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
}
</script>

<style lang="less" scoped>

</style>

