class Table {
  constructor(title, author, contact) {
    this.title = title;
    this.author = author;
    this.contact = contact;
  }
}

class UI {
  static displayTable() {
    const StoredTable = [
      {
        title: "Book",
        author: "Nevie",
        contact: "061 167 9668",
      },
    ];
    const tables = StoredTable;
    tables.forEach((table) => UI.addTableToList(table));
  }

  static addTableToList(table) {
    const list = document.querySelector("#table-list");
    const row = document.createElement("tr");

    row.innerHTML = `
<td>${table.title}</td>
<td>${table.author}</td>
<td>${table.contact}</td>
<td><a href="#" class="btn btn-danger btn-sm delete"><i class="fas fa-trash-alt"></i></a></td>
`;
    list.appendChild(row);
  }

  static deleteTable(el) {
    if (el.classList.contains("delete")) {
      el.parentElement.parentElement.remove();
    }
  }

  static clearFields() {
    document.querySelector("#table-form").reset();
  }
}
document.addEventListener("DOMContentLoaded", UI.displayTable());

document.querySelector("#table-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const contact = document.querySelector("#contact").value;

  const table = new Table(title, author, contact);

  UI.clearFields();

  UI.addTableToList(table);
});
document.querySelector("#table-list").addEventListener("click", (e) => {
  UI.deleteTable(e.target);
});
