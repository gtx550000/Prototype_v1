import "../gamedetail/gamedetail.css";
import Slide_show from "../slideshowgamedetail/slideshowgamedetail";
function Gamedetail() {
  return (
    <body>
      <section className="py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="row gx-4 gx-lg-5 align-items-center">
            <div className="col-md-6">
              <Slide_show height="100px" width="100px" h="10px" />
            </div>
            <div className="col-md-6">
              <h1 className="display-5 fw-bolder">game</h1>
              <div className="fs-5 mb-5">
                <span className="text-decoration-line-through">250 Baht</span>
                <span>220 Baht</span>
              </div>
              <p className="lead">
                Terraria is a land of adventure! A land of mystery! A land that
                is yours to shape, defend, and enjoy. Your options in Terraria
                are limitless. Are you an action gamer with an itchy trigger
                finger? A master builder? A collector? An explorer? There is
                something for everyone. Start by building basic shelter, then
                dig for ore and other resources. Discover and craft over 500
                weapons of magic, ranged, melee and summon varieties, as well as
                armor, and use them to battle hundreds of different enemies.
                Soon you will be going head-to-head with any of a dozen enormous
                bosses. Go fishing, ride a mount, find Floating Islands, build
                houses for helpful NPCs, and much, much more.
              </p>
              <div className="d-flex">
                <button
                  className="btn btn-outline-dark flex-shrink-0"
                  type="button"
                >
                  <i className="bi-cart-fill me-1"></i>
                  Add to cart
                </button>

                <button
                  className="btn btn-outline-dark flex-shrink-0"
                  type="button"
                >
                  Buy now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-5 bg-dark">
        <div className="container">
          <p className="m-0 text-center text-white">
            For study &copy; Software Engineer
          </p>
        </div>
      </footer>
    </body>
  );
}

export default Gamedetail;
