function Controller1($scope) {
	// fbGraphApiCalls
	fbga={base:"https://graph.facebook.com",
		ver:"/v2.3",
		q1:"/me/inbox?limit=0&fields=unread,id,comments.limit(2)",
		q2:"/me?fields=id,name",
		q3:"/me/inbox?fields=unread,id&limit=3",
		q4:"/me/inbox?limit=0&fields=unread,id,comments.limit(2)"
	};

	$scope.refresh=function() {
		ms=angular.fromJson(angular.$get(fbga.base+fbga.ver+fbga.q4)); // messages summary
		$scope.num_unread=ms.summary.unread_count;
		$scope.num_unseen=ms.summary.unseen_count;
	};

	angular.document.onready(function() {
		$scope.refresh();
	});

}
