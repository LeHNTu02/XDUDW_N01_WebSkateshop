// Slider 
    const imgPosition = document.querySelectorAll(".aspect-ratio-169 img");
    const imgContainer = document.querySelector(".aspect-ratio-169");
    const dotItem = document.querySelectorAll(".dot")
    let imgNuber = imgPosition.length
    let index = 0;
    imgPosition.forEach(function(image,index){
        image.style.left = index*100 + "%"
        dotItem[index].addEventListener("click",function(image){
            slider (index)
        })
        // slider (index)
    })

    function imgSlide (){
        index++;
        if (index >= imgNuber){index=0}
        // imgContainer.style.left = "-" +index*100+ "%"
        slider (index)
    }
    function slider (index) {
        imgContainer.style.left = "-" +index*100+ "%"
        // Chon ca class active de xoa cai dot
        const dotActive = document.querySelector(".active")
        dotActive.classList.remove("active")
        dotItem[index].classList.add("active")
    }
    setInterval(imgSlide, 5000)

// click img product
    const bigImg = document.querySelector(".product-content-bigimg img")
    const smalImg = document.querySelectorAll(".product-content-smallimg img")
    smalImg.forEach(function(imgItem,X){ //duyệt các phần tử là các ảnh có đường dẫn src
        imgItem.addEventListener("click", function(){
        bigImg.src = imgItem.src //khi click vào ảnh nhỏ nó sẽ dẫn đến ảnh to
        })
    })


