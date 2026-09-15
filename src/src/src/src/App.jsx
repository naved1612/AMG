import { useState } from "react";

const workers = [
  { id: 1, name: "Rahim", balance: 2450 },
  { id: 2, name: "Salim", balance: 1820 },
  { id: 3, name: "Imran", balance: 3100 }
];

function App() {
  const [page, setPage] = useState("home");

  return (
    <div className="app">
      <header>
        <h1>🏭 Amaan Garment</h1>
        <p>Karkhana Diary</p>
      </header>

      <main>
        {page === "home" && (
          <>
            <div className="cards">
              <button onClick={() => setPage("tailors")}>
                👨‍🔧
                <span>Tailors</span>
              </button>

              <button onClick={() => setPage("work")}>
                📒
                <span>Kaam</span>
              </button>

              <button onClick={() => setPage("stock")}>
                📦
                <span>Stock</span>
              </button>

              <button onClick={() => setPage("accounts")}>
                💰
                <span>Hisab</span>
              </button>
            </div>

            <section className="section">
              <h2>Workers</h2>

              {workers.map((worker) => (
                <div className="worker" key={worker.id}>
                  <div>
                    <strong>{worker.name}</strong>
                    <small>Worker</small>
                  </div>

                  <strong>₹{worker.balance.toLocaleString("en-IN")}</strong>
                </div>
              ))}
            </section>
          </>
        )}

        {page !== "home" && (
          <section className="section">
            <button className="back" onClick={() => setPage("home")}>
              ← Back
            </button>

            <h2>
              {page === "tailors" && "👨‍🔧 Tailors"}
              {page === "work" && "📒 Kaam"}
              {page === "stock" && "📦 Stock"}
              {page === "accounts" && "💰 Hisab"}
            </h2>

            <p className="coming">
              Ye section abhi ban raha hai. Next step mein iska
              complete working system add karenge.
            </p>
          </section>
        )}
      </main>
    </div>
  );
}

export default App;
