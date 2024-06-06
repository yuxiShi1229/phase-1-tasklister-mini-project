  /*
  document.addEventListener("DOMContentLoaded", () => {
    // your code here
    const form = document.querySelector("#create-task-form");
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const taskDescription = document.querySelector("#new-task-description").value;
      const listItem = document.createElement("li");
      listItem.textContent = taskDescription;
      const tasksList = document.querySelector("#tasks");
      tasksList.append(listItem);
      document.querySelector("#new-task-description").value = "";
    });
  })
  */
  



  /*
objective: Have a to-do app, where users can submit tasks and view them in a list

USER STORIES
As a user, I want to...
1. ...type a task into the form.
2. ...submit the form.
3. ...see the task I've submitted in the DOM (i.e. the list)

BRAINSTORIES
1. Make sure there's <form> with an <input> where the user can type their task.
2. Make sure the <form> has a submit button (i.e. <input type="submit">) for submitting tasks.
3. Add a "submit" event handler to the <form>.
4. Prevent the default behavior of a form submission (i.e. the page redirecting to another page)
5. On "submit", create an <li> element with  a textContent of the <form>'s <input> value and append it to #tasks.

*/



// Add a "submit" event listener to the form.
document.querySelector("form").addEventListener("submit", (event) => { 
  // Prevent the default behavior of a "submit" event.
  event.preventDefault();
  console.log("The form was submitted");
  const li = document.createElement("li");
  console.log(event); // An object with tons of properties raised to the "submit" event that just occurred.
  console.log(event.target); //The target of the "submit" event, i.e. the <form>
  console.log(event.target.task.value); // Since the target is a <form> .task gives us the <input name"task"> in that <form>.
  // Set the text of the <li> element to the <input> value.
  li.textContent = event.target.task.value;
  // Append the <li> element to the existing <ul id="tasks">.
  document.querySelector("ul#tasks").append(li);
  //Reset the form (i.e. clear all input values).
  //event.target.task.value = "";
  event.target.reset();
})
