let add_btn = document.getElementById("addbtn");
let container = document.getElementById("container");

// Get saved notes
function get_json() {
  return JSON.parse(localStorage.getItem("user")) || [];
}

// Save notes
function set_json(json_file) {
  localStorage.setItem("user", JSON.stringify(json_file));
}

// Create note element
function create_element(id, content) {
  let div = document.createElement("div");
  div.className = "box";

  let textarea = document.createElement("textarea");
  textarea.id = "input";
  textarea.value = content;
  textarea.placeholder = "Enter Notes";

  let span = document.createElement("span");
  span.id = "exit";
  span.innerHTML = "&#10006;";

  div.appendChild(textarea);
  div.appendChild(span);

  // Update note on input
  textarea.addEventListener("input", () => {
    update_notes(id, textarea.value);
  });

  // Delete note
  span.addEventListener("click", () => remove(id, div));

  container.insertBefore(div, add_btn);
}

// Load all saved notes
get_json().forEach((obj) => {
  create_element(obj.id, obj.content);
});

// Add new note
function add_notes() {
  let json_file = get_json();
  let new_id = Math.floor(Math.random() * 100000);

  json_file.push({ id: new_id, content: "" });
  set_json(json_file);

  // Create immediately on screen
  create_element(new_id, "");
}

// Update notes
function update_notes(id, content) {
  let json_file = get_json();
  let note = json_file.find(obj => obj.id === id);
  if (note) {
    note.content = content;
    set_json(json_file);
  }
}

// Remove note
function remove(id, div) {
  let json_file = get_json();
  let new_file = json_file.filter(obj => obj.id !== id); // ✅ fixed
  set_json(new_file);
  div.remove();
}

// Add button click
add_btn.addEventListener("click", add_notes);
