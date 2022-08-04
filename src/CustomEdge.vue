<script setup>
import { getBezierPath, getEdgeCenter, useVueFlow } from '@braks/vue-flow'
import { computed } from 'vue'

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  sourceX: {
    type: Number,
    required: true,
  },
  sourceY: {
    type: Number,
    required: true,
  },
  targetX: {
    type: Number,
    required: true,
  },
  targetY: {
    type: Number,
    required: true,
  },
  sourcePosition: {
    type: String,
    required: true,
  },
  targetPosition: {
    type: String,
    required: true,
  },
  data: {
    type: Object,
    required: false,
  },
  markerEnd: {
    type: String,
    required: false,
  },
  style: {
    type: Object,
    required: false,
  },
  source: String, 
  target: String,
})

const { applyEdgeChanges, nodes, edges,addNodes,addEdges, setNodes, setEdges, dimensions, setTransform, toObject,project } = useVueFlow()


const foreignObjectSize = 40

const onClick = (evt, id) => {
  applyEdgeChanges([{ type: 'remove', id }])
  evt.stopPropagation()
}

const edgePath = computed(() =>
  getBezierPath({
    sourceX: props.sourceX,
    sourceY: props.sourceY,
    sourcePosition: props.sourcePosition,
    targetX: props.targetX,
    targetY: props.targetY,
    targetPosition: props.targetPosition,
  }),
)

const center = computed(() =>
  getEdgeCenter({
    sourceX: props.sourceX,
    sourceY: props.sourceY,
    targetX: props.targetX,
    targetY: props.targetY,
  }),
)

const AddAnchor = (event) =>{
  console.log("add anchor node")


  const id = nodes.value.length + 1
  const newNode = {
    id: `anchor-node-${id}`,
    type: 'anchor',
    position: project({ x: event.clientX - 20, y: event.clientY - 20}),
  }
  addNodes([newNode])
  const edgeid = edges.value.length + 1
  const newEdge1 = { id: `e1-split-${edgeid}`, source: props.source, target: `anchor-node-${id}`,type: 'custom' };
  const newEdge2 = { id: `e1-split-${edgeid + 1}`, source: `anchor-node-${id}`, target: props.target , type: 'custom'};
  addEdges([newEdge1, newEdge2]);
  applyEdgeChanges([{ type: 'remove', id: props.id}])
}

</script>

<script>
export default {
  inheritAttrs: false,
}
</script>

<template>
  <path :id="id" :style="style" class="vue-flow__edge-path" :d="edgePath" :marker-end="markerEnd" @dblclick="AddAnchor($event)"/>
  <!--<foreignObject
    :width="foreignObjectSize"
    :height="foreignObjectSize"
    :x="center[0] - foreignObjectSize / 2"
    :y="center[1] - foreignObjectSize / 2"
    class="edgebutton-foreignobject"
    requiredExtensions="http://www.w3.org/1999/xhtml"
  >
    <body style="display: flex; align-items: center; justify-content: center" @dblclick="AddAnchor($event)">
      <div>
        <button ref="btn" class="edgebutton" @click="(event) => onClick(event, id)">×</button>
      </div>
    </body>
  </foreignObject>-->
</template>
<style>
.vue-flow__edge-path{
  stroke-width: 4px;
}

</style>