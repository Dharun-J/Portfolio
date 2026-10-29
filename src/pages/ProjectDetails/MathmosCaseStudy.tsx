import React from 'react';

// Mathmos Hero Showcase Visual
import mathmosHeroShowcaseImg from '../../assets/images/projects/mathmos/Mathmos Lava Lamp App Showcase.png';

// Mobile Screens
import mathmosHomeImg from '../../assets/images/projects/mathmos/home/Home Screen.png';
import mathmosProfileOverlayImg from '../../assets/images/projects/mathmos/home/Profile_overlay.png';
import mathmosExploreImg from '../../assets/images/projects/mathmos/explore/Explore Screen.png';
import mathmosClassicCollImg from '../../assets/images/projects/mathmos/collection/Classic_Collections Screen.png';
import mathmosRocketCollImg from '../../assets/images/projects/mathmos/collection/Rocket_Collections Screen.png';
import mathmosProductImg from '../../assets/images/projects/mathmos/product/Product Screen.png';
import mathmosAstroBabyImg from '../../assets/images/projects/mathmos/other/Astro_Baby Screen.png';
import mathmosCartImg from '../../assets/images/projects/mathmos/product/cart.png';
import mathmosCheckoutImg from '../../assets/images/projects/mathmos/product/CheckOut1.png';
import mathmosSuccessImg from '../../assets/images/projects/mathmos/product/Payment success.png';
import mathmosSettingsImg from '../../assets/images/projects/mathmos/settings/Settings Screen.png';
import mathmosOverallImg from '../../assets/images/projects/mathmos/overall/Overall Screen.png';

// Interaction Video
import mathmosVideo from '../../assets/videos/Mathmos.mp4';

// Component Deep Dive - Astro Comparison Cards
import astroVioletSilverImg from '../../assets/images/projects/mathmos/card_components/Base_style=astro_violet_orange_silver desc.png';
import astroBlueGoldImg from '../../assets/images/projects/mathmos/card_components/Base_style=astro_blue_green_gold.png';

// Component Deep Dive - Compact Variant Scale Overview Cards
import astroRedCopperImg from '../../assets/images/projects/mathmos/card_components/Base_style=astro_red_copper desc.png';
import astroClearBlackBvImg from '../../assets/images/projects/mathmos/card_components/Base_style=astro_clear_black_bv desc.png';
import astroClearYellowPlatImg from '../../assets/images/projects/mathmos/card_components/Base_style=astro_clear_yellow_platinum desc.png';
import astroTurquoiseMattbImg from '../../assets/images/projects/mathmos/card_components/Base_style=astro_turquoise_mattb desc.png';

// Component Gallery Items
import cardLargeDefaultImg from '../../assets/images/projects/mathmos/large_card_component/Default-1.png';
import cardSmallDefaultImg from '../../assets/images/projects/mathmos/small_card_component/Default.png';
import otherCardAstroBabyImg from '../../assets/images/projects/mathmos/other_card_component/Astro Baby Card.png';
import otherCardRokitImg from '../../assets/images/projects/mathmos/other_card_component/Rokit Card.png';

import cateLgDefaultImg from '../../assets/images/projects/mathmos/cate_lg_component/Default-3.png';
import cateLgClickedImg from '../../assets/images/projects/mathmos/cate_lg_component/clicked-3.png';
import cateSmallDefaultImg from '../../assets/images/projects/mathmos/cate_small_component/Default-2.png';

import btnPrimaryImg from '../../assets/images/projects/mathmos/button_component/primary.png';
import btnPrimaryHoverImg from '../../assets/images/projects/mathmos/button_component/primary_hover.png';
import btnSecondaryImg from '../../assets/images/projects/mathmos/button_component/Secondary.png';
import btnLargeImg from '../../assets/images/projects/mathmos/large_btn_component/Default-1.png';
import btnCheckoutImg from '../../assets/images/projects/mathmos/checkout_component/Default.png';

