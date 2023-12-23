<script>
    import screenshot from "../statics/img/screenshot.png";
    import violin from "../statics/img/violin.png";
    import waves from "../statics/img/waves.gif";
</script>

<section class="section px-0 pt-0 grad" style="margin-bottom: -14%;">
    
    <nav class="navbar" aria-label="main navigation">
    <div class="navbar-brand">
        <a class="navbar-item" href="https://violex.app/">
            <h1 class="greate-vibes" style="font-size: 60px; left: 10%;">Violex</h1>
        </a>
    </div>
    <div class="navbar-menu m-3">
        <div class="navbar-end">
        <a class="navbar-item" href="#features">
            Features
        </a>
        <a class="navbar-item" href="https://violex.app/dashboard">
            Launch the app
        </a>
        <a class="navbar-item" href="mailto:mahdi.massahi@gmail.com">
            Contact Us
        </a>
        </div>
    </div>
    </nav>

    <div class="columns mt-6 section-card ">
    <div class="column">
        <div style="margin-right: 25%;">
        <h1><span class="header">Practice in the most <span class="greate-vibes" style="font-size: 60px; color: #DDDBF1;"> perfect </span>way</span></h1>
        <p class="description">No matter if you're a bigener or an expert violinist. You can unlock your full potential as a violinist with our intuitive platform.</p>
        <a class="button is-light has-text-white mt-4" style="background: #fc0a7e;" href="https://violex.app/dashboard"> Get started</a>
        </div>
    </div>
    <div class="column">
        <div>
        <img src={screenshot} alt="application" style="scale: 120%; border-right-style: solid !important; border-color: transparent; border-right-width: 20px !important;">
        </div>
    </div>
    </div>

</section>

<section class="section px-0 pt-20" style="background-color: #1b1b1b; padding-bottom: 0px;">
    <div class="section-card">
    <div class="rows">
        <div class="row ml-4">
        <i class="garyout fa fa-quote-left"></i>
        <h2>
            <span class="header">Practice does not make perfect; </span>
            <br/>
            <span class="greate-vibes" style="font-size: 42px; color: #dd1173;">perfect practice </span> 
            <span class="header">makes perfect.</span>
        </h2>
        <p class="garyout mt-2">- Vince Lombardi</p>
        </div>
        <div class="row mt-4" style="padding-bottom: 0px; right: 0;">
        <img src={violin} alt="application" style="scale: 104%;">
        </div>
    </div>
    </div>
</section>

<section class="section px-0 pt-5 my-0 pb-0" style="background-color: #000000; top: 0;">
    <div class="section-card my-0">
    <div class="columns">
        <div class="column">
        <img src={waves} alt="application" style="scale: 100%;">
        </div>
        <div class="column mt-6">
        <div class="mt-4">
            <h1 class="header mt-2">We make sure you are <span class="greate-vibes" style="font-size: 48px; color: #dd1173;">practicing perfectly.</span></h1>
            <p class="description mt-2">For a musician, satisfaction might be felt when the music is played flawless. But it's not easy to get there. Traditional practice methods have limitations, and the goal of this application is to remove obstacles and limitations to let you get there faster in an enjoyable path.</p>
            <p class="description mt-2">And it all ends up in perfect frequencies and perfect timing. Without instant feedbacks, it's almost imposable to trace the quality of performance. But thanks to the technology, we've build a platform to guid you in the most efficient and perfect way, and now it's freely available on your finger tips. :)</p>
        </div>
        </div>
    </div>
    </div>
</section>

<section class="section px-0 pt-20" style="background-color: #000000;">
    <div class="section-card">
    
    <div class="rows" id="features">
        <div class="row mb-4 has-text-centered">
        <h1>Features</h1>
        <p> We've tried to bring as much features as a violin player would except.</p>
        </div>

        <div class="row">
        <div class="tile is-ancestor">

            <div class="tile is-vertical">
            <div class="tile">
                <div class="tile is-parent is-vertical">
                <article class="tile is-child notification" style="background-color: #1b1b1b;">
                    <p class="white-title">Smart Audio Analysis</p>
                    <p class="white-subtitle">we analyze the frequencies and durations</p>
                    <p class="white-content">The audio analysis feature analyses the frequencies and durations of each played tone to accurately compare it to the ideal tone. This information is then used to visually represent errors on the music sheet, enabling users to easily identify areas for improvement.</p>
                </article>
                <article class="tile is-child notification" style="background-color: #1b1b1b;">
                    <p class="white-title">Explore (coming soon!)</p>
                    <p class="white-subtitle">explore music sheets and albums online</p>
                    <p class="white-content">The platform offers an online library of music sheets and albums for users to explore. This feature provides users with a vast selection of music to practice and improve their skills, without the need to search for external sources.</p>
                </article>
                </div>
            </div>
            </div>


            <div class="tile is-vertical">
            <div class="tile">
                <div class="tile is-parent is-vertical">
                <article class="tile is-child notification" style="background-color: #1b1b1b;">
                    <p class="white-title">Load Your Music Sheets</p>
                    <p class="white-subtitle">import your custom music sheets</p>
                    <p class="white-content">The custom music sheet integration feature of the platform allows users to effortlessly load their own music sheets in multiple formats. This feature enables users to practice their repertoire and tailor their practice sessions to their specific needs and goals.</p>
                </article>
                <article class="tile is-child notification" style="background-color: #1b1b1b;">
                    <p class="white-title">Track Your Performance (coming soon!)</p>
                    <p class="white-subtitle">assess your self with detailed reports</p>
                    <p class="white-content">The platform leverages A.I. to provide performance assessment and generates detailed reports for users to assess their skills with valuable insights and feedback. This feature helps users identify areas for improvement and track their progress over time, ultimately helping them to perfect their performance.</p>
                </article>
                </div>
            </div>
            </div>

            <div class="tile is-vertical">
            <div class="tile">
                <div class="tile is-parent is-vertical">
                <article class="tile is-child notification" style="background-color: #1b1b1b;">
                    <p class="white-title">Play in Symphony</p>
                    <p class="white-subtitle">go solo or play within Symphony</p>
                    <p class="white-content">The platform supports both solo practice and playing within a symphony, offering multi-instrument support for seamless interaction with various tracks. Users can view, mute, and adjust the volume for different instruments to practice playing alongside other musicians or to focus on their individual performance.</p>
                </article>
                <article class="tile is-child notification" style="background-color: #1b1b1b;">
                    <p class="white-title">Take Classes (coming soon!)</p>
                    <p class="white-subtitle">take online classes in different levels</p>
                    <p class="white-content">The platform offers online classes in different levels, providing users with the opportunity to learn from experienced instructors and receive personalized instruction tailored to their skill level. This feature enables users to improve their skills and receive guidance on proper technique and form, ultimately helping them to perfect their performance.</p>
                </article>
                </div>
            </div>
            </div>

        </div>
        </div>
    </div>


    </div>
</section>
    
<footer class="footer" style="background-color: #000000;">
    <div class="content has-text-centered">
        <h1 class="greate-vibes mb-0" style="font-size: 60px; color: white;">Violex</h1>
        Mahdi Massahi • <a href="mailto:mahdi.massahi@gmail.com">mahdi.massahi@gmail.com</a>
    </div>
</footer>


<style>
    .header{
        font-size: 28px;
        font-weight: 500;
    }
    .description{
        font-size: 20px;
    }
    .garyout{
        font-size: 16px;
        color: #4a4a4a;
    }
</style>