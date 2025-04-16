const Names = ["Hari", "Saritha", "Saanvi", "Arjun", "Adithya"];
var nameswithLeterA = Names.filter((i => i.toLowerCase().includes("i"))) 
nameswithLeterA.forEach(nam=> console.log(nam));