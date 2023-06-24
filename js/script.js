$(document).ready(function(){
    $(".owl-carousel").owlCarousel(
        {items :2 ,
         margin:25,
         loop:true,
         autoplay:false,
         autoplayTimeout:9000,
         nav:true,
         navText:['<i class="fa-solid fa-arrow-left-long" style="color:#ffffff "></i> ' , ' <i class="fa-solid fa-arrow-right-long" style="color:#ffffff "></i>' ],
         responsive : {
            // breakpoint from 0 up
            0 : {
               items:1,
               autoplay:true,
                
            },
            // breakpoint from 480 up
            480 : {
                items:1
            },
            // breakpoint from 768 up
            768 : {
               

            }
        }
        });
  });


  let btn = document.getElementById("headbtn")
  window.addEventListener("scroll" , function(){
    if(document.body.scrollTop>400 || document.documentElement.scrollTop>400){
       btn.classList.add('d-block')
       btn.classList.remove('d-none')
    }
    else if (document.body.scrollTop<400 || document.documentElement.scrollTop<400){
        btn.classList.remove('d-block')
       btn.classList.add('d-none')
    }
  })


  function interval( element , counter , time, increment){
    var i = 0
    var set = setInterval(()=>{
        if(i==counter) clearInterval(set)
        element.innerText=i
        i+=increment
    },time)
  }


  let totalprojects = document.getElementById("totalprojects")
  let won = document.getElementById("wonAwords")
  let happy =document.getElementById("happy")
  let exp = document.getElementById("experience")
  

  var done = false

  window.addEventListener("scroll" , function(){
    if(document.body.scrollTop>840  || document.documentElement.scrollTop>840 ){
       console.log(document.documentElement.scrollTop)
       if(done==false){
       interval(totalprojects , 8000 ,50,500 )
       interval(won,810,55,45)
       interval(happy,2000,80,250)
       interval(exp , 20 , 85,2) 
       }
       done = true

    }
   /* else if (document.body.scrollTop<800  || document.documentElement.scrollTop<800){
        done = false
        console.log(done)
    }
   */
  
  })
