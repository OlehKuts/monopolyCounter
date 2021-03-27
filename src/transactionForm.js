import React, { useEffect, useState } from "react";
import "./styles.css";
import { propertyList, paymentsList } from "./database";
import { PropertyCard } from "./propertyCard";

export const TransactionForm = ({ onAdd, onNewTransaction, players }) => {
  const [showForm, setShowForm] = useState(false);
  const nameList = players.map((p) => p.name);
  const [payer, setPayer] = useState(nameList[0]);
  const onPayerChange = (event) => {
    setPayer(event.target.value);
    setActionProperty(propertyList.filter((p) => p.name === curProperty)[0]);
  };
  const [receiver, setReceiver] = useState(nameList[0]);
  const onReceiverChange = (event) => {
    setReceiver(event.target.value);
    setActionProperty(propertyList.filter((p) => p.name === curProperty)[0]);
  };
  const [curProperty, setCurProperty] = useState(propertyList[0].name);
  const onCurPropertyChange = (e) => {
    setCurProperty(e.target.value);
  };
  const [curPayType, setCurPayType] = useState(paymentsList[0]);
  const onCurPayTypeChange = (e) => {
    setCurPayType(e.target.value);
  };
  const [sum, setSum] = useState(200);
  const onSumChange = (e) => {
    setSum(e.target.value);
  };
  const [actionProperty, setActionProperty] = useState(propertyList[0]);
  const onSubmit = (e) => {
    e.preventDefault();
    if (sum === "") return;
    if (payer === receiver) return;
    if (isNaN(sum)) return;
    onAdd(payer, receiver, sum);
    onNewTransaction(payer, receiver, sum);
    setPayer(nameList[0]);
    setReceiver(nameList[0]);
    setSum(200);
  };
  useEffect(() => {
    setActionProperty(propertyList.filter((p) => p.name === curProperty)[0]);
  }, [curProperty]);
  useEffect(() => {
    setSum(
      propertyList.filter((p) => p.name === curProperty)[0].payments[curPayType]
    );
  }, [curPayType, curProperty]);
  return (
    <>
      {!showForm && (
        <div>
          <button onClick={() => setShowForm(true)} className="btn-start">
            {" "}
            Start Game
          </button>{" "}
        </div>
      )}
      {showForm && (
        <div>
          <form onSubmit={onSubmit}>
            <div>
              {" "}
              <select
                value={curProperty}
                onChange={onCurPropertyChange}
                className="propertyList"
              >
                {propertyList.map((item, idx) => (
                  <option key={idx} value={item.name}>
                    {item.name}
                  </option>
                ))}
              </select>
              <select value={curPayType} onChange={onCurPayTypeChange}>
                {paymentsList.map((item, idx) => (
                  <option key={idx} value={idx}>
                    {item.name}
                  </option>
                ))}
              </select>
              <select value={payer} onChange={onPayerChange}>
                {nameList.map((item, idx) => (
                  <option key={idx} value={item}>
                    {item}
                  </option>
                ))}
              </select>
              <select value={receiver} onChange={onReceiverChange}>
                {nameList.map((item, idx) => (
                  <option key={idx} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
            <div>
              {" "}
              <input
                value={sum}
                onChange={onSumChange}
                placeholder="enter sum..."
                className="sum"
              />
              <input type="submit" value="Submit" className="submit" id="pay" />
            </div>
          </form>
        </div>
      )}
      <PropertyCard property={actionProperty} />
      <div></div>
    </>
  );
};
