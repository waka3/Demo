/* eslint-disable semi */
/* eslint-disable indent */
/* eslint-disable new-cap */
// 主要处理工具函数
export default {
  mounted() {
    // this.setKeyHandler()
  },
  methods: {
    convertStyleToString(styleDict) {
      // 把对象转成字符{strokeColor:color} => strokeColor=color;
      const style = Object.entries(styleDict)
        .map(([key, value]) => `${key}=${value}`)
        .join(';');
      return `${style};`;
    },
    // 获取id为cell的元素
    findCell(id) {
      const cells = this.graph.getChildVertices(this.graph.getDefaultParent());
      const cell = cells.find(v => v.id === id);
      return cell;
    },
    // 获取所有的图形
    getAllCell() {
      const cells = this.graph.getChildVertices(this.graph.getDefaultParent());
      return cells;
    },
    // 获取grapthData
    getGrapthData() {
      const newGraphData = [];
      const currentCell = this.getAllCell();
      currentCell.forEach(v => {
        const obj = this.getAddObj(v);
        newGraphData.push(obj);
      });
      return newGraphData;
    },
    // 删除图形的方法
    delAllCell(sourceCell, cell) {
      sourceCell.forEach(v => {
        cell.forEach(s => {
          const index = s.to.findIndex(q => q.id === v.id);
          if (index >= 0) {
            s.to.splice(index, 1);
          }
        });
      });
    },
    // 删除线条的方法
    delAllEdge(cell) {
      cell.forEach(v => {
        if (v.edge) {
          const targetId = v.target.id;
          const source = v.source;
          const index = source.to.findIndex(s => s.id === targetId);
          if (index >= 0) {
            source.to.splice(index, 1);
          }
        }
      });
    },
    // 删除后处理图形的to数组
    removeChange(cell) {
      const sourceCell = this.getAllCell();
      const isAllCell = cell.every(v => v.vertex);
      const isAllEdge = cell.every(v => v.edge);
      if (sourceCell.length > 0) {
        if (isAllCell) {
          // 处理选择到是cell的情况
          this.delAllCell(cell, sourceCell);
        } else if (isAllEdge) {
          // 处理选择到全是edge的情况
          this.delAllEdge(cell);
        } else {
          // 有一些是edge和cell的情况
          const edgeArr = cell.filter(v => v.edge);
          const cellArr = cell.filter(v => v.vertex);
          const sameEdge = edgeArr.filter(v =>
            cellArr.some(s => s.id === v.target.id)
          );
          const relationCell = cellArr.filter(v =>
            sameEdge.some(s => s.target.id === v.id)
          );
          let currenDelCell;
          if (relationCell.length > 0) {
            currenDelCell = cellArr.filter(v =>
              relationCell.some(s => s.id !== v.id)
            );
          } else {
            currenDelCell = cellArr;
          }
          this.delAllEdge(edgeArr);
          this.delAllCell(currenDelCell, sourceCell);
        }
      }
    },
    // 处理连线向to数据添加数据
    handleConnect(edge, source, target) {
      const tId = target.id;
      const sourceTo = source.to;
      if (sourceTo.includes(tId)) {
        return
      }
      sourceTo.push({
        id: tId,
        style: edge.style
      })
    },
    getAddObj(vertex) {
      const {
        id,
        options,
        style,
        to,
        value,
        styleOptions
      } = vertex;
      const {
        x,
        y,
        width,
        height
      } = vertex.geometry;
      return Object.assign({
        id,
        options,
        style,
        to,
        value,
        styleOptions
      }, {
        x,
        y,
        width,
        height

      });
    }
  }
};
