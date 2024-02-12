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