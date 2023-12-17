let display_text = document.getElementById("text");

let show_text = function(num,func){
    if (num !== 0){
        display_text.innerText = `${num}`;
        setTimeout(func,1000);
    }else{
        display_text.innerText = `HAPPY INDEPENDENCE DAY`;
    }
}

show_text(10,()=>{
    show_text(9,()=>{
        show_text(8,()=>{
            show_text(7,()=>{
                show_text(6,()=>{
                    show_text(5,()=>{
                        show_text(4,()=>{
                            show_text(3,()=>{
                                show_text(2,()=>{
                                    show_text(1,()=>{
                                        show_text(0,()=>{

                                        });
                                    });
                                });
                            });
                        });
                    });
                })
            });
        });
    });
});