import { useEffect, useState } from "react";
import "./App.css";
import Box from "./Box";
import uniqid from "uniqid";
import Colorbox from "./Colorbox";
import { FaPlusCircle } from "react-icons/fa";

function App() {
  const [box, setbox] = useState([]);
  const [showcolor, setshowcolor] = useState(false);
  useEffect(() => {
    console.log(localStorage.getItem.length);
    if (localStorage.getItem.length < 0) {
      return;
    } else if (localStorage.getItem.length > 0) {
      console.log(localStorage);
    }
    const newbox = localStorage.getItem("boxdata");
    console.log(newbox);
  }, []);

  function addCard(colordata) {
    setbox([
      ...box,
      {
        id: uniqid(),
        time: new Date().toLocaleString(),
        color: colordata,
        isEdit: true,
      },
    ]);
    setshowcolor(false);
  }

  const boxdelete = (id) => {
    const newbox = box.filter((ele) => {
      return ele.id !== id;
    });
    setbox(newbox);
  };

  function editChange(id) {
    const newedit = box.map((old) => {
      if (old.id === id) {
        return { ...old, isEdit: false };
      } else {
        return { ...old, isEdit: true };
      }
    });
    setbox(newedit);
  }

  return (
    <div className="App">
      <div className="box">
        <div className="leftbox">
          <div>
            <button onClick={() => setshowcolor(!showcolor)}>
              <FaPlusCircle size={40} style={{ color: "purple" }} />
            </button>

            {showcolor && <Colorbox addCard={addCard} />}
          </div>
        </div>
        {<Box box={box} boxdelete={boxdelete} editChange={editChange} />}
      </div>
    </div>
  );
}

export default App;
