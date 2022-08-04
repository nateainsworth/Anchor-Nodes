<script setup>
import { useVueFlow } from '@braks/vue-flow'

const flowKey = 'example-flow'

const { nodes, addNodes, setNodes, setEdges, dimensions, setTransform, toObject,project } = useVueFlow()

const onAdd = () => {
  const id = nodes.value.length + 1
  const newNode = {
    id: `random_node-${id}`,
    label: `Node ${id}`,
    position: { x: Math.random() * dimensions.value.width, y: Math.random() * dimensions.value.height },
  }
  addNodes([newNode])
}
</script>

<template>
  <div class="save__controls">
    <button style="background-color: #6f3381" @click="onAdd">add node</button>
  </div>
</template>

<style>

.save__controls{position:absolute;left:10px;top:10px;z-index:4;font-size:12px}.save__controls button{margin-left:5px;padding:5px;border-radius:5px;font-weight:700;text-transform:uppercase;color:#fff;box-shadow:0 5px 10px #0000004d;cursor:pointer}.save__controls button:hover{opacity:.8;transform:scale(105%);transition:.25s all ease-in-out}

</style>