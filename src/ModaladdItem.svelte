<script>
  import { db } from "./firebase";
  export let showModaladdItem;
  let newItemText = "";
  let newQuantity = "";
  let invalid = { item: "", quantity: "" };

  function addItem(x, y) {
    console.log(x)
    if (x != "" && y != "") {
      db.collection("itemlist").add({
        item: x,
        quantity: y,
      });
      showModaladdItem = false;

      alert("add " + x +" already");
    }

    if (x == "") {
      invalid.item = "please input item";
    } else {
      invalid.item = "";
    }

    if (y == "") {
      invalid.quantity = "plsea input quantity";
    } else {
      invalid.quantity = "";
    }
  }
</script>

<link
  href="https://fonts.googleapis.com/icon?family=Material+Icons"
  rel="stylesheet"
/>

{#if showModaladdItem}
  <div class="backdrop">
    <div class="modal">
      <div class="closebutton">
        <button id="closebutton" class="large material-icons" on:click
          >cancel</button
        >
      </div>

      <div>
        <p><b>add an item</b></p>
      </div>

      <div class="centercol">
        <div class="colinput">
          <input placeholder={"item"} bind:this={newItemText} />
          <div>
            <span>{invalid.item}</span>
          </div>
        </div>
        <div class="colinput">
          <input type="number" placeholder={"quantity"} bind:this={newQuantity} />
          <div>
            <span>{invalid.quantity}</span>
          </div>
        </div>
      </div>
      <button class="button" on:click={addItem(newItemText.value, newQuantity.value)}
        >confirm</button
      >
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
    margin-bottom: 0;
  }
  input {
    border-radius: 4px;
    margin-top: 15px;
    margin-bottom: 5px;
  }

  .button {
    margin-top: 20px;
    background-color: #454d66;
    border: none;
    padding: 0.7em;
    color: whitesmoke;
    font-weight: 500;
    border-radius: 0.2em;
  }

  p {
    margin-top: 0;
    margin-bottom: 5px;
    color: DimGray;
  }

  span {
    font-size: 12px;
    color: Brown;
    font-weight: 900;
  }

  .colinput {
    text-align: left;
  }

  .centercol {
    margin-left: auto;
    margin-right: auto;
    width: 50%;
  }
</style>
