
function relativeMinDistanceCepjsRx_minInterval(total){
    var count = 0;
	async.whilst(
		function() { return count < total; },
		function(callback) {
            count++;
            onStartIteration();
            rcepjs.interval(minInterval)
                .pipe(streamController_rcepjs,
                    rcepjs.mergeMap(x => rcepjs.of(generateRandomPoint())),
                    rcepjs.tumblingTimeWindow(5000),
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

function relativeMinDistanceCepjsRx_maxInterval(total){
    var count = 0;
	async.whilst(
		function() { return count < total; },
		function(callback) {
            count++;
            onStartIteration();
            rcepjs.interval(maxInterval)
                .pipe(streamController_rcepjs,
                    rcepjs.mergeMap(x => rcepjs.of(generateRandomPoint())),
                    rcepjs.tumblingTimeWindow(5000),
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

function relativeMinDistanceCepjsMost_minInterval(total){
    var count = 0;
	async.whilst(
		function() { return count < total; },
		function(callback) {
            count++;
            onStartIteration();
            rcepjsMost.interval(minInterval)
                .pipe(streamController_rcepjsMost,
                    rcepjsMost.mergeMap(x => rcepjsMost.of(generateRandomPoint())),
                    rcepjsMost.tumblingTimeWindow(5000),
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

function relativeMinDistanceCepjsMost_maxInterval(total){
    var count = 0;
	async.whilst(
		function() { return count < total; },
		function(callback) {
            count++;
            onStartIteration();
            rcepjsMost.interval(maxInterval)
                .pipe(streamController_rcepjsMost,
                    rcepjsMost.mergeMap(x => rcepjsMost.of(generateRandomPoint())),
                    rcepjsMost.tumblingTimeWindow(5000),
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
