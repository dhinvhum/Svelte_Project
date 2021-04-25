<script>
  import { db } from "./firebase";

  export let showModaleditItem;
  export let idlist;

  let arrlist = [];

  let newItemText = "";
  let newQuantity = "";

  db.collection("itemlist").onSnapshot((snapData) => {
    arrlist = snapData.docs;
  });

  function deleteItem(itemId) {
    db.collection("itemlist").doc(itemId).delete();
    showModaleditItem = false;
    alert("delete an item already");
  }

  function updateItem(itemId, newItemValue, newQuanValue) {
    db.collection("itemlist").doc(itemId).update({
      item: newItemValue,
      quantity: newQuanValue,
    });
    alert("update an item already");
    showModaleditItem = false;
  }
</script>

<link
  href="https://fonts.googleapis.com/icon?family=Material+Icons"
  rel="stylesheet"
/>

{#if showModaleditItem}
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

      <div>
        {#each arrlist as id}
          {#if id.id == idlist}
            <div class="centercol">
              <div class="colinput">
                <div>
                  <span>item</span>
                </div>
                <input
                  value={id.data().item}
                  ondblclick='this.value=""'
                  bind:this={newItemText}
                />
              </div>
              <div class="colinput">
                <div>
                  <span>quantity</span>
                </div>
                <input
                  type="number"
                  value={id.data().quantity}
                  ondblclick='this.value=""'
                  bind:this={newQuantity}
                />
              </div>
            </div>
          {/if}
        {/each}
        <div class="groupbutton">
          <button
            class="updatebutton"
            on:click={updateItem(idlist, newItemText.value, newQuantity.value)}
            >update</button
          >
          <button class="canclebutton" on:click={deleteItem(idlist)}
            >delete</button
          >
        </div>
      </div>
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
    max-width: 400px;
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
    margin: 0;
  }
  input {
    border-radius: 4px;
    margin-top: 5px;
    margin-bottom: 15px;
  }
  .updatebutton {
    margin-top: 10px;
    background-color: #309975;
    border: none;
    padding: 0.7em;
    color: whitesmoke;
    font-weight: 500;
    border-radius: 0.2em;
  }
  .canclebutton {
    margin-top: 10px;
    background-color: #454d66;
    border: none;
    padding: 0.7em;
    color: whitesmoke;
    font-weight: 500;
    border-radius: 0.2em;
  }

  button {
    margin: 10px;
  }

  .groupbutton {
    margin-top: 12px;
  }

  p {
    margin-top: 0;
    margin-bottom: 12px;
    color: DimGray;
  }

  .centercol {
    margin-left: auto;
    margin-right: auto;
    width: 50%;
  }

  .colinput {
    text-align: left;
  }

  span {
    margin-top: 12px;
    color: gray;
    font-size: 12px;
    font-weight: 900;
  }
</style>
