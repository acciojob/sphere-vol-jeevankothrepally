function volume_sphere() {
    //Write your code here
	let radius = document.getElementById("radius").value;

    let volume = (4 / 3) * Math.PI * Math.pow(Number(radius), 3);

    if (radius.trim() === "" || Number(radius) < 0 || isNaN(Number(radius))) {
        volume = NaN;
    }

    document.getElementById("volume").value = volume.toFixed(4);
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
