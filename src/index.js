import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する。
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  addIncompleteItem(inputText);
};

// 未完了リストに要素を追加
const addIncompleteItem = (inputText) => {
  /**
   * <div class="list-row">
   *     <li>内容</li>
   *     <button>完了</button>
   *     <button>削除</button>
   * </div>
   */
  // divタグ生成
  const div = document.createElement("div");
  div.className = "list-row";

  // liタグ生成
  const li = document.createElement("li");
  li.innerText = inputText;
  // button(完了)タグ生成
  const complateButton = document.createElement("button");
  complateButton.innerText = "完了";
  complateButton.addEventListener("click", () => {
    // 押された完了ボタンの親タグ(div)を未完了リストから削除
    const completeTarget = complateButton.parentNode;
    deleteItem(completeTarget, "incomplete-list");
    // 完了リストに追加
    addComleteItem(completeTarget);
  });
  // button(削除)タグ生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親タグ(div)を未完了リストから削除
    deleteItem(deleteButton.parentNode, "incomplete-list");
  });

  // divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(complateButton);
  div.appendChild(deleteButton);

  // 未完了のリストに追加
  addItem(div, "incomplete-list");
};

const addComleteItem = (target) => {
  // 親タグ(div)を完了リストに追加
  /**
   * <div class="list-row">
   *     <li>内容</li>
   * </div>
   */
  const completeText = target.firstElementChild.innerText;
  target.textContent = null;
  const li = document.createElement("li");
  li.innerText = completeText;
  const backButton = document.createElement("button");
  backButton.innerText = "戻す";
  backButton.addEventListener("click", () => {
    // 押された戻すボタンの親タグ(div)を未完了リストから削除
    const backTarget = backButton.parentNode;
    deleteItem(backTarget, "complete-list");
    // 未完了リストに追加
    addIncompleteItem(completeText, "incomplete-list");
  });
  // divタグの子要素に各要素を設定
  target.appendChild(li);
  target.appendChild(backButton);

  // 完了のリストに追加
  addItem(target, "complete-list");
};

// リストから指定の要素を削除
const deleteItem = (item, targetListName) => {
  document.getElementById(targetListName).removeChild(item);
};

// リストへ指定の要素を追加
const addItem = (item, targetListName) => {
  document.getElementById(targetListName).appendChild(item);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
