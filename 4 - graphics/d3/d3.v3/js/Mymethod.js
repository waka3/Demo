//常用方法JS
//对任何数据的数据格式不明确请console.log()查看
//实在不明确的地方联系我：QQ372067288
var resctrion = { 'time': [], "hos": [], "pog": [], "med": [], "pos": [] };

var Mymethod = {
  /**
   * 查找ID是否已被插入过列表中
   * @param {Liat} a 
   * @param {int} id 
   * @returns boolean
   */
  idIndex: function (a, id) {
    for (var i = 0; i < a.length; i++) {
      if (a[i].id == id)
        return i;
    }
    return null;
  },


  DataHandler: function (Odata) {
    var nodes = [], links = [];
    // console.log(tempdata.results[0].data[0].graph);
    Odata.results[0].data.forEach(function (v) {
      v.graph.nodes.forEach(element => {
        if (Mymethod.idIndex(nodes, element.id) == null) {
          var tempnode = {};
          tempnode.id = element.id;
          tempnode.type = element.labels[0];
          tempnode.properties = element.properties;
          nodes.push(tempnode);
        }
      });
      // var tempnode={};
      // tempnode.id = ;
      v.graph.relationships.forEach(element => {
        // console.log(element);
        if (element.startNode != element.endNode) {
          var templinks = {};
          templinks.source = Mymethod.idIndex(nodes, element.startNode);
          templinks.target = Mymethod.idIndex(nodes, element.endNode);
          // templinks.properties = element.properties;
          links.push(templinks);
        }

      });
    });
    Mymethod.draw_mapByD3(nodes, links);
  },

  /**
   * 根据处理获得数据并绘制
   * @param {String} Cypherquery 
   */
  getData: function (data, p) {
    // var data;//存放根据Cypherquery得到的数据
    // data=Mymethod.postCypher(Cypherquery);
    var nodes = [], links = [];//结点和连线数组
    //处理获得的数据
    $.each(data.results[0].data, function (k, v) {
      var newjson;
      $.each(v.graph.nodes, function (k2, v2) {
        newjson = '{';
        if (v2.id < 0) v2.id *= -1;
        if (Mymethod.idIndex(nodes, v2.id) == null) {
          $.each(v2.properties, function (k3, v3) {
            var temp = "";
            temp += v3;
            temp = temp.replace(/[\"]/g, "");
            newjson += '\"' + k3 + '\":\"' + temp + '\",';
          });
          var temp;
          newjson = newjson.substring(0, newjson.length - 1);
          newjson += '}';
          newjson = newjson.replace(/[\b\f\n\r\t\\]/g, ""); //删除转义字符否则会出错
          temp = JSON.parse(newjson);                       //转为JSON格式
          temp.id = v2.id;
          temp.type = v2.labels[0];
          nodes.push(temp);
        }
      });
      $.each(v.graph.relationships, function (k2, v2) {
        var temp = {};
        // console.log(v2);
        if (v2.startNode != v2.endNode) {
          temp.source = Mymethod.idIndex(nodes, -1 * v2.startNode);
          temp.target = Mymethod.idIndex(nodes, -1 * v2.endNode);
          links.push(temp);
        }

      });
    });
    if (p == 1) Mymethod.draw_mapByD3(nodes, links);           //直接在图中绘制

    // return nodes;
  },

  /**
   *  以D3绘图
   *  传入节点以及连线数组
   * @param {List} nodes 
   * @param {List} edges 
   */
  draw_mapByD3: function (nodes, edges) {
    // console.log(resctrion);
    var colorList = ["#0066CC", "#FF6666", "#FFCC33", "#99CC66", "#FF6600", "#CC6699", "#FFCCCC", "#999999"]; //颜色数组
    Mymethod.clear_recode();                     //先上次清除记录
    var width = 2000;                            //长度
    var height = 700;                            //高度
    var temp_type = [];                          //存储该图的节点种类
    var type_propertis = {};
    const r = 10;                                // 节点半径
    //获取结点种数据
    for (var i = 0; i < nodes.length; i++) {
      if (Mymethod.typeIndex(temp_type, nodes[i].type) == null) {
        temp_type.push(nodes[i].type);
      }
    }
    //节点种类图
    for (var i = 0; i < temp_type.length; i++) {
      var tempid = [];
      //包含的结点类型
      $('#graphnav').append('<div class="btn btn-sm btn-primary" style="' +
        'color:black;background-color:' + colorList[i] +
        ';margin-right:5px;" id="con-' + temp_type[i] + '" value=' + temp_type[i] + '>' + temp_type[i] + '</div>');
      //找到对应结点所有的下标并存起来
      $("#startnode,#endnode").append("<option>" + temp_type[i] + "</option>");
      for (var j = 0; j < nodes.length; j++) {
        if (nodes[j].type == temp_type[i]) tempid.push(j);
      }
      // nodesid[temp_type[i]]=tempid;
    }


    //缩放功能
    var zoom = d3.behavior.zoom().scaleExtent([0.5, 2]).on("zoom", zoomed);
    function zoomed() {
      svg.attr("transform",
        "translate(" + zoom.translate() + ")" +
        "scale(" + zoom.scale() + ")"
      );
    }

    //SVG图绘于图底
    var svg = d3.select("#graphByD3")
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      //.attr("preserveAspectRatio","xMidYMid meet")
      //.attr("viewBox","0 0 400 400")
      .append("g")
      .call(zoom)
      .on('dblclick.zoom', null)
      .append("g");

    //添加Rect控制缩放拖拽
    svg.append("rect")
      .attr("class", "overlay")
      .attr("width", width)
      .attr("fill", '#FFF')
      .attr("height", height);

    //指定力布局的相关参数
    var force = d3.layout.force()
      .nodes(nodes) //指定节点数组
      .links(edges) //指定连线数组
      .size([width, height]) //指定范围
      .linkDistance(100) //指定连线长度
      .charge(-150); //相互之间的作用力
    force.start(); //开始作用

    //添加拖拽功能
    var drag = force.drag()
      .on("dragstart", function (d, i) {
        d3.event.sourceEvent.stopPropagation(); //暂时清除其他监听器的干扰
        d.fixed = true; //拖拽开始后设定被拖拽对象为固定
      });

    //添加连线    
    var svg_edges = svg.selectAll("line")
      .data(edges)
      .enter()
      .append("line")
      // .attr("marker-end", "url(#resolved)") //根据箭头标记的id号标记箭头
      .style("stroke", "#808080")
      .style("stroke-width", 1);

    //箭头
    var marker = svg.append("marker")
      .attr("id", "resolved")
      .attr("markerUnits", "strokeWidth") //设置为strokeWidth箭头会随着线的粗细发生变化
      .attr("markerUnits", "userSpaceOnUse")
      .attr("viewBox", "0 0 12 12") //坐标系的区域
      .attr("refX", 19) //箭头坐标
      .attr("refY", 6)
      .attr("markerWidth", 12) //标识的大小
      .attr("markerHeight", 12)
      .attr("orient", "auto") //绘制方向，可设定为：auto（自动确认方向）和 角度值
      .attr("stroke-width", 2) //箭头宽度
      .append("path")
      .attr("d", "M2,2 L10,6 L2,10 L6,6 L2,2") //箭头的路径
      .attr('fill', '#000000'); //箭头颜色

    //添加节点      
    var svg_nodes = svg.selectAll("circle")
      .data(nodes)
      .enter()
      .append("circle")
      //结点大小
      .attr("r", function (d) {
        return r;
      })

      //结点颜色
      .style("fill", function (d, i) {
        for (var j = 0; j < temp_type.length; j++) {
          if (d.type == temp_type[j]) {
            return colorList[j];
          }
        }
      })
      //点击方法
      .on("click", function (d, i) {
        console.log(d);
        console.log('click:' + i);
        update(i);
      })
      .call(drag); //使得节点能够拖动

    //显示或隐藏描述结点的文字
    var flagText = true;
    $("#clear_graph_text").on("click", function () {
      if (flagText) {
        var svg_texts = svg.selectAll("text")
          .style("display", "none");
      } else {
        var svg_texts = svg.selectAll("text")
          .style("display", "block");
      }
      flagText = !flagText;
    });

    //添加描述节点的文字
    var svg_texts = svg.selectAll("text")
      .data(nodes)
      .enter()
      .append("text")
      .style("fill", "black")
      .style("display", "block")
      .attr("dx", 10)
      .attr("dy", 4)
      .text(function (d) {
        return d.type;
      });
    var svg_textsdd = svg.selectAll("text")
      .style("display", "none");
    //持续更新
    force.on("tick", function (d) { //对于每一个时间间隔
      //更新连线坐标
      svg_edges.attr("x1", function (d) {
        var distance = Math.sqrt((d.target.y - d.source.y) * (d.target.y - d.source.y) +
          (d.target.x - d.source.x) * (d.target.x - d.source.x));
        var x_distance = (d.target.x - d.source.x) / distance * r;
        return d.source.x + x_distance;
      }).attr("y1", function (d) {
        var distance = Math.sqrt((d.target.y - d.source.y) * (d.target.y - d.source.y) + (d.target.x - d.source.x) * (d.target.x - d.source.x));
        var y_distance = (d.target.y - d.source.y) / distance * r;
        return d.source.y + y_distance;
      }).attr("x2", function (d) {
        var distance = Math.sqrt((d.target.y - d.source.y) * (d.target.y - d.source.y) +
          (d.target.x - d.source.x) * (d.target.x - d.source.x));
        var x_distance = (d.target.x - d.source.x) / distance * r;
        return d.target.x - x_distance;
      }).attr("y2", function (d) {
        var distance = Math.sqrt((d.target.y - d.source.y) * (d.target.y - d.source.y) +
          (d.target.x - d.source.x) * (d.target.x - d.source.x));
        var y_distance = (d.target.y - d.source.y) / distance * r;
        return d.target.y - y_distance;
      });

      //更新节点坐标
      svg_nodes.attr("cx", function (d) {
        return d.x;
      })
        .attr("cy", function (d) {
          return d.y;
        });

      //更新文字坐标
      svg_texts.attr("x", function (d) {
        return d.x;
      })
        .attr("y", function (d) {
          return d.y;
        });
    });
    var colorIndex = 8;
    var color = d3.scale.category20();
    function update(i) {
      nodes.push({ 'name': 'xxx' });
      edges.push({ 'source': i, 'target': nodes.length - 1 });

      svg_edges = svg_edges.data(force.links());

      svg_edges.enter()
        .append("line")
        .style("stroke", "#ccc")
        .style("stroke-width", 2);

      svg_edges.exit().remove();

      svg_nodes = svg_nodes.data(force.nodes());
      svg_nodes.enter().append("circle")
        .attr("r", r)
        .style("fill", color(colorIndex++))
        .call(force.drag);

      svg_nodes.exit().remove();
      force.start();
    }
  },

  // //回车事件
  // $(document).keydown(function(e) {
  //     if(e.which == 13) {
  //        update();
  //     }
  // });
  /**
   * 清除图中历史记录
   * 
   */
  clear_recode: function () {
    $('#graphnav').html('');
    $('#graphByD3').html('');
    // Mymethod.clear_resctrion();
  },

  /**
   * 计算该种类是否被插入
   * 
   * @param {any} a 
   * @param {any} temp 
   * @returns boolean
   */
  typeIndex: function (a, temp) {
    for (var i = 0; i < a.length; i++) {
      if (a[i] == temp) return i;
    }
    return null;
  },
}