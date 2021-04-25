<script>
  import { dataset_dev } from "svelte/internal";
  import { db } from "./firebase";
  import ModaladdItem from "./ModaladdItem.svelte";
  import ModaleditItem from "./ModaleditItem.svelte";

  let arrlist = [];

  let addItembutton = "add item";
  let showModaladdItem = false;
  let showModaleditItem = false;
  let idlist = null;

  db.collection("itemlist").orderBy("item", "asc").onSnapshot((snapData) => {
    arrlist = snapData.docs;
  });

  function addItemModebox() {
    showModaladdItem = !showModaladdItem;
  }

  function edittemModebox(list) {
    idlist = list;
    showModaleditItem = !showModaleditItem;
  }
</script>

<ModaladdItem {showModaladdItem} on:click={addItemModebox} />
<ModaleditItem {idlist} {showModaleditItem} on:click={edittemModebox(idlist)} />

<main>
  <h1>Svelte Item List</h1>

  <p>
    <b>Svelte</b> with Firebase Ftirestore -create -read -update -delete in realtime
  </p>

  <div class="addItemMode">
    <button on:click={addItemModebox}>{addItembutton}</button>
  </div>

  <table>
    <tr>
      <th> name item </th>
      <th> quantity </th>
      <th></th>
    </tr>
    {#each arrlist as listItem}
      <tr>
        <td>
          {listItem.data().item}
        </td>
        <td>
          {listItem.data().quantity}
        </td>
        <td>
          <button class="editbutton" on:click={edittemModebox(listItem.id)}
            >edit</button
          >
        </td>
      </tr>
    {/each}
  </table>
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 400px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 400;
    margin-bottom: 6px;
  }

  p {
    font-weight: 400;
    width: 300px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 40px;
    color: DimGray;
  }

  table {
    width: 80%;
    margin-left: auto;
    margin-right: auto;
  }

  th {
    color: white;
    background-color: #309975;
  }

  td {
    color: gray;
    border-bottom: 2px solid #DAD873;
  }

  button {
    background-color: #454D66;
    border: none;
    padding: 0.7em;
    color: whitesmoke;
    font-weight: 500;
    border-radius: 0.2em;
  }

  .editbutton {
    background-color: white;
    color: #58B368;
    text-decoration: underline;
  }

  .addItemMode {
    margin: 12px;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
