const arr = [{_id:"1",name:"img2.jpeg"}, 
	{_id:"2",name:"img3.png"},
	{_id:"3",name:"img4.png"}, 
	{_id:"4",name:"img5.jpeg"}];

	let currentIndex = 1;
    let currentId = arr[0]._id;
    let currentName = arr[0].name;

    // initial log
    log(currentId, currentName)

    function next(){
        move();
    }

    function previous(){
        move(false);
    }

    function move(advance = true){
        currentIndex = (currentIndex + (advance ? 1 : -1) + arr.length) % arr.length;
        currentName = arr[currentIndex].name;
        currentId = arr[currentIndex]._id;
        log(currentId, currentName);
    }

    function log(currentId, currentName){
        document.getElementById('img').src = currentName;
	}
