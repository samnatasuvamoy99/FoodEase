import "../style/UserDetails.css"
export const user = { name: "" };

export const UserDetails = () => {

  return (
    <div className="userdetails">
      <div className="Maincard">
        <div className="pic">
          <img src="https://tse2.mm.bing.net/th/id/OIP.fSYdPVa8gLvLpCZAkW9biwHaEL?pid=Api&P=0&h=180" alt="card" className="carddetail" />
        </div>
        <div>
          <div className=" contacts">
            <b>Name ~ {user.name}</b>
            <h2> Position (CEO) & Founder of Fooddeleviry </h2>
            <p>As of 2025, he has been CEO for 14 years.</p>
          </div>

          <div className="socialaccount">

            <div>
              <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="insta" className="insta" />
            </div>

            <div>
              <img src="https://tse1.mm.bing.net/th/id/OIP.VgfWevmVdjRKHG8bfhpVsgHaHa?pid=Api&P=0&h=180" alt="facebok" className="insta" />
            </div>
            <div>
              <img src="https://logos-world.net/wp-content/uploads/2020/04/Twitter-Emblem.png" alt="facebok" className="twitter" />
            </div>

          </div>



        </div>


      </div>

    </div>


  )

};

