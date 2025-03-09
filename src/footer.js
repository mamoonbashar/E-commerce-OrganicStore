const FooterHTML = `      <section id="QuickLinks">
        <section class="Quick">
          <img src="assets/organic-store-white-logo.png" alt="" />
          <p>
            Maecenas mi justo, interdum at consectetur vel, tristique et arcu.
            Ut quis eros blandit, ultrices diam in, elementum ex. Suspendisse
            quis faucibus urna. Suspendisse pellentesque.
          </p>
        </section>

        <aside class="QuickLinks2">
          <h1>Quick Links</h1>
          <p>About</p>
          <p>Cart</p>
          <p>Checkout</p>
          <p>Contact</p>
          <p>Home</p>
          <p>My account</p>
          <p>Shop</p>

          <h1>Site Links</h1>
          <p>Privacy Policy</p>
          <p>Shipping Details</p>
          <p>Offers Coupons</p>
          <p>Terms & Conditions</p>
        </aside>

        <section class="Quick">
          <h1>Download Our Mobile App</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            aliquam gravida sollicitudin. Praesent porta enim mi, non tincidunt
            libero interdum sit amet.
          </p>
          <h1>Quick Links</h1>
          <p>Know More About</p>
          <p>Visit Store</p>
          <p>Let’s Connect</p>
          <p>Locate Stores</p>
        </section>
      </section>
      <section id="SocialMedia">
        <h1>Copyright © 2024 | Organic Store</h1>
        <section class="icon-container">
          <a href=""><i class="fa-brands fa-facebook"></i></a>
          <a href=""><i class="fa-brands fa-twitter"></i></a>
          <a href=""><i class="fa-brands fa-instagram"></i></a>
        </section>
      </section>`;

const FooterEle = document.querySelector(".section-Footer");
FooterEle.insertAdjacentHTML("afterbegin", FooterHTML);
