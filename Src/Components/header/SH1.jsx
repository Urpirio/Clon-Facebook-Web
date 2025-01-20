import SH from "./data/SHData";
import "../styles/Styles.less";




const SH1 = () =>{

    const Search = (props) =>{
        return(
            <div className="Cards">
                <img src={props.img} alt={props.description} />
                <h3>{props.title}</h3>
            </div>
        )
    };

    const SHlist = SH.map( SH1L =>{
        return(
            <Search img = {SH1L.img} description ={SH1L.description} title = {SH1L.title} />
        )
    });


    const Search_f = () =>{
        
        document.getElementById("SH1__Section1").style.marginTop = "7.7cm";
        document.getElementById("SH1__Section1").style.boxShadow = "1px 1px 5px 5px #80808043";
        document.querySelector(".SH1__Section1_div2").style.display = "flex"
        document.getElementById("logoFacebook").style.display = "none";
        document.getElementById("btn_return").style.display = "flex";
        
    };
    
    const Search_Back = () => {
        document.getElementById("SH1__Section1").style.marginTop = "0";
        document.querySelector(".SH1__Section1_div2").style.display = "none"
        document.getElementById("logoFacebook").style.display = "flex";
        document.getElementById("btn_return").style.display = "none";
        document.getElementById("SH1__Section1").style.boxShadow = "none";
    };

    const VideoPage = () =>{
        document.querySelector(".link2").style.backGround = "blue"
    }

    return(
        <section className="SH1">
            <div className="Container_back">

            </div>
            <section className="SH1__Section1" id="SH1__Section1" >

                <div className="SH1__Section1_div1">
                    <div className="div1">
                    <i class='bx bxl-facebook-circle' id="logoFacebook" ></i>
                    <button onClick={Search_Back} id="btn_return"><i class='bx bx-right-arrow-alt bx-rotate-180' ></i></button>
                    </div>

                    <div className="div2">
                    <input onClick={Search_f} type="text" placeholder="Buscar" required/>
                    </div>

                </div>

                <div className="SH1__Section1_div2" id="SH1__Section1_div2">
                    <div className="div1">
                        <h4>Reciente</h4>
                        <a href="">Editar</a>
                    </div>
                    <div className="div2">
                    {SHlist}
                    </div>
                </div>
            </section>
            <section className="SH1__Section2" >
                <nav>
                    <a className="link" href=""><i class='bx bxs-home' ></i></a>
                    <a onClick={VideoPage} className="link2" href="/Video"><i class='bx bx-desktop'></i></a>
                    <a className="link3" href=""><i class='bx bx-store-alt' ></i></a>
                    <a className="link4" href=""><i class="bi bi-people-fill"></i></a>
                    <a className="link5" href=""><i class="bi bi-controller"></i></a>
                </nav>

            </section>
            <section className="SH1__Section3" >
                <div className="SH1__Section3_div1">
                <div className="div1">
                    <button><i class="bi bi-list"></i></button>
                </div>
                <div className="div1">
                    <button><i class='bx bxl-messenger'></i></button>
                </div  >

                
                <div className="div1">
                    <button><i class="bi bi-bell-fill"></i></button>
                </div>
                <div className="div2">
                    <img src="https://scontent.fsdq1-2.fna.fbcdn.net/v/t39.30808-1/468619881_1926849671138033_4861389793718521339_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=105&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeHwdnpgUlRcUNEFhab2zgm_BQEvMaOYnZAFAS8xo5idkHS1R5_hKYGbFaY9CRMu0hytCxqMEDI3_JAxzPvV53O9&_nc_ohc=GABlWAM82EcQ7kNvgElXedF&_nc_zt=24&_nc_ht=scontent.fsdq1-2.fna&_nc_gid=AMntH76ZGwOxLdmjBy7R1kV&oh=00_AYBEMhiAyT2IkXI3mgLVr9ZGTunJ3vsJSK229zzr_RSWKg&oe=6792E4E3" alt="" />
                    <div><i class='bx bx-chevron-left bx-rotate-180' ></i></div>
                </div>
                </div>
            </section>
        </section>
    )
};
export default SH1;