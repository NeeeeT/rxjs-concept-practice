// ES5 Class Declaration Simulation
function Producer() {
  if (!this instanceof Producer) {
    throw new Error ('must use new Producer() !');
  }
  this.listener = [];
}

Producer.prototype.addListener = function(listener) {
  if (typeof listener === 'function') {
    this.listener.push(listener);
  } else {
    throw new Error('listenrer must be a function');
  }
}

Producer.prototype.removeListener = function(listener) {
  this.listener.splice(this.listener.indexOf(listener), 1);
}

Producer.prototype.notify = function(message) {
  this.listener.forEach(listener => {
    listener(message);
  })
}

// ES6 Class Declaration
class Producer2 {
	constructor() {
		this.listeners = [];
	}
	addListener(listener) {
		if(typeof listener === 'function') {
			this.listeners.push(listener);
		} else {
			throw new Error('listener must be a function');
		}
	}
	removeListener(listener) {
		this.listeners.splice(this.listeners.indexOf(listener), 1);
	}
	notify(message) {
		this.listeners.forEach(listener => {
			listener(message);
		})
	}
}

// Sample

const egghead = new Producer2();
const listener1 = function(message) {
  console.log('事件1', message);
};
const listener2 = function(message) {
  console.log('事件2', message);
};
egghead.addListener(listener1);
egghead.addListener(listener2);

egghead.notify('Event Triggered!')