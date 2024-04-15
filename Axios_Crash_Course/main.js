// AXIOS GLOBALS
axios.defaults.headers.common["X-Auth-Token"] =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";

// GET REQUEST
function getTodos() {
	//console.log('GET Request');

	// axios({
	//     method: 'get',
	//     url: 'http://jsonplaceholder.typicode.com/todos',
	//     params: {
	//         _limit:5
	//     }
	// })
	// //.then(res => console.log(res.data))
	// .then(res => showOutput(res))
	// .catch(err => console.error(err));

	axios
		.get("http://jsonplaceholder.typicode.com/todos", { params: { _limit: 5 }, timeout:5000 })
		.then((res) => showOutput(res))
		.catch((err) => console.error(err));
}

// POST REQUEST
function addTodo() {
	//console.log('POST Request');

	// axios({
	//     method: 'post',
	//     url: 'http://jsonplaceholder.typicode.com/todos',
	//     data: {
	//         title: 'New Todo',
	//         completed: false
	//     }
	// })
	// .then(res => showOutput(res))
	// .catch(err => console.error(err));

	axios
		.post("http://jsonplaceholder.typicode.com/todos", {
			title: "New Todo",
			completed: false,
		})
		.then((res) => showOutput(res))
		.catch((err) => console.error(err));
}

// PUT/PATCH REQUEST
function updateTodo() {
	//console.log('PUT/PATCH Request');

	axios
		//.put('http://jsonplaceholder.typicode.com/todos/1', {    //Put will replace all data (userId is NOT visible)
		.patch("http://jsonplaceholder.typicode.com/todos/1", {
			//Patch will update current data (userId is visible)
			title: "Updated Todo",
			completed: true,
		})
		.then((res) => showOutput(res))
		.catch((err) => console.error(err));
}

// DELETE REQUEST
function removeTodo() {
	//console.log('DELETE Request');

	axios
		.delete("http://jsonplaceholder.typicode.com/todos/1")
		.then((res) => showOutput(res))
		.catch((err) => console.error(err));
}

// SIMULTANEOUS DATA
function getData() {
	//console.log('Simultaneous Request');

	axios
		.all([
			axios.get("http://jsonplaceholder.typicode.com/todos?_limit=5"),
			axios.get("http://jsonplaceholder.typicode.com/posts?_limit=5"),
		])
		// .then(res => {
		//     console.log(res[0]);
		//     console.log(res[1]);
		//     showOutput(res[1]);
		// })
		.then(axios.spread((todos, posts) => showOutput(posts)))
		.catch((err) => console.error(err));
}

// CUSTOM HEADERS
function customHeaders() {
	//console.log("Custom Headers");

	const config = {
		headers: {
			"Content-Type": "application/json",
			Authorization: "sometoken",
		},
	};

	axios
		.post(
			"http://jsonplaceholder.typicode.com/todos",
			{
				title: "New Todo",
				comleted: false,
			},
			config
		)
		.then((res) => showOutput(res))
		.catch((err) => console.error(err));
}

// TRANSFORMING REQUESTS & RESPONSES
function transformResponse() {
	//console.log("Transform Response");

	const options = {
		method: "post",
		url: "http://jsonplaceholder.typicode.com/todos",
		data: {
			title: "Hello World",
		},
		transformResponse: axios.defaults.transformResponse.concat((data) => {
			data.title = data.title.toUpperCase();
			return data;
		}),
	};
	axios(options).then((res) => showOutput(res));
}

// ERROR HANDLING
function errorHandling() {
	//console.log("Error Handling");

	axios
		.get("http://jsonplaceholder.typicode.com/todoss", {
			// validateStatus: function(status){
			// 	return status < 500; // Reject only if status is greater or equal to 500
			// }
		})
		.then((res) => showOutput(res))
		.catch((err) => {
			if (err.response) {
				// Server responded with status other than status 200
				console.error(err.response.data);
				console.error(err.response.status);
				console.error(err.response.headers);
			} else if (err.request) {
				//Request was made but no response
				console.error(err.request);
			} else {
				console.error(err.message);
			}
		});
}

// CANCEL TOKEN
function cancelToken() {
	//console.log("Cancel Token");

	const source = axios.CancelToken.source();

	axios
		.get("http://jsonplaceholder.typicode.com/todos?_limit=5", {
			cancelToken: source.token,
		})
		.then((res) => showOutput(res))
		.catch((thrown) => {
			if (axios.isCancel(thrown)) {
				console.log("Request Cancelled", thrown.message);
			}
		});

	if (true) {
		source.cancel("Request Cancelled!!!");
	}
}

// INTERCEPTING REQUESTS & RESPONSES
axios.interceptors.request.use(
	(config) => {
		console.log(
			`${config.method.toUpperCase()} request sent to ${
				config.url
			} at ${new Date().getTime()}`
		);

		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);

// AXIOS INSTANCES
const axiosInstance = axios.create({
	//Other Custom Settings
	baseURL: "http://jsonplaceholder.typicode.com",
});
//axiosInstance.get("/comments").then((res) => showOutput(res));

// Show output in browser
function showOutput(res) {
	document.getElementById("res").innerHTML = `
    <div class="card card-body mb-4">
      <h5>Status: ${res.status}</h5>
    </div>
  
    <div class="card mt-3">
      <div class="card-header">
        Headers
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.headers, null, 2)}</pre>
      </div>
    </div>
  
    <div class="card mt-3">
      <div class="card-header">
        Data
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.data, null, 2)}</pre>
      </div>
    </div>
  
    <div class="card mt-3">
      <div class="card-header">
        Config
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.config, null, 2)}</pre>
      </div>
    </div>
  `;
}

// Event listeners
document.getElementById("get").addEventListener("click", getTodos);
document.getElementById("post").addEventListener("click", addTodo);
document.getElementById("update").addEventListener("click", updateTodo);
document.getElementById("delete").addEventListener("click", removeTodo);
document.getElementById("sim").addEventListener("click", getData);
document.getElementById("headers").addEventListener("click", customHeaders);
document
	.getElementById("transform")
	.addEventListener("click", transformResponse);
document.getElementById("error").addEventListener("click", errorHandling);
document.getElementById("cancel").addEventListener("click", cancelToken);
