<script setup lang="ts">
import { VueFlow, useVueFlow,Elements, FlowEvents, VueFlowStore } from '@braks/vue-flow';
import { computed, watch, nextTick } from 'vue';
import useStore from './store.js';
import Controls from './Controls.vue'

import CustomConnectionLine from './CustomConnectionLine.vue'
import CustomEdge from './CustomEdge.vue'


const store = useStore();

const { onConnect,  nodes, addNodes, setNodes, setEdges, addEdges, applyNodeChanges, applyEdgeChanges, onEdgesChange, onNodesChange,onNodeDragStop,onNodeDragStart ,onSelectionDragStart,  onSelectionDragStop, onEdgeChange, project, dimensions } = useVueFlow();

//TODO: CONSIDER USING WATCH ON SELECTED NODES TO GET PREVIOUS VALUE. 

onConnect((params) => addEdges([params]));

project({ x: dimensions.value.width / 2, y: dimensions.value.height / 2})



onEdgesChange((e) => {

});

// undo save the original value
// redo save the new value

</script>

<template>
  <VueFlow 
  v-model="store.elements" 
  :fit-view-on-init="true"

  >
    <!--<template #connection-line="props">
      <CustomConnectionLine v-bind="props" />
    </template>-->
    <template #edge-custom="props">
      <CustomEdge v-bind="props" />
    </template>
    <div style="position: absolute; right: 10px; top: 10px; z-index: 4">
      <button @click="store.log">log store state</button>
      <button @click="updateStore">Update Store</button>
    </div>
    <Controls />
  </VueFlow>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}
</style>
