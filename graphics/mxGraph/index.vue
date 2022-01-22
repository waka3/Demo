<template>

  <div
    ref="container"
    class="graphContainer"
  />
</template>

<script>
/* eslint-disable space-before-function-paren */

import {
  mxToolbar as MxToolbar,
  mxGraphModel as MxGraphModel,
  mxGraph as MxGraph,
  mxCell as MxCell,
  mxGeometry as MxGeometry,
  mxEvent as MxEvent,
  mxUtils as MxUtils
} from 'mxgraph/javascript/mxClient'
import methods from './methods'
import utils from './utils'
export default {
  name: 'mxgraph',
  mixins: [methods, utils],
  props: {
    toolBarIcon: {
      type: Array,
      default: () => []
    },
    graphData: {
      type: Array,
      default: () => []
    },
    rules: {
      type: Function,
      default: () => true
    },
    graphEdit:{
      type:Boolean,
      default:false
    }
  },
  data () {
    return {
      model: null,
      graph: null,
      mxgraphData: []
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.initGraph()
      this.initToolbar()
      this.initGraphdata()// 初始化图形
      this.initEdgeTo()
      this.setInitFun()
    })
  },
  methods: {
    initGraphdata () {
      const parent = this.graph.getDefaultParent()
      this.graph.getModel().beginUpdate()
      try {
        this.graphData.forEach(v => {
          if (!v.to) {
            v.to = []
          }
          const value = v.value ? v.value : ''
          const x = v.x ? v.x : 100
          const y = v.y ? v.y : 100
          const width = v.width ? v.width : 100
          const height = v.height ? v.height : 100
          const style = v.height ? v.styleOptions : ''
          const id = v.id || null
          const verter = this.graph.insertVertex(parent, id, value, x, y, width, height, this.convertStyleToString(style))
          verter.options = Object.keys(v.options).length > 0 ? v.options : {}
          verter.to = v.to.length > 0 ? v.to : []
          verter.styleOptions = v.styleOptions || {}
        })
        // const isHaveTo = this.graphData.some(v => v.to.length > 0)
        // const cells = this.getAllCell()// 所有的图形
        // this.$emit('initCell', cells)
      } finally {
        this.graph.getModel().endUpdate()
      }
    },
    initEdgeTo () {
      const cells = this.getAllCell()// 所有的图形
      const isHaveTo = cells.some(v => v.to.length > 0)
      if (isHaveTo) {
        cells.forEach(v => {
          const arrTarget = v.to
          const source = this.findCell(v.id)
          if (arrTarget instanceof Array && arrTarget.length > 0) {
            arrTarget.forEach(s => {
              const target = this.findCell(s.id)
              const text = s.text
              const style = s.style ? this.convertStyleToString(s.style) : ''
              if (!source || !target) {
                return
              }
              this.graph.insertEdge(this.parent, null, text, source, target, style)
            })
          }
        })
      }
    },
    // this.addToolbarItem(this.graph, toolbar, vertex, icon)
    addToolbarItem (graph, toolbar, prototype, image, v) {
      const funct = (graph, evt, cell, x, y) => {
        const vertex = graph.getModel().cloneCell(prototype)
        vertex.geometry.x = x
        vertex.geometry.y = y
        graph.addCell(vertex)
        // const obj = this.getAddObj(vertex)
        // this.mxgraphData.push(obj)
        graph.setSelectionCell(vertex)
      }
      const img = toolbar.addMode(null, image)
      img.style.display = 'inline-block'
      img.style.marginRight = '5px'
      img.width = 16
      img.height = 16
      MxEvent.addListener(img, 'mousedown', (evt) => {
        if (v.type === 'click') {
          this.$emit('clickToolBar', v)
        }
      })
      if (v.type === 'draggble') {
        MxUtils.makeDraggable(img, graph, funct)
      }
    },
    initGraph () {
      this.graph = new MxGraph(this.$refs.container)
      this.$refs.container.style.background = 'url(' + require('./images/grid.gif') + ')'
      this.graph.setConnectable(true)
      this.graph.stopEditing(false)
      this.graph.setAllowDanglingEdges(false)
      // this.graph.setResizeContainer(true); // 容器大小自适应
      // this.graph.setMultigraph(false);
      this.graph.setHtmlLabels(true); // Label 将显示 Html 格式的 Value 设置换行。
      this.graph.setAllowLoops(false)
      // 下面设置是为了展示用的，用户不能更改功能。
      if(!this.graphEdit){
        this.graph.setCellsEditable(false) // 文字不能编辑
        this.graph.setConnectable(false) // Cell 是否可连线
        this.graph.setCellsLocked(true);// 是否可以移动连线，重新连接其他cell，主要用来展现中用
      }
    },
    initToolbar () {
      if (this.toolBarIcon.length === 0 || !this.graphEdit) {
        return
      }
      const tbContainer = document.createElement('div')
      tbContainer.style.position = 'absolute'
      tbContainer.style.overflow = 'hidden'
      tbContainer.style.padding = '4px'
      tbContainer.style.left = '0px'
      tbContainer.style.top = '-25px'
      tbContainer.style.width = 100 + '%'
      tbContainer.style.height = '24px'
      tbContainer.style.bottom = '0px'
      tbContainer.style.background = '#FBFBFB'
      this.$refs.container.appendChild(tbContainer)
      // 创建一个mxToolbar
      const toolbar = new MxToolbar(tbContainer)
      const addVertex = (icon, value, w, h, style, options, type) => {
        const vertex = new MxCell(value, new MxGeometry(0, 0, w, h), style)
        vertex.options = options || {}
        vertex.to = []
        vertex.styleOptions = type.styleOptions || {}
        vertex.setVertex(true)
        this.addToolbarItem(this.graph, toolbar, vertex, icon, type)
      }
      this.toolBarIcon.forEach(v => {
        const style = v.styleOptions ? this.convertStyleToString(v.styleOptions) : ''
        // console.log(style)
        addVertex(v.iconSrc, v.value, v.width, v.height, style, v.options, v)
        // if (v.type === 'draggble') {
        //   addVertex(v.iconSrc, v.value, v.width, v.height, style, v.options, v.type)
        // } else {
        //   console.log('asd')
        //   // this.$emit("click")
        // }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.graphContainer {
  width: 100%;
  height: 100%;
}
</style>
