// index.js
import "./styles.css"
import { greeting } from "./greeting.js";

class Node {
    constructor(value = null, nextNode = null) {
      this.value = value;
      this.nextNode = nextNode;
    }
  }
  
  class LinkedList {
    constructor() {
      this.headNode = null;
    }
  
    append(value) {
      const newNode = new Node(value);
      if (!this.headNode) {
        this.headNode = newNode;
        return;
      }
      let current = this.headNode;
      while (current.nextNode) {
        current = current.nextNode;
      }
      current.nextNode = newNode;
    }
  
    prepend(value) {
      const newNode = new Node(value, this.headNode);
      this.headNode = newNode;
    }
  
    size() {
      let count = 0;
      let current = this.headNode;
      while (current) {
        count++;
        current = current.nextNode;
      }
      return count;
    }
  
    head() {
      return this.headNode;
    }
  
    tail() {
      let current = this.headNode;
      while (current && current.nextNode) {
        current = current.nextNode;
      }
      return current;
    }
  
    at(index) {
      let count = 0;
      let current = this.headNode;
      while (current) {
        if (count === index) return current;
        current = current.nextNode;
        count++;
      }
      return null;
    }
  
    pop() {
      if (!this.headNode) return null;
      if (!this.headNode.nextNode) {
        this.headNode = null;
        return;
      }
      let current = this.headNode;
      while (current.nextNode && current.nextNode.nextNode) {
        current = current.nextNode;
      }
      current.nextNode = null;
    }
  
    contains(value) {
      let current = this.headNode;
      while (current) {
        if (current.value === value) return true;
        current = current.nextNode;
      }
      return false;
    }
  
    find(value) {
      let index = 0;
      let current = this.headNode;
      while (current) {
        if (current.value === value) return index;
        current = current.nextNode;
        index++;
      }
      return null;
    }
  
    toString() {
      let current = this.headNode;
      let str = '';
      while (current) {
        str += `( ${current.value} ) -> `;
        current = current.nextNode;
      }
      return str + 'null';
    }
  }
  
  // Teste
  const list = new LinkedList();
  list.append("dog");
  list.append("cat");
  list.append("parrot");
  console.log(list.toString());
  
