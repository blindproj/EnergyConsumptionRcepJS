
function avgDistanceRcepjs_minInterval_tumblingCountWindow_minWindowSize(total){
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
                    rcepjs.avgDistance(['of event'], fixedPoint, 'payload',
                        distance => distance > 500, 'avgDistance event'))
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

function avgDistanceRcepjs_minInterval_tumblingCountWindow_maxWindowSize(total){
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
                    rcepjs.avgDistance(['of event'], fixedPoint, 'payload',
                        distance => distance > 500, 'avgDistance event'))
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

function avgDistanceRcepjs_maxInterval_tumblingCountWindow_minWindowSize(total){
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
                    rcepjs.avgDistance(['of event'], fixedPoint, 'payload',
                        distance => distance > 500, 'avgDistance event'))
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

function avgDistanceRcepjs_maxInterval_tumblingCountWindow_maxWindowSize(total){
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
                    rcepjs.avgDistance(['of event'], fixedPoint, 'payload',
                        distance => distance > 500, 'avgDistance event'))
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

function avgDistanceRcepjs_minInterval_slidingCountWindow_minWindowSize(total){
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
                    rcepjs.avgDistance(['of event'], fixedPoint, 'payload',
                        distance => distance > 500, 'avgDistance event'))
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

function avgDistanceRcepjs_minInterval_slidingCountWindow_maxWindowSize(total){
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
                    rcepjs.avgDistance(['of event'], fixedPoint, 'payload',
                        distance => distance > 500, 'avgDistance event'))
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

function avgDistanceRcepjs_maxInterval_slidingCountWindow_minWindowSize(total){
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
                    rcepjs.avgDistance(['of event'], fixedPoint, 'payload',
                        distance => distance > 500, 'avgDistance event'))
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

function avgDistanceRcepjs_maxInterval_slidingCountWindow_maxWindowSize(total){
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
                    rcepjs.avgDistance(['of event'], fixedPoint, 'payload',
                        distance => distance > 500, 'avgDistance event'))
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

function avgDistanceRcepjsMost_minInterval_tumblingCountWindow_minWindowSize(total){
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
                    rcepjsMost.avgDistance(['of event'], fixedPoint, 'payload',
                        distance => distance > 500, 'avgDistance event'))
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

function avgDistanceRcepjsMost_minInterval_tumblingCountWindow_maxWindowSize(total){
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
                    rcepjsMost.avgDistance(['of event'], fixedPoint, 'payload',
                        distance => distance > 500, 'avgDistance event'))
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

function avgDistanceRcepjsMost_maxInterval_tumblingCountWindow_minWindowSize(total){
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
                    rcepjsMost.avgDistance(['of event'], fixedPoint, 'payload',
                        distance => distance > 500, 'avgDistance event'))
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

function avgDistanceRcepjsMost_maxInterval_tumblingCountWindow_maxWindowSize(total){
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
                    rcepjsMost.avgDistance(['of event'], fixedPoint, 'payload',
                        distance => distance > 500, 'avgDistance event'))
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

function avgDistanceRcepjsMost_minInterval_slidingCountWindow_minWindowSize(total){
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
                    rcepjsMost.avgDistance(['of event'], fixedPoint, 'payload',
                        distance => distance > 500, 'avgDistance event'))
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

function avgDistanceRcepjsMost_minInterval_slidingCountWindow_maxWindowSize(total){
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
                    rcepjsMost.avgDistance(['of event'], fixedPoint, 'payload',
                        distance => distance > 500, 'avgDistance event'))
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

function avgDistanceRcepjsMost_maxInterval_slidingCountWindow_minWindowSize(total){
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
                    rcepjsMost.avgDistance(['of event'], fixedPoint, 'payload',
                        distance => distance > 500, 'avgDistance event'))
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

function avgDistanceRcepjsMost_maxInterval_slidingCountWindow_maxWindowSize(total){
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
                    rcepjsMost.avgDistance(['of event'], fixedPoint, 'payload',
                        distance => distance > 500, 'avgDistance event'))
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
