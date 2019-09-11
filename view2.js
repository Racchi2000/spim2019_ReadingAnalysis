function next(){
    if (currentPageLeft < lastPage){
        currentPageLeft += 2;
        currentPageRight += 2;  
    }

    removing_leftimg = document.getElementById("imgLeft");
    removing_leftimg.parentNode.removeChild(removing_leftimg);
    removing_rightimg = document.getElementById("imgRight");
    removing_rightimg.parentNode.removeChild(removing_rightimg);

    draw()
}
function back(){
    if (currentPageRight > 1){
        currentPageLeft -= 2;
        currentPageRight -= 2;
    }

    removing_leftimg = document.getElementById("imgLeft");
    removing_leftimg.parentNode.removeChild(removing_leftimg);
    removing_rightimg = document.getElementById("imgRight");
    removing_rightimg.parentNode.removeChild(removing_rightimg);
    
     draw()
}