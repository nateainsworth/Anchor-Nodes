<script setup>
import { Handle, Position, useVueFlow } from '@braks/vue-flow'
import { computed } from 'vue'

const props = defineProps({
  data: {
    angle: Number,
  }
})

let positionA, positionB;

const { applyEdgeChanges, nodes, edges,addNodes,addEdges, setNodes, setEdges, dimensions, setTransform, onNodesChange } = useVueFlow()

onNodesChange((e) => {
console.log(props.data.angle);
console.log("nodes changed");
})

const onConnect = (params) => console.log('handle onConnect', params, )

const onSelect = (color) => {
  //emit('change', color)
}


</script>

<template>
  <div class="Anchor">
  <Handle id="a" type="target" class="anchor-handle anchor-handle-a" :position="Position.Left"/>
  <Handle id="b" type="source" class="anchor-handle anchor-handle-b" :position="Position.Right"/>
  </div>
</template>

<style>
.Anchor{
  width: 20px;
  height: 20px;
  border: 2px solid rgba(0,0,0,0);
}

.vue-flow__node-anchor.selected .Anchor {
  width: 20px;
  height: 20px;
  border: 2px solid white;
}

.anchor-handle{
  top:calc(100% - 12px);
}

.anchor-handle-a{
    border-radius: 20px;
    border-bottom-right-radius: 0;
    width: 3px;
    /* margin-right: 3px; */
    border-top-right-radius: 0;
    border-right: 0;
    left:calc(100% - 16.5px);
}

.anchor-handle-b{
    border-radius: 20px;
    border-bottom-left-radius: 0;
    width: 3px;
    /* margin-right: 3px; */
    border-top-left-radius: 0;
    border-left: 0;
    left:calc(100% - 12.5px);

}


</style>