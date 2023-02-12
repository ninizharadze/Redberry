function thisFileUpload(){
    document.getElementById('finput').click();
};


function upload(){
    
    let imgcanvas = document.getElementById("canv1");
    let fileinput = document.getElementById("finput");
    let image = new SimpleImage(fileinput);
    image.drawTo(imgcanvas);
  }




