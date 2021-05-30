import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得
  const inputText = document.getElementById("add-text").value;
  // テキストボックスの値を初期化
  document.getElementById("add-text").value = "";
  createIncompleteList(inputText);
};
// 未完了リストから指定の要素を削除する関数を定義
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

// 未完了リストに追加する関数
const createIncompleteList = (text) => {
  // div生成
  const div = document.createElement("div");
  div.className = "list-row";

  // pタグ生成
  const p = document.createElement("p");
  p.innerText = text;

  // ボタンタグ生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // liタグの削除編

    // divタグの指定
    const completeDiv = completeButton.parentNode;
    // liタグの指定
    const completeTarget = completeDiv.parentNode;
    // liタグの削除
    deleteFromIncompleteList(completeTarget);

    // 新要素の構成編
    // TODO内容テキストを取得
    const text = completeDiv.firstElementChild.innerText;
    // divタグを初期化
    completeDiv.textContent = null;
    // divタグを生成
    div.className = "list-row";
    p.className = "list-title";
    p.innerText = text;
    // 戻すボタン生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";

    // 戻るボタンを押したときに未完了に戻す処理
    backButton.addEventListener("click", () => {
      // 押された戻すボタンの親タグの親タグを完了リストから削除
      // divタグの指定
      const deleteDiv = backButton.parentNode;
      // liタグの指定
      const deleteTarget = deleteDiv.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);
      // テキスト取得
      const text = deleteDiv.firstElementChild.innerText;
      createIncompleteList(text);
    });

    // liタグの子要素に各要素を設定
    completeTarget.appendChild(div);
    completeDiv.appendChild(p);
    completeDiv.appendChild(backButton);
    console.log(completeTarget);
    // 完了リストに追加
    document.getElementById("complete-list").appendChild(completeTarget);
  });
  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = "削除";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親タグを未完了リストから削除
    const deleteDiv = deleteButton.parentNode;
    const deleteTarget = deleteDiv.parentNode;
    deleteFromIncompleteList(deleteTarget);
  });
  // divタグの子要素に各要素を設定
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  // liタグ生成
  const li = document.createElement("li");
  li.appendChild(div);
  // 未完了リストに追加
  document.getElementById("incomplete-list").appendChild(li);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
