<script>
  import { db } from "./firebase";

  export let showModalsearch;
  export let searchText;

  let arrlist = [];

  db.collection("itemlist")
    .orderBy("item", "asc")
    .onSnapshot((snapData) => {
      arrlist = snapData.docs;
    });
</script>

<link
  href="https://fonts.googleapis.com/icon?family=Material+Icons"
  rel="stylesheet"
/>

{#if showModalsearch}
  <div class="backdrop">
    <div class="modal">
      <div class="closebutton">
        <button id="closebutton" class="large material-icons" on:click
          >cancel</button
        >
      </div>

      <div>
        <p><b>update an item</b></p>
      </div>

      <table>
        <tr>
          <th> name item </th>
          <th> quantity </th>
        </tr>
        {#each arrlist as listItem}
          {#if searchText == listItem.data().item}
            <tr>
              <td>
                {listItem.data().item}
              </td>
              <td>
                {listItem.data().quantity}
              </td>
            </tr>
          {/if}
        {/each}
      </table>
    </div>
  </div>
{/if}

<style>
  .backdrop {
    width: 100%;
    height: 100%;
    position: fixed;
    background: rgba(0, 0, 0, 0.8);
  }
  .modal {
    padding: 12px;
    border-radius: 10px;
    max-width: 50%;
    margin: 15% auto;
    text-align: center;
    background: white;
  }
  .closebutton {
    text-align: right;
  }
  #closebutton {
    background-color: white;
    border: none;
    margin-bottom: 0;
  }
  table {
    width: 90%;
    margin-left: auto;
    margin-right: auto;
  }

  th {
    color: white;
    background-color: #309975;
  }

  td {
    color: gray;
    border-bottom: 2px solid #dad873;
  }

  p {
    margin-top: 0;
    margin-bottom: 12px;
    color: DimGray;
  }
</style>
