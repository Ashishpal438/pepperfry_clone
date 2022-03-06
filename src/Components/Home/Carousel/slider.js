export default function slider (){
    const img=document.getElementById("carousel_first_img");
    let i=0;
    setInterval(()=>{
        img.style.marginLeft=`-${i*100}%`
        img.style.transition="marginLeft, 1s"
        if(i===3)
        i=0
        else
        i++;
    },3000)
}
