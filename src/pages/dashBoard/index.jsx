import { ItemsList } from "./listComponent";
import { AddComponent } from "./addComponent";
import "../../assets/dashBoard.css";
import { useContext, useEffect, useState } from "react";
import { ProductArray } from "../../data/ProductArray";
import { AuthContext } from "../../contexts/authContext";
import { Profile } from "./profile";
import { Navigate, useNavigate } from "react-router-dom";
import { SEO } from "../../components/SEO";
export let Dashboard = () => {
  const navigate = useNavigate();
  const { userAuth, setUserAuth } = useContext(AuthContext);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setUserAuth((prev) => ({
        ...prev,
        ...JSON.parse(user),
      }));
    } else {
      navigate("/signin");
    }
  }, []);

  const [ShownArr, setShownArr] = useState(ProductArray);
  const [emptyProduct, setemptyProduct] = useState(null);
  const [triggerEdit, setTriggerEdit] = useState(false);

  let saveAdd = (_Object) => {
    setShownArr([...ShownArr, _Object]);
  };
  let setEditObj = (_Object) => {
    setTriggerEdit(!triggerEdit);
    setemptyProduct(_Object);
  };
  let RemoveHandler = (index) => {
    let newArr = ShownArr.filter(() => {
      return true;
    });
    newArr.splice(index, 1);
    setShownArr(newArr);
  };
  let SaveEditHandler = (_Object) => {
    let newArr = ShownArr.filter(() => {
      return true;
    });
    for (let i = 0; i < newArr.length; i++)
      if (newArr[i].id == _Object.id) {
        newArr[i] = _Object;
      }
    setShownArr(newArr);
  };

  return (
    <>
      {userAuth.isAuth && userAuth.userType === "admin" ? (
        <div className="flex  flex-col md:flex-row">
          <SEO
            title={`OwlStore - ${userAuth.username}`}
            description={`${userAuth.username} dashboard`}
          />
          <div className=" md:sticky md:top-0 md:h-screen md:w-1/6">
            <AddComponent
              triggerEdit={triggerEdit}
              SaveEditHandlerRef={SaveEditHandler}
              itemsArrRef={ShownArr}
              ProductRef={emptyProduct}
              SaveAddHRef={saveAdd}
            />
          </div>
          <div className="md:w-5/6 max-w-full">
            <ItemsList
              itemsArrRef={ShownArr}
              setEditObjRef={setEditObj}
              RemoveHandlerRef={RemoveHandler}
            />
          </div>
        </div>
      ) : (
        <Profile userAuth={userAuth} />
      )}
    </>
  );
};
