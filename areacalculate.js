function triangleArea() {
    const triangleBaseText = document.getElementById('base');
    const triangleBase = triangleBaseText.value;
    const triangleHeightText = document.getElementById('height');
    const triangleHeight = triangleHeightText.value;
    const area = 0.5* triangleBase* triangleHeight;
    console.log(area);
   
    const triAreaSpan = document.getElementById('area-output');
    triAreaSpan.innerText = area;

}

function rectangleArea(){
    const rectWidth = (document.getElementById('rect-widht')).value;
    const rectHeight = (document.getElementById('rect-height')).value;
    console.log(rectWidth, rectHeight)
    const rectArea= rectHeight * rectWidth;
    document.getElementById('area-rectangle').innerText = rectArea;
   
    console.log(rectArea);
}


function rhombusArea(){
    const rhombusD1 = getValueFromId('rhombus-d1');
    const rhombusD2 = getValueFromId('rhombus-d2');
    const rhomArea  = 0.5 * rhombusD1 * rhombusD2; 
document.getElementById('area-rhombus').innerText = rhomArea;
}


function getValueFromId(itemID){
    const valueOfID= parseFloat(document.getElementById(itemID).value);
    return(valueOfID);
}