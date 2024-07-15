//Article link :- https://refactoring.guru/design-patterns/observer

class pubsub {

    constructor() {
        this.subscribers = {};   // {'codeFire' : [cb_subscriber1 , cb_subscribe2 , cb_subscriber3]}
    }

    /**
     * @param  event --> It is a string denoting unique event fired (subscribing any yt channel) 
     * @param  callback --> For a subscriber what method should be executed when an event is fired(Getting notified when any video is out by a function)
     */
    subscribe(event, callback) {
        if (!this.subscribers[event]) this.subscribers[event] = [];
        this.subscribers[event].push(callback);

        return () => this.unSubscribe(event, callback);
    }

    /**
     * @param  event -->It is a string denoting unique event fired (which channel is making new videos) 
     * @param  data --> For the given event what data should be passed along with publishing the event(what videos are out) 
     */
    publish(event, data) {
        if (!this.subscribers[event]) return;
        this.subscribers[event].forEach(callback => callback(data));
    }

    unSubscribe(event, callback) {
        if (!this.subscribers[event]) return;
        this.subscribers[event] = this.subscribers[event].filter(cb => cb !== callback);
    }

}

const pb = new pubsub();

unsubcf1 = pb.subscribe('codeFire', (data) => console.log(`New Video of ${data.video} out now in codeFire 1!!!`));

unsubcf2 = pb.subscribe('codeFire', (data) => console.log(`New Video of ${data.video} out now in codeFire 2!!!`));

pb.subscribe('Codesen solutions', (data) => console.log(`New Video of ${data.video} out now Codesen solutions !!!`));

pb.subscribe('Algocamp', (data) => console.log(`New Video of ${data.video} out now in Algocamp !!!`));

pb.publish('codeFire', { video: 'Next JS' });
unsubcf1();
//unsubcf2();
pb.publish('codeFire', { video: 'Nuxt JS' });

//pb.publish('Codesen solutions', {video: 'TanStackQuery'});