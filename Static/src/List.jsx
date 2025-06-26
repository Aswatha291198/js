import ItemList from "./ItemList";

export default function List() {
  let stationary = [
    { id: "1", name: "Pen" },
    { id: 2, name: "Pencil" },
    { id: 3, name: "Eraser" },
    { id: 4, name: "Ruler" },
  ];

  let list2 = [
    { id: 1, name: "Hello" },
    { id: 2, name: "Hi" },
    { id: 3, name: "bi" },
  ];

  return (
    <div>
      <h2>List Items</h2>
      <ItemList list={stationary} />
      {/* <ItemList list={list2} /> */}
    </div>
  );
}
