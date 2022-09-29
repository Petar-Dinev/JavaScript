function search() {
   let townsList = Array.from(document.querySelectorAll("#towns li"));
   let searchText = document.getElementById("searchText").value;
   let count = 0;

   for(let list of townsList) {
      let town = list.textContent;
      if(town.includes(searchText)) {
         list.style.textDecoration = "underline";
         list.style.fontWeight = "bold";
         count++;
      } else {
         list.style.textDecoration = "none";
         list.style.fontWeight = "normal"
      }
   }
   
   document.getElementById("result").innerText = `${count} matches found.`
}
