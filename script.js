function insert_Row() {
    //Write your code here
	let table=document.getElementById("sampleTable");
	let row=table.insertRow(0);
	let td1=row.insertCell(0);
	let td2=row.insertCell(1);
	td1.innerText="New Cell1";
	td2.innerText="New Cell2";
	
  
  
}
