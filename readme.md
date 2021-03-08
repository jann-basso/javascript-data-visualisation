#  Javascript Challenge : "Data Visualisation"
by Jann Basso

## Result
[Check here](https://jann-basso.github.io/javascript-data-visualisation/)

---
## Goal (by BeCode)

You work in the Multimedia department of one of the European Union institutions. This morning, Johnny Hasnoclew, your Project Manager, sends you on a mission: one of the in-house journalists has published a new article on the institution's website. The article in question is already integrated with an **html** / **css** / **Javascript file**.

He asks you to make it more *rich*, more *interactive*, more... *sexy* (The use of that specific adjective indicates that Johnny certainly worked in advertising before, the poor guy).

That's exactly what you're going to do, by adding two **interactive data visualisation graphics** using javascript.  These graphs will be interactive in the sense that the user can manipulate the graph, such as filtering data, or reveal detailed data when the mouse hovers over it. You are free to design the interaction in your project.

### 1. Inline data (data in the document)
In this html file, you will find two data tables. Use JavaScript to traverse the DOM to insert right above each of these tables a representation of its data in the form of an interactive graph.

### 2. Remote data, in real-time, via ajax
There are data sitting at this URL :  [https://canvasjs.com/services/data/datapoints.php](https://canvasjs.com/services/data/datapoints.php)

Retrieve the data via Ajax, and use it to insert a graph that refreshes every second, just below the main title (`h1`) of the article.

Don't hesitate to adapt the code provided in this tutorial: [Live Updating Charts from JSON API & AJAX](https://canvasjs.com/docs/charts/how-to/live-updating-javascript-charts-json-api-ajax/), but adapt it to this third-party library: [chart.js](https://www.chartjs.org/) or [ToastUi-Chart](https://ui.toast.com/tui-chart/), because this tutorial uses another (not-free) library (canvasJS).

**Important**
- If javascript is disabled, the graph does not appear. If javascript is enabled, the graph appears.
- You can't edit the html file.

-----
## Evaluation
The evaluation method chosen is a **self-evaluation** based on the following indicators:

### 1. handling of the DOM:

- [x] I was able to find the right selector to do it.
- [x] I was able to inject the graph in the right place on the page via javascript.
- [x] I was able to retrieve the html data in a format adapted to my javascript code.

### 2. Request ajax/fetch:
- [x] I was able to receive the answer from the remote server in json.
- [x] Then, I was able to build a callback function to process this data.

### 3. Use of **third party libraries**:
- [x] I was able to integrate the third-party library into my application.
- [x] I used the documentation provided by the library.
- [x] I was able to generate the 2 inline data graphs.
- [x] I was able to generate the "remote data" graph.

### 4. Problem-solving:

- [] Syntactic rigor: I was able to translate the processes I imagined into javascript syntax.
- [x] Logical thinking: Through iterations and trial and error, I was able to find a logical path that works to address the issues raised by the client's request. Specifically:
  - [x] I was able to generate the 2 inline data graphs.
	- [x]  I was able to generate the "remote data" graph.
  - [x]  I was able to build a callback function to process remote data (received via ajax).
	- [x]  I was able to make the realtime graph refresh in real time.
	- [x]  I was able to display the detailed data when I hover the mouse.

### 5. Debugging:

  - [x]  I use the console to understand what is happening and compare what I am trying to program with what the machine is doing.

### 6. Separation of concerns:

 - [x]  If I disable javascript, the user experience is satisfactory, the user has access to data and content
 - [x]  If I enable javascript, the tables are enhanced with an interactive graph.