import searchDefaultImg from '../../assets/images/projects/mathmos/search_component/Default.png';
import textBoxDefaultImg from '../../assets/images/projects/mathmos/text_box_component/Default-1.png';
import rbSelectedImg from '../../assets/images/projects/mathmos/rb_component/Selected.png';
import rbNotSelectedImg from '../../assets/images/projects/mathmos/rb_component/Not Selected.png';
import heartOutlineImg from '../../assets/images/projects/mathmos/heart_component/Outline.png';
import heartFillImg from '../../assets/images/projects/mathmos/heart_component/Fill.png';

import settingsAccountImg from '../../assets/images/projects/mathmos/settings_component/account_settings.png';
import settingsPrefsImg from '../../assets/images/projects/mathmos/settings_component/preferences_settings.png';
import settingsDeliverImg from '../../assets/images/projects/mathmos/settings_component/deliver_settings.png';
import descComponentImg from '../../assets/images/projects/mathmos/desc_component/desc.png';

import iconHomeDockImg from '../../assets/images/projects/mathmos/icons_component/Home.png';
import iconSearchDockImg from '../../assets/images/projects/mathmos/icons_component/Search.png';
import iconCollDockImg from '../../assets/images/projects/mathmos/icons_component/Collections.png';
import iconSettingsDockImg from '../../assets/images/projects/mathmos/icons_component/Settings.png';

import './MathmosCaseStudy.css';

