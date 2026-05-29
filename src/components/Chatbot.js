import React, { useState } from "react";

function Chatbot({ products }) {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);


  const getReply = (msg) => {
    msg = msg.toLowerCase();

    if (msg.includes("hello") || msg.includes("hi")) {
      return "👋 Hi! I can help you find fruits, dairy, bakery items or cheap groceries.";
    }

    if (msg.includes("cheap") || msg.includes("under 100")) {
      const cheap = products
        .filter(p => p.price <= 100)
        .map(p => p.name);

      return "💸 Cheap items under ₹100: " + cheap.join(", ");
    }

    if (msg.includes("fruit")) {
      const fruits = products
        .filter(p => p.category === "Fruits")
        .map(p => p.name);

      return "🍎 Fruits available: " + fruits.join(", ");
    }

    if (msg.includes("dairy") || msg.includes("milk")) {
      const dairy = products
        .filter(p => p.category === "Dairy")
        .map(p => p.name);

      return "🥛 Dairy products: " + dairy.join(", ");
    }

    if (msg.includes("bakery") || msg.includes("bread")) {
      const bakery = products
        .filter(p => p.category === "Bakery")
        .map(p => p.name);

      return "🍞 Bakery items: " + bakery.join(", ");
    }

    if (msg.includes("staple") || msg.includes("rice") || msg.includes("dal")) {
      const staples = products
        .filter(p => p.category === "Staples")
        .map(p => p.name);

      return "🌾 Staples: " + staples.join(", ");
    }

    const found = products.filter(p =>
      p.name.toLowerCase().includes(msg)
    );

    if (found.length > 0) {
      return "🔎 Found: " + found.map(p => p.name).join(", ");
    }

    return "🤖 Try: fruits, dairy, bakery, cheap items under 100, staples";
  };

  const send = () => {
    if (!input) return;

    const userMsg = { text: input, type: "user" };
    const botMsg = { text: getReply(input), type: "bot" };

    setMessages([...messages, userMsg, botMsg]);
    setInput("");
  };

  return (
    <>
      <div className="chat-btn" onClick={() => setOpen(!open)}>
        💬
      </div>

      {open && (
        <div className="chat-box">
          <div className="chat-header">AI Grocery Assistant 🤖</div>

          <div className="chat-body">
            {messages.map((m, i) => (
              <div key={i} className={m.type}>
                {m.text}
              </div>
            ))}
          </div>

          <div className="chat-input">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask: fruits, cheap items..."
            />
            <button onClick={send}>Send</button>
          </div>
        </div>
      )}
    </>
  );
}

export default Chatbot;
