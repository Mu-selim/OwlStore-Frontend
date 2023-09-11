import { Navbar } from "../../components/navbar"
import { SEO } from "../../components/SEO";
import { ProductCard } from "../../components/productCard";
import { WishListContext } from "../../contexts/wishListContext";
import { useContext } from "react";
export let Profile=(props)=>{
  const {wishList, setWishList} = useContext(WishListContext);
    return(
      <>
      <SEO
        title={`OwlStore - ${props.userAuth.username}`}
        description={`${props.userAuth.username} profile`}
      />
      <div>
            <Navbar />
      <div className="flex flex-col bg-white w-full mt-2 md:h-[calc(100vh-66px)] ">
          <div className="flex justify-center flex-col md:flex-row">
            <div className="md:mr-6 self-center">
                <img alt="" src="./images/profilePic.png" className="h-52 shadow-xl rounded-full"/>
            </div>
            <div className="text-center mt-4 md:mt-14 md:mr-6">
            <h3 className="text-4xl font-semibold leading-normal text-blueGray-700 mb-2">
              {props.userAuth.username}
            </h3>
            <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold">
              <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
              {props.userAuth.email}
            </div>
            <div className="mb-2 text-blueGray-600 font-bold">
                +{props.userAuth.phone}
            </div>
          </div>
              <div className="flex md:flex-col justify-center flex-row">
                <div className="p-3 text-center">
                  <span className="text-2xl font-bold block uppercase tracking-wide text-blueGray-600">22</span><span className="text-sm text-blueGray-400">Items Purchased</span>
                </div>
                <div className="p-3 text-center">
                  <span className="text-2xl font-bold block uppercase tracking-wide text-blueGray-600">{wishList.length}</span><span className="text-sm text-blueGray-400">WishList</span>
                </div>
                <div className="p-3 text-center">
                  <span className="text-2xl font-bold block uppercase tracking-wide text-blueGray-600">89</span><span className="text-sm text-blueGray-400">Comments</span>
                </div>
              </div>
              <div className="mb-2 text-blueGray-600 font-bold">
                +{props.userAuth.phone}
              </div>
            </div>
            <div className="flex md:flex-col justify-center flex-row">
              <div className="p-3 text-center">
                <span className="text-2xl font-bold block uppercase tracking-wide text-blueGray-600">
                  22
                </span>
                <span className="text-sm text-blueGray-400">
                  Items Purchased
                </span>
              </div>
              <div className="p-3 text-center">
                <span className="text-2xl font-bold block uppercase tracking-wide text-blueGray-600">
                  {wishList.length}
                </span>
                <span className="text-sm text-blueGray-400">WishList</span>
              </div>
              <div className="p-3 text-center">
                <span className="text-2xl font-bold block uppercase tracking-wide text-blueGray-600">
                  89
                </span>
                <span className="text-sm text-blueGray-400">Comments</span>
              </div>
            </div>
          </div>
          <div className="mt-4 w-9/12 border-secondary self-center border-2">
          <div className="mt-4">
            <span className="ml-8 text-2xl font-bold border-b-4 border-black rounded-sm ">Wishlist:</span>
            <div className="flex flex-row justify-center pt-5 mb-4">
                    <div className="flex flex-wrap justify-evenly w-10/12">   
                        {wishList.map((product,i)=>{
                            return(
                                <ProductCard key={i} product={product}/>
                            )
                        })}
                    </div>
                </div>
          </div>
        </div>
      </div>
    </>
  );
};
