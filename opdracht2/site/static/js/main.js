function showThreadContent(e) {
    var threadContent = document.querySelector('#thread-content')
    var mainContent = document.querySelector('#main-content');
    console.log(e)


    e.classList.toggle("show-caret");
    if(document.querySelectorAll(".show-caret").length > 1 ){
        for(obj of document.querySelectorAll(".show-caret"))
            if(obj != e){
                console.log(obj)
            obj.classList.remove('show-caret');
            }
        }
    if(document.querySelector(".show-caret")){
        mainContent.style.setProperty("grid-column", "2/4 "); 
        threadContent.style.setProperty("grid-column", "4/ span 5 ");
        threadContent.style.setProperty("display", "flex ");
    } else {
        mainContent.style.setProperty("grid-column", "2/ span 4 "); 
        threadContent.style.setProperty("display", "none ");
      
    }


}

