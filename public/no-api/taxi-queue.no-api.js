document.addEventListener('alpine:init', () => {

	Alpine.data('TaxiQueue', () => {
               
		return {
			version: 'no-api-1.0',
            queueLength = 0,
			
			 class Queue  {
				constructor() {
				this.items = [];
			   }


			joinQueue(item) {
				this.item.push(item);

			},


			leaveQueue() {
            if (this.isEmpty()){
				return "Queue is empty";
			}
			return this.items.shift();
			}
			isEmpty() {
				return this.items.length === 0;
			}
			size() {
			return	this.items.length;
			}

			front(){
        if(this.isEmpty()) {
			return "Queue is empty"
		}
		return this.items[0];
			}
		},

		function	joinTaxiQueue(taxiQueue, taxiNumber) {
             taxiQueue.enqueue(`Taxi ${taxiNumber}`);
			},

		function	queueLength(queue) {
             return queue.size();
			},

			function taxiQueueLength(queue) {
             return queue.size();
			},

		function	taxiDepart(taxiQueue, peopleQueue, taxisLeaving, peopleLeaving) {
        for (let = 0; i< taxisLeaving; i++) {
			taxiQueue.dequeue();
		}
		for (let i=0; i < peopleLeaving; i++) {
			peopleQueue.dequeue();
		}
			}
		}

	});

});


