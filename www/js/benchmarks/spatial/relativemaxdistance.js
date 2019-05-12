
function relativeMaxDistanceRcepjs_minInterval_tumblingCountWindow_minWindowSize(total){
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
                    rcepjs.relativeMaxDistance(['of event'], 'payload',
                        distance => distance > 500, 'relativeMaxDistance event'))
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

function relativeMaxDistanceRcepjs_minInterval_tumblingCountWindow_maxWindowSize(total){
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
                    rcepjs.relativeMaxDistance(['of event'], 'payload',
                        distance => distance > 500, 'relativeMaxDistance event'))
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

function relativeMaxDistanceRcepjs_maxInterval_tumblingCountWindow_minWindowSize(total){
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
                    rcepjs.relativeMaxDistance(['of event'], 'payload',
                        distance => distance > 500, 'relativeMaxDistance event'))
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

function relativeMaxDistanceRcepjs_maxInterval_tumblingCountWindow_maxWindowSize(total){
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
                    rcepjs.relativeMaxDistance(['of event'], 'payload',
                        distance => distance > 500, 'relativeMaxDistance event'))
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

function relativeMaxDistanceRcepjs_minInterval_slidingCountWindow_minWindowSize(total){
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
                    rcepjs.relativeMaxDistance(['of event'], 'payload',
                        distance => distance > 500, 'relativeMaxDistance event'))
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

function relativeMaxDistanceRcepjs_minInterval_slidingCountWindow_maxWindowSize(total){
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
                    rcepjs.relativeMaxDistance(['of event'], 'payload',
                        distance => distance > 500, 'relativeMaxDistance event'))
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

function relativeMaxDistanceRcepjs_maxInterval_slidingCountWindow_minWindowSize(total){
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
                    rcepjs.relativeMaxDistance(['of event'], 'payload',
                        distance => distance > 500, 'relativeMaxDistance event'))
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

function relativeMaxDistanceRcepjs_maxInterval_slidingCountWindow_maxWindowSize(total){
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
                    rcepjs.relativeMaxDistance(['of event'], 'payload',
                        distance => distance > 500, 'relativeMaxDistance event'))
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

function relativeMaxDistanceRcepjsMost_minInterval_tumblingCountWindow_minWindowSize(total){
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
                    rcepjsMost.relativeMaxDistance(['of event'], 'payload',
                        distance => distance > 500, 'relativeMaxDistance event'))
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

function relativeMaxDistanceRcepjsMost_minInterval_tumblingCountWindow_maxWindowSize(total){
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
                    rcepjsMost.relativeMaxDistance(['of event'], 'payload',
                        distance => distance > 500, 'relativeMaxDistance event'))
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

function relativeMaxDistanceRcepjsMost_maxInterval_tumblingCountWindow_minWindowSize(total){
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
                    rcepjsMost.relativeMaxDistance(['of event'], 'payload',
                        distance => distance > 500, 'relativeMaxDistance event'))
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

function relativeMaxDistanceRcepjsMost_maxInterval_tumblingCountWindow_maxWindowSize(total){
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
                    rcepjsMost.relativeMaxDistance(['of event'], 'payload',
                        distance => distance > 500, 'relativeMaxDistance event'))
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

function relativeMaxDistanceRcepjsMost_minInterval_slidingCountWindow_minWindowSize(total){
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
                    rcepjsMost.relativeMaxDistance(['of event'], 'payload',
                        distance => distance > 500, 'relativeMaxDistance event'))
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

function relativeMaxDistanceRcepjsMost_minInterval_slidingCountWindow_maxWindowSize(total){
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
                    rcepjsMost.relativeMaxDistance(['of event'], 'payload',
                        distance => distance > 500, 'relativeMaxDistance event'))
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

function relativeMaxDistanceRcepjsMost_maxInterval_slidingCountWindow_minWindowSize(total){
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
                    rcepjsMost.relativeMaxDistance(['of event'], 'payload',
                        distance => distance > 500, 'relativeMaxDistance event'))
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

function relativeMaxDistanceRcepjsMost_maxInterval_slidingCountWindow_maxWindowSize(total){
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
                    rcepjsMost.relativeMaxDistance(['of event'], 'payload',
                        distance => distance > 500, 'relativeMaxDistance event'))
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
