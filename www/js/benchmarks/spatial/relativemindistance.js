
function relativeMinDistanceRcepjs_minInterval_tumblingCountWindow_minWindowSize(total){
    var count = 0;
	async.whilst(
		function() { return count < total; },
		function(callback) {
            count++;
            onStartIteration();
            rcepjs.interval(minInterval)
                .pipe(streamController_rcepjs,
                    rcepjs.mergeMap(x => rcepjs.of(generateRandomPoint())),
                    rcepjs.tumblingCountWindow(minWindowSize),
                    rcepjs.relativeMinDistance(['of event'], 'payload',
                        distance => distance > 500, 'relativeMinDistance event'))
                .subscribe({
                    next: function(value){},
                    error: function(error){},
                    complete: function(){
                        onCompleteIteration(callback, count);
                    }
                });
		},
		onComplete
	);
}

function relativeMinDistanceRcepjs_minInterval_tumblingCountWindow_maxWindowSize(total){
    var count = 0;
	async.whilst(
		function() { return count < total; },
		function(callback) {
            count++;
            onStartIteration();
            rcepjs.interval(minInterval)
                .pipe(streamController_rcepjs,
                    rcepjs.mergeMap(x => rcepjs.of(generateRandomPoint())),
                    rcepjs.tumblingCountWindow(maxWindowSize),
                    rcepjs.relativeMinDistance(['of event'], 'payload',
                        distance => distance > 500, 'relativeMinDistance event'))
                .subscribe({
                    next: function(value){},
                    error: function(error){},
                    complete: function(){
                        onCompleteIteration(callback, count);
                    }
                });
		},
		onComplete
	);
}

function relativeMinDistanceRcepjs_maxInterval_tumblingCountWindow_minWindowSize(total){
    var count = 0;
	async.whilst(
		function() { return count < total; },
		function(callback) {
            count++;
            onStartIteration();
            rcepjs.interval(maxInterval)
                .pipe(streamController_rcepjs,
                    rcepjs.mergeMap(x => rcepjs.of(generateRandomPoint())),
                    rcepjs.tumblingCountWindow(minWindowSize),
                    rcepjs.relativeMinDistance(['of event'], 'payload',
                        distance => distance > 500, 'relativeMinDistance event'))
                .subscribe({
                    next: function(value){},
                    error: function(error){},
                    complete: function(){
                        onCompleteIteration(callback, count);
                    }
                });
		},
		onComplete
	);
}

function relativeMinDistanceRcepjs_maxInterval_tumblingCountWindow_maxWindowSize(total){
    var count = 0;
	async.whilst(
		function() { return count < total; },
		function(callback) {
            count++;
            onStartIteration();
            rcepjs.interval(maxInterval)
                .pipe(streamController_rcepjs,
                    rcepjs.mergeMap(x => rcepjs.of(generateRandomPoint())),
                    rcepjs.tumblingCountWindow(maxWindowSize),
                    rcepjs.relativeMinDistance(['of event'], 'payload',
                        distance => distance > 500, 'relativeMinDistance event'))
                .subscribe({
                    next: function(value){},
                    error: function(error){},
                    complete: function(){
                        onCompleteIteration(callback, count);
                    }
                });
		},
		onComplete
	);
}

//sliding window

function relativeMinDistanceRcepjs_minInterval_slidingCountWindow_minWindowSize(total){
    var count = 0;
	async.whilst(
		function() { return count < total; },
		function(callback) {
            count++;
            onStartIteration();
            rcepjs.interval(minInterval)
                .pipe(streamController_rcepjs,
                    rcepjs.mergeMap(x => rcepjs.of(generateRandomPoint())),
                    rcepjs.slidingCountWindow(minWindowSize),
                    rcepjs.relativeMinDistance(['of event'], 'payload',
                        distance => distance > 500, 'relativeMinDistance event'))
                .subscribe({
                    next: function(value){},
                    error: function(error){},
                    complete: function(){
                        onCompleteIteration(callback, count);
                    }
                });
		},
		onComplete
	);
}

