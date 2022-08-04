import { defineStore } from 'pinia';
import { isNode } from '@braks/vue-flow';


const useStore = defineStore('elementsStore', {
  state() {
    return {
      elements: [
        {
          id: '1',
          type: 'input',
          label: 'Node 1',
          position: { x: 250, y: 5 },
          class: 'light',
        },
        {
          id: '2',
          label: 'Node 2',
          position: { x: 100, y: 100 },
          class: 'light',
        },
        {
          id: '3',
          label: 'Node 3',
          position: { x: 400, y: 100 },
          class: 'light',
        },
        {
          id: '4',
          label: 'Node 4',
          position: { x: 400, y: 200 },
          class: 'light',
        },
        { id: 'e1-2', source: '1', target: '2',  type: 'custom'},
        { id: 'e1-3', source: '1', target: '3',  type: 'custom'},
        { id: 'e3-4', source: '3', target: '4', type: 'custom'},
      ],
    };
  },
  actions: {
    log() {
      console.log('stored elements', this.elements);
    },
    
  },
});

export default useStore;
