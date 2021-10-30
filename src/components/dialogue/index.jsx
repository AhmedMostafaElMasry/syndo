import { useState } from "react";
import RangeSlider from "../slider";
import styles from "./styles.module.scss";

export default function Dialogue({ setOpenPopup }) {
  const [isInvested, setIsInvested] = useState(false);
  const [isPaied, setIsPaied] = useState(false);
  return (
    <>
      {!isPaied ? (
        <div className={styles.container}>
          <div className={styles.left}>
            <div className={styles.leftSide}>
              <div className={styles.step1}></div>
              <div className={styles.line}></div>
              <div
                className={styles.step2}
                style={isInvested ? { backgroundColor: "#000000" } : null}
              ></div>
            </div>
            <div className={styles.rightSide}>
              <span className={styles.active}>Investment</span>
              <span className={isInvested ? styles.active : null}>Pay</span>
            </div>
          </div>
          {!isInvested ? (
            <div className={styles.center}>
              <h3>Investment Request</h3>
              <div className={styles.item}>
                <span className={styles.title}>Current Available Balance</span>
                <span className={styles.text}>50,000 EGP</span>
              </div>
              <div className={styles.item}>
                <span className={styles.title}>Amount (required)</span>
                <RangeSlider />
              </div>
              <div className={styles.item}>
                <span className={styles.title}>Expected ROI</span>
                <span className={styles.text}>100 EGP</span>
              </div>
              <div className={styles.item}>
                <span className={styles.title}>Risk Disclaimer</span>
                <span className={styles.text}>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis
                  ea ullam ipsam fugiat, omnis ratione. Nihil voluptatum neque
                  doloribus quis tenetur reprehenderit tempore.
                </span>
              </div>
              <div className={styles.checkbox}>
                <input type="checkbox" id="terms" />
                <label htmlFor="terms">
                  By clicking <span>Next</span> you agree to syndo's{" "}
                  <span>terms</span>
                </label>
              </div>
              <div className={styles.buttons}>
                <button
                  className={styles.cancel}
                  onClick={() => setOpenPopup(false)}
                >
                  Cancel
                </button>
                <button
                  className={styles.next}
                  onClick={() => setIsInvested(true)}
                >
                  Next
                </button>
              </div>
            </div>
          ) : (
            <div className={styles.center2}>
              <h3>Investment Request</h3>
              <div className={styles.amount}>
                <span>Investment Amount</span>
                <span>500 EGP</span>
              </div>
              <p>
                Please enter your card details to secure your investment. <br />
                Cash will only be deducted on campaign completion.
              </p>
              <form onSubmit={() => setIsPaied(true)}>
                <div className={styles.inputWrapper}>
                  <label htmlFor="card-name">Cardholder name</label>
                  <input type="text" id="card-name" placeholder="John Doe" />
                </div>
                <div className={styles.inputWrapper}>
                  <label htmlFor="card-number">Card number</label>
                  <input
                    type="password"
                    id="card-number"
                    placeholder="**** **** ***** ****"
                  />
                </div>
                <div className={styles.inputWrapper}>
                  <label htmlFor="expire">Expire date</label>
                  <input type="text" id="expire" placeholder="23/12" />
                </div>
                <div className={styles.inputWrapper}>
                  <label htmlFor="cvv">CVV</label>
                  <input type="password" id="cvv" placeholder="***" />
                </div>
                <div className={styles.checkbox}>
                  <input type="checkbox" id="save" />
                  <label htmlFor="save">Save card for future investments</label>
                </div>
                <div className={styles.checkbox}>
                  <input type="checkbox" id="terms" />
                  <label htmlFor="terms">
                    By clicking <span>Invest</span> you agree to syndo's{" "}
                    <span>terms</span>
                  </label>
                </div>
                <div className={styles.buttons}>
                  <button
                    className={styles.cancel}
                    onClick={() => setIsInvested(false)}
                  >
                    Back
                  </button>
                  <button
                    className={styles.next}
                    onClick={() => setIsPaied(true)}
                  >
                    Invest 500 EGP
                  </button>
                </div>
              </form>
            </div>
          )}
          <div className={styles.right}>
            <div className={styles.box}>
              <h3>Post Summary</h3>
              <div>
                <span>Post</span>
                <span className={styles.bold}>Post Title</span>
                <span>Tenor</span>
                <span className={styles.bold}>2 Months</span>
                <span>total raised</span>
                <span className={styles.bold}>
                  50,000 EGP (40%) of 250,000 EGP
                </span>
                <span>Expected Net ROI</span>
                <span className={styles.bold}>2%</span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.container2}>
          <h3>Thank you!</h3>
          <div className={styles.wrapper}>
            <p className={styles.text}>
              Your investment request is created successfully
            </p>
            <div className={styles.item}>
              <span className={styles.title}>Investment Ref</span>
              <span className={styles.itemText}>#SYINV000001</span>
            </div>
            <div className={styles.item}>
              <span className={styles.title}>Investment Amount</span>
              <span className={styles.itemText}>500 EGP</span>
            </div>
            <div className={styles.item}>
              <span className={styles.title}>Post</span>
              <span className={styles.itemText}>Post Title</span>
            </div>
            <div className={styles.item}>
              <span className={styles.title}>Investment Agreements</span>
              <span className={styles.textDownload}>Download here</span>
            </div>
            <p>
              Investment amount will be deducted automatically on post
              completion, you can cancel your investment before completion from{" "}
              <span>here</span>
            </p>
            <button onClick={() => setOpenPopup(false)}>Close</button>
          </div>
        </div>
      )}
    </>
  );
}