export const MathmosCaseStudy: React.FC = () => {
  return (
    <div className="mathmos-editorial-case-study">
      {/* ====================================================================
          1. Hero Showcase: Mobile Experience in Context
          ==================================================================== */}
      <section
        className="soundzone-showcase-section mathmos-hero-showcase"
        aria-label="Mathmos Mobile Experience Hero"
      >
        <div className="soundzone-showcase-meta">
          <h2 className="project-details-heading">The Mobile Lava Lamp Shopping Experience</h2>
          <p className="project-details-body soundzone-showcase-caption">
            A mobile-first e-commerce concept designed for Mathmos, inventors of the original British lava lamp since 1963. The application translates the hypnotic visual character of fluid light into a tactile shopping experience—combining ambient catalog discovery, interactive color and finish customization, and a frictionless checkout flow.
          </p>
        </div>

        <figure className="mathmos-hero-figure">
          <img
            src={mathmosHeroShowcaseImg}
            alt="Mathmos mobile app concept showcase featuring smartphone mockups displaying the lava lamp shopping interface against a cinematic dark backdrop"
            className="mathmos-hero-img"
            loading="eager"
            draggable={false}
          />
        </figure>
      </section>

      {/* ====================================================================
          2. The Interface Showcase: End-to-End User Journey
          ==================================================================== */}
      <div className="soundzone-editorial-pairs" aria-label="Mathmos User Journey Showcase">
        {/* Section A: Discover (Content Left, Image Right) */}
        <section className="soundzone-pair-row" aria-labelledby="mm-heading-a">
          <div className="soundzone-pair-content">
            <span className="soundzone-section-tag">A · Discover</span>
            <h2 id="mm-heading-a" className="soundzone-pair-title">
              First Impressions &amp; Curated Home Feed
            </h2>
            <div className="soundzone-pair-body">
              <p>
                The mobile journey begins with an evocative animated splash that introduces Mathmos's brand signature: “Inventors of the iconic Lava Lamp since 1963.” Transitioning into the home feed, the interface immerses shoppers in a rich, dark environment that allows the glowing fluid bottles to stand out.
              </p>
              <p>
                The home feed prioritizes quick visual orientation. Top-tier “Featured Lamps”—the classic Astro and rocket Telstar—occupy prominent spotlight cards, while the four foundational product families (Classic, Rocket, NewGen, and Candle) provide direct entry points into the catalog. A slide-in profile drawer provides instant access to notifications, saved lamps, and settings without disrupting the shopper's flow.
              </p>
            </div>
          </div>
          <figure className="mathmos-media-frame">
            <div className="mathmos-dual-screen">
              <div className="mathmos-phone-device">
                <img
                  src={mathmosHomeImg}
                  alt="Mathmos Home Screen displaying heritage banner, featured lamps Astro and Telstar, and category cards"
                  className="mathmos-phone-img"
                  loading="eager"
                  draggable={false}
                />
                <p className="mathmos-phone-caption">Home Storefront</p>
              </div>
              <div className="mathmos-phone-device">
                <img
                  src={mathmosProfileOverlayImg}
                  alt="Slide-in Profile Drawer overlay displaying saved lamps, notifications, settings, and help shortcuts"
                  className="mathmos-phone-img"
                  loading="eager"
                  draggable={false}
                />
                <p className="mathmos-phone-caption">Contextual Drawer</p>
              </div>
            </div>
          </figure>
        </section>

        {/* Section B: Explore (Image Left, Content Right) */}
        <section className="soundzone-pair-row is-reversed" aria-labelledby="mm-heading-b">
          <div className="soundzone-pair-content">
            <span className="soundzone-section-tag">B · Explore</span>
            <h2 id="mm-heading-b" className="soundzone-pair-title">
              Structured Exploration by Design &amp; Mood
            </h2>
            <div className="soundzone-pair-body">
              <p>
                Rather than forcing shoppers through rigid filters, the Explore interface offers two intuitive discovery pathways: browsing by structural design (Classic Icons, Rocket Designs, Modern Forms, Candle Light) or browsing by ambient mood (Calm &amp; Ambient, Bold Statement, Soft Focus, Night Glow).
              </p>
              <p>
                Dedicated collection pages—such as Classic Collections and Rocket Collections—present each lamp family in a scannable grid against pure black backgrounds that let the illuminated lava formulas stand out. Model names, year badges, and base pricing guide purchase evaluation at a glance.
              </p>
            </div>
          </div>
          <figure className="mathmos-media-frame">
            <div className="mathmos-triple-screen">
              <div className="mathmos-triple-phone">
                <img
                  src={mathmosExploreImg}
                  alt="Explore Screen with search input, design category tiles, mood exploration, and featured heritage story"
                  className="mathmos-phone-img"
                  loading="eager"
                  draggable={false}
                />
                <p className="mathmos-phone-caption">Explore &amp; Moods</p>
              </div>
              <div className="mathmos-triple-phone is-offset">
                <img
                  src={mathmosClassicCollImg}
                  alt="Classic Lava Lamps Collection screen showing Astro Baby, Astro, and Astro Flame models"
                  className="mathmos-phone-img"
                  loading="eager"
                  draggable={false}
                />
                <p className="mathmos-phone-caption">Classic Collection</p>
              </div>
              <div className="mathmos-triple-phone">
                <img
                  src={mathmosRocketCollImg}
                  alt="Rocket Lava Lamps Collection screen showing Telstar, Rokit, and Fireflow models"
                  className="mathmos-phone-img"
                  loading="eager"
                  draggable={false}
                />
                <p className="mathmos-phone-caption">Rocket Collection</p>
              </div>
            </div>
          </figure>
        </section>

        {/* Section C: Product Details (Content Left, Image Right) */}
        <section className="soundzone-pair-row" aria-labelledby="mm-heading-c">
          <div className="soundzone-pair-content">
            <span className="soundzone-section-tag">C · Product Details</span>
            <h2 id="mm-heading-c" className="soundzone-pair-title">
              Interactive Customization &amp; Tactile Detail
            </h2>
            <div className="soundzone-pair-body">
              <p>
                The product details view brings the tactile magic of Mathmos into digital form. High-resolution bottle photography showcases the organic lava flow, while the “Choose Your Style” module allows buyers to configure their lamp dynamically across 11 fluid colors and 6 base finishes.
              </p>
              <p>
                The layout prioritizes clarity: pricing (£105.00), heritage manufacturing notes (“Designed and hand-filled in Britain”), and immediate purchase actions (“Buy Now” and “Add to Cart”) remain easily reachable in the thumb zone.
              </p>
            </div>
          </div>
          <figure className="mathmos-media-frame">
            <div className="mathmos-triple-screen">
              <div className="mathmos-triple-phone is-offset">
                <img
                  src={mathmosProductImg}
                  alt="Astro Lava Lamp product detail screen displaying illuminated bottle, color selector dots, price, and purchase buttons"
                  className="mathmos-phone-img"
                  loading="eager"
                  draggable={false}
                />
              </div>
              <div className="mathmos-triple-phone">
                <img
                  src={mathmosAstroBabyImg}
                  alt="Astro Baby product detail screen showing compact silhouette and model specifications"
                  className="mathmos-phone-img"
                  loading="eager"
                  draggable={false}
                />
                <p className="mathmos-phone-caption">Model Variant</p>
              </div>
              <div className="mathmos-triple-phone">
                <img
                  src={descComponentImg}
                  alt="Product description and specification configuration card showing price, craftsmanship bio, and color options"
                  className="mathmos-phone-img"
                  loading="eager"
                  draggable={false}
                />
                <p className="mathmos-phone-caption">Spec Component</p>
              </div>
            </div>
          </figure>
        </section>

        {/* Section D: Checkout (Image Left, Content Right) */}
        <section className="soundzone-pair-row is-reversed" aria-labelledby="mm-heading-d">
          <div className="soundzone-pair-content">
            <span className="soundzone-section-tag">D · Checkout</span>
            <h2 id="mm-heading-d" className="soundzone-pair-title">
              Frictionless Bottom-Sheet Cart &amp; Rapid Checkout
            </h2>
            <div className="soundzone-pair-body">
              <p>
                Adding a lamp triggers a bottom-sheet cart drawer that maintains user context without a full page redirect. Shoppers can adjust quantities, delete items via horizontal swipe, and review live subtotal calculations.
              </p>
              <p>
                Transitioning to checkout presents a streamlined single-page form with pre-saved payment cards, delivery addresses, promo code application, and transparent zero-fee shipping, culminating in a clear celebratory order confirmation screen.
              </p>
            </div>
          </div>
          <figure className="mathmos-media-frame">
            <div className="mathmos-triple-screen">
              <div className="mathmos-triple-phone">
                <img
                  src={mathmosCartImg}
                  alt="Slide-up Cart drawer showing Astro and Neo Wall lamps with quantity counters and checkout button"
                  className="mathmos-phone-img"
                  loading="eager"
                  draggable={false}
                />
                <p className="mathmos-phone-caption">Slide-up Cart</p>
              </div>
              <div className="mathmos-triple-phone is-offset">
                <img
                  src={mathmosCheckoutImg}
                  alt="Single-page checkout screen showing payment card, delivery address, promo code, and free delivery"
                  className="mathmos-phone-img"
                  loading="eager"
                  draggable={false}
                />
                <p className="mathmos-phone-caption">Checkout Form</p>
              </div>
              <div className="mathmos-triple-phone">
                <img
                  src={mathmosSuccessImg}
                  alt="Order confirmation screen displaying celebratory Woohoo banner and continue shopping action"
                  className="mathmos-phone-img"
                  loading="eager"
                  draggable={false}
                />
                <p className="mathmos-phone-caption">Confirmation</p>
              </div>
            </div>
          </figure>
        </section>

        {/* Section E: Account & Preferences (Content Left, Image Right) */}
        <section className="soundzone-pair-row" aria-labelledby="mm-heading-e">
          <div className="soundzone-pair-content">
            <span className="soundzone-section-tag">E · Account &amp; Preferences</span>
            <h2 id="mm-heading-e" className="soundzone-pair-title">
              Scannable Catalog Grid &amp; Account Preferences
            </h2>
            <div className="soundzone-pair-body">
              <p>
                The overall catalog screen displays the complete Mathmos product universe in a clean two-column grid with live search and quick sort overlay options (Best Selling, Price: Low to High, Price: High to Low).
              </p>
              <p>
                Complementing the store, the Settings interface provides a centralized hub for account details, past orders, wishlisted lamps, and delivery preferences, with clear card modules that ensure high tap accuracy on mobile screens.
              </p>
            </div>
          </div>
          <figure className="mathmos-media-frame">
            <div className="mathmos-dual-screen">
              <div className="mathmos-phone-device">
                <img
                  src={mathmosOverallImg}
                  alt="Overall catalog screen displaying two-column product card grid with quick sort and search controls"
                  className="mathmos-phone-img"
                  loading="eager"
                  draggable={false}
                />
                <p className="mathmos-phone-caption">All Lamps Catalog</p>
              </div>
              <div className="mathmos-phone-device">
                <img
                  src={mathmosSettingsImg}
                  alt="Settings screen showing user profile Helena Belova, account details, orders, saved lamps, and preferences"
                  className="mathmos-phone-img"
                  loading="eager"
                  draggable={false}
                />
                <p className="mathmos-phone-caption">Account &amp; Settings</p>
              </div>
            </div>
          </figure>
        </section>
      </div>

      {/* ====================================================================
          3. Interactions in Motion: Native Video Player
          ==================================================================== */}
      <section
        className="mathmos-video-section"
        aria-labelledby="mathmos-video-title"
      >
        <div className="mathmos-video-header">
          <span className="soundzone-section-tag">Prototype Demonstration</span>
          <h2 id="mathmos-video-title" className="soundzone-pair-title">
            Interactions in Motion
          </h2>
          <p className="mathmos-video-lead">
            An end-to-end screen recording capturing the live Figma prototype in motion. The walkthrough demonstrates real interaction flows including splash onboarding, browsing the home feed, navigating collection filters, exploring custom lava color variants, opening the slide-up cart, and testing micro-interactions.
          </p>
        </div>

        <figure className="mathmos-video-wrapper">
          <video
            className="mathmos-video-player"
            controls
            playsInline
            preload="metadata"
            aria-label="Mathmos interactive mobile prototype walkthrough video"
          >
            <source src={mathmosVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </figure>
      </section>

      {/* ====================================================================
          4. The Reusable Figma Component System
          ==================================================================== */}
      <section
        className="mathmos-system-section"
        aria-labelledby="mathmos-system-title"
      >
        <div className="mathmos-system-header">
          <span className="soundzone-section-tag">Design System Architecture</span>
          <h2 id="mathmos-system-title" className="soundzone-pair-title">
            The Reusable Figma Component System
          </h2>
          <p className="mathmos-system-lead">
            To ensure absolute visual consistency and rapid prototyping, every interface element was built as part of a modular Figma component library. The system spans buttons, category tiles, card variants, search inputs, radio selectors, and settings modules, designed to scale across the brand's diverse catalog.
          </p>
        </div>

        {/* Product-Card Deep Dive */}
        <div className="mathmos-deepdive-container">
          <div className="mathmos-deepdive-meta">
            <span className="soundzone-section-tag">66 configurations · 11 lava colors · 6 base finishes</span>
            <h3 className="mathmos-deepdive-title">
              Product Card System
            </h3>
            <p className="mathmos-deepdive-lead">
              Designed as a configurable component family, the Astro product card explores combinations of lava colors and base finishes while maintaining a consistent layout for product imagery, descriptions, customization options, pricing, and purchase actions.
            </p>
          </div>

          {/* Focused Astro Card Presentation */}
          <div className="mathmos-deepdive-focus" aria-label="Astro Product Card Architecture">
            <div className="mathmos-astro-card-item">
              <figure className="mathmos-astro-card-frame">
                <img
                  src={astroVioletSilverImg}
                  alt="Astro product card component layout with violet-orange lava fluid and polished silver base finish"
                  className="mathmos-astro-card-img"
                  loading="lazy"
                  draggable={false}
                />
              </figure>
              <div className="mathmos-astro-card-info">
                <h4 className="mathmos-astro-card-name">Astro Component Layout Baseline</h4>
                <p className="mathmos-astro-card-desc">
                  Typography, bottle proportions, interactive swatch dots, pricing, and primary purchase buttons remain locked to a rigid component baseline, allowing fluid formulas and base finishes to swap without shifting surrounding layout elements.
                </p>
              </div>
            </div>
          </div>

          {/* Compact Scale Overview: Curated Representative Variants */}
          <div className="mathmos-scale-overview" aria-label="Curated Variant Palette">
            <div className="mathmos-scale-header">
              <h4 className="mathmos-scale-title">Curated Variant Range</h4>
            </div>

            <div className="mathmos-scale-grid">
              <div className="mathmos-mini-variant">
                <img
                  src={astroBlueGoldImg}
                  alt="Blue-green lava with gold base"
                  className="mathmos-mini-img"
                  loading="lazy"
                />
                <p className="mathmos-mini-label">Blue-Green · Gold</p>
              </div>

              <div className="mathmos-mini-variant">
                <img
                  src={astroVioletSilverImg}
                  alt="Violet-orange lava with silver base"
                  className="mathmos-mini-img"
                  loading="lazy"
                />
                <p className="mathmos-mini-label">Violet-Orange · Silver</p>
              </div>

              <div className="mathmos-mini-variant">
                <img
                  src={astroRedCopperImg}
                  alt="Red lava with copper base"
                  className="mathmos-mini-img"
                  loading="lazy"
                />
                <p className="mathmos-mini-label">Red · Copper</p>
              </div>

              <div className="mathmos-mini-variant">
                <img
                  src={astroClearBlackBvImg}
                  alt="Clear-black lava with black vinyl base"
                  className="mathmos-mini-img"
                  loading="lazy"
                />
                <p className="mathmos-mini-label">Clear-Black · Black Vinyl</p>
              </div>

              <div className="mathmos-mini-variant">
                <img
                  src={astroClearYellowPlatImg}
                  alt="Clear-yellow lava with platinum base"
                  className="mathmos-mini-img"
                  loading="lazy"
                />
                <p className="mathmos-mini-label">Clear-Yellow · Platinum</p>
              </div>

              <div className="mathmos-mini-variant">
                <img
                  src={astroTurquoiseMattbImg}
                  alt="Turquoise lava with matte black base"
                  className="mathmos-mini-img"
                  loading="lazy"
                />
                <p className="mathmos-mini-label">Turquoise · Matte Black</p>
              </div>
            </div>
          </div>
        </div>

        {/* Component Gallery: 6 Logical Families */}
        <div className="mathmos-gallery-section" aria-label="Figma Component Gallery">
          <h3 className="mathmos-gallery-title">Component Library Families</h3>
          <p className="mathmos-gallery-lead">
            A structured gallery of core reusable Figma components grouped into six functional families, highlighting systematic reuse, interactive states, and responsive versatility:
          </p>

          <div className="mathmos-gallery-grid">
            {/* Family 1: Product & Model Cards */}
            <div className="mathmos-family-card">
              <div className="mathmos-family-meta">
                <span className="mathmos-family-num">Family 01</span>
                <h4 className="mathmos-family-name">Product Cards &amp; Card Variants</h4>
                <p className="mathmos-family-desc">
                  Modular cards ranging from large square spotlight tiles to compact catalog cards and specialized model variants (such as Astro Baby and Rokit), each with integrated wishlisting heart states.
                </p>
              </div>
              <div className="mathmos-family-tray">
                <div className="mathmos-tray-cards">
                  <div className="mathmos-tray-cards-row">
                    <img
                      src={cardLargeDefaultImg}
                      alt="Astro large product card component"
                      className="mathmos-tray-card-img"
                      loading="lazy"
                    />
                    <img
                      src={cardSmallDefaultImg}
                      alt="Astro small card component"
                      className="mathmos-tray-card-img"
                      loading="lazy"
                    />
                  </div>
                  <div className="mathmos-tray-cards-row">
                    <img
                      src={otherCardAstroBabyImg}
                      alt="Astro Baby model card component"
                      className="mathmos-tray-card-img is-portrait"
                      loading="lazy"
                    />
                    <img
                      src={otherCardRokitImg}
                      alt="Rokit model card component"
                      className="mathmos-tray-card-img is-portrait"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Family 2: Category Navigation Cards */}
            <div className="mathmos-family-card">
              <div className="mathmos-family-meta">
                <span className="mathmos-family-num">Family 02</span>
                <h4 className="mathmos-family-name">Category Navigation Cards</h4>
                <p className="mathmos-family-desc">
                  Large and small category tiles featuring directional arrow affordances and subtle blue active glow states that confirm user selection during navigation.
                </p>
              </div>
              <div className="mathmos-family-tray">
                <div className="mathmos-tray-categories">
                  <div className="mathmos-cate-row">
                    <img
                      src={cateLgDefaultImg}
                      alt="Classic Lava Lamps large category card default state"
                      className="mathmos-tray-cate-img"
                      loading="lazy"
                    />
                    <img
                      src={cateLgClickedImg}
                      alt="Classic Lava Lamps large category card active state with blue glow"
                      className="mathmos-tray-cate-img"
                      loading="lazy"
                    />
                  </div>
                  <img
                    src={cateSmallDefaultImg}
                    alt="Classic Icons small category card"
                    className="mathmos-tray-cate-img is-small"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            {/* Family 3: Buttons & Purchase Actions */}
            <div className="mathmos-family-card">
              <div className="mathmos-family-meta">
                <span className="mathmos-family-num">Family 03</span>
                <h4 className="mathmos-family-name">Buttons &amp; Purchase Actions</h4>
                <p className="mathmos-family-desc">
                  High-contrast primary pill buttons ('Buy Now'), secondary outlined actions ('Add to Cart'), large promotional triggers, and checkout buttons with tactile hover feedback.
                </p>
              </div>
              <div className="mathmos-family-tray">
                <div className="mathmos-tray-buttons">
                  <div className="mathmos-btn-row">
                    <img
                      src={btnPrimaryImg}
                      alt="Primary Buy Now pill button"
                      className="mathmos-tray-btn-img"
                      loading="lazy"
                    />
                    <img
                      src={btnPrimaryHoverImg}
                      alt="Primary Buy Now button hover state in warm orange"
                      className="mathmos-tray-btn-img"
                      loading="lazy"
                    />
                  </div>
                  <div className="mathmos-btn-row">
                    <img
                      src={btnSecondaryImg}
                      alt="Secondary Add to Cart outlined button"
                      className="mathmos-tray-btn-img"
                      loading="lazy"
                    />
                    <img
                      src={btnCheckoutImg}
                      alt="Checkout button component"
                      className="mathmos-tray-btn-img"
                      loading="lazy"
                    />
                  </div>
                  <div className="mathmos-btn-row">
                    <img
                      src={btnLargeImg}
                      alt="Large button component"
                      className="mathmos-tray-btn-img is-large"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Family 4: Search, Input & Selection Controls */}
            <div className="mathmos-family-card">
              <div className="mathmos-family-meta">
                <span className="mathmos-family-num">Family 04</span>
                <h4 className="mathmos-family-name">Search, Input &amp; Selection Controls</h4>
                <p className="mathmos-family-desc">
                  Search bars with clear placeholder typography, promo-code text boxes with focused cursor states, custom radio buttons for sort dialogs, and toggleable favorite hearts.
                </p>
              </div>
              <div className="mathmos-family-tray">
                <div className="mathmos-tray-controls">
                  <img
                    src={searchDefaultImg}
                    alt="Search bar input component"
                    className="mathmos-tray-input-img"
                    loading="lazy"
                  />
                  <img
                    src={textBoxDefaultImg}
                    alt="Promo code text box component"
                    className="mathmos-tray-input-img"
                    loading="lazy"
                  />
                  <div className="mathmos-controls-row">
                    <span className="mathmos-control-chip">
                      <img src={rbSelectedImg} alt="" className="mathmos-tray-icon-small" /> Selected
                    </span>
                    <span className="mathmos-control-chip">
                      <img src={rbNotSelectedImg} alt="" className="mathmos-tray-icon-small" /> Radio
                    </span>
                    <span className="mathmos-control-chip">
                      <img src={heartOutlineImg} alt="" className="mathmos-tray-icon-small" /> Outline
                    </span>
                    <span className="mathmos-control-chip">
                      <img src={heartFillImg} alt="" className="mathmos-tray-icon-small" /> Favorite
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Family 5: Settings & Descriptive Components */}
            <div className="mathmos-family-card">
              <div className="mathmos-family-meta">
                <span className="mathmos-family-num">Family 05</span>
                <h4 className="mathmos-family-name">Settings &amp; Descriptive Components</h4>
                <p className="mathmos-family-desc">
                  Structured grouped list modules for user account management, delivery settings, and notification preferences, designed for thumb-friendly tap targets.
                </p>
              </div>
              <div className="mathmos-family-tray">
                <div className="mathmos-tray-settings">
                  <img
                    src={settingsAccountImg}
                    alt="Account details and orders settings card"
                    className="mathmos-tray-setting-img"
                    loading="lazy"
                  />
                  <img
                    src={settingsPrefsImg}
                    alt="Notifications and language preferences settings card"
                    className="mathmos-tray-setting-img"
                    loading="lazy"
                  />
                  <img
                    src={settingsDeliverImg}
                    alt="Delivery address and payment methods settings card"
                    className="mathmos-tray-setting-img"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            {/* Family 6: Navigation Icons & Supporting Components */}
            <div className="mathmos-family-card">
              <div className="mathmos-family-meta">
                <span className="mathmos-family-num">Family 06</span>
                <h4 className="mathmos-family-name">Icons &amp; Navigation Dock</h4>
                <p className="mathmos-family-desc">
                  The persistent four-icon bottom navigation dock (Home, Search, Collections, Settings), featuring active red indicator pills and balanced touch zones for single-handed navigation.
                </p>
              </div>
              <div className="mathmos-family-tray">
                <div className="mathmos-tray-dock">
                  <img
                    src={iconHomeDockImg}
                    alt="Bottom navigation dock with Home active"
                    className="mathmos-dock-img"
                    loading="lazy"
                  />
                  <img
                    src={iconSearchDockImg}
                    alt="Bottom navigation dock with Search active"
                    className="mathmos-dock-img"
                    loading="lazy"
                  />
                  <img
                    src={iconCollDockImg}
                    alt="Bottom navigation dock with Collections active"
                    className="mathmos-dock-img"
                    loading="lazy"
                  />
                  <img
                    src={iconSettingsDockImg}
                    alt="Bottom navigation dock with Settings active"
                    className="mathmos-dock-img"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          5. Design Rationale: The Thinking Behind the System
          ==================================================================== */}
      <section
        className="soundzone-rationale-section"
        aria-labelledby="mm-rationale-title"
      >
        <div className="soundzone-rationale-header">
          <h2 id="mm-rationale-title" className="soundzone-rationale-heading">
            The Thinking Behind the System
          </h2>
          <p className="soundzone-rationale-lead">
            A summary of intentional visual and structural decisions made during the design process:
          </p>
        </div>

        <div className="soundzone-rationale-grid">
          <div className="soundzone-rationale-item">
            <h3 className="soundzone-rationale-item-title">Ambient Visual Canvas</h3>
            <p className="soundzone-rationale-item-body">
              Deep black surfaces (#000000 and #080808) create an immersive cinematic canvas that lets vibrant lava lamp liquids and warm metallic glows serve as the primary visual light, echoing the experience of viewing a lamp in a darkened room.
            </p>
          </div>

          <div className="soundzone-rationale-item">
            <h3 className="soundzone-rationale-item-title">Systematic Variant Scalability</h3>
            <p className="soundzone-rationale-item-body">
              Engineering 66 Astro card permutations upon a unified layout grid ensured every fluid and metallic finish permutation could be swapped effortlessly while preserving exact alignment across typography and pricing.
            </p>
          </div>

          <div className="soundzone-rationale-item">
            <h3 className="soundzone-rationale-item-title">Dual-Pathway Discovery</h3>
            <p className="soundzone-rationale-item-body">
              Complementing traditional design-family categories (Classic, Rocket, Candle) with mood-driven pathways (Calm, Ambient, Bold Statement) caters to both brand connoisseurs and casual ambiance seekers.
            </p>
          </div>

          <div className="soundzone-rationale-item">
            <h3 className="soundzone-rationale-item-title">Thumb-Zone Mobile Ergonomics</h3>
            <p className="soundzone-rationale-item-body">
              Placing sticky primary action triggers, color swatch selectors, and the bottom-dock navigation within natural thumb reach enables comfortable single-handed operation on modern tall mobile screens.
            </p>
          </div>

          <div className="soundzone-rationale-item">
            <h3 className="soundzone-rationale-item-title">Context-Preserving Bottom Sheets</h3>
            <p className="soundzone-rationale-item-body">
              Utilizing sliding bottom drawers for cart reviews, profile access, and sorting overlays prevents disorienting full-page reloads, keeping shoppers anchored within their browsing context.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
