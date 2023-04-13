<script setup>
import { onMounted, ref, reactive } from 'vue'
// import Konva from 'konva';

import Obj from '../assets/test.json'

// const width = window.innerWidth
// const height = window.innerHeight

const configKonva = {
  x: 24,
  y: 0,
  width: 325,
  height: 577,
}

const bgImage = Obj.style.backgroundImage
console.log('bgImage', bgImage)

const list = Obj.components
let components = []
const state = reactive({
  components: []
})
const initData = async () => {
  for (let i = 0, length = list.length; i < length; i++) {
    const item = list[i]
    let obj = null
    if (item.category == 'text') {
      obj = {
        type: item.category,
        text: item.content.text,
        name: 'test' + item.box.zIndex,
        x: item.box.left,
        y: item.box.top,
        align: item.style.textAlign,
        verticalAlign: item.style.justifyContent == 'center' ? 'middle' : item.style.justifyContent,
        fill: item.style.color,
        ...item.style,
        ...item.box,
        draggable: true,
      }

    } else if (item.category == 'widget') {
      const imageObj = new Image();
      console.log('1111', item.content.url)
      imageObj.src = item.content.url
      obj = {
        type: item.category,
        zIndex: item.box.zIndex,
        name: 'test' + item.box.zIndex,
        x: item.box.left,
        y: item.box.top,
        width: item.box.width,
        rotate: item.box.rotate,
        draggable: true,
        image: imageObj,
      }

      await loadImage(item.content.url).then(darthNode => {
        const naturalHeight = darthNode.height
        const naturalWidth = darthNode.width
        const height = item.box.width / naturalWidth * naturalHeight
        obj.image = imageObj
        obj.height = Number(height.toFixed(2))
      })
    }
    components.push(obj)

  }
  components.sort((a, b) => { return a.zIndex - b.zIndex })
  state.components = components
  console.log('components', components)
}




const loadImage = (url) => {
  return new Promise((resolve, reject) => {
    const imageObj = new Image();
    imageObj.src = url
    imageObj.onload = () => resolve(imageObj)
    imageObj.onerror = () => reject('失败')

  })
}

const printComponnetsData = () => {
  console.log('111', state.components, stage.value.getStage().toJSON())
}


const configTransformer = {
  centeredScaling: true,
  padding: 5,
  rotateAnchorOffset: 50, // 旋转锚距
  // resizeEnabled: false, //是否可以缩放
  // enabledAnchors: ['top-left', 'top-right', 'bottom-left', 'bottom-right']
  // anchorFill: 'red' // 锚点颜色
}


let selectedShapeName = ''
const transformer = ref(null);
const stage = ref(null);
const handleTransformEnd = (e) => {
  console.log('e', e.target)
  // shape is transformed, let us save new attrs back to the node
  // let rect = null
  // if (selectedShapeName == 'text1') {
  //   rect = configText
  // } else {
  //   rect = configImage7
  // }
  const rect = state.components.find(
    (r) => r.name === selectedShapeName
  );
  console.log('rect', rect)
  // update the state
  rect.x = e.target.x();
  rect.y = e.target.y();
  rect.rotation = e.target.rotation();
  rect.scaleX = e.target.scaleX();
  rect.scaleY = e.target.scaleY();

  // change fill
  // rect.fill = Konva.Util.getRandomColor();
}

const handleStageMouseDown = (e) => {
  // clicked on stage - clear selection
  console.log('handleStageMouseDown', e)
  if (e.target === e.target.getStage()) {
    selectedShapeName = '';
    updateTransformer();
    return;
  }

  // clicked on transformer - do nothing
  const clickedOnTransformer =
    e.target.getParent().className === 'Transformer';
  if (clickedOnTransformer) {
    return;
  }

  // find clicked rect by its name
  const name = e.target.name();
  console.log('name', name)
  selectedShapeName = name;

  updateTransformer();
}

const updateTransformer = () => {
  // here we need to manually attach or detach Transformer node
  const transformerNode = transformer.value.getNode();
  const stage = transformerNode.getStage();


  const selectedNode = stage.findOne('.' + selectedShapeName);

  // do nothing if selected node is already attached
  if (selectedNode === transformerNode.node()) {
    return;
  }

  if (selectedNode) {
    // attach to another node
    transformerNode.nodes([selectedNode]);
  } else {
    // remove transformer
    transformerNode.nodes([]);
  }
}
initData()
onMounted(() => {
  console.log('transformer', transformer.value.getNode().getStage())
})


</script>

<template>
  <div class="page-body" :style="`background-image: url(${bgImage})`">
    <v-stage ref="stage" :config="configKonva" @mousedown="handleStageMouseDown" @touchstart="handleStageMouseDown">
      <v-layer>
        <v-group v-for="item in state.components" :key="item.name">
          <v-text v-if="item.type == 'text'" :config="item" @transformend="handleTransformEnd"></v-text>
          <v-image v-else-if="item.type == 'widget'" :config="item" @transformend="handleTransformEnd"></v-image>
        </v-group>
        <v-transformer ref="transformer" :config="configTransformer" />
      </v-layer>
    </v-stage>

    <button @click="printComponnetsData">打印数据</button>
  </div>
</template>

<style lang="scss" scoped>
.page-body {
  width: 100vw;
  height: 100vh;
  // background-image: url(https://d.kuaipianer.com/template/tyf0Ok/1673776906417/url/1669124517727-lt.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
</style>