function relativeMinDistanceRcepjs_minInterval_slidingCountWindow_maxWindowSize(total){
    var count = 0;
	async.whilst(
		function() { return count < total; },
		function(callback) {
            count++;
            onStartIteration();
            rcepjs.interval(minInterval)
                .pipe(streamController_rcepjs,
                    rcepjs.mergeMap(x => rcepjs.of(generateRandomPoint())),
                    rcepjs.slidingCountWindow(maxWindowSize),
                    rcepjs.relativeMinDistance(['of event'], 'payload',
                        distance => distance > 500, 'relativeMinDistance event'))
                .subscribe({
                    next: function(value){},
                    error: function(error){},
                    complete: function(){
                        onCompleteIteration(callback, count);
                    }
                });
		},
		onComplete
	);
}

// maxInterval

function relativeMinDistanceRcepjs_maxInterval_slidingCountWindow_minWindowSize(total){
    var count = 0;
	async.whilst(
		function() { return count < total; },
		function(callback) {
            count++;
            onStartIteration();
            rcepjs.interval(maxInterval)
                .pipe(streamController_rcepjs,
                    rcepjs.mergeMap(x => rcepjs.of(generateRandomPoint())),
                    rcepjs.slidingCountWindow(minWindowSize),
                    rcepjs.relativeMinDistance(['of event'], 'payload',
                        distance => distance > 500, 'relativeMinDistance event'))
                .subscribe({
                    next: function(value){},
                    error: function(error){},
                    complete: function(){
                        onCompleteIteration(callback, count);
                    }
                });
		},
		onComplete
	);
}

function relativeMinDistanceRcepjs_maxInterval_slidingCountWindow_maxWindowSize(total){
    var count = 0;
	async.whilst(
		function() { return count < total; },
		function(callback) {
            count++;
            onStartIteration();
            rcepjs.interval(maxInterval)
                .pipe(streamController_rcepjs,
                    rcepjs.mergeMap(x => rcepjs.of(generateRandomPoint())),
                    rcepjs.slidingCountWindow(maxWindowSize),
                    rcepjs.relativeMinDistance(['of event'], 'payload',
                        distance => distance > 500, 'relativeMinDistance event'))
                .subscribe({
                    next: function(value){},
                    error: function(error){},
                    complete: function(){
                        onCompleteIteration(callback, count);
                    }
                });
		},
		onComplete
	);
}

// most

function relativeMinDistanceRcepjsMost_minInterval_tumblingCountWindow_minWindowSize(total){
    var count = 0;
	async.whilst(
		function() { return count < total; },
		function(callback) {
            count++;
            onStartIteration();
            rcepjsMost.interval(minInterval)
                .pipe(streamController_rcepjsMost,
                    rcepjsMost.mergeMap(x => rcepjsMost.of(generateRandomPoint())),
                    rcepjsMost.tumblingCountWindow(minWindowSize),
                    rcepjsMost.relativeMinDistance(['of event'], 'payload',
                        distance => distance > 500, 'relativeMinDistance event'))
                .subscribe({
                    next: function(value){},
                    error: function(error){},
                    complete: function(){
                        onCompleteIteration(callback, count);
                    }
                });
		},
		onComplete
	);
}

function relativeMinDistanceRcepjsMost_minInterval_tumblingCountWindow_maxWindowSize(total){
    var count = 0;
	async.whilst(
		function() { return count < total; },
		function(callback) {
            count++;
            onStartIteration();
            rcepjsMost.interval(minInterval)
                .pipe(streamController_rcepjsMost,
                    rcepjsMost.mergeMap(x => rcepjsMost.of(generateRandomPoint())),
                    rcepjsMost.tumblingCountWindow(maxWindowSize),
                    rcepjsMost.relativeMinDistance(['of event'], 'payload',
                        distance => distance > 500, 'relativeMinDistance event'))
                .subscribe({
                    next: function(value){},
                    error: function(error){},
                    complete: function(){
                        onCompleteIteration(callback, count);
                    }
                });
		},
		onComplete
	);
}

function relativeMinDistanceRcepjsMost_maxInterval_tumblingCountWindow_minWindowSize(total){
    var count = 0;
	async.whilst(
		function() { return count < total; },
		function(callback) {
            count++;
            onStartIteration();
            rcepjsMost.interval(maxInterval)
                .pipe(streamController_rcepjsMost,
                    rcepjsMost.mergeMap(x => rcepjsMost.of(generateRandomPoint())),
                    rcepjsMost.tumblingCountWindow(minWindowSize),
                    rcepjsMost.relativeMinDistance(['of event'], 'payload',
                        distance => distance > 500, 'relativeMinDistance event'))
                .subscribe({
                    next: function(value){},
                    error: function(error){},
                    complete: function(){
                        onCompleteIteration(callback, count);
                    }
                });
		},
		onComplete
	);
}

