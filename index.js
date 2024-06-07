let input = document.querySelector("input");
let button = document.querySelector("button");
let list = document.querySelector("ul");

button.addEventListener("click", (event) => {
    event.preventDefault();

    let task = input.value;
    let li = document.createElement("li");
    let span = document.createElement("span");

    let del = document.createElement("button");
    let done = document.createElement("button");

    done.addEventListener("click", (event) => {
        event.preventDefault();
        
        span.classList.toggle("line")
    });

    del.addEventListener("click", (event) => {
        event.preventDefault();

        li.remove();
    });

    span.textContent = task;
    done.textContent = "Done";
    del.textContent = "Delete";

    done.classList.add("done")

    li.appendChild(span);
    li.appendChild(done);
    li.appendChild(del);

    list.appendChild(li);

    input.value = "";
});
