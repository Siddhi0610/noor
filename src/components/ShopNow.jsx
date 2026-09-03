import "./ShopNow.css";



function ShopNow() {
  return (
    <section className="shop-now reveal" id="shop">

      <h2>Shop Now</h2>

      <div className="shop-grid">

        <div className="shop-card">

          <div className="card-frame">
           <img
            src={`${import.meta.env.BASE_URL}images/clothes.png`}
            alt="Noor traditional clothes"
          /> 
          </div>

          <div className="card-label">
            Clothes for Her
          </div>

        </div>

        <div className="shop-card">

          <div className="card-frame">
            <img
              src={`${import.meta.env.BASE_URL}images/accessories.png`}
              alt="Indian jewellery and accessories"
            />
          </div>

          <div className="card-label">
            Accessories
          </div>

        </div>

      </div>

    </section>
  );
}

export default ShopNow;