function relativeMinDistanceRcepjsMost_maxInterval_tumblingCountWindow_maxWindowSize(total){
    var count = 0;
	async.whilst(
		function() { return count < total; },
		function(callback) {
            count++;
            onStartIteration();
            rcepjsMost.interval(maxInterval)
                .pipe(streamController_rcepjsMost,
                    rcepjsMost.mergeMap(x => rcepjsMost.of(generateRandomPoint())),
                    rcepjsMost.tumblingCountWindow(maxWindowSize),
                    rcepjsMost.relativeMinDistance(['of event'], 'payload',
                        distance => distance > 500, 'relativeMinDistance event'))
                .subscribe({
                    next: function(value){},
                    error: function(error){},
                    complete: function(){
                        onCompleteIteration(callback, count);
                    }
                });
		},
		onComplete
	);
}

//sliding window

function relativeMinDistanceRcepjsMost_minInterval_slidingCountWindow_minWindowSize(total){
    var count = 0;
	async.whilst(
		function() { return count < total; },
		function(callback) {
            count++;
            onStartIteration();
            rcepjsMost.interval(minInterval)
                .pipe(streamController_rcepjsMost,
                    rcepjsMost.mergeMap(x => rcepjsMost.of(generateRandomPoint())),
                    rcepjsMost.slidingCountWindow(minWindowSize),
                    rcepjsMost.relativeMinDistance(['of event'], 'payload',
                        distance => distance > 500, 'relativeMinDistance event'))
                .subscribe({
                    next: function(value){},
                    error: function(error){},
                    complete: function(){
                        onCompleteIteration(callback, count);
                    }
                });
		},
		onComplete
	);
}

function relativeMinDistanceRcepjsMost_minInterval_slidingCountWindow_maxWindowSize(total){
    var count = 0;
	async.whilst(
		function() { return count < total; },
		function(callback) {
            count++;
            onStartIteration();
            rcepjsMost.interval(minInterval)
                .pipe(streamController_rcepjsMost,
                    rcepjsMost.mergeMap(x => rcepjsMost.of(generateRandomPoint())),
                    rcepjsMost.slidingCountWindow(maxWindowSize),
                    rcepjsMost.relativeMinDistance(['of event'], 'payload',
                        distance => distance > 500, 'relativeMinDistance event'))
                .subscribe({
                    next: function(value){},
                    error: function(error){},
                    complete: function(){
                        onCompleteIteration(callback, count);
                    }
                });
		},
		onComplete
	);
}

// maxInterval

function relativeMinDistanceRcepjsMost_maxInterval_slidingCountWindow_minWindowSize(total){
    var count = 0;
	async.whilst(
		function() { return count < total; },
		function(callback) {
            count++;
            onStartIteration();
            rcepjsMost.interval(maxInterval)
                .pipe(streamController_rcepjsMost,
                    rcepjsMost.mergeMap(x => rcepjsMost.of(generateRandomPoint())),
                    rcepjsMost.slidingCountWindow(minWindowSize),
                    rcepjsMost.relativeMinDistance(['of event'], 'payload',
                        distance => distance > 500, 'relativeMinDistance event'))
                .subscribe({
                    next: function(value){},
                    error: function(error){},
                    complete: function(){
                        onCompleteIteration(callback, count);
                    }
                });
		},
		onComplete
	);
}

function relativeMinDistanceRcepjsMost_maxInterval_slidingCountWindow_maxWindowSize(total){
    var count = 0;
	async.whilst(
		function() { return count < total; },
		function(callback) {
            count++;
            onStartIteration();
            rcepjsMost.interval(maxInterval)
                .pipe(streamController_rcepjsMost,
                    rcepjsMost.mergeMap(x => rcepjsMost.of(generateRandomPoint())),
                    rcepjsMost.slidingCountWindow(maxWindowSize),
                    rcepjsMost.relativeMinDistance(['of event'], 'payload',
                        distance => distance > 500, 'relativeMinDistance event'))
                .subscribe({
                    next: function(value){},
                    error: function(error){},
                    complete: function(){
                        onCompleteIteration(callback, count);
                    }
                });
		},
		onComplete
	);
}
