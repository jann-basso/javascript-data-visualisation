window.onload = function() {

    /************** PLACING ELEMENTS ON HTML **************/
    let divBodyContent = document.getElementById("bodyContent") // div bodyContent to insert canvas in

// CANVAS 1
    let toSecondElement = document.getElementById("mw-content-text") // first element inside parent div (bodyContent), which will be changed to second

    // create canvas to place chart
    let canvas1 = document.createElement("canvas")
    divBodyContent.appendChild(canvas1)
    
    // turn new div into first element of parent div (bodyContent)
    toSecondElement.insertBefore(canvas1, toSecondElement.firstChild)

    
// CANVAS 2
    let contentText = document.getElementById("mw-content-text") // used for canvas 1 and 2
    let toBelowElement1 = document.getElementById("table1")

    let canvas2 = document.createElement("canvas")
    canvas2.style.backgroundColor = "red"
    divBodyContent.appendChild(canvas2)

    contentText.insertBefore(canvas2, toBelowElement1)


// CANVAS 3
    let toBelowElement2 = document.getElementById("table2")
    
    let canvas3 = document.createElement("canvas")
    canvas3.style.backgroundColor = "green"
    divBodyContent.appendChild(canvas3)

    contentText.insertBefore(canvas3, toBelowElement2)




    /************** CREATING AND DISPLAYING CHART **************/

// CANVAS 1

    // create chart    
    let chart = new Chart(canvas1, {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
                label: 'My First dataset',
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                data: [0, 10, 5, 2, 20, 30, 45]
            }]
        },


    })

/*
    let xhttp = new XMLHttpRequest()
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let 

            this.responseText
        }
    }


    xhttp.open("get", "https://canvasjs.com/services/data/datapoints.php", true)
    xhttp.send()

*/


// CANVAS 2





// CANVAS 3

    

}


