import React from 'react'

const App = () => {
  return (
    <main>
      <nav>
        <div className="left">

          <i className="ri-remix-fill"></i>
          <menu>
            <a href="#">About Me</a>
            <a href="#">Portfolio</a>
            <a href="#">Services</a>
            <a href="#">Blog</a>
          </menu>
        </div>
        <div className="link"><span>Book a Call</span> <i class="ri-arrow-right-up-line"></i></div>
      </nav>
      <section className="hero">

        <div className="left">
          <h4>Product designer</h4>
          <span></span>
          <h4>2024</h4>
        </div>

        <div className="right">
          <div className="top">
            <div className="project_completed">
              <h2>+200</h2>
              <h4>Project completed</h4>
            </div>
            <div className="startup_raised">
              <h2>+50</h2>
              <h4>Startup raised</h4>
            </div>
          </div>
          <div className="center">
            <h1>Hello</h1>
            <h3>-- It's D.Nova a design wizerd</h3>
          </div>
          <h4>Scroll down <i class="ri-arrow-down-line"></i></h4>
        </div>

      </section>

      <img src="person.png" alt="" />
    </main>
  )
}

export default App