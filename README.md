# @ds-javascript/doubly-linked-list


## Usage
```js
const DoublyLinkedList = require('@ds-javascript/doubly-linked-list');
const list = new DoublyLinkedList();
```

## API

**.push(value)** 
adds a node of the given value at the end of the list.
```javascript
list.push('node value');
```

**.pop()** 
removes node from  end of the list.
```javascript
list.pop();
```

**.shift()** 
removes a node from beginning of the list.
```javascript
list.shift();
```

**.unshift(value)** 
adds a node of the given value at the beginning of the list.
```javascript
list.unshift('node value');
```

**.get(index)** 
get node at the provided index of the list.
```javascript
list.get(1);
```

**.set(value,index)** 
set/update value of node at the provided index of the list.
```javascript
list.set('node value',1);
```

**.insert(value,index)** 
insert node at the provided index of the list.
```javascript
list.insert('node value',1);
```

**.remove(index)** 
delete node from  provided index of the list.
```javascript
list.remove(1);
```
**.getList()** 
get entire list
```javascript
list.getList();
```


