window.onload = function() {
    
    let divBodyContent = document.getElementById("bodyContent") // div bodyContent to insert canvas in
    let contentText = document.getElementById("mw-content-text") // used for canvas 1 and 2


    // ------------------------------------- CANVAS 1 - CRIME STATISTICS -------------------------------------
        let toSecondElement = document.getElementById("mw-content-text") // first element inside parent div (bodyContent), which will be changed to second
        let canvas1 = document.createElement("canvas")
        divBodyContent.appendChild(canvas1)
        toSecondElement.insertBefore(canvas1, toSecondElement.firstChild)
 
   
        function getAjax() {

                let xhttp = new XMLHttpRequest()
                xhttp.open("GET", "https://canvasjs.com/services/data/datapoints.php", true)
                xhttp.onreadystatechange = function() {
                    if (xhttp.readyState == 4 && xhttp.status == 200) {
                        let data = JSON.parse(xhttp.responseText) //this has created several arrays inside "data"
                        console.log(data)

                        // get data (data labels gets index 0 of arrays inside "data"; and data info gets index 1 of same arrays)
                        let dataLabels = data.map(function(e) {
                            return e[0]
                        })
                        
                        let dataInfo = data.map(function(e) {
                            return e[1]
                        })
                                    
                        console.log(dataLabels)
                        console.log(dataInfo)

                        // create chart
                        let ctxAjax = canvas1.getContext("2d")
                        let chartAjax = new Chart(ctxAjax, {
                            type: "line",
                            data: {
                                labels: dataLabels,
                                datasets: [{
                                    label: "Live Update",
                                    data: dataInfo,
                                    backgroundColor: "rgb(19, 33, 127)",
                                    borderWidth: 3
                                }]                  
                            }                      
                        })
                    }   
                 }
                 xhttp.send()        
            } 
            setInterval(function(){getAjax()}, 1000)  
            getAjax()
        


    // ------------------------------------- CANVAS 2 - MAIN STATISTICAL FINDINS -------------------------------------
        let table1 = document.getElementById("table1")
        let canvas2 = document.createElement("canvas")
        divBodyContent.appendChild(canvas2)
        contentText.insertBefore(canvas2, table1)

        // get infos
        let countries_T1 = [] // countries
        let titlesLabel_T1 = [] // years 

        let dataLabel1_T1 = [] // 2002 data
        let dataLabel2_T1 = [] // 2003 data
        let dataLabel3_T1 = [] // 2004 data
        let dataLabel4_T1 = [] // 2005 data
        let dataLabel5_T1 = [] // 2006 data
        let dataLabel6_T1 = [] // 2007 data
        let dataLabel7_T1 = [] // 2008 data
        let dataLabel8_T1 = [] // 2009 data
        let dataLabel9_T1 = [] // 2010 data
        let dataLabel10_T1 = [] // 2011 data
        let dataLabel11_T1 = [] // 2012 data

            for (let h = 2; h < table1.rows[1].cells.length; h++) { // years --> row gets all cells
                titlesLabel_T1.push(table1.rows[1].cells[h].innerHTML)
            } 

            for (let i = 2; i < table1.rows.length; i++) {  // rest of data --> row for each columns
                countries_T1.push(table1.rows[i].cells[1].innerHTML)
                dataLabel1_T1.push(table1.rows[i].cells[2].innerHTML)
                dataLabel2_T1.push(table1.rows[i].cells[3].innerHTML)
                dataLabel3_T1.push(table1.rows[i].cells[4].innerHTML)
                dataLabel4_T1.push(table1.rows[i].cells[5].innerHTML)
                dataLabel5_T1.push(table1.rows[i].cells[6].innerHTML)
                dataLabel6_T1.push(table1.rows[i].cells[7].innerHTML)
                dataLabel7_T1.push(table1.rows[i].cells[8].innerHTML)
                dataLabel8_T1.push(table1.rows[i].cells[9].innerHTML)
                dataLabel9_T1.push(table1.rows[i].cells[10].innerHTML)
                dataLabel10_T1.push(table1.rows[i].cells[11].innerHTML)
                dataLabel11_T1.push(table1.rows[i].cells[12].innerHTML)
            }
        
        // replace , for . on each item of the DATA ARRAYS
            function replaceArrays(array, newArray) {
                array.forEach(replace)
                function replace(element) {
                    newArray.push(element.replace("," , "."))
                }
            }
           
            newdata1 = []
            replaceArrays(dataLabel1_T1, newdata1)
            newdata2 = []
            replaceArrays(dataLabel2_T1, newdata2)
            newdata3 = []
            replaceArrays(dataLabel3_T1, newdata3)
            newdata4 = []
            replaceArrays(dataLabel4_T1, newdata4)
            newdata5 = []
            replaceArrays(dataLabel5_T1, newdata5)
            newdata6 = []
            replaceArrays(dataLabel6_T1, newdata6)
            newdata7 = []
            replaceArrays(dataLabel7_T1, newdata7)
            newdata8 = []
            replaceArrays(dataLabel8_T1, newdata8)
            newdata9 = []
            replaceArrays(dataLabel9_T1, newdata9)
            newdata10 = []
            replaceArrays(dataLabel10_T1, newdata10)
            newdata11 = []
            replaceArrays(dataLabel11_T1, newdata11)


        //creating chart
        let cxtTable1 = canvas2.getContext("2d")
        let chartTable1 = new Chart(cxtTable1, {
            type: "bar",
            data: {
                labels: countries_T1,
                datasets: [
                    {
                        label: titlesLabel_T1[0],
                        data: newdata1,
                        backgroundColor: "rgb(219, 43, 57)",
                        borderWidth: 3
                    },
                    {
                        label: titlesLabel_T1[1],
                        data: newdata2,
                        backgroundColor: "rgb(240, 206, 160)",
                        borderWidth: 3
                    },
                    {
                        label: titlesLabel_T1[2],
                        data: newdata3,
                        backgroundColor: "rgb(130, 47, 75)",
                        borderWidth: 3
                    },
                    {
                        label: titlesLabel_T1[3],
                        data: newdata4,
                        backgroundColor: "rgb(162, 142, 113)",
                        borderWidth: 3
                    },
                    {
                        label: titlesLabel_T1[4],
                        data: newdata5,
                        backgroundColor: "rgb(41, 51, 92)",
                        borderWidth: 3
                    },
                    {
                        label: titlesLabel_T1[5],
                        data: newdata6,
                        backgroundColor: "rgb(83, 77, 65)",
                        borderWidth: 3
                    },
                    {
                        label: titlesLabel_T1[6],
                        data: newdata7,
                        backgroundColor: "rgb(243, 167, 18)",
                        borderWidth: 3
                    },
                    {
                        label: titlesLabel_T1[7],
                        data: newdata8,
                        backgroundColor: "rgb(130, 47, 75)",
                        borderWidth: 3
                    },
                    {
                        label: titlesLabel_T1[8],
                        data: newdata9,
                        backgroundColor: "rgb(44, 199, 219)",
                        borderWidth: 3
                    },
                    {
                        label: titlesLabel_T1[9],
                        data: newdata10,
                        backgroundColor: "rgb(161, 178, 240)",
                        borderWidth: 3
                    },
                    {
                        label: titlesLabel_T1[10],
                        data: newdata11,
                        backgroundColor: "rgb(47, 130, 119)",
                        borderWidth: 3
                    }
                ]
            },
            options: {
                legend: {
                    position: 'right',
                    
                }
            }
        })  


    // ---------------------------------------------- CANVAS 3 - HOMICIDE ----------------------------------------------- 
        let table2 = document.getElementById("table2")
        let canvas3 = document.createElement("canvas")
        divBodyContent.appendChild(canvas3)
        contentText.insertBefore(canvas3, table2)

        // get infos
        let countries_T2 = [] // countries
        let titleLabel1_T2 // 2007-09 
        let dataLabel1_T2 = [] // 2007-09 data
        let titleLabel2_T2 // 2010-12
        let dataLabel2_T2 = [] // 2010-12 data

            for (let j = 1; j < table2.rows.length; j++) {
                countries_T2.push(table2.rows[j].cells[1].innerHTML)
                titleLabel1_T2 = table2.rows[0].cells[2].innerHTML
                dataLabel1_T2.push(table2.rows[j].cells[2].innerHTML)
                titleLabel2_T2 = table2.rows[0].cells[3].innerHTML
                dataLabel2_T2.push(table2.rows[j].cells[3].innerHTML)
            }  


        //creating chart
        let cxtTable2 = canvas3.getContext("2d")
        let chartTable2 = new Chart(cxtTable2, {
            type: "bar",
            data: {
                labels: countries_T2,
                datasets: [
                    {
                        label: titleLabel1_T2,
                        data: dataLabel1_T2,
                        backgroundColor: "rgb(224, 92, 101)",
                        borderWidth: 1
                    },
                    {
                        label: titleLabel2_T2,
                        data: dataLabel2_T2,
                        backgroundColor: "rgb(210, 32, 10)",
                        borderWidth: 1
                    }
                ]
            }
        }) 

}


