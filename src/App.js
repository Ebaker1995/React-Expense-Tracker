import ExpenseItem from "./components/ExpenseItem";

function App() {
  /* Vanilla Javascript
  const para = document.createElement("p");
  para.textContent = "This is visable 2";
  */
  document.getElementById("root");
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem></ExpenseItem>
      <ExpenseItem></ExpenseItem>
      <ExpenseItem></ExpenseItem>
      <ExpenseItem></ExpenseItem>
    </div>
  );
}

export default App;
