function generateReport() {
    let result = [];
    const checkBoxes = Array.from(document.querySelectorAll('thead tr input'));
    const trArray = Array.from(document.querySelectorAll('tbody tr'))
    const textareaEl = document.getElementById('output');

    for(let tr of trArray) {
        let obj = {}
        let tds = Array.from(tr.children)
    
     for(let i = 0; i < tds.length; i++) {
       if(checkBoxes[i].checked) {
        obj[checkBoxes[i].name] = tds[i].textContent;
       }
     }
     result.push(obj)
    }
    textareaEl.value = JSON.stringify(result)
}