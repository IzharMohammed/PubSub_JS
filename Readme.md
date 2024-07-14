### Design a pubsub library which exposes the following function 

#### 1:- Subscribe --> This method helps a client to subscribe an event and whenever that event is triggered we execute a callback . It should return a method , which when called unsubscribes to the event

#### 2:- Publish --> This method helps to fire an event with some data . All the subscribers gets activated when we publish

#### --> Multiple entities can subscribe to the same event . Every entity will be subscribing with its callback
### Different action will be performed by each subscriber with common event is fired 
#### one event --> has many subscribers

#### Observation :- Any kind of thing that is asynchronous which requires some reaction on some action somehow related to pubsub library also called as observer pattern